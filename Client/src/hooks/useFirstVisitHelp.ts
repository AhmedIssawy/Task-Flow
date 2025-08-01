'use client';

import { useEffect, useState } from 'react';
import { useHotkeyContext } from '@/contexts/HotkeyContext';

const FIRST_VISIT_KEY = 'hotkeys-first-visit-shown';

export const useFirstVisitHelp = () => {
  const { openHelp, isHotkeyEnabled } = useHotkeyContext();
  const [hasShownFirstVisit, setHasShownFirstVisit] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasShown = localStorage.getItem(FIRST_VISIT_KEY);
    
    if (!hasShown && isHotkeyEnabled) {
      setHasShownFirstVisit(false);
      
      // Show help after a short delay to let the page load
      const timer = setTimeout(() => {
        openHelp();
        localStorage.setItem(FIRST_VISIT_KEY, 'true');
        setHasShownFirstVisit(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [openHelp, isHotkeyEnabled]);

  const resetFirstVisit = () => {
    localStorage.removeItem(FIRST_VISIT_KEY);
    setHasShownFirstVisit(false);
  };

  return {
    hasShownFirstVisit,
    resetFirstVisit,
  };
};