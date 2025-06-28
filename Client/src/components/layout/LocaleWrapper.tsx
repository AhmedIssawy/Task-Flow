'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function LocaleWrapper() {
    const params = useParams();
    const locale = params?.locale as string;

    useEffect(() => {
        if (locale) {
            // Update HTML lang and dir attributes
            document.documentElement.lang = locale;
            document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
        }
    }, [locale]);

    return null;
}
