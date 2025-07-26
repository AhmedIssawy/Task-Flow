# Component Documentation

This document provides detailed information about the reusable components in the Task Flow application.

## Component Categories

### UI Components (`src/components/ui/`)

Base UI components built on top of Radix UI primitives and styled with Tailwind CSS. These components follow the shadcn/ui design system.

#### Button
```tsx
import { Button } from '@/components/ui/button';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="destructive">Delete</Button>
<Button variant="outline" size="sm">Small Button</Button>
```

**Props:**
- `variant`: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
- `size`: 'default' | 'sm' | 'lg' | 'icon'
- `asChild`: boolean - Render as child component

**Implementation:**
```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-10 rounded-md px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

#### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

#### Dialog
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Dialog content</p>
  </DialogContent>
</Dialog>
```

#### Form Components
```tsx
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const form = useForm();

<Form {...form}>
  <FormField
    control={form.control}
    name="username"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="Enter username" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

### Authentication Components (`src/components/auth/`)

#### UserAuthGuard
Protects routes and ensures user authentication.

```tsx
import UserAuthGuard from '@/components/auth/UserAuthGuard';

<UserAuthGuard>
  <ProtectedContent />
</UserAuthGuard>
```

**Implementation:**
```tsx
export default function UserAuthGuard({ children }: UserAuthGuardProps) {
  const { role } = useAppSelector((state) => state.auth);

  if (!role) {
    return <Unauthorized />;
  }

  return <>{children}</>;
}
```

#### LogoutBtn
Handles user logout functionality.

```tsx
import LogoutBtn from '@/components/auth/LogoutBtn';

<LogoutBtn />
```

#### Unauthorized
Displays unauthorized access message.

```tsx
import Unauthorized from '@/components/auth/Unauthorized';

// Automatically shown when user lacks permissions
```

### Dashboard Components (`src/components/dashboard/`)

#### AdminDashboard
Main dashboard component for administrators.

```tsx
import AdminDashboard from '@/components/dashboard/AdminDashboard';

<AdminDashboard />
```

**Features:**
- Statistics cards
- Revenue charts
- Engagement heatmaps
- AI suggestion center

#### StatCard
Displays key metrics and statistics.

```tsx
import { StatCard } from '@/components/dashboard/StatCard';

<StatCard title="Active Users" value={stats.activeUsers} />
```

**Props:**
- `title`: string - Card title
- `value`: string | number - Metric value
- `icon?`: React component - Optional icon
- `trend?`: 'up' | 'down' - Trend indicator

#### RevenueChart
Displays revenue analytics using Recharts.

```tsx
import RevenueChart from '@/components/dashboard/RevenueChart';

<RevenueChart />
```

#### HeatmapGrid
Shows activity heatmap visualization.

```tsx
import HeatmapGrid from '@/components/dashboard/HeatmapGrid';

<HeatmapGrid />
```

#### AISuggestionCenter
AI-powered suggestions and recommendations.

```tsx
import AISuggestionCenter from '@/components/dashboard/AISuggestionCenter';

<AISuggestionCenter />
```

### Layout Components (`src/components/layout/`)

#### Navbar
Top navigation bar with theme toggle and user menu.

```tsx
import Navbar from '@/components/layout/Navbar';

<Navbar />
```

**Features:**
- Theme toggle
- Language switcher
- User profile menu
- Responsive design

#### SideMenu
Role-based navigation sidebar.

```tsx
import { SideMenu } from '@/components/layout/SideMenu';

<SideMenu navItems={navItems} onItemClick={handleItemClick} />
```

**Props:**
- `navItems`: NavItem[] - Navigation items
- `onItemClick?`: () => void - Click handler

**NavItem Interface:**
```tsx
interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}
```

#### LocaleWrapper
Handles language detection and locale switching.

```tsx
import LocaleWrapper from '@/components/layout/LocaleWrapper';

<LocaleWrapper />
```

#### StudentLayout
Specialized layout for student pages.

```tsx
import StudentLayout from '@/components/layout/StudentLayout/StudentLayout';

<StudentLayout>
  <StudentContent />
</StudentLayout>
```

### Table Components (`src/components/tables/`)

#### PaginatedTable
Reusable table with pagination support.

```tsx
import PaginatedTable from '@/components/admin/PaginatedTable';

<PaginatedTable
  data={tableData}
  columns={columns}
  onEdit={handleEdit}
  onDelete={handleDelete}
  onAssign={handleAssign}
/>
```

**Props:**
- `data`: any[] - Table data
- `columns`: Column[] - Column definitions
- `onEdit?`: (item: any) => void - Edit handler
- `onDelete?`: (item: any) => void - Delete handler
- `onAssign?`: (item: any) => void - Assign handler

#### TableBodyRenderer
Dynamic table content renderer.

```tsx
import TableBodyRenderer from '@/components/tables/TableBodyRenderer';

