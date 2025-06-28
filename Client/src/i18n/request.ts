import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
    // Use default locale if none provided
    const validLocale = locale && locales.includes(locale) ? locale : 'en';

    try {
        const messages = (await import(`../../locales/${validLocale}.json`)).default;
        return {
            locale: validLocale,
            messages
        };
    } catch {
        // Fallback to English
        const fallbackMessages = (await import(`../../locales/en.json`)).default;
        return {
            locale: 'en',
            messages: fallbackMessages
        };
    }
});
