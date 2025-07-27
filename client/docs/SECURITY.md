# Security Documentation

## 📋 Table of Contents
- [Overview](#overview)
- [Authentication Security](#authentication-security)
- [Authorization & Access Control](#authorization--access-control)
- [Data Protection](#data-protection)
- [Input Validation](#input-validation)
- [XSS Prevention](#xss-prevention)
- [CSRF Protection](#csrf-protection)
- [Secure Communication](#secure-communication)
- [Error Handling](#error-handling)
- [Security Headers](#security-headers)
- [Best Practices](#best-practices)
- [Security Checklist](#security-checklist)

## 🛡️ Overview

TaskFlow implements comprehensive security measures to protect user data, prevent common web vulnerabilities, and ensure secure communication between client and server. The security architecture follows industry best practices and OWASP guidelines.

### Security Principles
- **Defense in Depth**: Multiple layers of security controls
- **Principle of Least Privilege**: Minimal access rights for users and systems
- **Secure by Default**: Security-first approach in all implementations
- **Input Validation**: All user inputs are validated and sanitized
- **Authentication & Authorization**: Robust user verification and access control
- **Data Protection**: Encryption and secure data handling

## 🔐 Authentication Security

### Cookie-based Authentication

TaskFlow uses HTTP-only cookies for secure session management, preventing XSS attacks and ensuring secure token storage.

```typescript
// Authentication configuration
export const COOKIE_CONFIG = {
  httpOnly: true,           // Prevent JavaScript access
  secure: process.env.NODE_ENV === 'production', // HTTPS only in production
  sameSite: 'lax' as const, // CSRF protection
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
  path: '/',
} as const;
```

### Authentication Flow

```typescript
// Secure login implementation
export const useSecureLogin = () => {
  const [loginMutation] = useLoginMutation();
  
  const login = async (credentials: LoginCredentials) => {
    try {
      // Input validation
      const validatedCredentials = loginSchema.parse(credentials);
      
      // Secure API call
      const result = await loginMutation(validatedCredentials).unwrap();
      
      // Store minimal user data in Redux (no sensitive info)
      dispatch(setAuth({
        id: result.data.id,
        mongoId: result.data._id,
        role: result.role
      }));
      
      // Redirect based on role
      const redirectPath = getRoleBasedPath(result.role, result.data.id);
      router.push(redirectPath);
      
    } catch (error) {
      // Secure error handling (no sensitive info in logs)
      console.error('Login failed:', error.message);
      toast.error('Invalid credentials');
    }
  };
  
  return { login };
};
```

### Password Security

```typescript
// Password validation schema
const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

// Secure password input component
export function PasswordInput({ ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </Button>
    </div>
  );
}
```

### Session Management

```typescript
// Secure session handling
export const useSecureSession = () => {
  const { data: user, error } = useGetMeQuery(undefined, {
    // Automatic token refresh
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  
  // Auto-logout on token expiry
  useEffect(() => {
    if (error && error.status === 401) {
      // Clear local state
      dispatch(clearAuth());
      dispatch(clearUser());
      
      // Redirect to login
      router.push('/auth/login');
      toast.error('Session expired. Please login again.');
    }
  }, [error]);
  
  return { user, isAuthenticated: !!user };
};
```

## 🔒 Authorization & Access Control

### Role-based Access Control (RBAC)

```typescript
// Role definitions
export enum UserRole {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super-admin',
}

// Permission matrix
export const PERMISSIONS = {
  [UserRole.STUDENT]: [
    'view_own_profile',
    'view_own_courses',
    'view_own_grades',
    'submit_assignments',
  ],
  [UserRole.TEACHER]: [
    'view_own_profile',
    'view_assigned_courses',
    'grade_assignments',
    'manage_course_content',
  ],
  [UserRole.ADMIN]: [
    'view_college_data',
    'manage_students',
    'manage_teachers',
    'manage_courses',
    'view_reports',
  ],
  [UserRole.SUPER_ADMIN]: [
    'manage_all_colleges',
    'manage_all_users',
    'system_configuration',
    'view_all_reports',
  ],
} as const;
```

### Route Protection

```typescript
// Higher-order component for route protection
export function withRoleProtection<P extends object>(
  Component: React.ComponentType<P>,
  allowedRoles: UserRole[]
) {
  return function ProtectedComponent(props: P) {
    const { role, isLoading } = useAuth();
    
    if (isLoading) {
      return <LoadingSpinner />;
    }
    
    if (!role || !allowedRoles.includes(role as UserRole)) {
      return <Unauthorized />;
    }
    
    return <Component {...props} />;
  };
}

// Usage example
const AdminDashboard = withRoleProtection(
  AdminDashboardComponent,
  [UserRole.ADMIN, UserRole.SUPER_ADMIN]
);
```

### Permission Checking

```typescript
// Permission checking hook
export const usePermissions = () => {
  const { role } = useAuth();
  
  const hasPermission = useCallback((permission: string) => {
    if (!role) return false;
    return PERMISSIONS[role as UserRole]?.includes(permission) || false;
  }, [role]);
  
  const hasAnyPermission = useCallback((permissions: string[]) => {
    return permissions.some(permission => hasPermission(permission));
  }, [hasPermission]);
  
  const hasAllPermissions = useCallback((permissions: string[]) => {
    return permissions.every(permission => hasPermission(permission));
  }, [hasPermission]);
  
  return {
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    userRole: role,
  };
};

// Permission-based component rendering
export function ConditionalRender({ 
  permission, 
  children 
}: { 
  permission: string; 
  children: React.ReactNode; 
}) {
  const { hasPermission } = usePermissions();
  
  if (!hasPermission(permission)) {
    return null;
  }
  
  return <>{children}</>;
}
```

## 🛡️ Data Protection

### Sensitive Data Handling

```typescript
// Secure data storage in Redux
interface AuthState {
  id: string | null;          // Non-sensitive user ID
  mongoId: string | null;     // Database ID
  role: Role | null;          // User role
  // Note: No passwords, tokens, or sensitive data stored
}

// Data sanitization
export const sanitizeUserData = (userData: any) => {
  const { password, token, ...safeData } = userData;
  return safeData;
};

// Secure API response handling
export const handleApiResponse = (response: any) => {
  // Remove sensitive fields before storing
  const sanitized = sanitizeUserData(response.data);
  return sanitized;
};
```

### Data Encryption

```typescript
// Client-side data encryption for sensitive local storage
import CryptoJS from 'crypto-js';

export const encryptData = (data: string, key: string): string => {
  return CryptoJS.AES.encrypt(data, key).toString();
};

export const decryptData = (encryptedData: string, key: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Secure local storage wrapper
export const secureStorage = {
  setItem: (key: string, value: string) => {
    const encrypted = encryptData(value, process.env.NEXT_PUBLIC_ENCRYPTION_KEY!);
    localStorage.setItem(key, encrypted);
  },
  
  getItem: (key: string): string | null => {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;
    
    try {
      return decryptData(encrypted, process.env.NEXT_PUBLIC_ENCRYPTION_KEY!);
    } catch {
      return null;
    }
  },
  
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};
```

## ✅ Input Validation

### Form Validation with Zod

```typescript
// Comprehensive validation schemas
export const loginSchema = z.object({
  id: z.string()
    .min(1, 'ID is required')
    .max(50, 'ID must be less than 50 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'ID contains invalid characters'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password must be less than 128 characters'),
});

export const createStudentSchema = z.object({
  id: z.string()
    .min(1, 'Student ID is required')
    .max(20, 'Student ID must be less than 20 characters')
    .regex(/^[a-zA-Z0-9]+$/, 'Student ID must be alphanumeric'),
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\u0600-\u06FF]+$/, 'Name contains invalid characters'),
  email: z.string()
    .email('Invalid email address')
    .max(254, 'Email must be less than 254 characters'),
  phone: z.string()
    .optional()
    .refine(val => !val || /^\+?[1-9]\d{1,14}$/.test(val), 'Invalid phone number'),
});
```

### Input Sanitization

```typescript
// HTML sanitization
import DOMPurify from 'dompurify';

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: [],
  });
};

// Text sanitization
export const sanitizeText = (text: string): string => {
  return text
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
};

// Secure input component
export function SecureInput({ 
  value, 
  onChange, 
  sanitize = true,
  ...props 
}: SecureInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const sanitizedValue = sanitize ? sanitizeText(inputValue) : inputValue;
    onChange?.(sanitizedValue);
  };
  
  return (
    <Input
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}
```

## 🚫 XSS Prevention

### Content Security Policy

```typescript
// Next.js security headers
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join('; '),
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];
```

### Safe Rendering

```typescript
// Safe HTML rendering component
export function SafeHtml({ 
  content, 
  allowedTags = ['b', 'i', 'em', 'strong', 'p', 'br'] 
}: SafeHtmlProps) {
  const sanitizedContent = useMemo(() => {
    return DOMPurify.sanitize(content, {
      ALLOWED_TAGS: allowedTags,
      ALLOWED_ATTR: [],
    });
  }, [content, allowedTags]);
  
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className="safe-html-content"
    />
  );
}

// Safe text rendering (prevents XSS)
export function SafeText({ children }: { children: string }) {
  return <span>{sanitizeText(children)}</span>;
}
```

## 🛡️ CSRF Protection

### CSRF Token Implementation

```typescript
// CSRF protection with Next.js
export const csrfProtection = {
  generateToken: () => {
    return crypto.randomBytes(32).toString('hex');
  },
  
  validateToken: (token: string, sessionToken: string) => {
    return token === sessionToken;
  },
};

// CSRF-protected form component
export function SecureForm({ 
  onSubmit, 
  children, 
  ...props 
}: SecureFormProps) {
  const [csrfToken] = useState(() => csrfProtection.generateToken());
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Include CSRF token in form data
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('_csrf', csrfToken);
    
    await onSubmit(formData);
  };
  
  return (
    <form onSubmit={handleSubmit} {...props}>
      <input type="hidden" name="_csrf" value={csrfToken} />
      {children}
    </form>
  );
}
```

## 🔐 Secure Communication

### HTTPS Enforcement

```typescript
// HTTPS redirect middleware
export function httpsRedirect(req: NextRequest) {
  if (
    process.env.NODE_ENV === 'production' &&
    req.headers.get('x-forwarded-proto') !== 'https'
  ) {
    return NextResponse.redirect(
      `https://${req.headers.get('host')}${req.nextUrl.pathname}`,
      301
    );
  }
}
```

### API Security

```typescript
// Secure API base query
export const secureBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include', // Include cookies
  prepareHeaders: (headers, { getState }) => {
    // Add security headers
    headers.set('Content-Type', 'application/json');
    headers.set('X-Requested-With', 'XMLHttpRequest');
    
    // Add CSRF token if available
    const csrfToken = getCsrfToken();
    if (csrfToken) {
      headers.set('X-CSRF-Token', csrfToken);
    }
    
    return headers;
  },
});
```

## ⚠️ Error Handling

### Secure Error Messages

```typescript
// Secure error handling
export const handleApiError = (error: any) => {
  // Log detailed error for debugging (server-side only)
  if (typeof window === 'undefined') {
    console.error('API Error:', error);
  }
  
  // Return generic error message to client
  const userMessage = getSecureErrorMessage(error.status);
  
  return {
    message: userMessage,
    status: error.status,
    // Don't expose sensitive error details
  };
};

export const getSecureErrorMessage = (status: number): string => {
  switch (status) {
    case 400:
      return 'Invalid request. Please check your input.';
    case 401:
      return 'Authentication required. Please login.';
    case 403:
      return 'Access denied. You don\'t have permission.';
    case 404:
      return 'Resource not found.';
    case 429:
      return 'Too many requests. Please try again later.';
    case 500:
      return 'Server error. Please try again later.';
    default:
      return 'An unexpected error occurred.';
  }
};
```

### Error Boundary

```typescript
// Secure error boundary
export class SecureErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error) {
    // Log error securely (no sensitive data)
    console.error('Error boundary caught error:', error.message);
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Report error to monitoring service (without sensitive data)
    reportError({
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      // Don't include user data or sensitive information
    });
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <p>We're sorry, but something unexpected happened.</p>
          <Button onClick={() => window.location.reload()}>
            Reload Page
          </Button>
        </div>
      );
    }
    
    return this.props.children;
  }
}
```

## 🔒 Security Headers

### Next.js Security Configuration

```typescript
// next.config.ts security headers
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
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
];

const nextConfig: NextConfig = {
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

## ✅ Best Practices

### Secure Development Guidelines

1. **Input Validation**
   - Validate all user inputs on both client and server
   - Use schema validation libraries (Zod)
   - Sanitize HTML content before rendering

2. **Authentication & Authorization**
   - Use HTTP-only cookies for session management
   - Implement proper role-based access control
   - Never store sensitive data in client-side storage

3. **Data Protection**
   - Encrypt sensitive data at rest and in transit
   - Use HTTPS in production
   - Implement proper session management

4. **Error Handling**
   - Don't expose sensitive information in error messages
   - Log errors securely for debugging
   - Implement proper error boundaries

5. **Security Headers**
   - Implement Content Security Policy
   - Use security headers to prevent common attacks
   - Enable HTTPS Strict Transport Security

### Code Review Checklist

- [ ] All user inputs are validated and sanitized
- [ ] No sensitive data stored in client-side storage
- [ ] Proper authentication and authorization checks
- [ ] Error messages don't expose sensitive information
- [ ] HTTPS is enforced in production
- [ ] Security headers are properly configured
- [ ] Dependencies are regularly updated
- [ ] No hardcoded secrets or credentials

## 🔍 Security Checklist

### Pre-deployment Security Audit

- [ ] **Authentication Security**
  - [ ] HTTP-only cookies implemented
  - [ ] Session timeout configured
  - [ ] Password requirements enforced
  - [ ] Account lockout mechanisms

- [ ] **Authorization Controls**
  - [ ] Role-based access control implemented
  - [ ] Route protection in place
  - [ ] API endpoint authorization
  - [ ] Permission checking components

- [ ] **Input Validation**
  - [ ] All forms use validation schemas
  - [ ] HTML content is sanitized
  - [ ] File upload restrictions
  - [ ] SQL injection prevention

- [ ] **XSS Prevention**
  - [ ] Content Security Policy configured
  - [ ] HTML sanitization implemented
  - [ ] Safe rendering practices
  - [ ] Input encoding

- [ ] **CSRF Protection**
  - [ ] CSRF tokens implemented
  - [ ] SameSite cookie attributes
  - [ ] Origin validation
  - [ ] Referer checking

- [ ] **Data Protection**
  - [ ] Sensitive data encryption
  - [ ] Secure data transmission
  - [ ] Proper data disposal
  - [ ] Access logging

- [ ] **Security Headers**
  - [ ] Content Security Policy
  - [ ] X-Frame-Options
  - [ ] X-Content-Type-Options
  - [ ] Strict-Transport-Security

- [ ] **Error Handling**
  - [ ] Secure error messages
  - [ ] Error logging implemented
  - [ ] Error boundaries in place
  - [ ] No information disclosure

This security documentation ensures that TaskFlow maintains the highest security standards, protecting user data and preventing common web vulnerabilities through comprehensive security measures and best practices.