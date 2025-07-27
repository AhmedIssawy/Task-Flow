# Contributing Guide

## 📋 Table of Contents
- [Welcome](#welcome)
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Documentation Standards](#documentation-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Release Process](#release-process)

## 🤝 Welcome

Thank you for your interest in contributing to TaskFlow! This guide will help you understand our development process, coding standards, and how to submit contributions effectively.

### Ways to Contribute

- 🐛 **Bug Reports**: Help us identify and fix issues
- ✨ **Feature Requests**: Suggest new functionality
- 💻 **Code Contributions**: Submit bug fixes and new features
- 📚 **Documentation**: Improve or add documentation
- 🎨 **Design**: Contribute to UI/UX improvements
- 🌍 **Translations**: Help with internationalization
- 🧪 **Testing**: Write tests and improve test coverage

## 📜 Code of Conduct

### Our Pledge

We are committed to making participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- The use of sexualized language or imagery
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher
- **Git**: Latest version
- **Code Editor**: VS Code recommended with extensions

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### Initial Setup

1. **Fork the Repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/taskflow.git
   cd taskflow/client
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Verify Setup**
   ```bash
   # Run linting
   npm run lint
   
   # Run type checking
   npm run type-check
   
   # Run tests (if available)
   npm test
   ```

## 🔄 Development Workflow

### Branch Strategy

We use a **Git Flow** approach with the following branches:

- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `hotfix/*`: Critical production fixes
- `release/*`: Release preparation

### Workflow Steps

1. **Create Feature Branch**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   ```bash
   # Make your changes
   git add .
   git commit -m "feat: add new feature description"
   ```

3. **Keep Branch Updated**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout feature/your-feature-name
   git rebase develop
   ```

4. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create Pull Request on GitHub
   ```

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(auth): add two-factor authentication
fix(navbar): resolve mobile menu toggle issue
docs(api): update authentication endpoints
style(components): format button component
refactor(hooks): optimize useAuth hook performance
test(utils): add tests for validation functions
chore(deps): update dependencies to latest versions
```

## 📏 Coding Standards

### TypeScript Guidelines

1. **Type Safety**
   ```typescript
   // Good: Explicit types
   interface UserProps {
     id: string;
     name: string;
     email: string;
     role: UserRole;
   }
   
   // Good: Generic types
   function createApiHook<T, R>(endpoint: string): UseQueryHook<T, R> {
     // Implementation
   }
   
   // Avoid: Any types
   // const data: any = response; // ❌
   const data: ApiResponse<User> = response; // ✅
   ```

2. **Interface Naming**
   ```typescript
   // Good: Descriptive interface names
   interface CreateUserRequest {
     name: string;
     email: string;
   }
   
   interface UserListResponse {
     users: User[];
     pagination: PaginationInfo;
   }
   
   // Good: Props interfaces
   interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     variant?: 'primary' | 'secondary';
     size?: 'sm' | 'md' | 'lg';
   }
   ```

3. **Utility Types**
   ```typescript
   // Use built-in utility types
   type PartialUser = Partial<User>;
   type UserEmail = Pick<User, 'email'>;
   type CreateUser = Omit<User, 'id' | 'createdAt'>;
   ```

### React Component Guidelines

1. **Component Structure**
   ```typescript
   // Good: Component structure
   interface ComponentProps {
     // Props interface
   }
   
   export function Component({ prop1, prop2 }: ComponentProps) {
     // Hooks at the top
     const [state, setState] = useState();
     const { data } = useQuery();
     
     // Event handlers
     const handleClick = useCallback(() => {
       // Handler logic
     }, [dependencies]);
     
     // Early returns
     if (loading) return <LoadingSpinner />;
     if (error) return <ErrorMessage />;
     
     // Main render
     return (
       <div>
         {/* JSX */}
       </div>
     );
   }
   ```

2. **Custom Hooks**
   ```typescript
   // Good: Custom hook pattern
   export function useFeature(id: string) {
     const [state, setState] = useState();
     
     const action = useCallback(() => {
       // Action logic
     }, []);
     
     return {
       state,
       action,
       // Other returns
     };
   }
   ```

3. **Component Composition**
   ```typescript
   // Good: Compound components
   export function Card({ children, ...props }: CardProps) {
     return <div {...props}>{children}</div>;
   }
   
   Card.Header = CardHeader;
   Card.Content = CardContent;
   Card.Footer = CardFooter;
   ```

### Styling Guidelines

1. **Tailwind CSS Usage**
   ```typescript
   // Good: Organized classes
   <div className={cn(
     // Layout
     "flex items-center justify-between",
     // Spacing
     "p-4 gap-3",
     // Appearance
     "bg-card border border-border rounded-lg",
     // States
     "hover:shadow-md transition-all",
     // Responsive
     "md:p-6 lg:gap-4",
     // Conditional
     isActive && "bg-primary text-primary-foreground"
   )}>
   ```

2. **Component Variants**
   ```typescript
   // Good: Using class-variance-authority
   const buttonVariants = cva(
     "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
     {
       variants: {
         variant: {
           default: "bg-primary text-primary-foreground hover:bg-primary/90",
           secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
         },
         size: {
           default: "h-10 px-4 py-2",
           sm: "h-9 rounded-md px-3",
           lg: "h-11 rounded-md px-8",
         },
       },
       defaultVariants: {
         variant: "default",
         size: "default",
       },
     }
   );
   ```

### File Organization

```
src/
├── components/
│   ├── ui/                 # Base UI components
│   ├── layout/            # Layout components
│   ├── feature/           # Feature-specific components
│   └── common/            # Shared components
├── hooks/                 # Custom hooks
├── lib/                   # Utility libraries
├── store/                 # State management
│   ├── services/          # API services
│   ├── slices/            # Redux slices
│   └── types/             # Type definitions
├── utils/                 # Utility functions
└── constants/             # Application constants
```

## 🧩 Component Guidelines

### Component Creation Checklist

- [ ] **TypeScript**: Fully typed with proper interfaces
- [ ] **Props**: Well-defined props interface
- [ ] **Accessibility**: ARIA labels and keyboard navigation
- [ ] **Internationalization**: Support for multiple languages
- [ ] **Responsive**: Works on all screen sizes
- [ ] **Theme Support**: Dark/light mode compatibility
- [ ] **Error Handling**: Graceful error states
- [ ] **Loading States**: Proper loading indicators
- [ ] **Documentation**: JSDoc comments for complex logic

### Component Template

```typescript
import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Component description
 * 
 * @param prop1 - Description of prop1
 * @param prop2 - Description of prop2
 */
