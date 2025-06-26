# TASK-FLOW LMS - COMPREHENSIVE DEVELOPMENT GUIDE

## 🎯 PROJECT OVERVIEW

Task-Flow is a modern Learning Management System built with cutting-edge technologies and a **Unified Router Architecture** that eliminates traditional dashboard centralization in favor of role-based direct routing.

### 📋 Core Technologies Stack

- **Frontend Framework**: Next.js 15.3.4 with App Router and Turbopack
- **Language**: TypeScript (strict mode)
- **State Management**: Redux Toolkit (RTK) with RTK Query
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **UI Components**: shadcn/ui components
- **Internationalization**: Custom i18n system (English/Arabic with RTL)
- **Theme System**: Light/Dark/System with localStorage persistence
- **Authentication**: JWT-based with role-based access control (RBAC)

---

## 🏗️ UNIFIED ROUTER ARCHITECTURE

### Core Principle: UNIFIED GLOBAL ROUTING WITH ROLE-BASED CONTROLS

This system implements a **Global Router** that allows all users to access the same pages, but with **role-based controls** determining what they can see and do on each page. No dashboard centralization, but unified page access with role-based permissions.

### Architecture Flow

```
_app.tsx → Protected Route → Global Router → Unified Pages (role-controlled content)
```

### Two-Layer Protection System

```
1. Protected Route: Authentication + User Preferences (theme/language)
2. Global Router: Role-based page access and content control
```

### Architecture Benefits

- ✅ **Unified Experience**: Same pages accessible to all roles
- ✅ **Role-Based Controls**: Content visibility based on user role
- ✅ **Scalability**: Easy to add new roles without page duplication
- ✅ **Maintainability**: Single source of truth for each page type
- ✅ **Performance**: No dashboard loading overhead

### Authentication & Routing Flow

```
1. Public Access: Landing (/) → Login (/login)
2. Protected Route: Auth check + theme/language persistence
3. Global Router: Role-based page routing with unified access
4. Page Level: Role-controlled content and functionality
```

### Unified Page Structure with Role Controls

```
/student → Student view of unified academic interface
/teacher → Teacher view of unified academic interface
/admin → Admin view of unified management interface
/superadmin → Super admin view of unified system interface

Each page shows different content/controls based on user role
```

---

## 🔑 DEVELOPMENT CONSISTENCY GUIDELINES

### 1. Redux Toolkit (RTK) Patterns

#### Store Structure

```typescript
src/store/
├── index.ts              # Store configuration
├── hooks.ts              # Typed hooks (useAppDispatch, useAppSelector)
├── localStorage.ts       # Persistence middleware
├── slices/
│   ├── authSlice.ts      # Authentication state
│   ├── themeSlice.ts     # Theme management
│   └── languageSlice.ts  # Language management
└── api/
    ├── apiSlice.ts       # RTK Query base
    └── authApiSlice.ts   # Auth endpoints
```

#### RTK Slice Pattern

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceState {
  // Define state interface
}

const initialState: SliceState = {
  // Initial state
};

const sliceName = createSlice({
  name: "sliceName",
  initialState,
  reducers: {
    // Synchronous actions
  },
  extraReducers: (builder) => {
    // Async actions (RTK Query)
  },
});

export const { actions } = sliceName.actions;
export const selectState = (state: RootState) => state.sliceName;
export default sliceName.reducer;
```

#### RTK Query API Pattern

```typescript
import { apiSlice } from "./apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query<DataType, QueryParams>({
      query: (params) => `/api/endpoint`,
      providesTags: ["Tag"],
    }),
    updateData: builder.mutation<ResponseType, UpdateParams>({
      query: (data) => ({
        url: "/api/endpoint",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tag"],
    }),
  }),
});

export const { useGetDataQuery, useUpdateDataMutation } = extendedApiSlice;
```

### 2. Tailwind CSS v4 Patterns

#### Theme-Aware Classes

```css
/* Use CSS custom properties for dynamic theming */
.bg-theme {
  background-color: var(--color-background);
}
.text-theme {
  color: var(--color-text);
}
.border-theme {
  border-color: var(--color-border);
}
```

#### Component-First Approach

```typescript
// Use Tailwind classes directly in components
const buttonVariants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-input bg-background hover:bg-accent",
};
```

#### Responsive Design Pattern

```typescript
// Mobile-first responsive design
<div className="
    grid grid-cols-1           // Mobile: 1 column
    md:grid-cols-2             // Tablet: 2 columns
    lg:grid-cols-3             // Desktop: 3 columns
    xl:grid-cols-4             // Large: 4 columns
