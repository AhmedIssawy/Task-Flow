// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // هنا نضع إعدادات الشاشات المخصصة للمشروع
    // ونضيف حاوية (container) موحدة للاستخدام في الصفحات
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      // 1. تعريف الألوان لتكون متوافقة مع ShadCN
      // كل لون يشير إلى متغير HSL معرف في globals.css
      // هذا يسمح لـ Tailwind بتعديل الشفافية (opacity) بسهولة
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // ألوانك المخصصة الإضافية
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
      },
      // 2. تعريف استدارة الحواف (border-radius) بناءً على متغير مركزي
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // 3. تعريف أنواع الخطوط المستخدمة في المشروع
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      // 4. تعريف الأنيميشن الأساسي لمكونات ShadCN
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // 5. إضافة Plugins أساسية لتحسين الوظائف
  plugins: [
    require('tailwindcss-animate'), // لدعم الأنيميشن في ShadCN
    require('@tailwindcss/typography'), // لتحسين مظهر النصوص الطويلة والمقالات
  ],
};

export default config;