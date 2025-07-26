# Internationalization (i18n) Guide

This document covers the internationalization implementation in Task Flow, including language support, RTL layout, and localization best practices.

## 🌍 Overview

Task Flow supports multiple languages with full Right-to-Left (RTL) layout support for Arabic. The internationalization system is built using `next-intl` for robust, type-safe translations.

### Supported Languages
- **English (en)**: Default language, Left-to-Right (LTR)
- **Arabic (ar)**: Full RTL support with Arabic translations

## 🛠 Technical Implementation

### Core Dependencies
```json
{
  "next-intl": "^4.3.1"
}
```

### Configuration Structure

#### 1. Request Configuration (`src/i18n/request.ts`)
```typescript
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
    const validLocale = locale && locales.includes(locale) ? locale : 'en';

    try {
        const messages = (await import(`../../locales/${validLocale}.json`)).default;
        return {
            locale: validLocale,
            messages
        };
    } catch {
        // Fallback to English
        const fallbackMessages = (await import(`../../locales/en.json`)).default;
        return {
            locale: 'en',
            messages: fallbackMessages
        };
    }
});
```

#### 2. Layout Integration (`src/app/layout.tsx`)
```typescript
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get('lang')?.value;
  const locale = supportedLocales.includes(cookieLang || '')
    ? cookieLang!
    : 'en';

  const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${epilogue.variable} ${inter.variable} ${monsieur.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleWrapper />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

#### 3. Locale Wrapper Component (`src/components/layout/LocaleWrapper.tsx`)
```typescript
'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';

export default function LocaleWrapper() {
  const locale = useLocale();

  useEffect(() => {
    // Set document direction based on locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    
    // Store locale preference in cookie
    document.cookie = `lang=${locale}; path=/; max-age=31536000`; // 1 year
  }, [locale]);

  return null;
}
```

## 📁 Translation Files Structure

### English Translations (`locales/en.json`)
```json
{
  "Landing": {
    "Header": {
      "features": "Features",
      "benefits": "Benefits",
      "ourWork": "Our Work",
      "testimonials": "Testimonials",
      "login": "Log in",
      "signup": "Sign up",
      "brandName": "Task Flow"
    },
    "HeroSection": {
      "title": "Simplify academic operations for your institution",
      "subtitle": "Centralize your academic tasks, automate daily workflows, and improve collaboration between students, teachers, and staff — all from one powerful platform.",
      "getStarted": "Get Started",
      "learnMore": "Learn More",
      "watchDemo": "Watch Demo"
    },
    "Features": {
      "title": "Powerful Features for Academic Excellence",
      "subtitle": "Everything you need to manage your educational institution efficiently",
      "multiRole": {
        "title": "Multi-Role Support",
        "description": "Dedicated dashboards for students, teachers, admins, and super admins"
      },
      "realTimeAnalytics": {
        "title": "Real-time Analytics",
        "description": "Track performance and productivity with comprehensive insights"
      },
      "courseManagement": {
        "title": "Course Management",
        "description": "Comprehensive course, assignment, and grade management system"
      }
    }
  },
  "Dashboard": {
    "welcome": "Welcome back",
    "overview": "Overview",
    "recentActivity": "Recent Activity",
    "quickActions": "Quick Actions",
    "statistics": "Statistics"
  },
  "Navigation": {
    "dashboard": "Dashboard",
    "courses": "Courses",
    "assignments": "Assignments",
    "grades": "Grades",
    "calendar": "Calendar",
    "settings": "Settings"
  }
}
```

### Arabic Translations (`locales/ar.json`)
```json
{
  "Landing": {
    "Header": {
      "features": "الميزات",
      "benefits": "الفوائد",
      "ourWork": "أعمالنا",
      "testimonials": "الشهادات",
      "login": "تسجيل الدخول",
      "signup": "التسجيل",
      "brandName": "تاسك فلو"
    },
    "HeroSection": {
      "title": "تبسيط العمليات الأكاديمية لمؤسستك",
      "subtitle": "قم بمركزة مهامك الأكاديمية، وأتمتة سير العمل اليومي، وتحسين التعاون بين الطلاب والمعلمين والموظفين — كل ذلك من منصة واحدة قوية.",
      "getStarted": "ابدأ الآن",
      "learnMore": "اعرف المزيد",
      "watchDemo": "شاهد العرض التوضيحي"
    },
    "Features": {
      "title": "ميزات قوية للتميز الأكاديمي",
      "subtitle": "كل ما تحتاجه لإدارة مؤسستك التعليمية بكفاءة",
      "multiRole": {
        "title": "دعم متعدد الأدوار",
        "description": "لوحات تحكم مخصصة للطلاب والمعلمين والإداريين والمشرفين العامين"
      },
      "realTimeAnalytics": {
        "title": "تحليلات في الوقت الفعلي",
        "description": "تتبع الأداء والإنتاجية مع رؤى شاملة"
      },
      "courseManagement": {
        "title": "إدارة المقررات",
        "description": "نظام شامل لإدارة المقررات والواجبات والدرجات"
      }
    }
  },
  "Dashboard": {
    "welcome": "مرحباً بعودتك",
    "overview": "نظرة عامة",
    "recentActivity": "النشاط الأخير",
    "quickActions": "إجراءات سريعة",
    "statistics": "الإحصائيات"
  },
  "Navigation": {
    "dashboard": "لوحة التحكم",
    "courses": "المقررات",
    "assignments": "الواجبات",
    "grades": "الدرجات",
    "calendar": "التقويم",
    "settings": "الإعدادات"
  }
}
```

## 🎨 RTL Layout Support

### CSS RTL Styles
```css
/* RTL-specific input styles */
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

/* RTL-specific margins and padding */
[dir='rtl'] .ml-4 {
  margin-left: 0;
  margin-right: 1rem;
}

