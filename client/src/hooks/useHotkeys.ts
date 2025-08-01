/**
 * Main hotkey management hook
 */

'use client';

import { useHotkeys as useHotkeysHook } from 'react-hotkeys-hook';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { useCallback, useMemo } from 'react';
import { toast } from 'sonner';

import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/hooks/useLanguage';
import { authApi, useLogoutMutation } from '@/store/services/authApi';
import { useAppDispatch } from '@/store/hooks';
import type { Role, CommandPaletteItem } from '@/types/hotkeys';
import { GLOBAL_HOTKEYS } from '@/constants/hotkeyDefinitions';
import { 
  getNavigationHotkeysForRole, 
  buildHrefWithId, 
  getNavigationItemByNumber,
  createNavigationCommands,
  shouldDisableHotkey,
  debounce
} from '@/utils/hotkeyHelpers';

interface UseHotkeysProps {
  onOpenCommandPalette: () => void;
  onNavigateSidebar: (direction: 'up' | 'down') => void;
  onCloseModal?: () => void;
  onSubmitForm?: () => void;
}

export function useHotkeys({
  onOpenCommandPalette,
  onNavigateSidebar,
  onCloseModal,
  onSubmitForm,
}: UseHotkeysProps) {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const { switchLanguage, locale } = useLanguage();
  const { user, role, id } = useAuth();
  const t = useTranslations();
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  // Debounced navigation to prevent rapid firing
  const debouncedNavigate = useMemo(
    () => debounce((href: string) => router.push(href), 100),
    [router]
  );

  // Logout function
  const handleLogout = useCallback(async () => {
    try {
      await logout().unwrap();
      dispatch(authApi.util.resetApiState());
      router.push('/auth/login');
      toast.success(t('auth.logout.success'));
    } catch (err) {
      console.error('Logout failed:', err);
      toast.error(t('auth.logout.error'));
    }
  }, [logout, dispatch, router, t]);

  // Theme toggle
  const handleThemeToggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [setTheme, theme]);

  // Language toggle
  const handleLanguageToggle = useCallback(() => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    switchLanguage(newLocale);
  }, [switchLanguage, locale]);

  // Navigation helpers
  const navigateToRoute = useCallback((href: string) => {
    if (id) {
      const fullHref = buildHrefWithId(href, id);
      debouncedNavigate(fullHref);
    }
  }, [id, debouncedNavigate]);

  const navigateByNumber = useCallback((number: number) => {
    if (role && id) {
      const navItem = getNavigationItemByNumber(role as Role, number);
      if (navItem) {
        navigateToRoute(navItem.href);
      }
    }
  }, [role, id, navigateToRoute]);

  // Global hotkeys - these work across all roles
  useHotkeysHook(GLOBAL_HOTKEYS.COMMAND_PALETTE, onOpenCommandPalette, {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook(GLOBAL_HOTKEYS.DASHBOARD, () => navigateByNumber(1), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook(GLOBAL_HOTKEYS.SETTINGS, () => {
    if (role && id) {
      const settingsHref = `/${role}/${id}/settings`;
      debouncedNavigate(settingsHref);
    }
  }, {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook(GLOBAL_HOTKEYS.THEME_TOGGLE, handleThemeToggle, {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook(GLOBAL_HOTKEYS.LANGUAGE_TOGGLE, handleLanguageToggle, {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook(GLOBAL_HOTKEYS.LOGOUT, handleLogout, {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook(GLOBAL_HOTKEYS.SIDEBAR_UP, () => onNavigateSidebar('up'), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook(GLOBAL_HOTKEYS.SIDEBAR_DOWN, () => onNavigateSidebar('down'), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  // Modal/UI hotkeys
  useHotkeysHook(GLOBAL_HOTKEYS.CLOSE_MODAL, () => {
    if (onCloseModal) onCloseModal();
  }, {
    preventDefault: true,
    enableOnFormTags: true, // Allow in forms to close modals
  });

  useHotkeysHook(GLOBAL_HOTKEYS.SUBMIT_FORM, () => {
    if (onSubmitForm) onSubmitForm();
  }, {
    preventDefault: true,
    enableOnFormTags: true, // Allow in forms for submission
  });

  // Role-specific numbered navigation (Ctrl+Alt+1-8)
  useHotkeysHook('ctrl+alt+1', () => navigateByNumber(1), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook('ctrl+alt+2', () => navigateByNumber(2), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook('ctrl+alt+3', () => navigateByNumber(3), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook('ctrl+alt+4', () => navigateByNumber(4), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook('ctrl+alt+5', () => navigateByNumber(5), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook('ctrl+alt+6', () => navigateByNumber(6), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook('ctrl+alt+7', () => navigateByNumber(7), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeysHook('ctrl+alt+8', () => navigateByNumber(8), {
    preventDefault: true,
    enableOnFormTags: false,
  });

  // Get available commands for command palette
  const getAvailableCommands = useCallback((): CommandPaletteItem[] => {
    if (!role || !id) return [];

    const commands: CommandPaletteItem[] = [];

    // Add navigation commands
    const navigationCommands = createNavigationCommands(
      role as Role,
      id,
      debouncedNavigate,
      t
    );
    commands.push(...navigationCommands);

    // Add global action commands
    commands.push(
      {
        id: 'theme-toggle',
        title: t('hotkeys.toggleTheme'),
        description: 'Switch between light and dark theme',
        hotkey: 'Ctrl+Alt+T',
        category: 'action',
        action: handleThemeToggle,
      },
      {
        id: 'language-toggle',
        title: t('hotkeys.toggleLanguage'),
        description: 'Switch between English and Arabic',
        hotkey: 'Ctrl+Alt+L',
        category: 'action',
        action: handleLanguageToggle,
      },
      {
        id: 'logout',
        title: t('hotkeys.logout'),
        description: 'Sign out of your account',
        hotkey: 'Ctrl+Shift+Q',
        category: 'action',
        action: handleLogout,
      }
    );

    // Add UI commands
    if (onCloseModal) {
      commands.push({
        id: 'close-modal',
        title: t('hotkeys.closeModal'),
        description: 'Close open modal or popup',
        hotkey: 'Esc',
        category: 'ui',
        action: onCloseModal,
      });
    }

    if (onSubmitForm) {
      commands.push({
        id: 'submit-form',
        title: t('hotkeys.submitForm'),
        description: 'Submit current form',
        hotkey: 'Enter',
        category: 'ui',
        action: onSubmitForm,
      });
    }

    return commands;
  }, [role, id, t, debouncedNavigate, handleThemeToggle, handleLanguageToggle, handleLogout, onCloseModal, onSubmitForm]);

  return {
    getAvailableCommands,
    navigateToRoute,
    navigateByNumber,
  };
}