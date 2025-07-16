---
inclusion: always
---

# TaskFlow Development Context

## Architecture Patterns

### Component Hierarchy

- **Bottom-up development only**: Utilities → Basic Components → Complex Components → Pages
- **Reuse existing components**: Always check `src/components/` before creating new ones
- **Component organization**: Feature-based grouping (auth/, dashboard/, landing/, layout/, tables/)

### State Management

- **Redux Toolkit** with React Redux for global state
- **Redux Persist** for state persistence across sessions
- **React Hook Form + Zod** for form validation
- **RTK Query** for API data fetching and caching

### Routing & Internationalization

- **Clean URLs without locale prefixes**: URLs should not display `/en` or `/ar` segments in browser
- **Supported locales**: English (en), Arabic (ar) with RTL support
- **Translation keys**: Use descriptive nested keys in `locales/*.json`
- **Middleware handles**: Locale detection via cookies and browser preferences with automatic redirects
- **Preserve i18n functionality**: Maintain full internationalization without visible locale prefixes

## Code Style Conventions

### File Naming & Structure

- **Directories**: kebab-case (`auth/`, `landing/`)
- **React Components**: PascalCase (`LoginForm.tsx`)
- **Utilities/Hooks**: camelCase (`useLanguage.ts`)
- **Import aliases**: Use `@/*` for all internal imports

### TypeScript Standards

- **Strict mode enabled**: No implicit any, proper type definitions required
- **Interface over type**: Use interfaces for object shapes
- **Proper error handling**: Implement try-catch blocks and error boundaries
- **Type imports**: Use `import type` for type-only imports

### Styling Guidelines

- **Tailwind CSS utility-first**: Use existing utility classes from `globals.css`
- **shadcn/ui components**: New York variant, customize via CSS variables
- **Responsive design**: Mobile-first approach with consistent breakpoints
- **Dark/light mode**: Support theme switching via CSS custom properties

## Security & Performance

### Authentication & Authorization

- **Role-based access**: Student, Teacher, Admin roles with proper guards
- **OWASP compliance**: Secure coding practices for all user inputs
- **Session management**: Proper token handling and refresh logic

### Optimization Requirements

- **Next.js Image**: Use for all images with proper sizing and lazy loading
- **Code splitting**: Implement React.lazy() for large components
- **Bundle optimization**: Tree-shaking and dynamic imports where beneficial
- **Core Web Vitals**: Maintain good LCP, FID, and CLS scores

## Development Workflow

### Quality Assurance

- **Error-free code**: Zero tolerance for runtime or build errors
- **Import validation**: Verify all imports exist and are correctly typed
- **Consistent patterns**: Follow existing component and styling patterns
- **Mobile testing**: Ensure responsive behavior across device sizes

### Internationalization Testing

- **Locale switching**: Test functionality in both English and Arabic
- **RTL layout**: Verify proper text alignment and component positioning
- **Translation completeness**: Ensure all user-facing text is translated

## Current Focus Areas

- Landing page optimization and user experience improvements
- Form validation enhancements with better error messaging
- Mobile responsiveness and accessibility compliance
- Performance optimization and bundle size reduction
