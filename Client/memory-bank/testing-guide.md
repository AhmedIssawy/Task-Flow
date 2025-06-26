# Testing Guide - Task-Flow LMS Frontend

## Testing Strategy Overview

### Testing Pyramid
```
                    E2E Tests (10%)
                 ┌─────────────────┐
                │  Integration     │
               │    Tests (20%)    │
              └─────────────────────┘
            ┌─────────────────────────┐
           │    Unit Tests (70%)      │
          └─────────────────────────────┘
```

### Testing Objectives
- **Unit Tests**: Test individual components and functions in isolation
- **Integration Tests**: Test component interactions and API integrations
- **End-to-End Tests**: Test complete user workflows across all roles
- **Visual Regression Tests**: Ensure UI consistency across theme and language changes
- **Performance Tests**: Validate loading times and responsiveness

## Unit Testing

### Component Testing Setup
```typescript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/contexts/(.*)$': '<rootDir>/src/contexts/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

module.exports = createJestConfig(customJestConfig);

// jest.setup.js
import '@testing-library/jest-dom';
import { server } from './src/mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
  }),
}));

// Mock socket.io
jest.mock('socket.io-client', () => ({
  io: jest.fn(() => ({
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
    connect: jest.fn(),
    disconnect: jest.fn(),
  })),
}));
```

### Component Test Examples
```typescript
// __tests__/components/LoginForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '@/components/features/auth/LoginForm';
import { AuthProvider } from '@/contexts/AuthContext';

const mockOnSuccess = jest.fn();
const mockOnError = jest.fn();

const renderLoginForm = () => {
  return render(
    <AuthProvider>
      <LoginForm onSuccess={mockOnSuccess} onError={mockOnError} />
    </AuthProvider>
  );
};

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all form fields', () => {
    renderLoginForm();
    
    expect(screen.getByLabelText(/email or university id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('validates required fields', async () => {
    const user = userEvent.setup();
    renderLoginForm();
    
    const loginButton = screen.getByRole('button', { name: /login/i });
    await user.click(loginButton);
    
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  test('submits form with valid credentials', async () => {
    const user = userEvent.setup();
    renderLoginForm();
    
    const emailInput = screen.getByLabelText(/email or university id/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    await user.type(emailInput, 'student@university.edu');
    await user.type(passwordInput, 'password123');
    await user.click(loginButton);
    
    await waitFor(() => {
      expect(mockOnSuccess).toHaveBeenCalledWith(
        expect.objectContaining({
          email: 'student@university.edu',
          role: 'STUDENT'
        })
      );
    });
  });

  test('handles login error', async () => {
    const user = userEvent.setup();
    
    // Mock failed login
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: 'Invalid credentials' })
      })
    );
    
    renderLoginForm();
    
    const emailInput = screen.getByLabelText(/email or university id/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    await user.type(emailInput, 'wrong@email.com');
    await user.type(passwordInput, 'wrongpassword');
    await user.click(loginButton);
    
    await waitFor(() => {
      expect(mockOnError).toHaveBeenCalledWith('Invalid credentials');
    });
  });

  test('disables submit button during loading', async () => {
    const user = userEvent.setup();
    renderLoginForm();
    
    const emailInput = screen.getByLabelText(/email or university id/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    await user.type(emailInput, 'student@university.edu');
    await user.type(passwordInput, 'password123');
    await user.click(loginButton);
    
    expect(loginButton).toBeDisabled();
    expect(screen.getByText(/logging in.../i)).toBeInTheDocument();
  });
});

// __tests__/components/AssignmentForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AssignmentCreationForm } from '@/components/features/tasks/AssignmentCreationForm';
import { AuthProvider } from '@/contexts/AuthContext';

const mockProps = {
  courseId: 'course-123',
  onSuccess: jest.fn(),
  onCancel: jest.fn()
};

const renderAssignmentForm = () => {
  return render(
    <AuthProvider>
      <AssignmentCreationForm {...mockProps} />
    </AuthProvider>
  );
};

describe('AssignmentCreationForm', () => {
  test('creates assignment with valid data', async () => {
    const user = userEvent.setup();
    
    // Mock successful API call
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          id: 'assignment-123',
          title: 'Test Assignment',
          description: 'Test description'
        })
      })
    );
    
    renderAssignmentForm();
    
    // Fill form fields
    await user.type(screen.getByLabelText(/title/i), 'Test Assignment');
    await user.type(screen.getByLabelText(/description/i), 'Test description');
    await user.type(screen.getByLabelText(/due date/i), '2025-12-31T23:59');
    await user.clear(screen.getByLabelText(/maximum grade/i));
    await user.type(screen.getByLabelText(/maximum grade/i), '100');
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /create assignment/i }));
    
    await waitFor(() => {
      expect(mockProps.onSuccess).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 'assignment-123',
          title: 'Test Assignment'
        })
      );
    });
  });

  test('handles file attachments', async () => {
    const user = userEvent.setup();
    renderAssignmentForm();
    
    const file = new File(['test content'], 'test.pdf', { type: 'application/pdf' });
    const fileInput = screen.getByLabelText(/attachments/i);
    
    await user.upload(fileInput, file);
    
    expect(screen.getByText('test.pdf')).toBeInTheDocument();
  });

  test('validates maximum grade limits', async () => {
    const user = userEvent.setup();
    renderAssignmentForm();
    
    const gradeInput = screen.getByLabelText(/maximum grade/i);
    
    await user.clear(gradeInput);
    await user.type(gradeInput, '0');
    
    expect(screen.getByText(/grade must be at least 1/i)).toBeInTheDocument();
    
    await user.clear(gradeInput);
    await user.type(gradeInput, '1001');
    
    expect(screen.getByText(/grade cannot exceed 1000/i)).toBeInTheDocument();
  });
});

// __tests__/hooks/useAuth.test.tsx
import { renderHook, act } from '@testing-library/react';
import { useAuth } from '@/hooks/useAuth';
import { AuthProvider } from '@/contexts/AuthContext';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe('useAuth', () => {
  test('initial state is unauthenticated', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.loading).toBe(false);
  });

  test('login updates authentication state', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    const mockUser = {
      id: '1',
      email: 'test@university.edu',
      role: 'STUDENT' as const,
      name: 'Test Student'
    };
    
    // Mock successful login
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          token: 'mock-token',
          user: mockUser
        })
      })
    );
    
    await act(async () => {
      await result.current.login('test@university.edu', 'password');
    });
    
    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);
  });

  test('logout clears authentication state', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    // First login
    const mockUser = {
      id: '1',
      email: 'test@university.edu',
      role: 'STUDENT' as const,
      name: 'Test Student'
    };
    
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          token: 'mock-token',
          user: mockUser
        })
      })
    );
    
    await act(async () => {
      await result.current.login('test@university.edu', 'password');
    });
    
    // Then logout
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({})
      })
    );
    
    await act(async () => {
      await result.current.logout();
    });
    
    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });
});
```

