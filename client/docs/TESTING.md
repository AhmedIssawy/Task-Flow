# Testing Guide

## 📋 Table of Contents
- [Overview](#overview)
- [Testing Strategy](#testing-strategy)
- [Testing Tools](#testing-tools)
- [Unit Testing](#unit-testing)
- [Integration Testing](#integration-testing)
- [End-to-End Testing](#end-to-end-testing)
- [Accessibility Testing](#accessibility-testing)
- [Performance Testing](#performance-testing)
- [Visual Regression Testing](#visual-regression-testing)
- [Test Coverage](#test-coverage)
- [CI/CD Integration](#cicd-integration)
- [Best Practices](#best-practices)

## 🎯 Overview

TaskFlow implements a comprehensive testing strategy to ensure code quality, functionality, and user experience. Our testing pyramid includes unit tests, integration tests, end-to-end tests, and specialized testing for accessibility and performance.

### Testing Philosophy
- **Test-Driven Development (TDD)**: Write tests before implementation
- **Behavior-Driven Development (BDD)**: Focus on user behavior and requirements
- **Continuous Testing**: Automated testing in CI/CD pipeline
- **Quality Gates**: Tests must pass before deployment
- **Coverage Goals**: Maintain high test coverage (>80%)

## 🏗️ Testing Strategy

### Testing Pyramid

```
        /\
       /  \
      / E2E \     ← Few, High-level, Slow
     /______\
    /        \
   /Integration\ ← Some, Medium-level, Medium
  /__________\
 /            \
/  Unit Tests  \   ← Many, Low-level, Fast
/______________\
```

### Test Types Distribution
- **Unit Tests**: 70% - Fast, isolated component and function tests
- **Integration Tests**: 20% - Component interaction and API integration
- **End-to-End Tests**: 10% - Complete user workflows

## 🛠️ Testing Tools

### Core Testing Framework
```json
{
  "jest": "^29.0.0",
  "@testing-library/react": "^13.0.0",
  "@testing-library/jest-dom": "^5.16.0",
  "@testing-library/user-event": "^14.0.0",
  "cypress": "^12.0.0",
  "@axe-core/react": "^4.7.0",
  "lighthouse": "^10.0.0"
}
```

### Testing Utilities
- **Jest**: JavaScript testing framework
- **React Testing Library**: React component testing
- **Cypress**: End-to-end testing
- **MSW (Mock Service Worker)**: API mocking
- **axe-core**: Accessibility testing
- **Lighthouse**: Performance testing

## 🧪 Unit Testing

### Component Testing

```typescript
// Example: Button component test
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant styles', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-destructive');
  });

  it('is disabled when loading', () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
```

### Hook Testing

```typescript
// Example: useAuth hook test
import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useAuth } from '@/hooks/useAuth';
import { store } from '@/store';

const wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

describe('useAuth Hook', () => {
  it('returns initial auth state', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    expect(result.current.isLoggedIn).toBe(false);
    expect(result.current.user).toBeNull();
    expect(result.current.role).toBeNull();
  });

  it('updates state after login', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    // Mock login response
    const mockUser = { id: '1', name: 'John Doe', role: 'student' };
    
    await waitFor(() => {
      expect(result.current.isLoggedIn).toBe(true);
      expect(result.current.user).toEqual(mockUser);
    });
  });
});
```

### Utility Function Testing

```typescript
// Example: Validation utility test
import { validateEmail, sanitizeInput } from '@/lib/utils';

describe('Validation Utils', () => {
  describe('validateEmail', () => {
    it('validates correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true);
    });

    it('rejects invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
    });
  });

  describe('sanitizeInput', () => {
    it('removes dangerous HTML tags', () => {
      const input = '<script>alert("xss")</script>Hello';
      const result = sanitizeInput(input);
      expect(result).toBe('Hello');
    });

    it('preserves safe content', () => {
      const input = 'Hello <strong>World</strong>';
      const result = sanitizeInput(input);
      expect(result).toBe('Hello <strong>World</strong>');
    });
  });
});
```

## 🔗 Integration Testing

### Component Integration

```typescript
// Example: Form integration test
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '@/components/login/LoginForm';
import { TestProviders } from '@/test-utils/providers';

describe('LoginForm Integration', () => {
  it('submits form with valid credentials', async () => {
    const user = userEvent.setup();
    
    render(
      <TestProviders>
        <LoginForm />
      </TestProviders>
    );

    // Fill form
    await user.type(screen.getByLabelText(/student id/i), 'student123');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /login/i }));

    // Verify success
    await waitFor(() => {
      expect(screen.getByText(/login successful/i)).toBeInTheDocument();
    });
  });

  it('displays validation errors for invalid input', async () => {
    const user = userEvent.setup();
    
    render(
      <TestProviders>
        <LoginForm />
      </TestProviders>
    );

    // Submit empty form
    await user.click(screen.getByRole('button', { name: /login/i }));

    // Verify validation errors
    await waitFor(() => {
      expect(screen.getByText(/student id is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });
});
```

### API Integration Testing

```typescript
// Example: API integration test with MSW
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import { StudentList } from '@/components/admin/StudentList';
import { TestProviders } from '@/test-utils/providers';

const server = setupServer(
  rest.get('/api/students', (req, res, ctx) => {
    return res(
      ctx.json({
        students: [
          { id: '1', name: 'John Doe', email: 'john@example.com' },
          { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
        ],
        pagination: { page: 1, total: 2, totalPages: 1 }
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('StudentList API Integration', () => {
  it('loads and displays students from API', async () => {
    render(
      <TestProviders>
        <StudentList />
      </TestProviders>
    );

    // Verify loading state
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });

  it('handles API errors gracefully', async () => {
    server.use(
      rest.get('/api/students', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server error' }));
      })
    );

    render(
      <TestProviders>
        <StudentList />
      </TestProviders>
    );

    await waitFor(() => {
      expect(screen.getByText(/error loading students/i)).toBeInTheDocument();
    });
  });
});
```

## 🌐 End-to-End Testing

### Cypress Configuration

```typescript
// cypress.config.ts
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
```

### E2E Test Examples

```typescript
// cypress/e2e/auth/login.cy.ts
describe('Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('/auth/login');
  });

  it('allows student to login successfully', () => {
    // Fill login form
    cy.get('[data-testid="student-id-input"]').type('student123');
    cy.get('[data-testid="password-input"]').type('password123');
    
    // Submit form
    cy.get('[data-testid="login-button"]').click();
    
    // Verify redirect to dashboard
    cy.url().should('include', '/student/student123');
    cy.get('[data-testid="dashboard-title"]').should('contain', 'Student Dashboard');
  });

  it('shows error for invalid credentials', () => {
    cy.get('[data-testid="student-id-input"]').type('invalid');
    cy.get('[data-testid="password-input"]').type('wrong');
    cy.get('[data-testid="login-button"]').click();
    
    cy.get('[data-testid="error-message"]').should('contain', 'Invalid credentials');
  });

  it('validates required fields', () => {
    cy.get('[data-testid="login-button"]').click();
    
    cy.get('[data-testid="student-id-error"]').should('contain', 'Student ID is required');
    cy.get('[data-testid="password-error"]').should('contain', 'Password is required');
  });
});

// cypress/e2e/admin/student-management.cy.ts
describe('Student Management', () => {
  beforeEach(() => {
    // Login as admin
    cy.login('admin', 'admin123');
    cy.visit('/admin/admin123/students');
  });

  it('creates a new student', () => {
    cy.get('[data-testid="create-student-button"]').click();
    
    // Fill student form
    cy.get('[data-testid="student-name-input"]').type('New Student');
    cy.get('[data-testid="student-email-input"]').type('newstudent@example.com');
    cy.get('[data-testid="student-id-input"]').type('STU001');
    
    // Submit form
    cy.get('[data-testid="submit-button"]').click();
    
    // Verify student appears in list
    cy.get('[data-testid="students-table"]').should('contain', 'New Student');
    cy.get('[data-testid="success-message"]').should('contain', 'Student created successfully');
  });

  it('edits existing student', () => {
    // Find and edit first student
    cy.get('[data-testid="student-row"]').first().find('[data-testid="edit-button"]').click();
    
    // Update name
    cy.get('[data-testid="student-name-input"]').clear().type('Updated Name');
    cy.get('[data-testid="submit-button"]').click();
    
    // Verify update
    cy.get('[data-testid="students-table"]').should('contain', 'Updated Name');
  });

  it('deletes student with confirmation', () => {
    cy.get('[data-testid="student-row"]').first().find('[data-testid="delete-button"]').click();
    
    // Confirm deletion
    cy.get('[data-testid="confirm-delete-button"]').click();
    
    // Verify deletion
    cy.get('[data-testid="success-message"]').should('contain', 'Student deleted successfully');
  });
});
```

### Custom Cypress Commands

```typescript
// cypress/support/commands.ts
declare global {
  namespace Cypress {
    interface Chainable {
      login(role: string, password: string): Chainable<void>;
      logout(): Chainable<void>;
      switchLanguage(language: 'en' | 'ar'): Chainable<void>;
    }
  }
}

Cypress.Commands.add('login', (id: string, password: string) => {
  cy.session([id, password], () => {
    cy.visit('/auth/login');
    cy.get('[data-testid="student-id-input"]').type(id);
    cy.get('[data-testid="password-input"]').type(password);
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('not.include', '/auth/login');
  });
});

Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="user-menu"]').click();
  cy.get('[data-testid="logout-button"]').click();
  cy.url().should('include', '/auth/login');
});

Cypress.Commands.add('switchLanguage', (language: 'en' | 'ar') => {
  cy.get('[data-testid="language-switcher"]').click();
  cy.get(`[data-testid="language-option-${language}"]`).click();
  cy.get('html').should('have.attr', 'lang', language);
});
```

## ♿ Accessibility Testing

### Automated Accessibility Testing

```typescript
// Example: Accessibility test with axe-core
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { LoginForm } from '@/components/login/LoginForm';

expect.extend(toHaveNoViolations);

describe('LoginForm Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<LoginForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has proper ARIA labels', () => {
    render(<LoginForm />);
    
    expect(screen.getByLabelText(/student id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    // Tab through form elements
    await user.tab();
    expect(screen.getByLabelText(/student id/i)).toHaveFocus();
    
    await user.tab();
    expect(screen.getByLabelText(/password/i)).toHaveFocus();
    
    await user.tab();
    expect(screen.getByRole('button', { name: /login/i })).toHaveFocus();
  });
});
```

### Cypress Accessibility Testing

```typescript
// cypress/e2e/accessibility/a11y.cy.ts
describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('has no accessibility violations on landing page', () => {
    cy.checkA11y();
  });

  it('has no accessibility violations on login page', () => {
    cy.visit('/auth/login');
    cy.checkA11y();
  });

  it('maintains accessibility after language switch', () => {
    cy.switchLanguage('ar');
    cy.checkA11y();
  });

  it('supports keyboard navigation', () => {
    cy.get('body').tab();
    cy.focused().should('have.attr', 'data-testid', 'skip-to-content');
    
    cy.tab();
    cy.focused().should('contain', 'Features');
  });
});
```

## ⚡ Performance Testing

### Lighthouse Testing

```typescript
// cypress/e2e/performance/lighthouse.cy.ts
describe('Performance Tests', () => {
  it('meets performance benchmarks', () => {
    cy.visit('/');
    
    cy.lighthouse({
      performance: 90,
      accessibility: 95,
      'best-practices': 90,
      seo: 85,
    });
  });

  it('loads dashboard within performance budget', () => {
    cy.login('student', 'password123');
    cy.visit('/student/student123');
    
    cy.lighthouse({
      performance: 85,
      'largest-contentful-paint': 2500,
      'first-contentful-paint': 1500,
    });
  });
});
```

### Bundle Size Testing

```typescript
// scripts/test-bundle-size.js
const { execSync } = require('child_process');
const fs = require('fs');

const MAX_BUNDLE_SIZE = 250 * 1024; // 250KB

describe('Bundle Size Tests', () => {
  it('main bundle should be under size limit', () => {
    execSync('npm run build');
    
    const buildManifest = JSON.parse(
      fs.readFileSync('.next/build-manifest.json', 'utf8')
    );
    
    const mainBundle = buildManifest.pages['/'][0];
    const bundleSize = fs.statSync(`.next/static/chunks/${mainBundle}`).size;
    
    expect(bundleSize).toBeLessThan(MAX_BUNDLE_SIZE);
  });
});
```

## 👁️ Visual Regression Testing

### Percy Integration

```typescript
// cypress/e2e/visual/visual-regression.cy.ts
describe('Visual Regression Tests', () => {
  it('captures landing page screenshots', () => {
    cy.visit('/');
    cy.percySnapshot('Landing Page');
  });

  it('captures dashboard in different themes', () => {
    cy.login('student', 'password123');
    cy.visit('/student/student123');
    
    // Light theme
    cy.percySnapshot('Student Dashboard - Light');
    
    // Dark theme
    cy.get('[data-testid="theme-toggle"]').click();
    cy.percySnapshot('Student Dashboard - Dark');
  });

  it('captures forms in different languages', () => {
    cy.visit('/auth/login');
    cy.percySnapshot('Login Form - English');
    
    cy.switchLanguage('ar');
    cy.percySnapshot('Login Form - Arabic');
  });
});
```

## 📊 Test Coverage

### Coverage Configuration

```javascript
// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**',
    '!src/**/__mocks__/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ['text', 'lcov', 'html'],
};
```

### Coverage Reports

```bash
# Generate coverage report
npm run test:coverage

# View HTML coverage report
open coverage/lcov-report/index.html

# Coverage summary
npm run test:coverage:summary
```

## 🔄 CI/CD Integration

### GitHub Actions Workflow

```yaml
# .github/workflows/test.yml
name: Test Suite

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linting
        run: npm run lint
      
      - name: Run type checking
        run: npm run type-check
      
      - name: Run unit tests
        run: npm run test:coverage
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info
      
      - name: Build application
        run: npm run build
      
      - name: Run E2E tests
        run: npm run test:e2e:headless
      
      - name: Run accessibility tests
        run: npm run test:a11y
      
      - name: Run performance tests
        run: npm run test:performance
```

## ✅ Best Practices

### Test Organization

1. **File Structure**
   ```
   src/
   ├── components/
   │   ├── Button/
   │   │   ├── Button.tsx
   │   │   ├── Button.test.tsx
   │   │   └── Button.stories.tsx
   │   └── __tests__/
   ├── hooks/
   │   ├── useAuth.ts
   │   └── __tests__/
   │       └── useAuth.test.ts
   └── utils/
       ├── validation.ts
       └── __tests__/
           └── validation.test.ts
   ```

2. **Test Naming**
   ```typescript
   // Good: Descriptive test names
   it('displays error message when login fails with invalid credentials', () => {});
   it('redirects to dashboard after successful student login', () => {});
   it('validates email format and shows appropriate error message', () => {});
   
   // Avoid: Vague test names
   it('works correctly', () => {});
   it('handles error', () => {});
   ```

3. **Test Data Management**
   ```typescript
   // Good: Use factories for test data
   const createMockUser = (overrides = {}) => ({
     id: '1',
     name: 'John Doe',
     email: 'john@example.com',
     role: 'student',
     ...overrides,
   });
   
   // Good: Use constants for repeated values
   const VALID_EMAIL = 'test@example.com';
   const INVALID_EMAIL = 'invalid-email';
   ```

### Testing Guidelines

1. **AAA Pattern**: Arrange, Act, Assert
2. **Single Responsibility**: One assertion per test
3. **Descriptive Names**: Clear test descriptions
4. **Independent Tests**: No test dependencies
5. **Fast Execution**: Quick feedback loop
6. **Maintainable**: Easy to update and understand

### Common Pitfalls to Avoid

1. **Testing Implementation Details**: Focus on behavior, not implementation
2. **Brittle Selectors**: Use semantic queries and test IDs
3. **Async Issues**: Properly handle async operations
4. **Test Pollution**: Clean up after each test
5. **Over-mocking**: Mock only external dependencies

This comprehensive testing guide ensures that TaskFlow maintains high quality through robust testing practices across all levels of the application.