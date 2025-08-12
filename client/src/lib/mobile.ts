import { Capacitor } from '@capacitor/core';

/**
 * Check if the app is running on a native mobile platform
 * @returns true if running on Android/iOS, false if running on web
 */
export const isMobilePlatform = (): boolean => {
  return Capacitor.isNativePlatform();
};

/**
 * Get platform-specific class names for mobile optimization
 * @param mobileClasses - Classes to apply on mobile
 * @param webClasses - Classes to apply on web (optional)
 * @returns Combined class string
 */
export const getPlatformClasses = (
  mobileClasses: string,
  webClasses: string = ''
): string => {
  if (typeof window === 'undefined') {
    // Server-side rendering - return both classes
    return `${webClasses} ${mobileClasses}`;
  }
  
  return isMobilePlatform() ? mobileClasses : webClasses;
};

/**
 * Hook to get mobile platform status (client-side only)
 * @returns boolean indicating if running on mobile
 */
export const useMobilePlatform = (): boolean => {
  if (typeof window === 'undefined') {
    return false; // Default to false during SSR
  }
  
  return isMobilePlatform();
};