interface ComponentProps {
  prop1: string;
  prop2?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Component({ 
  prop1, 
  prop2 = false, 
  className,
  children,
  ...props 
}: ComponentProps) {
  return (
    <div 
      className={cn(
        "base-classes",
        prop2 && "conditional-classes",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Component.displayName = 'Component';
```

### Accessibility Guidelines

1. **Semantic HTML**
   ```typescript
   // Good: Semantic elements
   <nav aria-label="Main navigation">
     <ul>
       <li><a href="/home">Home</a></li>
     </ul>
   </nav>
   
   <main>
     <h1>Page Title</h1>
     <section aria-labelledby="section-title">
       <h2 id="section-title">Section Title</h2>
     </section>
   </main>
   ```

2. **ARIA Attributes**
   ```typescript
   // Good: Proper ARIA usage
   <button
     aria-expanded={isOpen}
     aria-controls="menu"
     aria-label="Toggle menu"
   >
     Menu
   </button>
   
   <div
     id="menu"
     role="menu"
     aria-hidden={!isOpen}
   >
     {/* Menu items */}
   </div>
   ```

3. **Keyboard Navigation**
   ```typescript
   // Good: Keyboard support
   const handleKeyDown = (e: React.KeyboardEvent) => {
     if (e.key === 'Enter' || e.key === ' ') {
       e.preventDefault();
       onClick();
     }
   };
   
   <div
     role="button"
     tabIndex={0}
     onClick={onClick}
     onKeyDown={handleKeyDown}
   >
     Clickable element
   </div>
   ```

## 🧪 Testing Guidelines

### Testing Strategy

1. **Unit Tests**: Individual components and functions
2. **Integration Tests**: Component interactions
3. **E2E Tests**: Complete user workflows
4. **Accessibility Tests**: WCAG compliance

### Testing Tools

- **Jest**: Unit testing framework
- **React Testing Library**: Component testing
- **Cypress**: End-to-end testing
- **axe-core**: Accessibility testing

### Test Structure

```typescript
// Good: Test structure
describe('Component', () => {
  // Setup
  const defaultProps = {
    prop1: 'value1',
    prop2: true,
  };
  
  const renderComponent = (props = {}) => {
    return render(<Component {...defaultProps} {...props} />);
  };
  
  // Tests
  it('renders correctly with default props', () => {
    renderComponent();
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });
  
  it('handles user interactions', async () => {
    const user = userEvent.setup();
    renderComponent();
    
    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Updated text')).toBeInTheDocument();
  });
  
  it('is accessible', async () => {
    const { container } = renderComponent();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## 📚 Documentation Standards

### Code Documentation

1. **JSDoc Comments**
   ```typescript
   /**
    * Validates user input and returns sanitized data
    * 
    * @param input - The user input to validate
    * @param schema - The validation schema to use
    * @returns The validated and sanitized data
    * @throws {ValidationError} When input is invalid
    * 
    * @example
    * ```typescript
    * const result = validateInput(userInput, userSchema);
    * ```
    */
   function validateInput<T>(input: unknown, schema: Schema<T>): T {
     // Implementation
   }
   ```

2. **README Files**
   ```markdown
   # Component Name
   
   Brief description of the component.
   
   ## Usage
   
   ```tsx
   <Component prop1="value" prop2={true} />
   ```
   
   ## Props
   
   | Prop | Type | Default | Description |
   |------|------|---------|-------------|
   | prop1 | string | - | Description |
   | prop2 | boolean | false | Description |
   
   ## Examples
   
   ### Basic Usage
   
   ### Advanced Usage
   ```

### API Documentation

1. **Endpoint Documentation**
   ```typescript
   /**
    * @api {get} /users/:id Get User
    * @apiName GetUser
    * @apiGroup User
    * 
    * @apiParam {String} id User's unique ID
    * 
    * @apiSuccess {String} id User ID
    * @apiSuccess {String} name User name
    * @apiSuccess {String} email User email
    * 
    * @apiError UserNotFound The user was not found
    */
   ```

## 🔄 Pull Request Process

### PR Checklist

Before submitting a pull request, ensure:

- [ ] **Code Quality**
  - [ ] Code follows style guidelines
  - [ ] No linting errors
  - [ ] TypeScript compilation passes
  - [ ] All tests pass

- [ ] **Functionality**
  - [ ] Feature works as expected
  - [ ] Edge cases handled
  - [ ] Error states implemented
  - [ ] Loading states implemented

- [ ] **Accessibility**
  - [ ] Keyboard navigation works
  - [ ] Screen reader compatible
  - [ ] Color contrast meets standards
  - [ ] ARIA labels present

- [ ] **Documentation**
  - [ ] Code is well-commented
  - [ ] README updated if needed
  - [ ] API documentation updated
  - [ ] Changelog updated

### PR Template

```markdown
## Description

Brief description of changes made.

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing

- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed
- [ ] Accessibility testing completed

## Screenshots

If applicable, add screenshots to help explain your changes.

## Checklist

- [ ] My code follows the style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

### Review Process

1. **Automated Checks**: CI/CD pipeline runs automatically
2. **Code Review**: At least one maintainer reviews the code
3. **Testing**: Manual testing if required
4. **Approval**: Maintainer approves the changes
5. **Merge**: Changes are merged into the target branch

## 🐛 Issue Reporting

### Bug Report Template

```markdown
## Bug Description

A clear and concise description of what the bug is.

## Steps to Reproduce

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior

A clear and concise description of what you expected to happen.

## Actual Behavior

A clear and concise description of what actually happened.

## Screenshots

If applicable, add screenshots to help explain your problem.

## Environment

- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]
- Device: [e.g. iPhone6]

## Additional Context

Add any other context about the problem here.
```

### Feature Request Template

```markdown
## Feature Description

A clear and concise description of what you want to happen.

## Problem Statement

A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

## Proposed Solution

A clear and concise description of what you want to happen.

## Alternative Solutions

A clear and concise description of any alternative solutions or features you've considered.

## Additional Context

Add any other context or screenshots about the feature request here.
```

## 🚀 Release Process

### Version Numbering

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Steps

1. **Prepare Release**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/v1.2.0
   ```

2. **Update Version**
   ```bash
   npm version minor # or major/patch
   ```

3. **Update Changelog**
   ```markdown
   ## [1.2.0] - 2024-01-15
   
   ### Added
   - New feature description
   
   ### Changed
   - Changed feature description
   
   ### Fixed
   - Bug fix description
   ```

4. **Create Release PR**
   ```bash
   git add .
   git commit -m "chore: prepare release v1.2.0"
   git push origin release/v1.2.0
   ```

5. **Merge and Tag**
   ```bash
   # After PR approval
   git checkout main
   git merge release/v1.2.0
   git tag v1.2.0
   git push origin main --tags
   ```

Thank you for contributing to TaskFlow! Your contributions help make this project better for everyone. 🎉