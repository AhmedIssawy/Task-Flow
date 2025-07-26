# Project Structure

## Root Level
```
├── .env.local              # Environment variables
├── .gitignore             # Git ignore rules
├── components.json        # shadcn/ui configuration
├── next.config.ts         # Next.js configuration with i18n
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Source Organization (`src/`)

### App Router (`src/app/`)
- **App Router Architecture**: Next.js 13+ file-based routing
- **Locale Structure**: `[locale]/` dynamic segments for i18n
- **Global Files**: `layout.tsx`, `globals.css`, `page.tsx`
- **Route Rewrites**: `/login` → `/auth/login` via next.config.ts

### Components (`src/components/`)
```
├── admin/          # Admin-specific components
├── auth/           # Authentication components
├── dashboard/      # Dashboard components
├── landing/        # Landing page components
├── layout/         # Layout components
├── login/          # Login components
├── tables/         # Data table components
└── ui/             # shadcn/ui components
```

### Core Directories
- **`constants/`**: Static data, table configurations, menu data
- **`hooks/`**: Custom React hooks (mobile detection, language)
- **`i18n/`**: Internationalization configuration
- **`lib/`**: Utility libraries (auth, i18n, utils)
- **`providers/`**: React context providers (Redux)
- **`services/`**: API services and external integrations
- **`store/`**: Redux store configuration, slices, types
- **`utils/`**: Helper functions and utilities

## Internationalization Structure
```
locales/
├── en.json         # English translations
└── ar.json         # Arabic translations
```

## Path Aliases
- `@/*` → `./src/*` (configured in tsconfig.json)
- `@/components` → `./src/components`
- `@/lib` → `./src/lib`
- `@/hooks` → `./src/hooks`

## Naming Conventions
- **Components**: PascalCase (e.g., `UserDashboard.tsx`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Directories**: lowercase with hyphens
- **Constants**: UPPER_SNAKE_CASE
- **Types**: PascalCase with descriptive names

## Key Architectural Patterns
- **Role-based Access**: Student, Teacher, Admin roles
- **Feature-based Organization**: Components grouped by feature
- **Separation of Concerns**: Services, stores, and UI separated
- **Type Safety**: Full TypeScript coverage
- **Responsive Design**: Mobile-first approach