[dir='rtl'] .mr-4 {
  margin-right: 0;
  margin-left: 1rem;
}

/* RTL text alignment */
[dir='rtl'] .text-left {
  text-align: right;
}

[dir='rtl'] .text-right {
  text-align: left;
}

/* RTL flexbox adjustments */
[dir='rtl'] .flex-row {
  flex-direction: row-reverse;
}

/* RTL border radius */
[dir='rtl'] .rounded-l-lg {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

[dir='rtl'] .rounded-r-lg {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
```

### Tailwind RTL Utilities
```tsx
// Use logical properties for RTL support
<div className="ms-4 me-2"> {/* margin-inline-start, margin-inline-end */}
<div className="ps-4 pe-2"> {/* padding-inline-start, padding-inline-end */}
<div className="border-s border-e"> {/* border-inline-start, border-inline-end */}

// Conditional RTL classes
<div className={cn(
  "flex items-center",
  locale === 'ar' ? "flex-row-reverse" : "flex-row"
)}>
```

## 🔧 Usage in Components

### Basic Translation Usage
```tsx
import { useTranslations } from 'next-intl';

export default function WelcomeMessage() {
  const t = useTranslations('Dashboard');

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('overview')}</p>
    </div>
  );
}
```

### Nested Translation Keys
```tsx
export default function HeroSection() {
  const t = useTranslations('Landing.HeroSection');

  return (
    <section>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <button>{t('getStarted')}</button>
    </section>
  );
}
```

### Dynamic Translations with Parameters
```tsx
// In translation file
{
  "welcome": "Welcome back, {name}!",
  "itemCount": "You have {count, plural, =0 {no items} =1 {one item} other {# items}}"
}

// In component
const t = useTranslations('Dashboard');

<h1>{t('welcome', { name: user.name })}</h1>
<p>{t('itemCount', { count: items.length })}</p>
```

### Language Switcher Component
```tsx
'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    
    // Set cookie for persistence
    document.cookie = `lang=${newLocale}; path=/; max-age=31536000`;
    
    // Refresh to apply new locale
    router.refresh();
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {locale === 'en' ? 'العربية' : 'English'}
    </Button>
  );
}
```

## 📱 Responsive RTL Design

### Mobile Navigation for RTL
```tsx
export default function MobileNav() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <nav className={cn(
      "fixed top-0 w-full bg-white shadow-md",
      isRTL ? "right-0" : "left-0"
    )}>
      <div className={cn(
        "flex items-center justify-between p-4",
        isRTL && "flex-row-reverse"
      )}>
        <Logo />
        <MenuButton />
      </div>
    </nav>
  );
}
```

### Form Layout for RTL
```tsx
export default function LoginForm() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <form className="space-y-4">
      <div className={cn(
        "flex flex-col",
        isRTL && "text-right"
      )}>
        <label className={cn(
          "text-sm font-medium",
          isRTL && "text-right"
        )}>
          {t('email')}
        </label>
        <input
          type="email"
          className={cn(
            "mt-1 px-3 py-2 border rounded-md",
            isRTL && "text-right"
          )}
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </div>
    </form>
  );
}
```

## 🔍 Type Safety

### Translation Key Types
```typescript
// types/translations.ts
export type TranslationKeys = {
  'Landing.Header.features': string;
  'Landing.Header.benefits': string;
  'Landing.HeroSection.title': string;
  'Dashboard.welcome': string;
  'Navigation.dashboard': string;
  // ... more keys
};

// Usage with type safety
const t = useTranslations('Landing.Header');
t('features'); // ✅ Type-safe
t('invalidKey'); // ❌ TypeScript error
```

## 🚀 Best Practices

### 1. Translation Organization
- Group related translations under common namespaces
- Use descriptive keys that indicate context
- Keep translation files synchronized between languages

### 2. RTL Design Considerations
- Test all layouts in both LTR and RTL modes
- Use logical CSS properties (margin-inline-start vs margin-left)
- Consider icon and image orientation for RTL

### 3. Performance Optimization
- Lazy load translation files for better performance
- Use tree-shaking to include only used translations
- Implement translation caching for repeated access

### 4. Content Guidelines
- Keep text concise to accommodate different text lengths
- Avoid hardcoded text in components
- Consider cultural context in translations

### 5. Testing Strategy
```tsx
// Test component with different locales
import { NextIntlClientProvider } from 'next-intl';

const renderWithLocale = (component: React.ReactNode, locale: string) => {
  const messages = require(`../locales/${locale}.json`);
  
  return render(
    <NextIntlClientProvider locale={locale} messages={messages}>
      {component}
    </NextIntlClientProvider>
  );
};

// Test RTL layout
test('renders correctly in Arabic (RTL)', () => {
  renderWithLocale(<MyComponent />, 'ar');
  expect(document.documentElement.dir).toBe('rtl');
});
```

## 🔧 Development Workflow

### Adding New Translations

1. **Add to English file first**
   ```json
   // locales/en.json
   {
     "NewFeature": {
       "title": "New Feature Title",
       "description": "Feature description"
     }
   }
   ```

2. **Add corresponding Arabic translation**
   ```json
   // locales/ar.json
   {
     "NewFeature": {
       "title": "عنوان الميزة الجديدة",
       "description": "وصف الميزة"
     }
   }
   ```

3. **Use in component**
   ```tsx
   const t = useTranslations('NewFeature');
   return <h1>{t('title')}</h1>;
   ```

### Translation Validation
- Ensure all keys exist in both language files
- Validate parameter placeholders match
- Test text overflow in different languages
- Verify RTL layout doesn't break with longer Arabic text

This internationalization system provides a robust foundation for multi-language support with excellent developer experience and user accessibility.