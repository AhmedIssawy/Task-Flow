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

  // Monitor cookie changes for cross-tab synchronization
  useEffect(() => {
    const monitorCookieChanges = () => {
      const cookieLocale = getCurrentLocale();
      if (cookieLocale !== currentLocale) {
        setCurrentLocale(cookieLocale);
      }
    };

    const intervalId = setInterval(monitorCookieChanges, 1000);
    return () => clearInterval(intervalId);
  }, [currentLocale]);

  const switchLanguage = (newLocale: string) => {
    if (!isValidLocale(newLocale) || newLocale === currentLocale) return;

    startTransition(() => {
      // Use the centralized setLocale function which handles:
      // - Cookie setting
      // - HTML attribute updates
      // - Event dispatching for component updates
      setLocale(newLocale);

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