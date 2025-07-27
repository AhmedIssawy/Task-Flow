# Component Documentation

## 📋 Table of Contents
- [Overview](#overview)
- [UI Component Library](#ui-component-library)
- [Layout Components](#layout-components)
- [Authentication Components](#authentication-components)
- [Dashboard Components](#dashboard-components)
- [Landing Page Components](#landing-page-components)
- [Table Components](#table-components)
- [Custom Hooks](#custom-hooks)
- [Component Patterns](#component-patterns)
- [Styling Guidelines](#styling-guidelines)

## 🎯 Overview

TaskFlow uses a component-driven architecture built on top of Radix UI primitives and shadcn/ui design system. All components are fully typed with TypeScript and support internationalization and theming.

### Component Categories

```
src/components/
├── ui/                    # Base UI components (shadcn/ui)
├── layout/                # Layout and navigation components
├── auth/                  # Authentication-related components
├── dashboard/             # Dashboard and analytics components
├── landing/               # Landing page components
├── admin/                 # Admin-specific components
├── tables/                # Table and data display components
├── login/                 # Login form components
├── user/                  # User-related components
└── made/                  # Custom utility components
```

## 🧩 UI Component Library

### Button Component

**Location**: `src/components/ui/button.tsx`

A versatile button component with multiple variants and sizes, built on Radix UI Slot primitive.

```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}
```

**Usage Examples**:
```tsx
// Primary button
<Button variant="default">Save Changes</Button>

// Destructive action
<Button variant="destructive">Delete Item</Button>

// Icon button
<Button variant="ghost" size="icon">
  <Settings className="h-4 w-4" />
</Button>

// As child component (polymorphic)
<Button asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

**Variants**:
- `default`: Primary blue button with shadow
- `destructive`: Red button for dangerous actions
- `outline`: Bordered button with transparent background
- `secondary`: Muted background button
- `ghost`: Transparent button with hover effects
- `link`: Text button with underline on hover

**Features**:
- Full keyboard navigation support
- Focus management with visible focus indicators
- Loading states and disabled states
- Icon support with automatic sizing
- Polymorphic component (can render as different elements)

### Card Component

**Location**: `src/components/ui/card.tsx`

A flexible card component with multiple sub-components for structured content display.

```typescript
interface CardProps {
  className?: string;
  children: React.ReactNode;
}
```

**Sub-components**:
- `CardHeader`: Header section with title and description
- `CardTitle`: Main title text
- `CardDescription`: Subtitle or description text
- `CardAction`: Action buttons in header
- `CardContent`: Main content area
- `CardFooter`: Footer section with actions

**Usage Example**:
```tsx
<Card>
  <CardHeader>
    <CardTitle>User Profile</CardTitle>
    <CardDescription>Manage your account settings</CardDescription>
    <CardAction>
      <Button variant="outline">Edit</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Profile content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Save Changes</Button>
  </CardFooter>
</Card>
```

### Input Component

**Location**: `src/components/ui/input.tsx`

Form input component with validation support and accessibility features.

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}
```

**Features**:
- Built-in validation styling
- Error state management
- Accessibility attributes
- RTL/LTR support
- Focus management

### Select Component

**Location**: `src/components/ui/select.tsx`

Dropdown select component built on Radix UI Select primitive.

```typescript
interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  children: React.ReactNode;
}
```

**Usage Example**:
```tsx
<Select value={selectedValue} onValueChange={setSelectedValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Dialog Component

**Location**: `src/components/ui/dialog.tsx`

Modal dialog component for overlays and forms.

```typescript
interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}
```

**Sub-components**:
- `DialogTrigger`: Button to open dialog
- `DialogContent`: Main dialog content
- `DialogHeader`: Dialog header section
- `DialogTitle`: Dialog title
- `DialogDescription`: Dialog description
- `DialogFooter`: Dialog footer with actions

## 🏗️ Layout Components

### Navbar Component

**Location**: `src/components/layout/Navbar.tsx`

Main navigation bar with user menu, language switcher, and theme toggle.

```typescript
interface NavbarProps {
  // No props - uses hooks for data
}
```

**Features**:
- **RTL/LTR Support**: Automatic layout direction switching
- **User Menu**: Profile dropdown with logout functionality
- **Language Switcher**: Real-time language switching
- **Theme Toggle**: Dark/light mode switching
- **Notifications**: Unified notification popup
- **Responsive Design**: Mobile-optimized layout

**Key Dependencies**:
- `useAuth()`: User authentication data
- `useLanguage()`: Language switching functionality
- `useTranslations()`: Internationalization

**Usage**:
```tsx
// Automatically included in user layout
<Navbar />
```

### SideMenu Component

**Location**: `src/components/layout/SideMenu.tsx`

Sidebar navigation for dashboard pages with role-based menu items.

**Features**:
- Role-based menu items
- Active state management
- Collapsible design
- Icon integration
- Internationalized labels

### LocaleWrapper Component

**Location**: `src/components/layout/LocaleWrapper.tsx`

Wrapper component for handling locale-specific layouts and direction.

```typescript
interface LocaleWrapperProps {
  children: React.ReactNode;
  locale: Locale;
}
```

## 🔐 Authentication Components

### UserAuthGuard Component

**Location**: `src/components/auth/UserAuthGuard.tsx`

Route protection component that ensures user authentication.

```typescript
interface UserAuthGuardProps {
  children: ReactNode;
}

export default function UserAuthGuard({ children }: UserAuthGuardProps) {
  const { role } = useAuth();

  if (!role) {
    return <Unauthorized />;
  }

  return <>{children}</>;
}
```

**Features**:
- Automatic authentication checking
- Redirect to unauthorized page
- Integration with useAuth hook
- No loading states (handled by parent)

### LogoutBtn Component

**Location**: `src/components/auth/LogoutBtn.tsx`

Logout button with confirmation and state management.

```typescript
interface LogoutBtnProps {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
}
```

**Features**:
- Logout mutation handling
- Loading states during logout
- Error handling
- Internationalized text

### Unauthorized Component

**Location**: `src/components/auth/Unauthorized.tsx`

Page displayed when user lacks proper authentication or permissions.

**Features**:
- Clear messaging
- Login redirect button
- Internationalized content
- Responsive design

## 📊 Dashboard Components

### AdminDashboard Component

**Location**: `src/components/dashboard/AdminDashboard.tsx`

Main dashboard component for admin users with statistics and quick actions.

```typescript
interface AdminDashboardProps {
  adminId: string;
}
```

**Features**:
- Statistics cards
- Quick action buttons
- Data visualization
- Real-time updates

### StatCard Component

**Location**: `src/components/dashboard/StatCard.tsx`

Reusable statistics card for displaying key metrics.

```typescript
interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}
```

**Usage Example**:
```tsx
<StatCard
  title="Total Students"
  value={1234}
  icon={<Users className="h-6 w-6" />}
  trend={{ value: 12, isPositive: true }}
  description="Active students this semester"
/>
```

### RevenueChart Component

**Location**: `src/components/dashboard/RevenueChart.tsx`

Chart component for displaying revenue and financial data using Recharts.

```typescript
interface RevenueChartProps {
  data: Array<{
    month: string;
    revenue: number;
    expenses: number;
  }>;
  height?: number;
}
```

**Features**:
- Interactive tooltips
- Responsive design
- Multiple data series
- Customizable colors

### HeatmapGrid Component

**Location**: `src/components/dashboard/HeatmapGrid.tsx`

Activity heatmap for visualizing user engagement patterns.

```typescript
interface HeatmapGridProps {
  data: Array<{
    date: string;
    count: number;
  }>;
  startDate: Date;
  endDate: Date;
}
```

**Features**:
- GitHub-style heatmap
- Tooltip with details
- Customizable color scheme
- Date range support

### AISuggestionCenter Component

**Location**: `src/components/dashboard/AISuggestionCenter.tsx`

AI-powered suggestion center for intelligent recommendations.

```typescript
interface AISuggestionCenterProps {
  userId: string;
  userRole: string;
}
```

**Features**:
- Role-based suggestions
- Real-time updates
- Action buttons
- Dismissible suggestions

## 🏠 Landing Page Components

### Header Component

**Location**: `src/components/landing/Header.tsx`

Landing page header with navigation and call-to-action buttons.

```typescript
interface HeaderProps {
  // Uses hooks for language and theme data
}
```

**Features**:
- Responsive navigation
- Language switcher
- Theme toggle
- Call-to-action buttons
- Mobile menu

### HeroSection Component

**Location**: `src/components/landing/HeroSection.tsx`

Main hero section with primary messaging and actions.

**Features**:
- Animated text
- Statistics display
- Multiple CTA buttons
- Background animations
- Responsive design

### Features Component

**Location**: `src/components/landing/Features.tsx`

Feature showcase section with grid layout.

**Features**:
- Icon integration
- Animated reveals
- Grid layout
- Internationalized content

### Benefits Component

**Location**: `src/components/landing/Benefits.tsx`

Benefits section highlighting value propositions.

### Testimonials Component

**Location**: `src/components/landing/Testimonials.tsx`

Customer testimonials with carousel functionality.

### Footer Component

**Location**: `src/components/landing/Footer.tsx`

Landing page footer with links and information.

## 📋 Table Components

### PaginatedTable Component

**Location**: `src/components/admin/PaginatedTable.tsx`

Advanced table component with pagination, sorting, and filtering.

```typescript
interface PaginatedTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
  onPageChange: (page: number) => void;
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
  loading?: boolean;
}
```

**Features**:
- Server-side pagination
- Column sorting
- Row selection
- Loading states
- Empty states
- Responsive design

### TableBodyRenderer Component

**Location**: `src/components/tables/TableBodyRenderer.tsx`

Flexible table body renderer with custom cell rendering.

```typescript
interface TableBodyRendererProps<T> {
  data: T[];
  columns: Array<{
    key: keyof T;
    render?: (value: any, row: T) => React.ReactNode;
  }>;
  onRowClick?: (row: T) => void;
}
```

### PaginatedControls Component

**Location**: `src/components/tables/PaginatedControls.tsx`

Pagination controls with page navigation and size selection.

```typescript
interface PaginatedControlsProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}
```

### FormModal Component

**Location**: `src/components/tables/FormModal.tsx`

Modal component for create/edit forms.

```typescript
interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onSubmit: () => void;
  loading?: boolean;
}
```

### DeleteModal Component

**Location**: `src/components/tables/DeleteModal.tsx`

Confirmation modal for delete operations.

```typescript
interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  loading?: boolean;
}
```

### AssignModal Component

**Location**: `src/components/tables/AssignModal.tsx`

Modal for assigning relationships between entities.

## 🎣 Custom Hooks

### useAuth Hook

**Location**: `src/hooks/useAuth.ts`

Authentication hook providing user state and authentication status.

```typescript
export const useAuth = () => {
  const { data, isLoading, isError } = useGetMeQuery();

  return {
    user: data?.data,
    isLoading,
    isError,
    isLoggedIn: !!data,
    role: data?.data?.role,
    id: data?.data?.id,
    mongoId: data?.data?._id,
  };
};
```

**Returns**:
- `user`: User profile data
- `isLoading`: Loading state
- `isError`: Error state
- `isLoggedIn`: Authentication status
- `role`: User role
- `id`: User ID
- `mongoId`: Database ID

### useLanguage Hook

**Location**: `src/hooks/useLanguage.ts`

Language management hook with switching functionality.

```typescript
export function useLanguage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>(() => getCurrentLocale());
  const [isPending, startTransition] = useTransition();

  const switchLanguage = (newLocale: string) => {
    // Language switching logic
  };

  return {
    locale: currentLocale,
    switchLanguage,
    availableLocales,
    currentLocaleInfo,
    isPending,
    isRTL: currentLocale === 'ar'
  };
}
```

**Returns**:
- `locale`: Current locale
- `switchLanguage`: Function to switch language
- `availableLocales`: List of available locales
- `currentLocaleInfo`: Current locale information
- `isPending`: Transition state
- `isRTL`: RTL direction flag

### useMobile Hook

**Location**: `src/hooks/use-mobile.ts`

Mobile detection hook for responsive behavior.

```typescript
export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}
```

## 🎨 Component Patterns

### Compound Component Pattern

Used for complex components with multiple related sub-components:

```typescript
// Card component example
export function Card({ children, className, ...props }) {
  return (
    <div className={cn("card-base", className)} {...props}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Action = CardAction;
```

### Render Props Pattern

For flexible component composition:

```typescript
interface TableProps<T> {
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
  renderHeader: () => React.ReactNode;
  renderEmpty?: () => React.ReactNode;
}

export function Table<T>({ data, renderRow, renderHeader, renderEmpty }: TableProps<T>) {
  return (
    <table>
      <thead>{renderHeader()}</thead>
      <tbody>
        {data.length === 0 && renderEmpty ? (
          renderEmpty()
        ) : (
          data.map((item, index) => renderRow(item, index))
        )}
      </tbody>
    </table>
  );
}
```

### Higher-Order Component Pattern

For cross-cutting concerns:

```typescript
export function withAuth<P extends object>(
  Component: React.ComponentType<P>
) {
  return function AuthenticatedComponent(props: P) {
    const { isLoggedIn } = useAuth();
    
    if (!isLoggedIn) {
      return <Unauthorized />;
    }
    
    return <Component {...props} />;
  };
}
```

### Custom Hook Pattern

For reusable stateful logic:

```typescript
export function useTableData<T>(
  apiEndpoint: string,
  initialParams: TableParams = {}
) {
  const [params, setParams] = useState(initialParams);
  const { data, isLoading, error } = useQuery([apiEndpoint, params]);

  const updateParams = useCallback((newParams: Partial<TableParams>) => {
    setParams(prev => ({ ...prev, ...newParams }));
  }, []);

  return {
    data: data?.items || [],
    pagination: data?.pagination,
    isLoading,
    error,
    params,
    updateParams,
  };
}
```

## 🎨 Styling Guidelines

### CSS Class Naming

- Use Tailwind utility classes for styling
- Custom classes follow BEM methodology when needed
- Component-specific styles use CSS modules or styled-components

### Responsive Design

```typescript
// Mobile-first responsive classes
<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
  Content
</div>
```

### RTL/LTR Support

```typescript
// RTL-aware styling
<div className={cn(
  "flex items-center gap-3",
  isRTL ? "flex-row-reverse" : "flex-row"
)}>
  Content
</div>
```

### Theme Support

```typescript
// Dark/light theme classes
<div className="bg-background text-foreground border-border">
  Content
</div>
```

### Accessibility

- All interactive elements have proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

This component library provides a solid foundation for building consistent, accessible, and maintainable user interfaces throughout the TaskFlow application. Each component is designed to be reusable, composable, and fully integrated with the application's internationalization and theming systems.