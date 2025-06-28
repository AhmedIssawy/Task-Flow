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
            // Remove the current locale from the pathname
            const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';

            // Navigate to the new locale
            router.replace(`/${newLocale}${pathWithoutLocale}`);
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
