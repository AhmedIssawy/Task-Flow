// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', 
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
      },
    },
  },
  plugins: [],
};

export default config;
