# Deployment Guide

This guide covers deployment strategies and configurations for the Task Flow application.

## Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun
- Git access to the repository
- Backend API server running and accessible

## Environment Configuration

### Environment Variables

Create the appropriate environment file for your deployment:

#### Development (.env.local)
```env
# API Configuration
NEXT_PUBLIC_API_URL_AUTH=http://localhost:5000
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Development Settings
NODE_ENV=development
```

#### Production (.env.production)
```env
# API Configuration
NEXT_PUBLIC_API_URL_AUTH=https://your-api-domain.com
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api

# Production Settings
NODE_ENV=production
```

### Required Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_API_URL_AUTH` | Backend authentication API base URL | Yes | `http://localhost:5000` |
| `NEXT_PUBLIC_API_URL` | Backend main API base URL | Yes | `http://localhost:5000/api` |
| `NODE_ENV` | Environment mode | No | `development` |

## Build Process

### Local Build
```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

### Build Optimization
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  // Enable experimental features
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Optimize images
  images: {
    domains: ['your-cdn-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Compress responses
  compress: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // URL rewrites
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
    ];
  },
};
```

## Deployment Platforms

### Vercel (Recommended)

#### Quick Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_API_URL_AUTH
vercel env add NEXT_PUBLIC_API_URL
```

#### Vercel Configuration (vercel.json)
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_API_URL_AUTH": "@api-url-auth",
    "NEXT_PUBLIC_API_URL": "@api-url"
  },
  "build": {
    "env": {
      "NODE_ENV": "production"
    }
  },
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

### Netlify

#### Build Settings
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_ENV = "production"
  NEXT_TELEMETRY_DISABLED = "1"

[[redirects]]
  from = "/login"
  to = "/auth/login"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### AWS Amplify

#### Build Specification (amplify.yml)
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### Docker Deployment

#### Dockerfile
```dockerfile
# Multi-stage build
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Docker Compose
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL_AUTH=https://your-api-domain.com
      - NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
    restart: unless-stopped
```

### Self-Hosted (PM2)

#### PM2 Configuration (ecosystem.config.js)
```javascript
module.exports = {
  apps: [
    {
      name: 'task-flow',
      script: 'npm',
      args: 'start',
      cwd: '/path/to/your/app',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_PUBLIC_API_URL_AUTH: 'https://your-api-domain.com',
        NEXT_PUBLIC_API_URL: 'https://your-api-domain.com/api',
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
    },
  ],
};
```

#### Deployment Script
```bash
#!/bin/bash
# deploy.sh

# Pull latest changes
git pull origin main

# Install dependencies
npm ci

# Build application
npm run build

# Restart PM2 process
pm2 reload ecosystem.config.js

# Save PM2 configuration
pm2 save
```

## CDN Configuration

### Static Asset Optimization
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://your-cdn.com' 
    : '',
  
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js',
  },
};
```

### Image Loader
```javascript
// src/lib/imageLoader.js
export default function cloudinaryLoader({ src, width, quality }) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `https://your-cdn.com/image/fetch/${params.join(',')}/${src}`;
}
```

## Performance Optimization

### Bundle Analysis
```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze bundle
ANALYZE=true npm run build
```

### Performance Configuration
```typescript
// next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },
  
  // Optimize fonts
  optimizeFonts: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Compress responses
  compress: true,
};

module.exports = withBundleAnalyzer(nextConfig);
```

## Security Headers

### Next.js Security Headers
```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

## Monitoring and Analytics

### Error Tracking (Sentry)
```bash
# Install Sentry
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});
```

### Performance Monitoring
```typescript
// next.config.ts
const nextConfig = {
  // Enable Web Vitals reporting
  experimental: {
    instrumentationHook: true,
  },
  
  // Analytics
  analyticsId: process.env.ANALYTICS_ID,
};
```

## Health Checks

### Health Check Endpoint
```typescript
// app/api/health/route.ts
export async function GET() {
  try {
    // Check database connection
    // Check external services
    
    return Response.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version,
    });
  } catch (error) {
    return Response.json(
      { status: 'unhealthy', error: error.message },
      { status: 503 }
    );
  }
}
```

## Backup and Recovery

### Database Backup Strategy
```bash
#!/bin/bash
# backup.sh

# Create backup directory
mkdir -p /backups/$(date +%Y-%m-%d)

# Backup database
pg_dump $DATABASE_URL > /backups/$(date +%Y-%m-%d)/database.sql

# Backup uploaded files
tar -czf /backups/$(date +%Y-%m-%d)/uploads.tar.gz /app/uploads

# Clean old backups (keep 30 days)
find /backups -type d -mtime +30 -exec rm -rf {} \;
```

### Disaster Recovery Plan
1. **Automated Backups**: Daily database and file backups
2. **Multi-Region Deployment**: Deploy to multiple regions
3. **Monitoring**: Real-time health monitoring
4. **Rollback Strategy**: Quick rollback to previous version
5. **Communication Plan**: Incident communication procedures

## Maintenance

### Regular Maintenance Tasks
```bash
# Update dependencies
npm update

# Security audit
npm audit

# Performance analysis
npm run build && npm run analyze

# Database maintenance
# Run database cleanup scripts

# Log rotation
# Rotate and archive logs
```

### Automated Maintenance
```yaml
# .github/workflows/maintenance.yml
name: Maintenance
on:
  schedule:
    - cron: '0 2 * * 0' # Weekly on Sunday at 2 AM

jobs:
  maintenance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Update dependencies
        run: npm update
      - name: Security audit
        run: npm audit
      - name: Create PR if changes
        # Create PR with updates
```

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check
```

#### Performance Issues
```bash
# Analyze bundle size
ANALYZE=true npm run build

# Check for memory leaks
node --inspect npm run build

# Profile runtime performance
npm run dev -- --profile
```

#### Deployment Issues
```bash
# Check environment variables
env | grep NEXT_PUBLIC

# Verify API connectivity
curl -I $NEXT_PUBLIC_API_URL_AUTH/health

# Check logs
pm2 logs task-flow
```

## Best Practices

1. **Environment Separation**: Use different environments for development, staging, and production
2. **Automated Testing**: Run tests before deployment
3. **Gradual Rollout**: Use blue-green or canary deployments
4. **Monitoring**: Implement comprehensive monitoring and alerting
5. **Documentation**: Keep deployment documentation up to date
6. **Security**: Regular security updates and vulnerability scans
7. **Performance**: Regular performance monitoring and optimization
8. **Backup**: Automated backup and recovery procedures

Remember to test deployments in a staging environment before production releases.