'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect mobile screen size
 * @returns Object with mobile detection states
 */
export const useMobile = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check screen size for mobile breakpoint
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();
    setIsLoaded(true);

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return {
    isMobilePlatform: isMobileScreen,
    isMobileScreen,
    isMobile: isMobileScreen,
    isLoaded,
    platform: 'web',
  };
};