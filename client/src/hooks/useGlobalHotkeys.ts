'use client';

import { useHotkeys } from 'react-hotkeys-hook';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useHotkeyContext } from '@/contexts/HotkeyContext';
import { useAuth } from './useAuth';
import { useLanguage } from './useLanguage';
import { HOTKEY_KEYS } from '@/constants/hotkeyConfig';
import { navItemsData } from '@/constants/sideMenuData';
import { useVisualFeedback } from './useHotkeys';
import { useCallback, useEffect, useMemo } from 'react';

export const useGlobalHotkeys = () => {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const { 
    isHotkeyEnabled, 
    openHelp, 
    openCommandPalette, 
    closeHelp, 
    closeCommandPalette,
    currentSidebarIndex,
    setCurrentSidebarIndex,
    isHelpOpen,
    isCommandPaletteOpen
  } = useHotkeyContext();
  
  const { role, id } = useAuth();
  const { switchLanguage, availableLocales, locale } = useLanguage();
  const { showFeedback } = useVisualFeedback();

  // Get current navigation items
  const getNavItems = role ? navItemsData[role.replace(/-/g, '') as keyof typeof navItemsData] : null;
  const navItems = useMemo(() => {
    return getNavItems && id ? getNavItems(id) : [];
  }, [getNavItems, id]);

  // Sidebar navigation functions
  const navigateToSidebarItem = useCallback((index: number) => {
    if (navItems[index]) {
      const targetElement = document.querySelector(`[href="${navItems[index].href}"]`);
      if (targetElement) {
        showFeedback(targetElement as HTMLElement, 'highlight');
      }
      router.push(navItems[index].href);
      setCurrentSidebarIndex(index);
    }
  }, [navItems, router, setCurrentSidebarIndex, showFeedback]);

  const navigateSidebarPrev = useCallback(() => {
    const newIndex = currentSidebarIndex > 0 ? currentSidebarIndex - 1 : navItems.length - 1;
    navigateToSidebarItem(newIndex);
  }, [currentSidebarIndex, navItems.length, navigateToSidebarItem]);

  const navigateSidebarNext = useCallback(() => {
    const newIndex = currentSidebarIndex < navItems.length - 1 ? currentSidebarIndex + 1 : 0;
    navigateToSidebarItem(newIndex);
  }, [currentSidebarIndex, navItems.length, navigateToSidebarItem]);

  // Sidebar toggle function
  const toggleSidebar = useCallback(() => {
    const sidebar = document.querySelector('aside');
    const toggleButton = document.querySelector('[data-sidebar-toggle]');
    
    if (sidebar) {
      sidebar.classList.toggle('hidden');
      showFeedback(sidebar, 'highlight');
    }
    
    if (toggleButton) {
      (toggleButton as HTMLElement).click();
    }
  }, [showFeedback]);

  // Theme toggle function
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    const themeButton = document.querySelector('[data-theme-toggle]');
    if (themeButton) {
      showFeedback(themeButton as HTMLElement, 'success');
    }
  }, [theme, setTheme, showFeedback]);

  // Language toggle function
  const toggleLanguageHandler = useCallback(() => {
    // Toggle between available languages
    const currentIndex = availableLocales.findIndex(lang => lang.code === locale);
    const nextIndex = (currentIndex + 1) % availableLocales.length;
    const nextLocale = availableLocales[nextIndex];
    
    if (nextLocale) {
      switchLanguage(nextLocale.code);
    }
    
    const langButton = document.querySelector('[data-language-toggle]');
    if (langButton) {
      showFeedback(langButton as HTMLElement, 'success');
    }
  }, [switchLanguage, availableLocales, locale, showFeedback]);

  // Escape handler
  const handleEscape = useCallback(() => {
    if (isHelpOpen) {
      closeHelp();
    } else if (isCommandPaletteOpen) {
      closeCommandPalette();
    } else {
      // Close any open modals, dropdowns, etc.
      const modals = document.querySelectorAll('[role="dialog"]');
      const dropdowns = document.querySelectorAll('[data-state="open"]');
      
      modals.forEach(modal => {
        const closeButton = modal.querySelector('[data-close]');
        if (closeButton) {
          (closeButton as HTMLElement).click();
        }
      });
      
      dropdowns.forEach(dropdown => {
        const trigger = document.querySelector(`[aria-controls="${dropdown.id}"]`);
        if (trigger) {
          (trigger as HTMLElement).click();
        }
      });
    }
  }, [isHelpOpen, isCommandPaletteOpen, closeHelp, closeCommandPalette]);

  // Register global hotkeys - removed duplicate registrations

  // Go to settings function
  const goToSettings = useCallback(() => {
    if (role && id) {
      const settingsPath = `/${role}/${id}/settings`;
      router.push(settingsPath);
      
      const settingsButton = document.querySelector('[href*="settings"]');
      if (settingsButton) {
        showFeedback(settingsButton as HTMLElement, 'highlight');
      }
    }
  }, [role, id, router, showFeedback]);

  // Logout function
  const logoutHandler = useCallback(() => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      // Clear any stored authentication data
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('auth');
      sessionStorage.clear();
      
      // Navigate to login page
      router.push('/auth/login');
      
      // Force page reload to clear any cached state
      window.location.href = '/auth/login';
    }
  }, [router]);

  // Register global hotkeys with preventDefault to avoid browser conflicts
  useHotkeys(HOTKEY_KEYS.SIDEBAR_PREV, navigateSidebarPrev, {
    enabled: isHotkeyEnabled && !isHelpOpen && !isCommandPaletteOpen,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.SIDEBAR_NEXT, navigateSidebarNext, {
    enabled: isHotkeyEnabled && !isHelpOpen && !isCommandPaletteOpen,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.TOGGLE_THEME, toggleTheme, {
    enabled: isHotkeyEnabled && !isHelpOpen && !isCommandPaletteOpen,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.TOGGLE_LANGUAGE, toggleLanguageHandler, {
    enabled: isHotkeyEnabled && !isHelpOpen && !isCommandPaletteOpen,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.GO_TO_SETTINGS, goToSettings, {
    enabled: isHotkeyEnabled && !isHelpOpen && !isCommandPaletteOpen,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.LOGOUT, logoutHandler, {
    enabled: isHotkeyEnabled && !isHelpOpen && !isCommandPaletteOpen,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.SHOW_HELP, openHelp, {
    enabled: isHotkeyEnabled,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.COMMAND_PALETTE, openCommandPalette, {
    enabled: isHotkeyEnabled && !isHelpOpen,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.ESCAPE, handleEscape, {
    enabled: isHotkeyEnabled,
    preventDefault: true,
    enableOnFormTags: true, // Allow escape in forms
  });

  // Update current sidebar index based on current route
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentIndex = navItems.findIndex(item => {
      // More precise matching to avoid double movements
      return currentPath === item.href || currentPath.endsWith(item.href.split('/').pop() || '');
    });
    if (currentIndex !== -1 && currentIndex !== currentSidebarIndex) {
      setCurrentSidebarIndex(currentIndex);
    }
  }, [navItems, setCurrentSidebarIndex, currentSidebarIndex]);

  return {
    navigateToSidebarItem,
    toggleSidebar,
    toggleTheme,
    toggleLanguage: toggleLanguageHandler,
  };
};