## Integration Testing

### API Integration Tests
```typescript
// __tests__/integration/api.test.ts
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { studentAPI } from '@/lib/api';

const server = setupServer(
  rest.get('/api/students/:id/profile', (req, res, ctx) => {
    return res(
      ctx.json({
        id: req.params.id,
        name: 'Test Student',
        email: 'student@university.edu',
        studentId: 'STU001',
        college: 'Engineering',
        department: 'Computer Science'
      })
    );
  }),
  
  rest.get('/api/students/:id/assignments', (req, res, ctx) => {
    const status = req.url.searchParams.get('status');
    
    const assignments = [
      {
        id: 'assignment-1',
        title: 'Assignment 1',
        status: 'PENDING',
        dueDate: '2025-12-31T23:59:59Z'
      },
      {
        id: 'assignment-2',
        title: 'Assignment 2',
        status: 'SUBMITTED',
        dueDate: '2025-11-30T23:59:59Z'
      }
    ];
    
    const filtered = status 
      ? assignments.filter(a => a.status === status)
      : assignments;
    
    return res(ctx.json(filtered));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Student API Integration', () => {
  test('fetches student profile', async () => {
    const profile = await studentAPI.getProfile('student-123');
    
    expect(profile).toEqual({
      id: 'student-123',
      name: 'Test Student',
      email: 'student@university.edu',
      studentId: 'STU001',
      college: 'Engineering',
      department: 'Computer Science'
    });
  });

  test('fetches assignments with status filter', async () => {
    const pendingAssignments = await studentAPI.getAssignments('student-123', {
      status: 'PENDING'
    });
    
    expect(pendingAssignments).toHaveLength(1);
    expect(pendingAssignments[0].status).toBe('PENDING');
  });

  test('handles API errors', async () => {
    server.use(
      rest.get('/api/students/:id/profile', (req, res, ctx) => {
        return res(
          ctx.status(404),
          ctx.json({ message: 'Student not found' })
        );
      })
    );
    
    await expect(studentAPI.getProfile('nonexistent')).rejects.toThrow();
  });
});
```

