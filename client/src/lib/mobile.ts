/**
 * Check if the app is running on a mobile screen size
 * @returns true if screen width is less than 768px, false otherwise
 */
export const isMobilePlatform = (): boolean => {
  if (typeof window === 'undefined') {
    return false; // Default to false during SSR
  }
  return window.innerWidth < 768;
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
 * @returns boolean indicating if running on mobile screen size
 */
export const useMobilePlatform = (): boolean => {
  if (typeof window === 'undefined') {
    return false; // Default to false during SSR
  }
  
  return isMobilePlatform();
};