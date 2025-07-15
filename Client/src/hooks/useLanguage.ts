import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export function useLanguage() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const switchLanguage = (newLocale: string) => {
        startTransition(() => {
            // Set the locale cookie
            document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
            
            // Update HTML attributes immediately
            document.documentElement.lang = newLocale;
            document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
            
            // Get clean pathname (remove locale prefix if present)
            const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
            
            // For clean URLs, we navigate to the path without locale prefix
            // The middleware will handle the internal routing
            router.replace(pathWithoutLocale);
            
            // Force a page refresh to ensure the new locale is properly loaded
            setTimeout(() => {
                window.location.reload();
            }, 100);
        });
    };

    const availableLocales = [
        { code: 'en', name: 'English', dir: 'ltr' },
        { code: 'ar', name: 'العربية', dir: 'rtl' }
    ];

    const currentLocaleInfo = availableLocales.find(l => l.code === locale);

    return {
        locale,
        switchLanguage,
        availableLocales,
        currentLocaleInfo,
        isPending,
        isRTL: locale === 'ar'
    };
}
