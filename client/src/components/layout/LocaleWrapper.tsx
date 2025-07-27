'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import {
    getCurrentLocale,
    updateHTMLAttributes,
    type Locale,
    getLocaleFromCookie,
    DEFAULT_LOCALE
} from '@/lib/i18n';

interface LocaleWrapperProps {
    children: React.ReactNode;
}

export default function LocaleWrapper({ children }: LocaleWrapperProps) {
    const [currentLocale, setCurrentLocale] = useState<Locale>(DEFAULT_LOCALE);
    const [mounted, setMounted] = useState(false);

    // Initialize locale from cookies on component mount
    useEffect(() => {
        const initializeLocale = () => {
            const cookieLocale = getCurrentLocale();
            setCurrentLocale(cookieLocale);
            updateHTMLAttributes(cookieLocale);
            setMounted(true);
        };

        initializeLocale();
    }, []);

    // Listen for locale changes via custom events
    useEffect(() => {
        const handleLocaleChange = (event: CustomEvent<{ locale: Locale }>) => {
            const newLocale = event.detail.locale;
            setCurrentLocale(newLocale);
            updateHTMLAttributes(newLocale);
        };

        // Add event listener for locale changes
        window.addEventListener('localeChange', handleLocaleChange as EventListener);

        return () => {
            window.removeEventListener('localeChange', handleLocaleChange as EventListener);
        };
    }, []);

    // Monitor cookie changes for real-time updates (cross-tab synchronization)
    useEffect(() => {
        const monitorCookieChanges = () => {
            const cookieLocale = getLocaleFromCookie();
            const effectiveLocale = cookieLocale || DEFAULT_LOCALE;

            // Only update if the locale has actually changed
            if (effectiveLocale !== currentLocale) {
                setCurrentLocale(effectiveLocale);
                updateHTMLAttributes(effectiveLocale);
            }
        };

        // Check for cookie changes every 1 second for cross-tab synchronization
        const intervalId = setInterval(monitorCookieChanges, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentLocale]);

    // Handle visibility change to sync when tab becomes active
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                const cookieLocale = getLocaleFromCookie();
                const effectiveLocale = cookieLocale || DEFAULT_LOCALE;

                if (effectiveLocale !== currentLocale) {
                    setCurrentLocale(effectiveLocale);
                    updateHTMLAttributes(effectiveLocale);
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [currentLocale]);

    // Prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className={`min-h-screen ${currentLocale === 'ar' ? 'rtl' : 'ltr'}`} dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
                {children}
            </div>
        </ThemeProvider>
    );
}
