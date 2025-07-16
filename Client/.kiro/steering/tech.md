# Technology Stack

## Framework & Runtime
- **Next.js 15.3.4**: React framework with App Router architecture
- **React 19.1.0**: UI library with latest features
- **TypeScript 5**: Type-safe development
- **Node.js**: Runtime environment

## Styling & UI
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **shadcn/ui**: Component library with Radix UI primitives
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Style**: New York variant with zinc base color

## State Management
- **Redux Toolkit**: State management with RTK Query
- **Redux Persist**: State persistence
- **React Hook Form**: Form state management
- **Zod**: Schema validation

## Internationalization
- **next-intl**: i18n solution with locale routing
- **Supported Locales**: English (en), Arabic (ar)
- **Locale Prefix**: Always required in URLs

## Development Tools
- **ESLint**: Code linting with Next.js config
- **PostCSS**: CSS processing
- **Turbopack**: Fast bundler for development

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Key Development Notes
- Use Turbopack for faster development builds
- All routes require locale prefix (e.g., `/en/login`, `/ar/login`)
- Components use shadcn/ui conventions with `@/` path aliases
- Forms should use React Hook Form with Zod validation
- State management follows Redux Toolkit patterns