# Troubleshooting Guide

## 📋 Table of Contents
- [Common Issues](#common-issues)
- [Development Environment](#development-environment)
- [Build and Deployment](#build-and-deployment)
- [Authentication Issues](#authentication-issues)
- [API and Network Issues](#api-and-network-issues)
- [Internationalization Issues](#internationalization-issues)
- [Performance Issues](#performance-issues)
- [Browser Compatibility](#browser-compatibility)
- [Error Messages](#error-messages)
- [Debug Tools](#debug-tools)
- [Getting Help](#getting-help)

## 🚨 Common Issues

### Application Won't Start

**Problem**: `npm run dev` fails to start the development server

**Symptoms**:
- Port already in use error
- Module not found errors
- TypeScript compilation errors

**Solutions**:

1. **Port Conflict**
   ```bash
   # Check what's using port 3000
   lsof -i :3000
   
   # Kill the process
   kill -9 <PID>
   
   # Or use a different port
   npm run dev -- -p 3001
   ```

2. **Clear Cache and Reinstall**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   
   # Clear node_modules
   rm -rf node_modules package-lock.json
   
   # Reinstall dependencies
   npm install
   
   # Start development server
   npm run dev
   ```

3. **Node Version Issues**
   ```bash
   # Check Node version (should be 18+)
   node --version
   
   # Update Node.js if needed
   nvm install 18
   nvm use 18
   ```

### White Screen or Blank Page

**Problem**: Application loads but shows a blank white screen

**Symptoms**:
- No content visible
- Console errors present
- Network requests failing

**Solutions**:

1. **Check Console Errors**
   ```bash
   # Open browser developer tools (F12)
   # Check Console tab for JavaScript errors
   # Check Network tab for failed requests
   ```

2. **Environment Variables**
   ```bash
   # Verify environment variables are set
   echo $NEXT_PUBLIC_API_URL_AUTH
   echo $NEXT_PUBLIC_API_URL
   
   # Check .env.local file exists and has correct values
   cat .env.local
   ```

3. **API Connectivity**
   ```bash
   # Test API connectivity
   curl -I http://localhost:5000/health
   
   # Check if backend server is running
   ps aux | grep node
   ```

### Styling Issues

**Problem**: Components appear unstyled or incorrectly styled

**Symptoms**:
- Missing CSS styles
- Layout broken
- Tailwind classes not applied

**Solutions**:

1. **Tailwind CSS Issues**
   ```bash
   # Rebuild Tailwind CSS
   npm run build:css
   
   # Check Tailwind config
   npx tailwindcss --help
   
   # Verify Tailwind is imported in globals.css
   grep -n "tailwindcss" src/app/globals.css
   ```

2. **CSS Import Order**
   ```typescript
   // Ensure correct import order in globals.css
   @import "tailwindcss";
   @import "tw-animate-css";
   
   // Custom styles should come after Tailwind
   ```

3. **Purge Configuration**
   ```typescript
   // Check tailwind.config.ts content paths
   content: [
     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   ```

## 🛠️ Development Environment

### TypeScript Errors

**Problem**: TypeScript compilation errors preventing development

**Common Errors**:

1. **Type Import Errors**
   ```typescript
   // Error: Cannot find module '@/components/ui/button'
   // Solution: Check tsconfig.json paths configuration
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

2. **Missing Type Definitions**
   ```bash
   # Install missing type definitions
   npm install --save-dev @types/node @types/react @types/react-dom
   ```

3. **Strict Mode Issues**
   ```typescript
   // Error: Object is possibly 'null' or 'undefined'
   // Solution: Add null checks
   const user = data?.user;
   if (user) {
     // Use user safely
   }
   ```

### Hot Reload Not Working

**Problem**: Changes not reflecting in browser during development

**Solutions**:

1. **Check File Watching**
   ```bash
   # Increase file watcher limit (Linux/Mac)
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

2. **Restart Development Server**
   ```bash
   # Stop server (Ctrl+C) and restart
   npm run dev
   ```

3. **Clear Browser Cache**
   ```bash
   # Hard refresh in browser
   Ctrl+Shift+R (Windows/Linux)
   Cmd+Shift+R (Mac)
   ```

### ESLint and Prettier Conflicts

**Problem**: Conflicting linting and formatting rules

**Solutions**:

1. **Install ESLint-Prettier Integration**
   ```bash
   npm install --save-dev eslint-config-prettier eslint-plugin-prettier
   ```

2. **Update ESLint Configuration**
   ```json
   {
     "extends": [
       "next/core-web-vitals",
       "prettier"
     ],
     "plugins": ["prettier"],
     "rules": {
       "prettier/prettier": "error"
     }
   }
   ```

## 🏗️ Build and Deployment

### Build Failures

**Problem**: `npm run build` fails with errors

**Common Issues**:

1. **Memory Issues**
   ```bash
   # Increase Node.js memory limit
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

2. **TypeScript Errors in Build**
   ```bash
   # Run type checking separately
   npm run type-check
   
   # Fix TypeScript errors before building
   ```

3. **Missing Environment Variables**
   ```bash
   # Ensure all required env vars are set for production
   NEXT_PUBLIC_API_URL_AUTH=https://api.yourdomain.com npm run build
   ```

### Deployment Issues

**Problem**: Application fails to deploy or run in production

**Solutions**:

1. **Vercel Deployment Issues**
   ```bash
   # Check build logs in Vercel dashboard
   # Verify environment variables are set in Vercel
   # Check function timeout limits
   ```

2. **Docker Deployment Issues**
   ```dockerfile
   # Ensure proper Node.js version in Dockerfile
   FROM node:18-alpine
   
   # Set correct working directory
   WORKDIR /app
   
   # Copy package files first for better caching
   COPY package*.json ./
   RUN npm ci --only=production
   ```

3. **Static Export Issues**
   ```typescript
   // next.config.ts for static export
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   ```

### Performance Issues in Production

**Problem**: Slow loading times or poor performance in production

**Solutions**:

1. **Bundle Analysis**
   ```bash
   # Analyze bundle size
   ANALYZE=true npm run build
   
   # Check for large dependencies
   npm run bundle-analyzer
   ```

2. **Image Optimization**
   ```typescript
   // Use Next.js Image component
   import Image from 'next/image';
   
   <Image
     src="/image.jpg"
     alt="Description"
     width={500}
     height={300}
     priority // For above-the-fold images
   />
   ```

3. **Code Splitting**
   ```typescript
   // Dynamic imports for large components
   const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
     loading: () => <LoadingSpinner />,
     ssr: false
   });
   ```

## 🔐 Authentication Issues

### Login Failures

**Problem**: Users cannot log in successfully

**Symptoms**:
- Invalid credentials error
- Redirect loops
- Session not persisting

**Solutions**:

1. **Check API Connectivity**
   ```bash
   # Test authentication endpoint
   curl -X POST http://localhost:5000/auth/login \
     -H "Content-Type: application/json" \
     -d '{"id":"test","password":"test"}'
   ```

2. **Cookie Issues**
   ```typescript
   // Check cookie configuration
   const COOKIE_CONFIG = {
     httpOnly: true,
     secure: process.env.NODE_ENV === 'production',
     sameSite: 'lax',
     maxAge: 24 * 60 * 60 * 1000,
   };
   ```

3. **CORS Configuration**
   ```typescript
   // Ensure CORS is properly configured on backend
   app.use(cors({
     origin: process.env.FRONTEND_URL,
     credentials: true
   }));
   ```

### Session Management Issues

**Problem**: User sessions not persisting or expiring unexpectedly

**Solutions**:

1. **Check Redux Persist**
   ```typescript
   // Verify Redux persist configuration
   const persistConfig = {
     key: 'root',
     storage,
     whitelist: ['auth', 'user']
   };
   ```

2. **Token Refresh**
   ```typescript
   // Implement automatic token refresh
   const baseQuery = fetchBaseQuery({
     baseUrl: API_URL,
     credentials: 'include',
     prepareHeaders: (headers, { getState }) => {
       // Add auth headers
       return headers;
     },
   });
   ```

### Permission Errors

**Problem**: Users seeing unauthorized or forbidden errors

**Solutions**:

1. **Check User Roles**
   ```typescript
   // Verify role-based access control
   const { role } = useAuth();
   const hasPermission = PERMISSIONS[role]?.includes(requiredPermission);
   ```

2. **Route Protection**
   ```typescript
   // Ensure route protection is working
   export default function ProtectedPage() {
     const { role } = useAuth();
     
     if (!role) {
       return <Unauthorized />;
     }
     
     return <PageContent />;
   }
   ```

## 🌐 API and Network Issues

### API Connection Failures

**Problem**: Frontend cannot connect to backend API

**Symptoms**:
- Network errors in console
- Failed API requests
- CORS errors

**Solutions**:

1. **Check API URLs**
   ```bash
   # Verify environment variables
   echo $NEXT_PUBLIC_API_URL_AUTH
   echo $NEXT_PUBLIC_API_URL
   
   # Test API endpoints
   curl -I $NEXT_PUBLIC_API_URL_AUTH/health
   ```

2. **CORS Issues**
   ```bash
   # Check browser console for CORS errors
   # Verify backend CORS configuration
   # Ensure credentials are included in requests
   ```

3. **Network Debugging**
   ```typescript
   // Add request/response interceptors
   const api = createApi({
     baseQuery: fetchBaseQuery({
       baseUrl: API_URL,
       prepareHeaders: (headers) => {
         console.log('Request headers:', headers);
         return headers;
       },
     }),
   });
   ```

### Slow API Responses

**Problem**: API requests taking too long to complete

**Solutions**:

1. **Request Optimization**
   ```typescript
   // Use RTK Query caching
   const { data, isLoading } = useGetStudentsQuery(
     { page, limit },
     {
       pollingInterval: 30000, // Poll every 30 seconds
       refetchOnFocus: true,
     }
   );
   ```

2. **Pagination**
   ```typescript
   // Implement proper pagination
   const [page, setPage] = useState(1);
   const { data } = useGetStudentsQuery({
     page,
     limit: 10, // Limit results per page
   });
   ```

3. **Loading States**
   ```typescript
   // Show loading indicators
   if (isLoading) return <LoadingSpinner />;
   if (isFetching) return <div>Updating...</div>;
   ```

## 🌍 Internationalization Issues

### Language Switching Problems

**Problem**: Language switching not working properly

**Solutions**:

1. **Check Language Files**
   ```bash
   # Verify translation files exist
   ls -la locales/
   
   # Check JSON syntax
   cat locales/en.json | jq .
   cat locales/ar.json | jq .
   ```

2. **Cookie Configuration**
   ```typescript
   // Verify language cookie is being set
   export const setLocale = (locale: Locale) => {
     document.cookie = `lang=${locale}; path=/; max-age=${365 * 24 * 60 * 60}`;
   };
   ```

3. **HTML Direction**
   ```typescript
   // Ensure HTML dir attribute is updated
   useEffect(() => {
     document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
   }, [isRTL]);
   ```

### RTL Layout Issues

**Problem**: Right-to-left layout not displaying correctly

**Solutions**:

1. **CSS Direction**
   ```css
   /* Ensure RTL styles are applied */
   [dir="rtl"] .flex {
     flex-direction: row-reverse;
   }
   
   [dir="rtl"] .text-left {
     text-align: right;
   }
   ```

2. **Tailwind RTL Support**
   ```typescript
   // Use logical properties
   <div className="ms-4 me-2"> {/* margin-inline-start/end */}
   <div className="ps-3 pe-3"> {/* padding-inline-start/end */}
   ```

### Missing Translations

**Problem**: Some text not being translated

**Solutions**:

1. **Check Translation Keys**
   ```typescript
   // Verify translation key exists
   const t = useTranslations('namespace');
   
   // Use fallback for missing translations
   const text = t.has('key') ? t('key') : 'Fallback text';
   ```

2. **Add Missing Translations**
   ```json
   // Add to both en.json and ar.json
   {
     "namespace": {
       "key": "English text"
     }
   }
   ```

## ⚡ Performance Issues

### Slow Page Loading

**Problem**: Pages taking too long to load

**Solutions**:

1. **Code Splitting**
   ```typescript
   // Use dynamic imports
   const LazyComponent = lazy(() => import('./LazyComponent'));
   
   <Suspense fallback={<Loading />}>
     <LazyComponent />
   </Suspense>
   ```

2. **Image Optimization**
   ```typescript
   // Optimize images
   <Image
     src="/image.jpg"
     alt="Description"
     width={500}
     height={300}
     placeholder="blur"
     blurDataURL="data:image/jpeg;base64,..."
   />
   ```

3. **Bundle Analysis**
   ```bash
   # Analyze bundle size
   npm run analyze
   
   # Check for duplicate dependencies
   npm ls --depth=0
   ```

### Memory Leaks

**Problem**: Application consuming too much memory over time

**Solutions**:

1. **Cleanup Effects**
   ```typescript
   useEffect(() => {
     const interval = setInterval(() => {
       // Do something
     }, 1000);
     
     return () => clearInterval(interval); // Cleanup
   }, []);
   ```

2. **Event Listeners**
   ```typescript
   useEffect(() => {
     const handleResize = () => {
       // Handle resize
     };
     
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);
   ```

3. **Component Unmounting**
   ```typescript
   useEffect(() => {
     let isMounted = true;
     
     fetchData().then(data => {
       if (isMounted) {
         setData(data);
       }
     });
     
     return () => {
       isMounted = false;
     };
   }, []);
   ```

## 🌐 Browser Compatibility

### Internet Explorer Issues

**Problem**: Application not working in older browsers

**Solutions**:

1. **Polyfills**
   ```typescript
   // Add polyfills for older browsers
   import 'core-js/stable';
   import 'regenerator-runtime/runtime';
   ```

2. **Browser Support**
   ```json
   // package.json browserslist
   "browserslist": {
     "production": [
       ">0.2%",
       "not dead",
       "not op_mini all"
     ],
     "development": [
       "last 1 chrome version",
       "last 1 firefox version",
       "last 1 safari version"
     ]
   }
   ```

### Mobile Browser Issues

**Problem**: Application not working properly on mobile devices

**Solutions**:

1. **Viewport Configuration**
   ```html
   <!-- Ensure proper viewport meta tag -->
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Touch Events**
   ```typescript
   // Handle touch events properly
   const handleTouch = (e: TouchEvent) => {
     e.preventDefault();
     // Handle touch
   };
   ```

3. **Mobile-Specific CSS**
   ```css
   /* Mobile-specific styles */
   @media (max-width: 768px) {
     .mobile-hidden {
       display: none;
     }
   }
   ```

## 🚨 Error Messages

### Common Error Messages and Solutions

1. **"Module not found"**
   ```bash
   # Solution: Check import paths and install missing dependencies
   npm install <missing-package>
   ```

2. **"Cannot read property of undefined"**
   ```typescript
   // Solution: Add null checks
   const value = data?.property?.nestedProperty;
   ```

3. **"Hydration failed"**
   ```typescript
   // Solution: Ensure server and client render the same content
   const [mounted, setMounted] = useState(false);
   
   useEffect(() => {
     setMounted(true);
   }, []);
   
   if (!mounted) return null;
   ```

4. **"CORS policy error"**
   ```bash
   # Solution: Configure CORS on backend
   # Or use proxy in next.config.js
   ```

5. **"Failed to fetch"**
   ```typescript
   // Solution: Check network connectivity and API endpoints
   const { data, error } = useQuery({
     queryFn: fetchData,
     retry: 3,
     retryDelay: 1000,
   });
   ```

## 🔧 Debug Tools

### Browser Developer Tools

1. **Console Debugging**
   ```typescript
   // Add debug logs
   console.log('Debug info:', { data, error, loading });
   
   // Use console.table for objects
   console.table(users);
   
   // Use console.group for organized logs
   console.group('API Request');
   console.log('URL:', url);
   console.log('Data:', data);
   console.groupEnd();
   ```

2. **Network Tab**
   ```bash
   # Check network requests
   # Verify request/response headers
   # Check response status codes
   # Monitor request timing
   ```

3. **React Developer Tools**
   ```bash
   # Install React DevTools browser extension
   # Inspect component props and state
   # Profile component performance
   # Debug hooks
   ```

### Next.js Debug Mode

```bash
# Enable debug mode
DEBUG=* npm run dev

# Debug specific modules
DEBUG=next:* npm run dev

# Debug build process
DEBUG=next:build npm run build
```

### Redux DevTools

```typescript
// Configure Redux DevTools
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
```

## 🆘 Getting Help

### Before Asking for Help

1. **Check Documentation**
   - Read relevant documentation sections
   - Check API documentation
   - Review component documentation

2. **Search Existing Issues**
   - GitHub issues
   - Stack Overflow
   - Community forums

3. **Reproduce the Issue**
   - Create minimal reproduction
   - Document steps to reproduce
   - Include error messages and logs

### How to Report Issues

1. **Issue Template**
   ```markdown
   ## Bug Description
   Brief description of the issue
   
   ## Steps to Reproduce
   1. Step one
   2. Step two
   3. Step three
   
   ## Expected Behavior
   What should happen
   
   ## Actual Behavior
   What actually happens
   
   ## Environment
   - OS: [e.g., macOS 12.0]
   - Browser: [e.g., Chrome 96]
   - Node.js: [e.g., 18.0.0]
   - npm: [e.g., 8.0.0]
   
   ## Additional Context
   Any other relevant information
   ```

2. **Include Relevant Information**
   - Error messages and stack traces
   - Console logs
   - Network request details
   - Environment variables (without sensitive data)
   - Code snippets

### Support Channels

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and community support
- **Documentation**: Comprehensive guides and references
- **Email Support**: For urgent issues or security concerns

### Emergency Contacts

For critical production issues:
- **Email**: support@taskflow.com
- **Response Time**: Within 4 hours during business hours
- **Escalation**: Include "URGENT" in subject line

This troubleshooting guide should help you resolve most common issues with TaskFlow. If you encounter an issue not covered here, please refer to the support channels above.