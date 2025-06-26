# Architecture Overview - Unified Router System

## Core Architecture Principles

### Unified Router Architecture

- **Single Router**: All users access the same pages through a unified router
- **Role-Based Content Control**: Content visibility and functionality controlled by user role
- **Global Router**: Post-authentication routing logic handling all role-based decisions
- **Protected Route**: Pre-router component handling authentication and localStorage preferences
- **Foundation Focus**: Building robust infrastructure foundation for future feature implementation

### System Flow

```
User Request → Protected Route (Auth + Preferences) → Global Router (Role Logic) → Unified Page (Role-Based Content)
```

## Optimal Provider Hierarchy

### Complete Provider Stack

```typescript
// _app.tsx structure
<ReduxProvider>
  {" "}
  // 1. State management foundation
  <ClientHydration>
    {" "}
    // 2. SSR/CSR compatibility
    <ThemeProvider>
      {" "}
      // 3. UI theming system
      <LanguageProvider>
        {" "}
        // 4. Internationalization
        <ProtectedRoute>
          {" "}
          // 5. Authentication + localStorage
          <GlobalRouter>
            {" "}
            // 6. Unified routing logic
            <Component /> // 7. Final page component
          </GlobalRouter>
        </ProtectedRoute>
      </LanguageProvider>
    </ThemeProvider>
  </ClientHydration>
</ReduxProvider>
```

## System Architecture Overview

## Component Architecture

### Unified Structure

```
src/
├── components/
│   ├── common/              # Shared UI components
│   ├── routing/             # Router architecture
│   │   ├── ProtectedRoute.tsx   # Auth + localStorage only
│   │   └── GlobalRouter.tsx     # Unified routing logic
│   └── ui/                  # Basic UI elements
├── pages/
│   ├── _app.tsx            # Provider hierarchy
│   ├── index.tsx           # Landing page (test-simple content)
│   ├── student.tsx         # Unified page with role-based content
│   ├── teacher.tsx         # Unified page with role-based content
│   ├── admin.tsx           # Unified page with role-based content
│   └── superadmin.tsx      # Unified page with role-based content
├── store/
│   └── Redux configuration
└── types/
    └── TypeScript definitions
```

## Router Components Detail

### Protected Route Responsibilities

- **Authentication Check**: Verify user is logged in
- **Preference Loading**: Restore theme and language from localStorage
- **Minimal Logic**: Does NOT handle role-based routing

### Global Router Responsibilities

- **Role-Based Routing**: Direct users to appropriate pages based on role
- **Unified Access Control**: All roles can access same pages
- **Content Control**: Pages internally control what content is visible per role

## Page Architecture Pattern

### Unified Page Structure

```typescript
// Example: student.tsx
const StudentPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Student Portal</h1>

      {/* All users see this section */}
      <CommonSection />

      {/* Role-based content control */}
      {user?.role === "STUDENT" && <StudentSpecificContent />}
      {user?.role === "TEACHER" && <TeacherViewOfStudents />}
      {user?.role === "ADMIN" && <AdminStudentManagement />}
      {user?.role === "SUPER_ADMIN" && <SuperAdminOverview />}
    </div>
  );
};
```

## Real-time Architecture (Future)

### Socket.io Implementation Plan

```typescript
// Future Socket Provider Structure
<SocketProvider>
  {" "}
  // Real-time communication layer
  <NotificationProvider>
    {" "}
    // Live notification system
    <CollaborationProvider>
      {" "}
      // Real-time collaboration features
      <App />
    </CollaborationProvider>
  </NotificationProvider>
</SocketProvider>
```

### Integration Points

- **After Authentication**: Socket connection established with user token
- **Role-Based Channels**: Different socket channels based on user role
- **Real-time Updates**: Live notifications, task updates, grade postings
- **Collaboration**: Real-time editing, messaging, status updates

## State Management Architecture

### Redux Store Structure

```typescript
interface ApplicationState {
  auth: {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
  };

  preferences: {
    theme: "light" | "dark";
    language: "en" | "ar";
  };

  router: {
    currentPage: string;
    roleBasedAccess: RolePermissions;
  };

  // Future feature states
  tasks: TaskState;
  notifications: NotificationState;
  collaboration: CollaborationState;
}
```

## Theme & Language Persistence

### localStorage Integration

```typescript
// Protected Route handles persistence
useEffect(() => {
  // Restore theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) setTheme(savedTheme);

  // Restore language preference
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage) setLanguage(savedLanguage);

  // Apply to document
  document.documentElement.className = savedTheme || "light";
  document.dir = savedLanguage === "ar" ? "rtl" : "ltr";
}, []);
```

## Security Architecture

### Authentication Flow

1. **Login Process**: User authenticates, receives JWT token
2. **Protected Route**: Verifies token validity on each page load
3. **Global Router**: Applies role-based routing logic
4. **Page Level**: Role-based content rendering

### Authorization Pattern

```typescript
// Role-based content control
interface RoleGuardProps {
  allowedRoles: UserRole[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const RoleGuard: React.FC<RoleGuardProps> = ({
  allowedRoles,
  children,
  fallback = null,
}) => {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    return fallback;
  }

  return <>{children}</>;
};
```

## Performance Considerations

### Optimization Strategies

- **Lazy Loading**: Route-based code splitting
- **Memoization**: React.memo for role-based components
- **Caching**: Store role permissions to avoid repeated calculations
- **Bundle Optimization**: Tree shaking unused role components

### Monitoring Points

- **Authentication Time**: Track login response times
- **Route Resolution**: Monitor Global Router performance
- **Preference Loading**: Measure localStorage access speed
- **Role Switching**: Track permission calculation performance

## Future Scalability

### Extension Points

- **New Roles**: Add new role types without architectural changes
- **Feature Modules**: Plug in new features using existing role-based patterns
- **Real-time Features**: Socket.io integration using established provider pattern
- **Mobile Support**: Responsive design already foundation-ready

### Migration Path

- **Phase 1**: Current unified router foundation (IN PROGRESS)
- **Phase 2**: Feature module integration (task management, etc.)
- **Phase 3**: Real-time collaboration features
- **Phase 4**: Advanced role-based workflow systems
