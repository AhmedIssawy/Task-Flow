# Styling Guide

This document outlines the styling architecture, design system, and best practices used in the Task Flow application.

## 🎨 Design System Overview

Task Flow uses a modern, accessible design system built on top of Tailwind CSS with custom design tokens and components from shadcn/ui.

### Design Principles
- **Consistency**: Unified visual language across all components
- **Accessibility**: WCAG 2.1 AA compliant design patterns
- **Responsiveness**: Mobile-first approach with fluid layouts
- **Performance**: Optimized CSS with minimal runtime overhead
- **Internationalization**: RTL support for Arabic language

## 🛠 Technology Stack

### Core Technologies
- **Tailwind CSS 4.x**: Utility-first CSS framework
- **shadcn/ui**: High-quality, accessible component library
- **Radix UI**: Unstyled, accessible UI primitives
- **Class Variance Authority (CVA)**: Type-safe component variants
- **next-themes**: Dark/light theme management

### Font System
```typescript
// Font configuration in layout.tsx
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary',
});

const epilogue = Epilogue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
});

const monsieur = Monsieur_La_Doulaise({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-signature',
});
```

## 🎯 Color System

### CSS Custom Properties
```css
:root {
  /* Brand Colors */
  --primary: #1b86dd;
  --primary-light: #64b5f6;
  --primary-dark: #2196f3;
  
  /* Semantic Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  
  /* Neutral Colors */
  --light: #f8f8ff;
  --dark: #1a1a1a;
  --muted: #6b7280;
  --border: #dedede;
}
```

### HSL Color System (Tailwind Integration)
```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
```

## 📱 Responsive Design

### Breakpoint System
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

### Mobile-First Approach
```tsx
// Example responsive component
<div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  gap-4 
  p-4 
  sm:p-6 
  lg:p-8
">
  {/* Content */}
</div>
```

## 🌐 RTL Support

### Arabic Language Support
```css
/* RTL-specific styles */
[dir='rtl'] input[type='text'],
[dir='rtl'] input[type='email'],
[dir='rtl'] input[type='password'],
[dir='rtl'] textarea,
[dir='rtl'] select {
  text-align: right;
  direction: rtl;
}

[dir='rtl'] input[type='text']::placeholder,
[dir='rtl'] input[type='email']::placeholder,
[dir='rtl'] input[type='password']::placeholder,
[dir='rtl'] textarea::placeholder {
  text-align: right;
}

/* RTL layout adjustments */
[dir='rtl'] .sidebar {
  right: 0;
  left: auto;
}

[dir='rtl'] .dropdown-menu {
  right: 0;
  left: auto;
}
```

### Dynamic Direction Setting
```tsx
// In layout.tsx
<html
  lang={locale}
  dir={locale === 'ar' ? 'rtl' : 'ltr'}
  className={`${epilogue.variable} ${inter.variable} ${monsieur.variable}`}
  suppressHydrationWarning
>
```

## 🎭 Theme System

### Theme Provider Setup
```tsx
import { ThemeProvider } from 'next-themes';

<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```

### Theme Toggle Component
```tsx
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
```

## 🧩 Component Styling

### Button Component Variants
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

### Glass Effect Utility
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .glass-effect {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 📏 Typography Scale

### Heading Styles
```css
h1, .h1 {
  scroll-margin-top: 5rem;
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1;
}

@media (min-width: 1024px) {
  h1, .h1 {
    font-size: 3rem;
  }
}

h2, .h2 {
  scroll-margin-top: 5rem;
  border-bottom: 1px solid hsl(var(--border));
  padding-bottom: 0.5rem;
  font-size: 1.875rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.2;
}
```

## 🎨 Animation System

### Framer Motion Integration
```tsx
import { motion } from 'framer-motion';

// Page transitions
<motion.div
  className="p-6 space-y-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4 }}
>
  {children}
</motion.div>

// Stagger animations
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### CSS Transitions
```css
/* Smooth transitions for interactive elements */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Hover effects */
.hover-scale:hover {
  transform: scale(1.02);
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
```

## 🔧 Utility Classes

### Custom Utilities
```css
/* Scrollbar styling */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--border)) transparent;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: hsl(var(--border));
  border-radius: 3px;
}

/* Focus styles */
.focus-ring {
  outline: none;
  ring: 2px;
  ring-color: hsl(var(--ring));
  ring-offset: 2px;
}

/* Text truncation */
.truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

## 📋 Best Practices

### Component Styling Guidelines

1. **Use Semantic Class Names**
   ```tsx
   // Good
   <div className="dashboard-header">
   
   // Avoid
   <div className="flex items-center justify-between p-4">
   ```

2. **Compose Utilities with cn() Helper**
   ```tsx
   import { cn } from '@/lib/utils';
   
   <Button 
     className={cn(
       "base-button-styles",
       isActive && "active-styles",
       className
     )}
   />
   ```

3. **Use CSS Variables for Dynamic Values**
   ```tsx
   <div 
     style={{ 
       '--progress': `${percentage}%` 
     }}
     className="w-[var(--progress)]"
   />
   ```

4. **Prefer Tailwind Classes Over Custom CSS**
   ```tsx
   // Good
   <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
   
   // Avoid custom CSS when Tailwind classes exist
   ```

### Performance Considerations

1. **Purge Unused Styles**: Tailwind automatically purges unused styles in production
2. **Use CSS Variables**: For dynamic theming without JavaScript
3. **Optimize Animations**: Use `transform` and `opacity` for smooth animations
4. **Minimize Custom CSS**: Leverage Tailwind utilities for consistency

### Accessibility Guidelines

1. **Color Contrast**: Ensure minimum 4.5:1 contrast ratio
2. **Focus Indicators**: Provide clear focus states for interactive elements
3. **Responsive Text**: Use relative units for scalable typography
4. **Motion Preferences**: Respect `prefers-reduced-motion` settings

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🚀 Development Workflow

### Adding New Styles

1. **Check Existing Utilities**: Use Tailwind classes when possible
2. **Create Component Variants**: Use CVA for component variations
3. **Add Custom Properties**: For theme-aware dynamic values
4. **Test Across Themes**: Ensure styles work in light/dark modes
5. **Verify RTL Support**: Test with Arabic language setting

### Style Organization

```
src/
├── app/
│   └── globals.css          # Global styles and Tailwind imports
├── components/
│   └── ui/                  # Base UI components with styling
└── lib/
    └── utils.ts             # Style utility functions (cn helper)
```

This styling guide ensures consistent, maintainable, and accessible design across the entire Task Flow application.