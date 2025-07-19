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
      // Custom component sizes (project-specific)
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
      // Custom fonts for specific use cases
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
    // Add RTL support
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      const newUtilities = {
        '.rtl-grid': {
          'direction': 'rtl',
        },
        '.ltr-grid': {
          'direction': 'ltr',
        },
        '.text-start': {
          'text-align': 'start',
        },
        '.text-end': {
          'text-align': 'end',
        },
        '.ms-auto': {
          'margin-inline-start': 'auto',
        },
        '.me-auto': {
          'margin-inline-end': 'auto',
        },
        '.ps-4': {
          'padding-inline-start': '1rem',
        },
        '.pe-4': {
          'padding-inline-end': '1rem',
        },
        '.border-s': {
          'border-inline-start-width': '1px',
        },
        '.border-e': {
          'border-inline-end-width': '1px',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};

export default config;