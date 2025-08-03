# Contributing to Task Flow

Thank you for your interest in contributing to Task Flow! This document provides guidelines and information for contributors.

## Code of Conduct

By participating in this project, you agree to abide by our code of conduct:
- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the community
- Show empathy towards other contributors

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/task-flow.git
   cd task-flow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Verify setup**
   Open [http://localhost:3000](http://localhost:3000) to verify the application is running.

## Development Guidelines

### Code Style

We use ESLint and Prettier for code formatting. The configuration is already set up in the project.

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type unless absolutely necessary
- Use generic types for reusable components

```typescript
// Good
interface UserProps {
  id: string;
  name: string;
  role: 'student' | 'teacher' | 'admin' | 'super-admin';
}

// Avoid
interface UserProps {
  id: any;
  name: any;
  role: any;
}
```

### Component Guidelines

1. **Functional Components**: Use functional components with hooks
2. **TypeScript**: Always define prop interfaces
3. **Naming**: Use PascalCase for components, camelCase for functions
4. **File Structure**: One component per file

```tsx
// Component template
interface ComponentProps {
  title: string;
  onAction?: () => void;
}

export default function Component({ title, onAction }: ComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
      {onAction && <button onClick={onAction}>Action</button>}
    </div>
  );
}
```

### Styling Guidelines

1. **Tailwind CSS**: Use Tailwind utilities for styling
2. **Responsive Design**: Mobile-first approach
3. **Dark Mode**: Support both light and dark themes
4. **RTL Support**: Consider RTL layout for Arabic

```tsx
// Good styling example
<div className="
  flex flex-col gap-4 p-4
  sm:flex-row sm:p-6
  dark:bg-gray-800
  rtl:text-right
">
  Content
</div>
```

### State Management

1. **Redux Toolkit**: Use RTK for global state
2. **RTK Query**: Use for API calls and caching
3. **Local State**: Use useState for component-specific state
4. **Custom Hooks**: Extract reusable logic

```typescript
// RTK Query example
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/users',
    credentials: 'include',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (id) => `/${id}`,
      providesTags: ['User'],
    }),
    updateUser: builder.mutation<User, Partial<User> & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});
```

## Contribution Process

### 1. Issue Creation

Before starting work, create or find an existing issue:

- **Bug Reports**: Include steps to reproduce, expected behavior, and actual behavior
- **Feature Requests**: Describe the feature, use case, and proposed implementation
- **Questions**: Use discussions for general questions

### 2. Branch Naming

Use descriptive branch names:

```bash
# Feature branches
git checkout -b feature/user-dashboard
git checkout -b feature/add-course-management

# Bug fix branches
git checkout -b fix/login-validation
git checkout -b fix/responsive-layout

# Documentation branches
git checkout -b docs/api-documentation
git checkout -b docs/component-guide
```

### 3. Commit Messages

Follow conventional commit format:

```bash
# Format
type(scope): description

# Examples
feat(auth): add user authentication
fix(ui): resolve button styling issue
docs(api): update endpoint documentation
style(components): format code with prettier
refactor(store): simplify user state management
test(utils): add unit tests for validation
```

### 4. Pull Request Process

1. **Create Pull Request**
   - Use descriptive title and description
   - Reference related issues
   - Include screenshots for UI changes

2. **PR Template**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing
   - [ ] Unit tests pass
   - [ ] Integration tests pass
   - [ ] Manual testing completed

   ## Screenshots (if applicable)
   Include screenshots for UI changes

   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Self-review completed
   - [ ] Documentation updated
   - [ ] Tests added/updated
   ```

3. **Review Process**
   - Address review feedback promptly
   - Keep discussions constructive
   - Update documentation if needed

## Testing

### Unit Testing

Write unit tests for:
- Utility functions
- Custom hooks
- Component logic
- API services

```typescript
// Example test
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    screen.getByText('Click me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Integration Testing

Test component interactions and user workflows:

```typescript
// Example integration test
describe('User Login Flow', () => {
  it('allows user to login successfully', async () => {
    render(<LoginForm />);
    
    await user.type(screen.getByLabelText('Username'), 'testuser');
    await user.type(screen.getByLabelText('Password'), 'password');
    await user.click(screen.getByRole('button', { name: 'Login' }));
    
    expect(await screen.findByText('Welcome back!')).toBeInTheDocument();
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Documentation

### Code Documentation

1. **JSDoc Comments**: Document complex functions and components
2. **README Updates**: Update README for new features
3. **API Documentation**: Document new API endpoints
4. **Component Documentation**: Update component docs

```typescript
/**
 * Validates user input for login form
 * @param credentials - User login credentials
 * @returns Validation result with errors if any
 */
export function validateLoginCredentials(
  credentials: LoginCredentials
): ValidationResult {
  // Implementation
}
```

### Documentation Structure

```
docs/
├── API_DOCUMENTATION.md      # API endpoints and usage
├── ARCHITECTURE.md           # System architecture
├── COMPONENTS.md            # Component documentation
├── STYLING_GUIDE.md         # Styling guidelines
├── SECURITY.md              # Security practices
├── DEPLOYMENT.md            # Deployment guide
├── INTERNATIONALIZATION.md  # i18n implementation
└── CONTRIBUTING.md          # This file
```

## Internationalization

When adding new features:

1. **Add translations** to both `locales/en.json` and `locales/ar.json`
2. **Use translation hooks** in components
3. **Test RTL layout** for Arabic support
4. **Consider text expansion** in different languages

```tsx
// Good i18n implementation
const t = useTranslations('Dashboard');

return (
  <div>
    <h1>{t('welcome')}</h1>
    <p>{t('description')}</p>
  </div>
);
```

## Security Considerations

1. **Input Validation**: Validate all user inputs
2. **Authentication**: Implement proper auth checks
3. **Authorization**: Verify user permissions
4. **Data Sanitization**: Sanitize data before display

```typescript
// Input validation example
const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export function validateLogin(data: unknown) {
  return loginSchema.safeParse(data);
}
```

## Performance Guidelines

1. **Code Splitting**: Use dynamic imports for large components
2. **Memoization**: Use React.memo and useMemo appropriately
3. **Bundle Size**: Monitor bundle size with analyzer
4. **Image Optimization**: Use Next.js Image component

```tsx
// Code splitting example
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
});

// Memoization example
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return expensiveCalculation(data);
  }, [data]);

  return <div>{processedData}</div>;
});
```

## Accessibility

1. **ARIA Labels**: Provide proper ARIA labels
2. **Keyboard Navigation**: Ensure keyboard accessibility
3. **Color Contrast**: Maintain proper contrast ratios
4. **Screen Readers**: Test with screen readers

```tsx
// Accessibility example
<button
  aria-label="Close dialog"
  onClick={onClose}
  className="focus:ring-2 focus:ring-blue-500"
>
  <X className="h-4 w-4" />
</button>
```

## Release Process

### Version Numbering

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Checklist

- [ ] All tests passing
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version bumped in package.json
- [ ] Security review completed
- [ ] Performance testing done

## Getting Help

### Resources

- **Documentation**: Check the docs/ directory
- **Issues**: Search existing issues before creating new ones
- **Discussions**: Use GitHub Discussions for questions
- **Code Review**: Request reviews from maintainers

### Communication

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Pull Request Comments**: Code-specific discussions
- **Email**: security@company.com for security issues

## Recognition

Contributors are recognized in:
- **CONTRIBUTORS.md**: List of all contributors
- **Release Notes**: Major contributions highlighted
- **GitHub**: Contributor statistics and graphs

Thank you for contributing to Task Flow! Your efforts help make this project better for everyone.