### Component Integration Tests
```typescript
// __tests__/integration/dashboard.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { StudentDashboard } from '@/components/dashboards/StudentDashboard';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

const server = setupServer(
  rest.get('/api/students/:id/profile', (req, res, ctx) => {
    return res(
      ctx.json({
        id: req.params.id,
        name: 'John Doe',
        email: 'john@university.edu',
        studentId: 'STU001'
      })
    );
  }),
  
  rest.get('/api/students/:id/assignments', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 'assignment-1',
          title: 'Math Assignment',
          status: 'PENDING',
          dueDate: '2025-12-31T23:59:59Z',
          courseName: 'Calculus I'
        }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderDashboard = () => {
  return render(
    <AuthProvider>
      <ThemeProvider>
        <StudentDashboard studentId="student-123" />
      </ThemeProvider>
    </AuthProvider>
  );
};

describe('Student Dashboard Integration', () => {
  test('loads and displays student data', async () => {
    renderDashboard();
    
    // Should show loading initially
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    
    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
    
    expect(screen.getByText('STU001')).toBeInTheDocument();
    expect(screen.getByText('Math Assignment')).toBeInTheDocument();
    expect(screen.getByText('Calculus I')).toBeInTheDocument();
  });

  test('handles API errors gracefully', async () => {
    server.use(
      rest.get('/api/students/:id/profile', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    
    renderDashboard();
    
    await waitFor(() => {
      expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
    });
  });
});
```

## End-to-End Testing

