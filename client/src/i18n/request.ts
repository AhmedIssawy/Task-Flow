import { getRequestConfig } from 'next-intl/server';
import { getServerLocale, DEFAULT_LOCALE } from '@/lib/i18n';

export default getRequestConfig(async () => {
    // Get locale from cookies instead of URL parameters
    const locale = await getServerLocale();

    try {
        const messages = (await import(`../../locales/${locale}.json`)).default;
        return {
            locale,
            messages
        };
    } catch (error) {
        console.warn(`Failed to load messages for locale ${locale}, falling back to default:`, error);
        // Fallback to default locale messages
        const fallbackMessages = (await import(`../../locales/${DEFAULT_LOCALE}.json`)).default;
        return {
            locale: DEFAULT_LOCALE,
            messages: fallbackMessages
        };
    }
});
