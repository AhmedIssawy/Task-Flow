import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        'border-muted': 'var(--border-muted)',
        // Additional colors from tweakcn.com
        'primary-theme-foreground': 'var(--primary-theme-foreground)',
        'primary-theme-primary-foreground': 'var(--primary-theme-primary-foreground)',
        'secondary-accent-secondary-foreground': 'var(--secondary-accent-secondary-foreground)',
        'secondary-accent-accent-foreground': 'var(--secondary-accent-accent-foreground)',
        'ui-component-card-foreground': 'var(--ui-component-card-foreground)',
        'ui-component-popover-foreground': 'var(--ui-component-popover-foreground)',
        'ui-component-muted-foreground': 'var(--ui-component-muted-foreground)',
        'status-feedback-destructive': 'var(--status-feedback-destructive)',
        'status-feedback-destructive-foreground': 'var(--status-feedback-destructive-foreground)',
        'chart-visualization-chart-1': 'var(--chart-visualization-chart-1)',
        'chart-visualization-chart-2': 'var(--chart-visualization-chart-2)',
        'chart-visualization-chart-3': 'var(--chart-visualization-chart-3)',
        'chart-visualization-chart-4': 'var(--chart-visualization-chart-4)',
        'chart-visualization-chart-5': 'var(--chart-visualization-chart-5)',
        'sidebar-navigation-sidebar-background': 'var(--sidebar-navigation-sidebar-background)',
        'sidebar-navigation-sidebar-foreground': 'var(--sidebar-navigation-sidebar-foreground)',
        'sidebar-navigation-sidebar-primary': 'var(--sidebar-navigation-sidebar-primary)',
        'sidebar-navigation-sidebar-primary-foreground': 'var(--sidebar-navigation-sidebar-primary-foreground)',
        'sidebar-navigation-sidebar-accent': 'var(--sidebar-navigation-sidebar-accent)',
        'sidebar-navigation-sidebar-accent-foreground': 'var(--sidebar-navigation-sidebar-accent-foreground)',
        'sidebar-navigation-sidebar-border': 'var(--sidebar-navigation-sidebar-border)',
        'sidebar-navigation-sidebar-ring': 'var(--sidebar-navigation-sidebar-ring)',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
        signature: ['var(--font-signiture)'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '1/2': '0.125rem', // 2px
        '1': '0.25rem',  // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem',   // 8px
        '2.5': '0.625rem', // 10px
        '3': '0.75rem',  // 12px
        '3.5': '0.875rem', // 14px
        '4': '1rem',     // 16px
        '5': '1.25rem',  // 20px
        '6': '1.5rem',   // 24px
        '7': '1.75rem',  // 28px
        '8': '2rem',     // 32px
        '9': '2.25rem',  // 36px
        '10': '2.5rem',  // 40px
        '12': '3rem',    // 48px
        '16': '4rem',    // 64px
        '20': '5rem',    // 80px
        '24': '6rem',    // 96px
        '32': '8rem',    // 128px
        '40': '10rem',   // 160px
        '48': '12rem',   // 192px
        '56': '14rem',   // 224px
        '64': '16rem',   // 256px
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      // Example of custom sizes for components (adjust as needed)
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
    },
  },
  plugins: [],
};

export default config;