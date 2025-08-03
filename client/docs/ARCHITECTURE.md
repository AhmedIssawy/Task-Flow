# System Architecture

This document provides an overview of the Task Flow system architecture, component structure, and design decisions.

## Overview

Task Flow is built as a modern web application using Next.js 15 with the App Router, featuring a multi-role academic management system with internationalization support.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Landing   │  │    Auth     │  │    User Dashboards  │  │
│  │    Pages    │  │   System    │  │  (Role-specific)    │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ Components  │  │    Store    │  │   Internationalization │  │
│  │   (UI/UX)   │  │  (Redux)    │  │     (next-intl)     │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/REST API
                              │
┌─────────────────────────────────────────────────────────────┐
│                    Backend API Server                      │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend Technologies
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality component library
- **Radix UI**: Accessible UI primitives
- **Framer Motion**: Animation library

### State Management
- **Redux Toolkit**: Predictable state container
- **RTK Query**: Data fetching and caching
- **Redux Persist**: State persistence

### Internationalization
- **next-intl**: Internationalization for Next.js
- **Locale Support**: English (LTR) and Arabic (RTL)

### Development Tools
- **ESLint**: Code linting
- **TypeScript**: Static type checking
- **Turbopack**: Fast bundler for development

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (user)/            # Protected routes group
│   │   ├── admin/         # Admin role pages
│   │   ├── student/       # Student role pages
│   │   ├── teacher/       # Teacher role pages
│   │   └── super-admin/   # Super admin pages
│   ├── auth/              # Authentication pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── admin/            # Admin-specific components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── landing/          # Landing page components
│   ├── layout/           # Layout components
│   ├── login/            # Login components
│   ├── made/             # Custom utility components
│   ├── tables/           # Table components
│   └── ui/               # Base UI components
├── constants/            # Application constants
├── hooks/                # Custom React hooks
├── i18n/                 # Internationalization config
├── lib/                  # Utility libraries
├── providers/            # Context providers
├── services/             # API services
├── store/                # Redux store
│   ├── services/         # RTK Query APIs
│   ├── slices/           # Redux slices
│   └── types/            # TypeScript types
└── utils/                # Utility functions
```

## Component Architecture

### Component Hierarchy

```
App Layout (Root)
├── Theme Provider
├── Redux Provider
├── Internationalization Provider
└── Page Components
    ├── Landing Page
    ├── Authentication Pages
    └── User Dashboard Pages
        ├── Role-specific Layouts
        ├── Navigation Components
        └── Feature Components
```

### Component Categories

#### 1. Layout Components
- **RootLayout**: Main application wrapper
- **UserLayout**: Protected routes wrapper
- **Navbar**: Top navigation
- **SideMenu**: Role-based navigation
- **LocaleWrapper**: Language detection

#### 2. Authentication Components
- **LoginForm**: User authentication
- **UserAuthGuard**: Route protection
- **LogoutBtn**: Session termination
- **Unauthorized**: Access denied page

#### 3. Dashboard Components
- **AdminDashboard**: Admin overview
- **StatCard**: Metric display
- **RevenueChart**: Financial analytics
- **HeatmapGrid**: Activity visualization
- **AISuggestionCenter**: AI recommendations

#### 4. Table Components
- **PaginatedTable**: Data tables with pagination
- **TableBodyRenderer**: Dynamic table content
- **FormModal**: CRUD operations
- **DeleteModal**: Confirmation dialogs
- **AssignModal**: Assignment operations

#### 5. UI Components (shadcn/ui)
- **Button**: Interactive buttons
- **Card**: Content containers
- **Dialog**: Modal dialogs
- **Form**: Form components
- **Input**: Text inputs
- **Select**: Dropdown selections
- **Table**: Data tables
- **Tabs**: Tabbed interfaces

## State Management Architecture

### Redux Store Structure

```typescript
store/
├── index.ts              # Store configuration
├── hooks.ts              # Typed hooks
├── services/             # RTK Query APIs
│   ├── authApi.ts        # Authentication
│   ├── studentApi.ts     # Student operations
│   ├── adminApi.ts       # Admin operations
│   ├── teacherApi.ts     # Teacher operations
│   ├── collegeApi.ts     # College management
│   ├── departmentApi.ts  # Department management
│   └── universityApi.ts  # University operations
├── slices/               # Redux slices
│   └── authSlice.ts      # Authentication state
└── types/                # TypeScript definitions
    ├── student.ts
    ├── admin.ts
    ├── teacher.ts
    ├── college.ts
    ├── department.ts
    └── university.ts
```

### State Flow

```
Component → RTK Query Hook → API Service → Backend
    ↓
Redux Store ← Cache Update ← Response ← Backend
    ↓
