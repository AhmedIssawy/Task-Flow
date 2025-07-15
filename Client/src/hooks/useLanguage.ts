'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export function useLanguage() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const availableLocales = [
    { code: 'en', name: 'English', dir: 'ltr' },
    { code: 'ar', name: 'العربية', dir: 'rtl' }
  ];

  const currentLocaleInfo = availableLocales.find((l) => l.code === locale);

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;

    startTransition(() => {
      // set locale cookie to expire in 1 year
      document.cookie = `lang=${newLocale}; path=/; max-age=31536000`;

      // reload to trigger SSR layout with new locale
      window.location.reload();
    });
  };

  return {
    locale,
    switchLanguage,
    availableLocales,
    currentLocaleInfo,
    isPending,
    isRTL: locale === 'ar'
  };
}