'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function LocaleWrapper() {
    const params = useParams();
    const [currentLocale, setCurrentLocale] = useState<string>('en');
    
    useEffect(() => {
        // Get locale from URL params first
        let locale = params?.locale as string;
        
        // If no locale in URL, check cookie (using next-intl's cookie name)
        if (!locale) {
            const cookieLocale = document.cookie
                .split('; ')
                .find(row => row.startsWith('locale='))
                ?.split('=')[1];
            
            locale = cookieLocale || 'en';
        }
        
        // Validate locale
        const validLocales = ['en', 'ar'];
        if (!validLocales.includes(locale)) {
            locale = 'en';
        }
        
        setCurrentLocale(locale);
        
        // Update HTML lang and dir attributes
        document.documentElement.lang = locale;
        document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
        
        // Update or set the locale cookie (using next-intl's cookie name)
        document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
        
    }, [params?.locale]);

    return null;
}
