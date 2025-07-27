# Deployment Guide

## 📋 Table of Contents
- [Overview](#overview)
- [Environment Setup](#environment-setup)
- [Build Process](#build-process)
- [Production Deployment](#production-deployment)
- [Platform-Specific Guides](#platform-specific-guides)
- [Environment Variables](#environment-variables)
- [Performance Optimization](#performance-optimization)
- [Monitoring & Logging](#monitoring--logging)
- [Security Configuration](#security-configuration)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

This guide covers the complete deployment process for TaskFlow, from development to production environments. The application is built with Next.js 15 and can be deployed on various platforms including Vercel, Netlify, AWS, and traditional servers.

### Deployment Architecture

```
┌─────────────────────────────────────┐
│           Frontend (Next.js)        │
│  ┌─────────────┐ ┌─────────────────┐│
│  │   Static    │ │   Server-Side   ││
│  │   Assets    │ │   Rendering     ││
│  └─────────────┘ └─────────────────┘│
└─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────┐
│              CDN/Edge               │
│         (Static Assets)             │
└─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────┐
│           Backend API               │
│         (Node.js/Express)           │
└─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────┐
│            Database                 │
│           (MongoDB)                 │
└─────────────────────────────────────┘
```

## 🔧 Environment Setup

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (or yarn/pnpm)
- **Git**: For version control
- **Backend Server**: Running and accessible

### Development Environment

```bash
# Clone the repository
git clone <repository-url>
cd taskflow/client

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

### Environment Files

Create the following environment files:

**.env.local** (Development)
```env
# API Configuration
NEXT_PUBLIC_API_URL_AUTH=http://localhost:5000
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Environment
NODE_ENV=development

# Security
NEXT_PUBLIC_ENCRYPTION_KEY=your-encryption-key-here

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

**.env.production** (Production)
```env
# API Configuration
NEXT_PUBLIC_API_URL_AUTH=https://your-api-domain.com
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api

# Environment
NODE_ENV=production

# Security
NEXT_PUBLIC_ENCRYPTION_KEY=your-production-encryption-key

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-production-analytics-id
```

## 🏗️ Build Process

### Local Build

```bash
# Install dependencies
npm install

# Type checking
npm run type-check

# Linting
npm run lint

# Build the application
npm run build

# Test the production build locally
npm start
```

### Build Optimization

The build process includes several optimizations:

1. **Code Splitting**: Automatic route-based code splitting
2. **Tree Shaking**: Removal of unused code
3. **Image Optimization**: Next.js Image component optimization
4. **CSS Optimization**: Tailwind CSS purging and minification
5. **Bundle Analysis**: Optional bundle size analysis

### Build Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "analyze": "ANALYZE=true npm run build"
  }
}
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze

# This will generate a report showing:
# - Bundle sizes by route
# - Largest dependencies
# - Optimization opportunities
```

## 🚀 Production Deployment

### Pre-deployment Checklist

- [ ] All environment variables configured
- [ ] Backend API is accessible
- [ ] Database connections tested
- [ ] Security headers configured
- [ ] SSL certificates installed
- [ ] Domain DNS configured
- [ ] Monitoring tools setup

### Build for Production

```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Run tests (if available)
npm test

# Build for production
npm run build

# Verify build
npm start
```

### Production Environment Variables

Ensure all required environment variables are set:

```bash
# Required variables
NEXT_PUBLIC_API_URL_AUTH=https://api.yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api
NODE_ENV=production

# Optional but recommended
NEXT_PUBLIC_ENCRYPTION_KEY=secure-encryption-key
NEXT_PUBLIC_ANALYTICS_ID=analytics-tracking-id
```

## 🌐 Platform-Specific Guides

### Vercel Deployment

Vercel is the recommended platform for Next.js applications.

#### Automatic Deployment

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel
   ```

2. **Configure Project**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables**
   ```bash
   # Set environment variables via CLI
   vercel env add NEXT_PUBLIC_API_URL_AUTH
   vercel env add NEXT_PUBLIC_API_URL
   vercel env add NODE_ENV
   ```

#### vercel.json Configuration

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### Netlify Deployment

#### Build Configuration

**netlify.toml**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

#### Deployment Steps

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=.next
```

### AWS Deployment

#### Using AWS Amplify

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Project**
   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

#### Using EC2 with PM2

1. **Server Setup**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   npm install -g pm2
   ```

2. **Application Deployment**
   ```bash
   # Clone repository
   git clone <repository-url>
   cd taskflow/client
   
   # Install dependencies
   npm install
   
   # Build application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "taskflow-client" -- start
   pm2 save
   pm2 startup
   ```

3. **PM2 Configuration**
   ```javascript
   // ecosystem.config.js
   module.exports = {
     apps: [{
       name: 'taskflow-client',
       script: 'npm',
       args: 'start',
       cwd: '/path/to/taskflow/client',
       env: {
         NODE_ENV: 'production',
         PORT: 3000,
         NEXT_PUBLIC_API_URL_AUTH: 'https://api.yourdomain.com',
         NEXT_PUBLIC_API_URL: 'https://api.yourdomain.com/api'
       }
     }]
   };
   ```

### Docker Deployment

#### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set permissions
USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  taskflow-client:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL_AUTH=https://api.yourdomain.com
      - NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api
    restart: unless-stopped
    depends_on:
      - taskflow-api

  taskflow-api:
    # API service configuration
    ports:
      - "5000:5000"
    # ... other API configuration
```

#### Build and Deploy

```bash
# Build Docker image
docker build -t taskflow-client .

# Run container
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_API_URL_AUTH=https://api.yourdomain.com \
  -e NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api \
  taskflow-client

# Or use Docker Compose
docker-compose up -d
```

## 🔐 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL_AUTH` | Authentication API URL | `https://api.yourdomain.com` |
| `NEXT_PUBLIC_API_URL` | Main API URL | `https://api.yourdomain.com/api` |
| `NODE_ENV` | Environment mode | `production` |

### Optional Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_ENCRYPTION_KEY` | Client-side encryption key | `your-secure-key` |
| `NEXT_PUBLIC_ANALYTICS_ID` | Analytics tracking ID | `GA-XXXXXXXXX` |
| `PORT` | Server port | `3000` |
| `HOSTNAME` | Server hostname | `0.0.0.0` |

### Environment Variable Management

```bash
# Development
cp .env.example .env.local

# Staging
cp .env.example .env.staging

# Production
cp .env.example .env.production

# Validate environment variables
npm run validate-env
```

## ⚡ Performance Optimization

### Build Optimizations

1. **Bundle Splitting**
   ```javascript
   // next.config.ts
   const nextConfig = {
     experimental: {
       optimizeCss: true,
       optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
     }
   };
   ```

2. **Image Optimization**
   ```javascript
   // next.config.ts
   const nextConfig = {
     images: {
       domains: ['your-image-domain.com'],
       formats: ['image/webp', 'image/avif'],
       minimumCacheTTL: 60,
     }
   };
   ```

3. **Compression**
   ```javascript
   // next.config.ts
   const nextConfig = {
     compress: true,
     poweredByHeader: false,
   };
   ```

### Runtime Optimizations

1. **Caching Strategy**
   ```javascript
   // Cache configuration
   const cacheConfig = {
     'Cache-Control': 'public, max-age=31536000, immutable'
   };
   ```

2. **CDN Configuration**
   ```javascript
   // next.config.ts
   const nextConfig = {
     assetPrefix: process.env.NODE_ENV === 'production' 
       ? 'https://cdn.yourdomain.com' 
       : '',
   };
   ```

### Performance Monitoring

```javascript
// Performance monitoring
export function reportWebVitals(metric) {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    analytics.track('Web Vitals', {
      name: metric.name,
      value: metric.value,
      id: metric.id,
    });
  }
}
```

## 📊 Monitoring & Logging

### Application Monitoring

1. **Error Tracking**
   ```javascript
   // Error tracking setup
   import * as Sentry from '@sentry/nextjs';
   
   Sentry.init({
     dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
     environment: process.env.NODE_ENV,
   });
   ```

2. **Performance Monitoring**
   ```javascript
   // Performance monitoring
   import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
   
   getCLS(console.log);
   getFID(console.log);
   getFCP(console.log);
   getLCP(console.log);
   getTTFB(console.log);
   ```

### Health Checks

```javascript
// pages/api/health.ts
export default function handler(req, res) {
  const healthCheck = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  };
  
  res.status(200).json(healthCheck);
}
```

### Logging Configuration

```javascript
// lib/logger.ts
export const logger = {
  info: (message, meta = {}) => {
    if (process.env.NODE_ENV === 'production') {
      console.log(JSON.stringify({ level: 'info', message, ...meta }));
    } else {
      console.log(message, meta);
    }
  },
  
  error: (message, error = {}) => {
    if (process.env.NODE_ENV === 'production') {
      console.error(JSON.stringify({ level: 'error', message, error }));
    } else {
      console.error(message, error);
    }
  },
};
```

## 🔒 Security Configuration

### Security Headers

```javascript
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
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
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

### SSL/TLS Configuration

1. **Certificate Installation**
   ```bash
   # Using Let's Encrypt with Certbot
   sudo certbot --nginx -d yourdomain.com
   ```

2. **HTTPS Redirect**
   ```javascript
   // middleware.ts
   export function middleware(request) {
     if (process.env.NODE_ENV === 'production' && 
         request.headers.get('x-forwarded-proto') !== 'https') {
       return NextResponse.redirect(
         `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
         301
       );
     }
   }
   ```

## 🔧 Troubleshooting

### Common Issues

#### Build Failures

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check

# Check for linting errors
npm run lint
```

#### Runtime Errors

```bash
# Check environment variables
echo $NEXT_PUBLIC_API_URL_AUTH
echo $NEXT_PUBLIC_API_URL

# Verify API connectivity
curl -I $NEXT_PUBLIC_API_URL_AUTH/health

# Check application logs
pm2 logs taskflow-client
```

#### Performance Issues

```bash
# Analyze bundle size
npm run analyze

# Check memory usage
node --inspect npm start

# Monitor performance
npm run lighthouse
```

### Debugging Tools

1. **Next.js Debug Mode**
   ```bash
   DEBUG=* npm run dev
   ```

2. **Bundle Analysis**
   ```bash
   ANALYZE=true npm run build
   ```

3. **Performance Profiling**
   ```bash
   NODE_OPTIONS='--inspect' npm start
   ```

### Support Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **Community Forums**: https://github.com/vercel/next.js/discussions

This deployment guide ensures a smooth and secure deployment process for TaskFlow across various platforms and environments, with comprehensive monitoring and troubleshooting capabilities.