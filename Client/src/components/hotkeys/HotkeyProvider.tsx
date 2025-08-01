'use client';

import React from 'react';
import { HotkeyProvider as HotkeyContextProvider } from '@/contexts/HotkeyContext';
import { HotkeyStyles } from './HotkeyStyles';
import { CommandPalette } from './CommandPalette';
import { HelpPopup } from './HelpPopup';
import { useGlobalHotkeys } from '@/hooks/useGlobalHotkeys';
import { useFirstVisitHelp } from '@/hooks/useFirstVisitHelp';

interface HotkeyProviderProps {
  children: React.ReactNode;
}

// Inner component that uses the hotkey hooks
const HotkeyManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize global hotkeys
  useGlobalHotkeys();
  
  // Initialize first visit help
  useFirstVisitHelp();

  return (
    <>
      {children}
      <HotkeyStyles />
      <CommandPalette />
      <HelpPopup />
    </>
  );
};

// Main provider component
export const HotkeyProvider: React.FC<HotkeyProviderProps> = ({ children }) => {
  return (
    <HotkeyContextProvider>
      <HotkeyManager>
        {children}
      </HotkeyManager>
    </HotkeyContextProvider>
  );
};