### Cypress E2E Tests
```typescript
// cypress/e2e/auth-flow.cy.ts
describe('Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to login page from protected route', () => {
    cy.visit('/student/123');
    cy.url().should('include', '/login');
  });

  it('should login as student and redirect to dashboard', () => {
    cy.visit('/login');
    
    cy.get('[data-testid="email-input"]').type('student@university.edu');
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="login-button"]').click();
    
    cy.url().should('include', '/student/');
    cy.get('[data-testid="welcome-message"]').should('contain', 'Welcome');
  });

  it('should login as teacher and redirect to teacher dashboard', () => {
    cy.visit('/login');
    
    cy.get('[data-testid="email-input"]').type('teacher@university.edu');
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="login-button"]').click();
    
    cy.url().should('include', '/teacher/');
    cy.get('[data-testid="teacher-dashboard"]').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.visit('/login');
    
    cy.get('[data-testid="email-input"]').type('invalid@email.com');
    cy.get('[data-testid="password-input"]').type('wrongpassword');
    cy.get('[data-testid="login-button"]').click();
    
    cy.get('[data-testid="error-message"]').should('contain', 'Invalid credentials');
  });

  it('should logout successfully', () => {
    // Login first
    cy.login('student@university.edu', 'password123');
    
    cy.get('[data-testid="user-menu"]').click();
    cy.get('[data-testid="logout-button"]').click();
    
    cy.url().should('include', '/login');
  });
});

// cypress/e2e/assignment-workflow.cy.ts
describe('Assignment Workflow', () => {
  beforeEach(() => {
    cy.login('teacher@university.edu', 'password123');
  });

  it('should create, submit, and grade assignment', () => {
    // Teacher creates assignment
    cy.visit('/teacher/123');
    cy.get('[data-testid="create-assignment-button"]').click();
    
    cy.get('[data-testid="assignment-title"]').type('Test Assignment');
    cy.get('[data-testid="assignment-description"]').type('This is a test assignment');
    cy.get('[data-testid="due-date"]').type('2025-12-31T23:59');
    cy.get('[data-testid="max-grade"]').clear().type('100');
    
    cy.get('[data-testid="create-button"]').click();
    cy.get('[data-testid="success-message"]').should('contain', 'Assignment created');
    
    // Student submits assignment
    cy.logout();
    cy.login('student@university.edu', 'password123');
    
    cy.visit('/student/456');
    cy.get('[data-testid="assignment-item"]').first().click();
    cy.get('[data-testid="submit-assignment-button"]').click();
    
    // Upload file
    cy.get('[data-testid="file-upload"]').selectFile('cypress/fixtures/assignment.pdf');
    cy.get('[data-testid="submission-notes"]').type('My submission notes');
    cy.get('[data-testid="submit-button"]').click();
    
    cy.get('[data-testid="success-message"]').should('contain', 'Assignment submitted');
    
    // Teacher grades submission
    cy.logout();
    cy.login('teacher@university.edu', 'password123');
    
    cy.visit('/teacher/123');
    cy.get('[data-testid="assignment-item"]').first().click();
    cy.get('[data-testid="submission-item"]').first().click();
    
    cy.get('[data-testid="grade-input"]').type('85');
    cy.get('[data-testid="feedback-input"]').type('Good work!');
    cy.get('[data-testid="submit-grade-button"]').click();
    
    cy.get('[data-testid="success-message"]').should('contain', 'Grade submitted');
  });
});

// cypress/e2e/theme-language.cy.ts
describe('Theme and Language Switching', () => {
  beforeEach(() => {
    cy.login('student@university.edu', 'password123');
    cy.visit('/student/123');
  });

  it('should switch between light and dark themes', () => {
    // Default should be light theme
    cy.get('body').should('not.have.class', 'dark');
    
    // Switch to dark theme
    cy.get('[data-testid="theme-toggle"]').click();
    cy.get('body').should('have.class', 'dark');
    
    // Switch back to light theme
    cy.get('[data-testid="theme-toggle"]').click();
    cy.get('body').should('not.have.class', 'dark');
  });

  it('should persist theme preference', () => {
    // Switch to dark theme
    cy.get('[data-testid="theme-toggle"]').click();
    cy.get('body').should('have.class', 'dark');
    
    // Reload page
    cy.reload();
    
    // Should still be dark theme
    cy.get('body').should('have.class', 'dark');
  });

  it('should switch between English and Arabic', () => {
    // Default should be English (LTR)
    cy.get('html').should('have.attr', 'dir', 'ltr');
    
    // Switch to Arabic
    cy.get('[data-testid="language-switcher"]').click();
    cy.get('[data-testid="language-option-ar"]').click();
    
    cy.get('html').should('have.attr', 'dir', 'rtl');
    cy.get('[data-testid="welcome-message"]').should('contain', 'مرحبا');
    
    // Switch back to English
    cy.get('[data-testid="language-switcher"]').click();
    cy.get('[data-testid="language-option-en"]').click();
    
    cy.get('html').should('have.attr', 'dir', 'ltr');
    cy.get('[data-testid="welcome-message"]').should('contain', 'Welcome');
  });
});

// cypress/support/commands.ts
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      logout(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.session([email, password], () => {
    cy.visit('/login');
    cy.get('[data-testid="email-input"]').type(email);
    cy.get('[data-testid="password-input"]').type(password);
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('not.include', '/login');
  });
});

Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="user-menu"]').click();
  cy.get('[data-testid="logout-button"]').click();
});
```

## Performance Testing

### Lighthouse CI Configuration
```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/login',
        'http://localhost:3000/student/123',
        'http://localhost:3000/teacher/456',
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

### Load Testing
```typescript
// __tests__/performance/load.test.ts
import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('dashboard loads within 3 seconds', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/student/123');
    await page.waitForSelector('[data-testid="dashboard-content"]');
    
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test('file upload shows progress', async ({ page }) => {
    await page.goto('/student/123/assignment/456');
    
    const fileInput = page.locator('[data-testid="file-upload"]');
    await fileInput.setInputFiles('tests/fixtures/large-file.pdf');
    
    // Should show progress indicator
    await expect(page.locator('[data-testid="upload-progress"]')).toBeVisible();
  });

  test('infinite scroll performs well', async ({ page }) => {
    await page.goto('/admin/123/students');
    
    // Scroll multiple times and measure performance
    for (let i = 0; i < 10; i++) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(100);
    }
    
    // Should not cause memory leaks or performance degradation
    const performanceMetrics = await page.evaluate(() => performance.getEntriesByType('measure'));
    expect(performanceMetrics.length).toBeLessThan(100);
  });
});
```

## Visual Regression Testing

### Chromatic Configuration
```javascript
// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/nextjs',
};

