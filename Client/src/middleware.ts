import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

// Define protected routes
const protectedRoutes = ['/student', '/admin', '/teacher'];

// Create the i18n middleware
const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('jwt');

  // Check if the requested path is a protected route
  // We remove the locale from the pathname to check against our list
  const pathnameWithoutLocale = pathname.replace(/^\/(en|ar)/, '');
  const isProtectedRoute = protectedRoutes.some(route => pathnameWithoutLocale.startsWith(route));

  // If it's a protected route and there's no token, redirect to the landing page
  if (isProtectedRoute && !token) {
    // Redirect to the root, the intlMiddleware will handle the locale prefix
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If the route is not protected or the user is authenticated,
  // proceed with the internationalization middleware.
  return intlMiddleware(request);
}

export const config = {
  // Match all paths except for API routes, static files, and images
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
