/**
 * Global hotkey context provider
 */

'use client';

import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { HotkeyContextType, SidebarNavigationState, CommandPaletteItem } from '@/types/hotkeys';
import { useHotkeys } from '@/hooks/useHotkeys';
import { useAuth } from '@/hooks/useAuth';
import { getMaxSidebarIndex, getNavigationItemByIndex, buildHrefWithId } from '@/utils/hotkeyHelpers';

const HotkeyContext = createContext<HotkeyContextType | undefined>(undefined);

interface HotkeyProviderProps {
  children: React.ReactNode;
}

export function HotkeyProvider({ children }: HotkeyProviderProps) {
  const { role, id } = useAuth();
  const router = useRouter();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [sidebarState, setSidebarState] = useState<SidebarNavigationState>({
    currentIndex: 0,
    maxIndex: 0,
    isNavigating: false,
  });

  // Refs for modal and form handling
  const activeModalRef = useRef<HTMLElement | null>(null);
  const activeFormRef = useRef<HTMLFormElement | null>(null);

  // Update max index when role changes
  React.useEffect(() => {
    if (role) {
      const maxIndex = getMaxSidebarIndex(role as any);
      setSidebarState(prev => ({
        ...prev,
        maxIndex,
        currentIndex: Math.min(prev.currentIndex, maxIndex),
      }));
    }
  }, [role]);

  // Command palette handlers
  const openCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(true);
  }, []);

  const closeCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(false);
  }, []);

  // Sidebar navigation handler
  const navigateSidebar = useCallback((direction: 'up' | 'down') => {
    if (!role || !id) return;

    setSidebarState(prev => {
      const newIndex = direction === 'up' 
        ? Math.max(0, prev.currentIndex - 1)
        : Math.min(prev.maxIndex, prev.currentIndex + 1);
      
      // Navigate to the selected item
      const navItem = getNavigationItemByIndex(role as any, newIndex);
      if (navItem) {
        const href = buildHrefWithId(navItem.href, id);
        router.push(href);
      }
      
      return {
        ...prev,
        currentIndex: newIndex,
        isNavigating: true,
      };
    });

    // Reset navigation state after a short delay
    setTimeout(() => {
      setSidebarState(prev => ({ ...prev, isNavigating: false }));
    }, 200);
  }, [role, id, router]);

  // Modal handling
  const handleCloseModal = useCallback(() => {
    // Close command palette first if open
    if (isCommandPaletteOpen) {
      closeCommandPalette();
      return;
    }

    // Try to find and close any open modal/dialog
    const openModal = document.querySelector('[role="dialog"][data-state="open"]') as HTMLElement;
    if (openModal) {
      // Look for close button with various selectors
      const closeButton = openModal.querySelector(
        '[data-dismiss="modal"], [aria-label="Close"], .modal-close, button[aria-label*="close" i], button[title*="close" i]'
      ) as HTMLButtonElement;
      if (closeButton) {
        closeButton.click();
        return;
      }
      
      // Try to trigger escape on the modal itself
      openModal.dispatchEvent(new KeyboardEvent('keydown', { 
        key: 'Escape', 
        bubbles: true, 
        cancelable: true 
      }));
      return;
    }

    // Look for any open dropdowns or popovers
    const openDropdown = document.querySelector('[data-state="open"][role="menu"], [data-state="open"][role="listbox"]') as HTMLElement;
    if (openDropdown) {
      openDropdown.dispatchEvent(new KeyboardEvent('keydown', { 
        key: 'Escape', 
        bubbles: true, 
        cancelable: true 
      }));
      return;
    }

    // Dispatch global escape event as fallback
    document.dispatchEvent(new KeyboardEvent('keydown', { 
      key: 'Escape', 
      bubbles: true, 
      cancelable: true 
    }));
  }, [isCommandPaletteOpen, closeCommandPalette]);

  // Form submission handling
  const handleSubmitForm = useCallback(() => {
    // Don't submit if command palette is open
    if (isCommandPaletteOpen) return;

    // Try to find and submit the active form
    const activeForm = document.querySelector('form:focus-within') as HTMLFormElement;
    if (activeForm) {
      const submitButton = activeForm.querySelector('[type="submit"]') as HTMLButtonElement;
      if (submitButton && !submitButton.disabled) {
        submitButton.click();
        return;
      }
      
      // Try to submit the form directly
      activeForm.requestSubmit();
      return;
    }

    // Look for any submit button in open modals/dialogs
    const openModal = document.querySelector('[role="dialog"][data-state="open"]') as HTMLElement;
    if (openModal) {
      const submitButton = openModal.querySelector(
        '[type="submit"], button[form], .submit-button, button:contains("Submit"), button:contains("Save")'
      ) as HTMLButtonElement;
      if (submitButton && !submitButton.disabled) {
        submitButton.click();
        return;
      }
    }

    // Look for any primary action button in the focused area
    const focusedElement = document.activeElement;
    if (focusedElement) {
      const container = focusedElement.closest('[role="dialog"], form, .modal') as HTMLElement;
      if (container) {
        const primaryButton = container.querySelector(
          'button[data-primary="true"], .btn-primary, button.primary'
        ) as HTMLButtonElement;
        if (primaryButton && !primaryButton.disabled) {
          primaryButton.click();
          return;
        }
      }
    }

    // Dispatch enter key event as fallback
    document.dispatchEvent(new KeyboardEvent('keydown', { 
      key: 'Enter', 
      bubbles: true, 
      cancelable: true 
    }));
  }, [isCommandPaletteOpen]);

  // Initialize hotkeys
  const { getAvailableCommands } = useHotkeys({
    onOpenCommandPalette: openCommandPalette,
    onNavigateSidebar: navigateSidebar,
    onCloseModal: handleCloseModal,
    onSubmitForm: handleSubmitForm,
  });

  // Execute command by ID
  const executeCommand = useCallback((commandId: string) => {
    const commands = getAvailableCommands();
    const command = commands.find(cmd => cmd.id === commandId);
    if (command) {
      command.action();
      closeCommandPalette();
    }
  }, [getAvailableCommands, closeCommandPalette]);

  const contextValue: HotkeyContextType = {
    isCommandPaletteOpen,
    openCommandPalette,
    closeCommandPalette,
    executeCommand,
    getAvailableCommands,
    currentSidebarIndex: sidebarState.currentIndex,
    navigateSidebar,
  };

  return (
    <HotkeyContext.Provider value={contextValue}>
      {children}
    </HotkeyContext.Provider>
  );
}

export function useHotkeyContext(): HotkeyContextType {
  const context = useContext(HotkeyContext);
  if (context === undefined) {
    throw new Error('useHotkeyContext must be used within a HotkeyProvider');
  }
  return context;
}