<TableBodyRenderer
  data={data}
  columns={columns}
  onEdit={onEdit}
  onDelete={onDelete}
/>
```

#### FormModal
Modal for create/edit operations.

```tsx
import FormModal from '@/components/tables/FormModal';

<FormModal
  isOpen={isOpen}
  onClose={onClose}
  title="Add New Item"
  fields={formFields}
  onSubmit={handleSubmit}
/>
```

#### DeleteModal
Confirmation modal for delete operations.

```tsx
import DeleteModal from '@/components/tables/DeleteModal';

<DeleteModal
  isOpen={isOpen}
  onClose={onClose}
  onConfirm={handleDelete}
  itemName="Student"
/>
```

#### AssignModal
Modal for assignment operations.

```tsx
import AssignModal from '@/components/tables/AssignModal';

<AssignModal
  isOpen={isOpen}
  onClose={onClose}
  onAssign={handleAssign}
  availableItems={items}
/>
```

#### PaginatedControls
Pagination controls component.

```tsx
import PaginatedControls from '@/components/tables/PaginatedControls';

<PaginatedControls
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
/>
```

### Landing Page Components (`src/components/landing/`)

#### HeroSection
Main hero section of the landing page.

```tsx
import HeroSection from '@/components/landing/HeroSection';

<HeroSection />
```

#### Features
Features showcase section.

```tsx
import Features from '@/components/landing/features';

<Features />
```

#### Benefits
Benefits presentation section.

```tsx
import Benefits from '@/components/landing/benefits';

<Benefits />
```

#### Testimonials
Customer testimonials section.

```tsx
import Testimonials from '@/components/landing/testimonials';

<Testimonials />
```

#### Footer
Landing page footer.

```tsx
import Footer from '@/components/landing/footer';

<Footer />
```

### Login Components (`src/components/login/`)

#### LoginForm
User authentication form.

```tsx
import LoginForm from '@/components/login/LoginForm';

<LoginForm />
```

**Features:**
- Form validation with Zod
- Error handling
- Loading states
- Internationalization support

### Custom Components (`src/components/made/`)

#### LanguageSwitcher
Language selection component.

```tsx
import LanguageSwitcher from '@/components/made/language-switcher';

<LanguageSwitcher />
```

#### ResponsiveValidator
Responsive design validation utility.

```tsx
import ResponsiveValidator from '@/components/made/responsive-validator';

<ResponsiveValidator />
```

## Component Development Guidelines

### 1. Component Structure
```tsx
// Component template
interface ComponentProps {
  // Props definition
}

export default function Component({ ...props }: ComponentProps) {
  // Hooks
  // State
  // Effects
  // Handlers
  
  return (
    // JSX
  );
}
```

### 2. TypeScript Usage
- Always define prop interfaces
- Use generic types for reusable components
- Leverage TypeScript for better IntelliSense

### 3. Styling Guidelines
- Use Tailwind CSS classes
- Leverage the `cn()` utility for conditional classes
- Follow the design system tokens

### 4. Accessibility
- Include ARIA labels
- Ensure keyboard navigation
- Maintain proper focus management
- Use semantic HTML elements

### 5. Performance
- Use React.memo for expensive components
- Implement proper key props for lists
- Avoid inline object/function creation in render

### 6. Testing
- Write unit tests for complex logic
- Test component interactions
- Verify accessibility compliance

## Component Composition Patterns

### 1. Compound Components
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

### 2. Render Props
```tsx
<DataProvider>
  {({ data, loading }) => (
    loading ? <Spinner /> : <DataDisplay data={data} />
  )}
</DataProvider>
```

### 3. Higher-Order Components
```tsx
const withAuth = (Component) => {
  return function AuthenticatedComponent(props) {
    return (
      <UserAuthGuard>
        <Component {...props} />
      </UserAuthGuard>
    );
  };
};
```

### 4. Custom Hooks Integration
```tsx
function useTableData() {
  const { data, isLoading } = useGetStudentsQuery();
  // Custom logic
  return { tableData, loading };
}

function DataTable() {
  const { tableData, loading } = useTableData();
  // Component logic
}
```

## Best Practices

1. **Single Responsibility**: Each component should have one clear purpose
2. **Composition over Inheritance**: Favor component composition
3. **Props Interface**: Always define clear prop interfaces
4. **Error Boundaries**: Implement error handling
5. **Loading States**: Show appropriate loading indicators
6. **Responsive Design**: Ensure mobile compatibility
7. **Internationalization**: Support multiple languages
8. **Accessibility**: Follow WCAG guidelines

## Testing Strategy

### Unit Testing
- Test component rendering
- Test prop handling
- Test event handlers
- Test conditional rendering

### Integration Testing
- Test component interactions
- Test data flow
- Test user workflows

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation
- Color contrast
- Focus management

This component documentation provides a comprehensive guide for understanding, using, and maintaining the Task Flow component library.