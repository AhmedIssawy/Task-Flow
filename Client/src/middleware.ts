import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

// Create the next-intl middleware
const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'as-needed'
});

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    
    // Skip middleware for API routes, static files, and Next.js internals
    if (
        pathname.startsWith('/api/') ||
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/_vercel/') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Get locale from next-intl's locale cookie or Accept-Language header
    const cookieLocale = request.cookies.get('locale')?.value;
    const acceptLanguage = request.headers.get('Accept-Language');
    
    // Determine the best locale
    let detectedLocale = defaultLocale;
    
    if (cookieLocale && locales.includes(cookieLocale)) {
        detectedLocale = cookieLocale;
    } else if (acceptLanguage) {
        // Parse Accept-Language header to find best match
        const preferredLocales = acceptLanguage
            .split(',')
            .map(lang => lang.split(';')[0].trim().toLowerCase())
            .map(lang => lang.split('-')[0]); // Get language code only
        
        for (const preferred of preferredLocales) {
            if (locales.includes(preferred)) {
                detectedLocale = preferred;
                break;
            }
        }
    }

    // Check if URL already has locale prefix
    const pathnameHasLocale = locales.some(locale => 
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    // If URL doesn't have locale prefix, add it internally
    if (!pathnameHasLocale) {
        const url = request.nextUrl.clone();
        url.pathname = `/${detectedLocale}${pathname}`;
        
        const response = NextResponse.rewrite(url);
        
        // Set locale cookie if not already set or different (using next-intl's cookie name)
        if (cookieLocale !== detectedLocale) {
            response.cookies.set('locale', detectedLocale, {
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 365 // 1 year
            });
        }
        
        return response;
    }

    // For URLs with locale prefix, use next-intl middleware
    const response = intlMiddleware(request);
    
    // Extract locale from pathname and set cookie
    const localeFromPath = pathname.split('/')[1];
    if (locales.includes(localeFromPath) && cookieLocale !== localeFromPath) {
        if (response instanceof NextResponse) {
            response.cookies.set('locale', localeFromPath, {
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 365 // 1 year
            });
        }
    }
    
    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/']
};
