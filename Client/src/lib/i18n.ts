// Server-side imports are handled conditionally to avoid client-side issues

// Supported locales configuration
export const locales = ['en', 'ar'] as const;
export type Locale = typeof locales[number];

// Default locale
export const DEFAULT_LOCALE: Locale = 'en';

// Cookie configuration
export const LANGUAGE_COOKIE = {
    name: 'lang',
    maxAge: 365 * 24 * 60 * 60, // 1 year in seconds
    httpOnly: false, // Accessible to client-side JavaScript
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
} as const;

// Locale information
export const localeInfo = {
    en: {
        code: 'en',
        name: 'English',
        direction: 'ltr' as const,
        flag: '🇺🇸',
    },
    ar: {
        code: 'ar',
        name: 'العربية',
        direction: 'rtl' as const,
        flag: '🇸🇦',
    },
} as const;

// Validate if a locale is supported
export function isValidLocale(locale: string): locale is Locale {
    return locales.includes(locale as Locale);
}

// Get default locale
export function getDefaultLocale(): Locale {
    return DEFAULT_LOCALE;
}

// Get supported locales list
export function getSupportedLocales(): readonly Locale[] {
    return locales;
}

// Server-side cookie reading (Next.js)
export async function getServerLocale(): Promise<Locale> {
    try {
        const { cookies } = await import('next/headers');
        const cookieStore = await cookies();
        const langCookie = cookieStore.get(LANGUAGE_COOKIE.name);
        const cookieValue = langCookie?.value;

        if (cookieValue && isValidLocale(cookieValue)) {
            return cookieValue;
        }
    } catch (error) {
        console.warn('Failed to read language cookie on server:', error);
    }

    return DEFAULT_LOCALE;
}

// Client-side cookie reading
export function getLocaleFromCookie(): Locale | null {
    if (typeof document === 'undefined') return null;

    try {
        const cookies = document.cookie.split(';');
        const langCookie = cookies.find(cookie =>
            cookie.trim().startsWith(`${LANGUAGE_COOKIE.name}=`)
        );

        if (langCookie) {
            const cookieValue = langCookie.split('=')[1]?.trim();
            if (cookieValue && isValidLocale(cookieValue)) {
                return cookieValue;
            }
        }
    } catch (error) {
        console.warn('Failed to read language cookie on client:', error);
    }

    return null;
}

// Client-side cookie writing
export function setLocaleCookie(locale: Locale): void {
    if (typeof document === 'undefined') return;

    try {
        // Validate locale before setting
        if (!isValidLocale(locale)) {
            console.warn(`Invalid locale: ${locale}. Using default locale.`);
            locale = DEFAULT_LOCALE;
        }

        const expires = new Date();
        expires.setTime(expires.getTime() + (LANGUAGE_COOKIE.maxAge * 1000));

        const cookieString = [
            `${LANGUAGE_COOKIE.name}=${locale}`,
            `expires=${expires.toUTCString()}`,
            `path=${LANGUAGE_COOKIE.path}`,
            `SameSite=${LANGUAGE_COOKIE.sameSite}`,
            LANGUAGE_COOKIE.secure ? 'Secure' : '',
        ].filter(Boolean).join('; ');

        document.cookie = cookieString;
    } catch (error) {
        console.error('Failed to set language cookie:', error);
    }
}

// Get current locale (client-side)
export function getCurrentLocale(): Locale {
    const cookieLocale = getLocaleFromCookie();
    return cookieLocale || DEFAULT_LOCALE;
}

// Set locale (client-side)
export function setLocale(locale: Locale): void {
    if (!isValidLocale(locale)) {
        console.warn(`Invalid locale: ${locale}. Using default locale.`);
        locale = DEFAULT_LOCALE;
    }

    setLocaleCookie(locale);

    // Update HTML attributes immediately
    updateHTMLAttributes(locale);

    // Trigger a custom event for components to listen to
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('localeChange', {
            detail: { locale }
        }));
    }
}

// Update HTML attributes based on locale
export function updateHTMLAttributes(locale: Locale): void {
    if (typeof document === 'undefined') return;

    try {
        const localeData = localeInfo[locale];
        if (localeData) {
            document.documentElement.lang = locale;
            document.documentElement.dir = localeData.direction;
        }
    } catch (error) {
        console.error('Failed to update HTML attributes:', error);
    }
}

// Get locale direction
export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
    return localeInfo[locale]?.direction || 'ltr';
}

// Get locale display name
export function getLocaleDisplayName(locale: Locale): string {
    return localeInfo[locale]?.name || locale;
}

// Get locale flag
export function getLocaleFlag(locale: Locale): string {
    return localeInfo[locale]?.flag || '🌐';
}

// TypeScript validation for i18n setup (legacy function kept for compatibility)
export function validateI18n(): boolean {
    try {
        return locales.length > 0 && DEFAULT_LOCALE !== undefined;
    } catch {
        return false;
    }
}