Component Re-render
```

## Routing Architecture

### App Router Structure

```
app/
├── page.tsx                    # Landing page (/)
├── layout.tsx                  # Root layout
├── not-found.tsx              # 404 page
├── auth/
│   └── login/
│       └── page.tsx           # Login page (/auth/login)
└── (user)/                    # Protected routes group
    ├── layout.tsx             # User layout
    ├── [role]/
    │   └── [id]/
    │       └── settings/
    │           └── page.tsx   # Settings (/[role]/[id]/settings)
    ├── admin/
    │   └── [id]/
    │       ├── page.tsx       # Admin dashboard
    │       ├── colleges/
    │       ├── departments/
    │       ├── courses/
    │       ├── teachers/
    │       └── students/
    ├── student/
    │   └── [id]/
    │       ├── page.tsx       # Student dashboard
    │       ├── layout.tsx     # Student layout
    │       ├── courses/
    │       ├── assignment/
    │       ├── grades/
    │       └── calendar/
    ├── teacher/
    │   └── [id]/
    │       └── page.tsx       # Teacher dashboard
    └── super-admin/
        └── [id]/
            ├── page.tsx       # Super admin dashboard
            ├── colleges/
            ├── departments/
            ├── courses/
            ├── teachers/
            └── students/
```

### Route Protection

```typescript
// Route protection flow
User Access → Authentication Check → Role Verification → Page Access
     ↓              ↓                    ↓                 ↓
Unauthorized → Login Redirect    Invalid Role → 403 Error   Authorized → Render Page
```

## Data Flow Architecture

### API Integration Pattern

```typescript
// RTK Query pattern
const api = createApi({
  reducerPath: 'apiName',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['EntityType'],
  endpoints: (builder) => ({
    getEntity: builder.query<EntityType, string>(),
    createEntity: builder.mutation<EntityType, CreateEntityRequest>(),
    updateEntity: builder.mutation<EntityType, UpdateEntityRequest>(),
    deleteEntity: builder.mutation<void, string>(),
  }),
});
```

### Component Data Flow

```typescript
// Component integration pattern
function Component() {
  const { data, isLoading, error } = useGetEntityQuery(id);
  const [updateEntity] = useUpdateEntityMutation();

  // Handle loading, error, and success states
  // Render UI with data
}
```

## Security Architecture

### Authentication Flow

```
1. User Login → Credentials Validation → JWT Token (HTTP-only Cookie)
2. Protected Route Access → Token Verification → Role Authorization
3. API Requests → Token Inclusion → Backend Validation
```

### Role-Based Access Control

```typescript
// Role hierarchy
Super Admin > Admin > Teacher > Student

// Permission matrix
- Super Admin: Full system access
- Admin: University/college management
- Teacher: Course and student management
- Student: Personal academic data access
```

## Internationalization Architecture

### Language Support

```typescript
// Supported locales
const locales = ['en', 'ar'];

// RTL support for Arabic
<html dir={locale === 'ar' ? 'rtl' : 'ltr'}>
```

### Translation Structure

```
locales/
├── en.json    # English translations
└── ar.json    # Arabic translations
```

## Performance Optimizations

### Caching Strategy
- **RTK Query**: Automatic API response caching
- **Next.js**: Static generation and ISR
- **Redux Persist**: Client-side state persistence

### Code Splitting
- **Dynamic Imports**: Lazy loading of components
- **Route-based Splitting**: Automatic by Next.js App Router
- **Component-level Splitting**: Manual optimization

### Bundle Optimization
- **Tree Shaking**: Unused code elimination
- **Minification**: Production build optimization
- **Compression**: Gzip/Brotli compression

## Deployment Architecture

### Build Process

```
Source Code → TypeScript Compilation → Next.js Build → Static Assets
     ↓              ↓                      ↓              ↓
Development → Type Checking → Optimization → Production Bundle
```

### Environment Configuration

```typescript
// Environment variables
NEXT_PUBLIC_API_URL_AUTH    # Authentication API
NEXT_PUBLIC_API_URL         # Main API
NODE_ENV                    # Environment mode
```

## Scalability Considerations

### Horizontal Scaling
- **Stateless Components**: No local state dependencies
- **API Separation**: Microservices architecture ready
- **CDN Integration**: Static asset distribution

### Vertical Scaling
- **Code Splitting**: Reduced initial bundle size
- **Lazy Loading**: On-demand resource loading
- **Caching**: Multiple layers of caching

## Monitoring and Debugging

### Development Tools
- **Redux DevTools**: State debugging
- **React DevTools**: Component inspection
- **Next.js DevTools**: Performance monitoring

### Error Handling
- **Error Boundaries**: Component-level error catching
- **Global Error Handler**: Application-level error management
- **API Error Handling**: Standardized error responses

## Future Architecture Considerations

### Planned Enhancements
- **Micro-frontends**: Module federation
- **PWA Support**: Offline functionality
- **Real-time Features**: WebSocket integration
- **Mobile App**: React Native integration

This architecture provides a solid foundation for a scalable, maintainable, and user-friendly academic management system.