// chromatic.yml
version: 1
builds:
  - projectToken: 'project-token'
    workingDir: './'
    buildScriptName: 'build-storybook'
    onlyChanged: true
    externals:
      - 'public/**'
```

### Story Examples
```typescript
// src/components/LoginForm.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSuccess: { action: 'success' },
    onError: { action: 'error' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  parameters: {
    mockData: {
      loading: true,
    },
  },
};

export const WithError: Story = {
  parameters: {
    mockData: {
      error: 'Invalid credentials',
    },
  },
};

export const DarkTheme: Story = {
  parameters: {
    themes: {
      default: 'dark',
    },
  },
};

export const ArabicLanguage: Story = {
  parameters: {
    locale: 'ar',
    direction: 'rtl',
  },
};
```

## Test Data Management

### Test Data Factory
```typescript
// src/tests/factories/userFactory.ts
import { faker } from '@faker-js/faker';
import { User, Student, Teacher, Admin } from '@/types';

export const createUser = (overrides?: Partial<User>): User => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  createdAt: faker.date.past(),
  ...overrides,
});

export const createStudent = (overrides?: Partial<Student>): Student => ({
  ...createUser(),
  role: 'STUDENT',
  studentId: faker.string.alphanumeric(8).toUpperCase(),
  college: faker.company.name(),
  department: faker.lorem.words(2),
  enrollmentDate: faker.date.past(),
  ...overrides,
});

export const createTeacher = (overrides?: Partial<Teacher>): Teacher => ({
  ...createUser(),
  role: 'TEACHER',
  title: faker.helpers.arrayElement(['Doctor', 'Assistant', 'Teacher']),
  department: faker.lorem.words(2),
  officeHours: 'Mon-Wed 2-4 PM',
  ...overrides,
});

export const createAssignment = (overrides?: Partial<Assignment>): Assignment => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  dueDate: faker.date.future(),
  maxGrade: faker.number.int({ min: 50, max: 100 }),
  courseId: faker.string.uuid(),
  courseName: faker.lorem.words(3),
  teacherId: faker.string.uuid(),
  teacherName: faker.person.fullName(),
  status: faker.helpers.arrayElement(['PENDING', 'SUBMITTED', 'GRADED']),
  attachments: [],
  allowedFileTypes: ['pdf', 'doc', 'docx'],
  maxFileSize: 10 * 1024 * 1024,
  allowLateSubmission: faker.datatype.boolean(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
  ...overrides,
});
```

## Continuous Integration

### GitHub Actions Workflow
```yaml
# .github/workflows/test.yml
name: Test Suite

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linting
        run: npm run lint
      
      - name: Run type checking
        run: npm run type-check
      
      - name: Run unit tests
        run: npm run test:unit -- --coverage
      
      - name: Run integration tests
        run: npm run test:integration
      
      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info

  e2e:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
      
      - name: Run Cypress tests
        uses: cypress-io/github-action@v5
        with:
          start: npm run start
          wait-on: 'http://localhost:3000'

  lighthouse:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
      
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.12.x
          lhci autorun
```

## Test Coverage Goals

### Coverage Targets
- **Unit Tests**: 80% line coverage minimum
- **Integration Tests**: 70% API endpoint coverage
- **E2E Tests**: 100% critical user journey coverage
- **Visual Regression**: 100% component story coverage

### Coverage Reporting
```typescript
// jest.config.js - Coverage configuration
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**',
    '!src/**/index.{js,ts}',
  ],
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    './src/components/': {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
    './src/hooks/': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
```

This comprehensive testing guide ensures quality assurance across all aspects of the Task-Flow LMS frontend application, from individual component testing to complete user workflow validation.