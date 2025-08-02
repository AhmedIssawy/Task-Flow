'use client';

import { useState, useEffect, useTransition } from 'react';
import {
  getCurrentLocale,
  setLocale,
  localeInfo,
  getSupportedLocales,
  isValidLocale,
  type Locale
} from '@/lib/i18n';

export function useLanguage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>(() => getCurrentLocale());
  const [isPending, startTransition] = useTransition();

  // Available locales with enhanced information
  const availableLocales = getSupportedLocales().map(code => ({
    code,
    name: localeInfo[code].name,
    dir: localeInfo[code].direction,
    flag: localeInfo[code].flag
  }));

  const currentLocaleInfo = availableLocales.find((l) => l.code === currentLocale);

  // Listen for locale changes from other components or tabs
  useEffect(() => {
    const handleLocaleChange = (event: CustomEvent<{ locale: Locale }>) => {
      setCurrentLocale(event.detail.locale);
    };

    window.addEventListener('localeChange', handleLocaleChange as EventListener);

    return () => {
      window.removeEventListener('localeChange', handleLocaleChange as EventListener);
    };
  }, []);

  // 🔥 OPTIMIZED: Replace polling with event-driven cross-tab sync
  useEffect(() => {
    // Handle storage events for cross-tab synchronization
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'locale-sync' && event.newValue) {
        const newLocale = event.newValue;
        if (isValidLocale(newLocale) && newLocale !== currentLocale) {
          setCurrentLocale(newLocale);
        }
      }
    };

    // Handle focus events to check for external cookie changes
    const handleFocus = () => {
      const cookieLocale = getCurrentLocale();
      if (cookieLocale !== currentLocale) {
        setCurrentLocale(cookieLocale);
      }
    };

    // Handle visibility change for better performance
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const cookieLocale = getCurrentLocale();
        if (cookieLocale !== currentLocale) {
          setCurrentLocale(cookieLocale);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentLocale]);

  const switchLanguage = (newLocale: string) => {
    if (!isValidLocale(newLocale) || newLocale === currentLocale) return;

    startTransition(() => {
      // Use the centralized setLocale function which handles:
      // - Cookie setting
      // - HTML attribute updates
      // - Event dispatching for component updates
      setLocale(newLocale);

      // 🔥 NEW: Trigger cross-tab sync via localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('locale-sync', newLocale);
        // Remove the sync item after a short delay to avoid memory buildup
        setTimeout(() => {
          localStorage.removeItem('locale-sync');
        }, 1000);
      }

      // Update local state immediately for visual feedback
      setCurrentLocale(newLocale);

      // Force a re-render of the entire app by reloading
      // This ensures all server components get the new locale
      setTimeout(() => {
        window.location.reload();
      }, 100); // Small delay for visual feedback
    });
  };

  return {
    locale: currentLocale,
    switchLanguage,
    availableLocales,
    currentLocaleInfo,
    isPending,
    isRTL: currentLocale === 'ar'
  };
}