">
```

### 3. Internationalization (i18n) Patterns

#### Language Support

- **English (en)**: Primary language, LTR layout
- **Arabic (ar)**: Secondary language, RTL layout

#### Translation Structure

```
src/locales/
├── en/common.json         # English translations
└── ar/common.json         # Arabic translations
```

#### Translation Usage Pattern

```typescript
import { useAppSelector } from "@/store/hooks";
import { selectCurrentLanguage } from "@/store/slices/languageSlice";
import enTranslations from "@/locales/en/common.json";
import arTranslations from "@/locales/ar/common.json";

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

// In component
const currentLanguage = useAppSelector(selectCurrentLanguage);
const t = translations[currentLanguage];

return <h1>{t.app.title}</h1>;
```

#### RTL Support Pattern

```typescript
// Automatic RTL layout
const isRTL = currentLanguage === "ar";

return (
  <div className={`${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
    <div className="text-start">
      {" "}
      {/* Always starts from reading direction */}
      {content}
    </div>
  </div>
);
```

### 4. Component Development Patterns

#### Functional Component Pattern

```typescript
import React from "react";
import { ComponentProps } from "@/types";

interface ComponentNameProps {
  // Define props interface
}

export default function ComponentName({
  prop1,
  prop2,
  ...props
}: ComponentNameProps) {
  // Component logic

  return <div {...props}>{/* Component JSX */}</div>;
}
```

#### Error Boundary Pattern

```typescript
import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}
```

### 5. Routing Patterns

#### Protected Route Pattern (Authentication & Preferences)

```typescript
interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const router = useRouter();

  useEffect(() => {
    // 1. Check authentication
    if (!isAuthenticated && !["/login", "/"].includes(router.pathname)) {
      router.replace("/login");
      return;
    }

    // 2. Set theme and language in localStorage
    const theme = localStorage.getItem("theme");
    const language = localStorage.getItem("language");

    if (!theme) localStorage.setItem("theme", "system");
    if (!language) localStorage.setItem("language", "en");
  }, [isAuthenticated, router]);

  if (!isAuthenticated && !["/login", "/"].includes(router.pathname)) {
    return <div>Redirecting...</div>;
  }

  return <>{children}</>;
}
```

#### Global Router Pattern (Unified Pages with Role Controls)

```typescript
interface GlobalRouterProps {
  children: React.ReactNode;
}

export default function GlobalRouter({ children }: GlobalRouterProps) {
  const currentUser = useAppSelector(selectCurrentUser);
  const router = useRouter();

  useEffect(() => {
    if (currentUser && router.pathname === "/login") {
      // Redirect from login to user's default page
      const defaultRoute = getDefaultRouteForRole(currentUser.role);
      router.replace(defaultRoute);
    }
  }, [currentUser, router]);

  return <>{children}</>;
}
```

#### Unified Page Pattern (Role-Controlled Content)

```typescript
// Example: Unified Academic Page
export default function AcademicPage() {
  const currentUser = useAppSelector(selectCurrentUser);
  const userRole = currentUser?.role;

  return (
    <UniversalLayout>
      <div className="min-h-screen bg-theme text-theme">
        {/* Shared page header */}
        <PageHeader title="Academic Hub" />

        {/* Role-based content */}
        {userRole === "STUDENT" && <StudentAcademicView />}
        {userRole === "TEACHER" && <TeacherAcademicView />}
        {userRole === "ADMIN" && <AdminAcademicView />}
        {userRole === "SUPER_ADMIN" && <SuperAdminAcademicView />}
      </div>
    </UniversalLayout>
  );
}
```

---

## 📁 FILE ORGANIZATION PATTERNS

### Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── auth/            # Authentication components
│   ├── dashboards/      # Role-specific dashboard widgets
│   ├── layout/          # Layout components
│   ├── providers/       # Context providers
│   ├── routing/         # Routing components
│   ├── ui/              # shadcn/ui components
│   └── shared/          # Shared utility components
├── lib/                 # Utility libraries
├── locales/             # Translation files
├── pages/               # Next.js pages (role-based structure)
├── store/               # Redux store
└── styles/              # Global styles
```

### Component Naming Conventions

- **Components**: PascalCase (`ComponentName.tsx`)
- **Files**: kebab-case (`file-name.ts`)
- **Directories**: kebab-case (`directory-name/`)
- **Interfaces**: PascalCase with Interface suffix (`ComponentInterface`)
- **Types**: PascalCase (`UserRole`, `ThemeMode`)

### Import Organization

```typescript
// 1. React and Next.js imports
import React from "react";
import { useRouter } from "next/router";

// 2. Third-party library imports
import { Button } from "@/components/ui/button";

// 3. Internal imports (store, utils, etc.)
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { selectCurrentUser } from "@/store/slices/authSlice";

// 4. Type imports
import type { User, UserRole } from "@/types";

// 5. Relative imports
import "./component.css";
```

---

## 🎨 STYLING CONSISTENCY

### Theme System

```css
/* CSS Custom Properties for Dynamic Theming */
:root {
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(222.2 84% 4.9%);
  --color-primary: hsl(221.2 83.2% 53.3%);
  --color-secondary: hsl(210 40% 96%);
  --color-accent: hsl(210 40% 94%);
  --color-border: hsl(214.3 31.8% 91.4%);
  --color-input: hsl(214.3 31.8% 91.4%);
}

[data-theme="dark"] {
  --color-background: hsl(222.2 84% 4.9%);
  --color-foreground: hsl(210 40% 98%);
  --color-primary: hsl(217.2 91.2% 59.8%);
  --color-secondary: hsl(217.2 32.6% 17.5%);
  --color-accent: hsl(217.2 32.6% 17.5%);
  --color-border: hsl(217.2 32.6% 17.5%);
  --color-input: hsl(217.2 32.6% 17.5%);
}
```

### Typography System

```css
/* Custom Font Classes */
.font-signature {
  font-family: "Dancing Script", cursive;
}
.font-logo {
  font-family: "Edu NSW ACT Hand", cursive;
}
.font-body {
  font-family: "Lora", serif;
}
```

### Component Variants Pattern

```typescript
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
```

---

## 🔐 AUTHENTICATION & AUTHORIZATION

### User Roles Hierarchy

```typescript
enum UserRole {
  STUDENT = "STUDENT", // Lowest privilege
  TEACHER = "TEACHER", // Course management
  ADMIN = "ADMIN", // Institution management
  SUPER_ADMIN = "SUPER_ADMIN", // System-wide control
}
```

### Permission Matrix

| Feature         | STUDENT | TEACHER | ADMIN | SUPER_ADMIN |
| --------------- | ------- | ------- | ----- | ----------- |
| View Own Data   | ✅      | ✅      | ✅    | ✅          |
| Manage Students | ❌      | ✅      | ✅    | ✅          |
| Create Courses  | ❌      | ✅      | ✅    | ✅          |
| User Management | ❌      | ❌      | ✅    | ✅          |
| System Settings | ❌      | ❌      | ❌    | ✅          |

### Authentication State Pattern

```typescript
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  profileData: Record<string, unknown>;
}
```

---

## 🧪 TESTING PATTERNS

### Mock Data Pattern

```typescript
// src/lib/mockAuth.ts
export const mockUsers: Record<string, User> = {
  "student@uni.edu": {
    id: "1",
    email: "student@uni.edu",
    name: "Student User",
    role: UserRole.STUDENT,
    profileData: { grade: "A", courses: ["CS101", "MATH201"] },
  },
  "teacher@uni.edu": {
    id: "2",
    email: "teacher@uni.edu",
    name: "Teacher User",
    role: UserRole.TEACHER,
    profileData: { department: "Computer Science", courses: ["CS101"] },
  },
};
```

### Test Credentials

```
Student:     student@uni.edu     / password
Teacher:     teacher@uni.edu     / password
Admin:       admin@uni.edu       / password
Super Admin: superadmin@system.com / password
```

---

## 🚀 DEVELOPMENT WORKFLOW

### 1. Setup New Feature

```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Create role-specific page (if needed)
mkdir -p src/pages/[role]/feature
touch src/pages/[role]/feature/index.tsx

# 3. Add route to configuration
# Edit src/lib/routes.ts

# 4. Add translations
# Edit src/locales/en/common.json
# Edit src/locales/ar/common.json
```

### 2. Component Development

```typescript
// 1. Create component with proper typing
// 2. Add error boundary
// 3. Implement responsive design
// 4. Add theme support
// 5. Add i18n support
// 6. Test in both languages and themes
```

### 3. State Management

```typescript
// 1. Create RTK slice
// 2. Add selectors
// 3. Create API endpoints (if needed)
// 4. Add persistence (if needed)
// 5. Update store configuration
```

### 4. Quality Assurance

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Run build
npm run build

# Test in development
npm run dev
```

---

## 📚 KEY COMMANDS

### Development

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript compilation check
```

### Testing User Flows

1. Visit `http://localhost:3000` (or assigned port)
2. Test theme switching on landing page
3. Test language switching (English ↔ Arabic)
4. Click "Login" and test each role:
   - Student: `student@uni.edu` / `password`
   - Teacher: `teacher@uni.edu` / `password`
   - Admin: `admin@uni.edu` / `password`
   - Super Admin: `superadmin@system.com` / `password`

---

## 🎯 AI DEVELOPMENT INSTRUCTIONS

### When Working on This Project:

1. **Follow Unified Global Router Architecture**: Use Global Router for role-based page access
2. **Maintain Protected Route System**: Always check auth + set preferences in localStorage
3. **Use Established Patterns**: Follow RTK, Tailwind v4, and i18n patterns
4. **Ensure Consistency**: All components should work in both themes and languages
5. **Respect Type Safety**: Maintain strict TypeScript compliance
6. **Update Documentation**: Keep this guide updated with new patterns

### Implementation Checklist:

- ✅ Component uses proper TypeScript interfaces
- ✅ Component supports both light and dark themes
- ✅ Component supports English and Arabic (RTL)
- ✅ Component follows established styling patterns
- ✅ Component includes error handling
- ✅ Component is responsive (mobile-first)
- ✅ Component follows unified page patterns with role-based content
- ✅ Translations are added to both language files
- ✅ Redux state is properly typed and persistent
- ✅ Global Router and Protected Route patterns are followed

### Anti-Patterns to Avoid:

- ❌ Bypassing the Protected Route → Global Router flow
- ❌ Hard-coding route paths or text content
- ❌ Creating role-specific pages instead of unified pages with role controls
- ❌ Ignoring RTL layout requirements
- ❌ Skipping error boundaries
- ❌ Creating non-responsive layouts
- ❌ Breaking TypeScript strict mode

---

## 🏆 PROJECT STATUS

### ✅ Completed Features

- Unified Router Architecture with Global Router and Protected Route system
- Role-based authentication and routing with unified page access
- Theme system (light/dark/system) with persistence
- Internationalization (English/Arabic) with RTL support
- Redux store with RTK Query and persistence
- Component organization and reusability
- TypeScript strict mode compliance
- ESLint and build optimization

### 🔮 Future Implementation

- **Socket.io Real-time Features**: Live notifications, chat system, real-time collaboration
- **Advanced Role Permissions**: Granular permission matrix for feature access
- **API Integration**: Backend connectivity for production data
- **Performance Optimization**: Code splitting, lazy loading, caching strategies

### 🎯 Architecture Benefits Achieved

- **Unified Global Routing**: All roles access same pages with role-based content control
- **Two-Layer Security**: Protected Route (auth + preferences) + Global Router (role control)
- **Theme & Language Persistence**: Seamless user experience with localStorage
- **Infrastructure Foundation**: Scalable foundation ready for feature implementation
- **Type Safety**: Comprehensive TypeScript implementation
- **Performance**: Optimized routing without unnecessary redirects
- **Maintainability**: Easy to read, modify, and extend architecture

This development guide ensures consistency, scalability, and maintainability for the Task-Flow LMS project. All development should align with these established patterns and principles.
