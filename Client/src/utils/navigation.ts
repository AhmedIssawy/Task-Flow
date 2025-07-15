/**
 * Navigation utilities for clean URL routing
 * Handles navigation while maintaining locale functionality internally
 */

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

/**
 * Navigate to a path with clean URL (no locale prefix shown)
 * The middleware will handle internal locale routing
 */
export function navigateClean(router: AppRouterInstance, path: string) {
    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    
    // Navigate to clean URL - middleware will handle locale internally
    router.push(cleanPath);
}

/**
 * Replace current URL with clean URL (no locale prefix shown)
 */
export function replaceClean(router: AppRouterInstance, path: string) {
    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    
    // Replace with clean URL - middleware will handle locale internally
    router.replace(cleanPath);
}

/**
 * Get clean pathname without locale prefix
 */
export function getCleanPathname(pathname: string): string {
    // Remove locale prefix if present
    return pathname.replace(/^\/[a-z]{2}/, '') || '/';
}

/**
 * Check if current path matches the given clean path
 */
export function isCurrentPath(currentPathname: string, targetPath: string): boolean {
    const cleanCurrent = getCleanPathname(currentPathname);
    const cleanTarget = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
    
    return cleanCurrent === cleanTarget;
}

/**
 * Get locale from cookie (client-side only)
 */
export function getLocaleFromCookie(): string {
    if (typeof document === 'undefined') return 'en';
    
    const cookieLocale = document.cookie
        .split('; ')
        .find(row => row.startsWith('NEXT_LOCALE='))
        ?.split('=')[1];
    
    return cookieLocale && ['en', 'ar'].includes(cookieLocale) ? cookieLocale : 'en';
}

/**
 * Set locale cookie (client-side only)
 */
export function setLocaleCookie(locale: string) {
    if (typeof document === 'undefined') return;
    
    if (!['en', 'ar'].includes(locale)) {
        console.warn(`Invalid locale: ${locale}. Using 'en' as fallback.`);
        locale = 'en';
    }
    
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}