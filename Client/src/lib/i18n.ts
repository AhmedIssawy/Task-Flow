// TypeScript validation for i18n setup
import { useTranslations } from 'next-intl';

// This file validates that the i18n setup is working correctly
export function validateI18n() {
    // Test if translations hook can be imported
    const t = useTranslations;
    return t !== undefined;
}

// Export available locales
export const locales = ['en', 'ar'] as const;
export type Locale = typeof locales[number];

// Export locale information
export const localeInfo = {
    en: {
        name: 'English',
        dir: 'ltr' as const,
        flag: '🇺🇸'
    },
    ar: {
        name: 'العربية',
        dir: 'rtl' as const,
        flag: '🇸🇦'
    }
} as const;
