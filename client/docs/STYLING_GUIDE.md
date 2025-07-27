# Styling Guide

## 📋 Table of Contents
- [Overview](#overview)
- [Design System](#design-system)
- [Tailwind CSS Configuration](#tailwind-css-configuration)
- [Component Styling](#component-styling)
- [Theme System](#theme-system)
- [RTL/LTR Support](#rtlltr-support)
- [Responsive Design](#responsive-design)
- [Typography](#typography)
- [Color System](#color-system)
- [Spacing and Layout](#spacing-and-layout)
- [Animation Guidelines](#animation-guidelines)
- [Best Practices](#best-practices)

## 🎯 Overview

TaskFlow uses a modern, utility-first approach to styling with Tailwind CSS 4.1.11, enhanced with custom configurations for RTL/LTR support, dark/light themes, and a comprehensive design system based on shadcn/ui components.

### Key Features
- **Utility-First CSS**: Tailwind CSS for rapid development
- **Design System**: Consistent component library with shadcn/ui
- **Theme Support**: Dark/light mode with system preference detection
- **RTL/LTR Support**: Full bidirectional text support for Arabic/English
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Custom Properties**: CSS custom properties for dynamic theming
- **Animation System**: Smooth animations with Framer Motion integration

## 🎨 Design System

### Design Tokens

The design system is built on a foundation of design tokens that ensure consistency across the application.

#### Color Palette

```css
/* Primary Colors */
--primary: 220 90% 56%;           /* Blue primary */
--primary-foreground: 0 0% 100%;  /* White text on primary */

/* Secondary Colors */
--secondary: 220 14% 96%;         /* Light gray */
--secondary-foreground: 220 9% 46%; /* Dark gray text */

/* Accent Colors */
--accent: 220 14% 96%;            /* Accent background */
--accent-foreground: 220 9% 15%;  /* Accent text */

/* Semantic Colors */
--destructive: 0 84% 60%;         /* Red for errors/delete */
--destructive-foreground: 0 0% 98%; /* White text on destructive */

/* Neutral Colors */
--background: 0 0% 100%;          /* Page background */
--foreground: 220 9% 15%;         /* Primary text */
--muted: 220 14% 96%;             /* Muted background */
--muted-foreground: 220 9% 46%;   /* Muted text */

/* Border and Input */
--border: 220 13% 91%;            /* Border color */
--input: 220 13% 91%;             /* Input background */
--ring: 220 90% 56%;              /* Focus ring color */
```

#### Typography Scale

```css
/* Font Families */
--font-sans: 'Lora', serif;       /* Primary font */
--font-serif: ui-serif, Georgia, serif; /* Secondary font */
--font-mono: ui-monospace, 'Courier New', monospace; /* Code font */
--font-arabic: 'Amiri', serif;    /* Arabic font */

/* Font Sizes */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
```

#### Spacing Scale

```css
/* Spacing Units */
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
```

## ⚙️ Tailwind CSS Configuration

### Configuration File

**Location**: `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom component sizes
      width: {
        'card-sm': '200px',
        'card-md': '300px',
        'card-lg': '400px',
        'sidebar': '250px',
      },
      height: {
        'card-sm': '150px',
        'card-md': '200px',
        'card-lg': '250px',
        'header': '64px',
      },
      // Custom fonts
      fontFamily: {
        primary: ['Lora', 'serif'],
        secondary: ['ui-serif', 'Georgia', 'serif'],
        arabic: ['Amiri', 'serif'],
        sans: ['Lora', 'serif'],
        serif: ['ui-serif', 'Georgia', 'serif'],
      },
      // RTL-specific utilities
      spacing: {
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [
    // RTL support plugin
    function ({ addUtilities, addVariant }) {
      // Add RTL/LTR variants
      addVariant('rtl', '[dir="rtl"] &')
      addVariant('ltr', '[dir="ltr"] &')
      
      // Add logical properties utilities
      const newUtilities = {
        '.rtl-grid': { 'direction': 'rtl' },
        '.ltr-grid': { 'direction': 'ltr' },
        '.text-start': { 'text-align': 'start' },
        '.text-end': { 'text-align': 'end' },
        '.ms-auto': { 'margin-inline-start': 'auto' },
        '.me-auto': { 'margin-inline-end': 'auto' },
        '.ps-4': { 'padding-inline-start': '1rem' },
        '.pe-4': { 'padding-inline-end': '1rem' },
        '.border-s': { 'border-inline-start-width': '1px' },
        '.border-e': { 'border-inline-end-width': '1px' },
      }
      addUtilities(newUtilities)
    }
  ],
};

export default config;
```

### Global Styles

**Location**: `src/app/globals.css`

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Font configuration */
  --font-sans: Lora, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  
  /* Border radius */
  --radius: 1rem;
  
  /* Letter spacing */
  --tracking-tighter: calc(var(--tracking-normal) - 0.05em);
  --tracking-tight: calc(var(--tracking-normal) - 0.025em);
  --tracking-wide: calc(var(--tracking-normal) + 0.025em);
  --tracking-wider: calc(var(--tracking-normal) + 0.05em);
  --tracking-widest: calc(var(--tracking-normal) + 0.1em);
}

/* Light theme variables */
:root {
  --background: 0 0% 100%;
  --foreground: 220 9% 15%;
  --card: 0 0% 100%;
  --card-foreground: 220 9% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 220 9% 15%;
  --primary: 220 90% 56%;
  --primary-foreground: 0 0% 100%;
  --secondary: 220 14% 96%;
  --secondary-foreground: 220 9% 46%;
  --muted: 220 14% 96%;
  --muted-foreground: 220 9% 46%;
  --accent: 220 14% 96%;
  --accent-foreground: 220 9% 15%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 220 13% 91%;
  --input: 220 13% 91%;
  --ring: 220 90% 56%;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
}

/* Dark theme variables */
.dark {
  --background: 220 13% 9%;
  --foreground: 220 9% 85%;
  --card: 220 13% 9%;
  --card-foreground: 220 9% 85%;
  --popover: 220 13% 9%;
  --popover-foreground: 220 9% 85%;
  --primary: 220 90% 56%;
  --primary-foreground: 0 0% 100%;
  --secondary: 220 13% 15%;
  --secondary-foreground: 220 9% 65%;
  --muted: 220 13% 15%;
  --muted-foreground: 220 9% 65%;
  --accent: 220 13% 15%;
  --accent-foreground: 220 9% 85%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 220 13% 15%;
  --input: 220 13% 15%;
  --ring: 220 90% 56%;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
}

/* Base styles */
* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-feature-settings: "rlig" 1, "calt" 1;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--muted));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.5);
}
```

## 🧩 Component Styling

### Button Component Styling

```typescript
// Button variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
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
)
```

### Card Component Styling

```typescript
// Card component with consistent styling
function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
}
```

### Input Component Styling

```typescript
// Input with consistent styling and states
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
```

## 🌓 Theme System

### Theme Provider Setup

```typescript
// Theme provider configuration
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html lang={locale} dir={direction}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Theme Toggle Component

```typescript
// Theme toggle with icon switching
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

### Theme-aware Styling

```typescript
// Using theme-aware classes
<div className="bg-background text-foreground border-border">
  <h1 className="text-foreground">Title</h1>
  <p className="text-muted-foreground">Description</p>
  <Button className="bg-primary text-primary-foreground">Action</Button>
</div>
```

## 🌍 RTL/LTR Support

### RTL-aware Layout

```typescript
// RTL-aware component styling
export function Navbar() {
  const { isRTL } = useLanguage();

  return (
    <nav className={cn(
      "flex items-center justify-between p-4",
      isRTL ? "direction-rtl" : "direction-ltr"
    )}>
      <div className={cn(
        "flex items-center gap-3",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}>
        <Logo />
        <Title />
      </div>
      
      <div className={cn(
        "flex items-center gap-2",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}>
        <ThemeToggle />
        <LanguageSwitcher />
        <UserMenu />
      </div>
    </nav>
  );
}
```

### Logical Properties

```css
/* Use logical properties for RTL support */
.container {
  margin-inline-start: auto;
  margin-inline-end: auto;
  padding-inline: 1rem;
  border-inline-start: 1px solid hsl(var(--border));
}

/* RTL-specific utilities */
.rtl\:text-right {
  text-align: right;
}

.ltr\:text-left {
  text-align: left;
}
```

### RTL Tailwind Variants

```typescript
// Using RTL variants in components
<div className={cn(
  "flex items-center gap-3",
  "ltr:flex-row rtl:flex-row-reverse",
  "ltr:text-left rtl:text-right"
)}>
  <Icon className="ltr:mr-2 rtl:ml-2" />
  <Text>Content</Text>
</div>
```

## 📱 Responsive Design

### Breakpoint System

```css
/* Tailwind breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Mobile-first Approach

```typescript
// Mobile-first responsive design
<div className={cn(
  // Mobile (default)
  "w-full p-4 text-sm",
  // Tablet
  "md:w-1/2 md:p-6 md:text-base",
  // Desktop
  "lg:w-1/3 lg:p-8 lg:text-lg",
  // Large desktop
  "xl:w-1/4 xl:p-10 xl:text-xl"
)}>
  Content
</div>
```

### Responsive Grid System

```typescript
// Responsive grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {items.map(item => (
    <Card key={item.id} className="w-full">
      {item.content}
    </Card>
  ))}
</div>
```

### Container Queries

```typescript
// Container-based responsive design
<div className="@container">
  <div className="@sm:grid-cols-2 @lg:grid-cols-3 grid gap-4">
    Content
  </div>
</div>
```

## 📝 Typography

### Font Configuration

```css
/* Font family definitions */
.font-primary {
  font-family: 'Lora', serif;
}

.font-secondary {
  font-family: ui-serif, Georgia, serif;
}

.font-arabic {
  font-family: 'Amiri', serif;
}
```

### Typography Scale

```typescript
// Typography utility classes
<h1 className="text-4xl font-bold font-primary">Main Title</h1>
<h2 className="text-3xl font-semibold font-primary">Section Title</h2>
<h3 className="text-2xl font-medium font-primary">Subsection</h3>
<p className="text-base font-normal leading-relaxed">Body text</p>
<small className="text-sm text-muted-foreground">Helper text</small>
```

### Language-specific Typography

```typescript
// Language-aware typography
<div className={cn(
  "text-base leading-relaxed",
  isRTL ? "font-arabic text-right" : "font-primary text-left"
)}>
  {content}
</div>
```

## 🎨 Color System

### Semantic Colors

```typescript
// Semantic color usage
<div className="bg-background text-foreground">
  <div className="bg-card text-card-foreground border border-border rounded-lg p-4">
    <h3 className="text-foreground font-semibold">Card Title</h3>
    <p className="text-muted-foreground">Card description</p>
    <Button className="bg-primary text-primary-foreground">Primary Action</Button>
    <Button variant="destructive" className="bg-destructive text-destructive-foreground">
      Delete
    </Button>
  </div>
</div>
```

### Status Colors

```typescript
// Status-based coloring
const statusColors = {
  success: "bg-green-100 text-green-800 border-green-200",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
  error: "bg-red-100 text-red-800 border-red-200",
  info: "bg-blue-100 text-blue-800 border-blue-200",
};

<Badge className={statusColors[status]}>
  {statusText}
</Badge>
```

## 📏 Spacing and Layout

### Spacing System

```typescript
// Consistent spacing usage
<div className="space-y-4">
  <div className="p-4 m-2">Content with padding and margin</div>
  <div className="px-6 py-3">Content with horizontal and vertical padding</div>
  <div className="mt-8 mb-4">Content with top and bottom margin</div>
</div>
```

### Layout Patterns

```typescript
// Common layout patterns
// Centered container
<div className="container mx-auto px-4 max-w-7xl">
  Content
</div>

// Flex layouts
<div className="flex items-center justify-between">
  <div>Left content</div>
  <div>Right content</div>
</div>

// Grid layouts
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-12 md:col-span-8">Main content</div>
  <div className="col-span-12 md:col-span-4">Sidebar</div>
</div>
```

## 🎬 Animation Guidelines

### Transition Classes

```css
/* Standard transitions */
.transition-all {
  transition: all 0.2s ease-in-out;
}

.transition-colors {
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.transition-transform {
  transition: transform 0.2s ease-in-out;
}
```

### Hover Effects

```typescript
// Hover animations
<Button className="transition-all hover:scale-105 hover:shadow-lg">
  Hover me
</Button>

<Card className="transition-all hover:shadow-xl hover:-translate-y-1">
  Hover card
</Card>
```

### Loading States

```typescript
// Loading animations
<div className="animate-pulse">
  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-muted rounded w-1/2"></div>
</div>

<div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
```

## ✅ Best Practices

### Component Styling

1. **Use Semantic Classes**: Prefer semantic color classes over specific colors
2. **Consistent Spacing**: Use the spacing scale consistently
3. **Mobile-first**: Always design for mobile first
4. **Accessibility**: Ensure proper contrast and focus states
5. **Performance**: Avoid unnecessary re-renders with styling

### CSS Organization

```typescript
// Good: Organized class names
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

### RTL Considerations

1. **Use Logical Properties**: Prefer `margin-inline-start` over `margin-left`
2. **Test Both Directions**: Always test RTL and LTR layouts
3. **Icon Positioning**: Consider icon placement in RTL contexts
4. **Text Alignment**: Use `text-start` and `text-end` instead of left/right

### Performance Tips

1. **Minimize Class Changes**: Avoid frequent className updates
2. **Use CSS Variables**: Leverage CSS custom properties for dynamic values
3. **Optimize Animations**: Use `transform` and `opacity` for smooth animations
4. **Reduce Bundle Size**: Only import needed Tailwind utilities

### Accessibility Guidelines

1. **Color Contrast**: Ensure WCAG AA compliance
2. **Focus States**: Provide clear focus indicators
3. **Screen Readers**: Use semantic HTML and ARIA labels
4. **Keyboard Navigation**: Support keyboard-only navigation

This styling guide ensures consistent, accessible, and maintainable styling across the TaskFlow application while supporting multiple languages, themes, and responsive layouts.