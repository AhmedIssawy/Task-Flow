'use client';

import { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';

/**
 * Hook to detect mobile platform and screen size
 * @returns Object with mobile detection states
 */
export const useMobile = () => {
  const [isMobilePlatform, setIsMobilePlatform] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if running on Capacitor (native mobile)
    setIsMobilePlatform(Capacitor.isNativePlatform());

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
    isMobilePlatform,
    isMobileScreen,
    isMobile: isMobilePlatform || isMobileScreen,
    isLoaded,
    platform: Capacitor.getPlatform(),
  };
};