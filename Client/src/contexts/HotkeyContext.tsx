'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { useHotkeyEnabled } from '@/hooks/useHotkeys';

interface HotkeyContextType {
  isHelpOpen: boolean;
  isCommandPaletteOpen: boolean;
  selectedTableIndex: number;
  currentSidebarIndex: number;
  recentCommands: string[];
  
  // Actions
  openHelp: () => void;
  closeHelp: () => void;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  setSelectedTableIndex: (index: number) => void;
  setCurrentSidebarIndex: (index: number) => void;
  addRecentCommand: (command: string) => void;
  
  // State
  isHotkeyEnabled: boolean;
}

const HotkeyContext = createContext<HotkeyContextType | undefined>(undefined);

export const useHotkeyContext = () => {
  const context = useContext(HotkeyContext);
  if (!context) {
    throw new Error('useHotkeyContext must be used within a HotkeyProvider');
  }
  return context;
};

interface HotkeyProviderProps {
  children: ReactNode;
}

export const HotkeyProvider: React.FC<HotkeyProviderProps> = ({ children }) => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedTableIndex, setSelectedTableIndex] = useState(-1);
  const [currentSidebarIndex, setCurrentSidebarIndex] = useState(0);
  const [recentCommands, setRecentCommands] = useState<string[]>([]);
  
  const isHotkeyEnabled = useHotkeyEnabled();

  const openHelp = useCallback(() => {
    if (isHotkeyEnabled) {
      setIsHelpOpen(true);
      setIsCommandPaletteOpen(false);
    }
  }, [isHotkeyEnabled]);

  const closeHelp = useCallback(() => {
    setIsHelpOpen(false);
  }, []);

  const openCommandPalette = useCallback(() => {
    if (isHotkeyEnabled) {
      setIsCommandPaletteOpen(true);
      setIsHelpOpen(false);
    }
  }, [isHotkeyEnabled]);

  const closeCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(false);
  }, []);

  const addRecentCommand = useCallback((command: string) => {
    setRecentCommands(prev => {
      const filtered = prev.filter(cmd => cmd !== command);
      return [command, ...filtered].slice(0, 5); // Keep only 5 recent commands
    });
  }, []);

  const value: HotkeyContextType = {
    isHelpOpen,
    isCommandPaletteOpen,
    selectedTableIndex,
    currentSidebarIndex,
    recentCommands,
    
    openHelp,
    closeHelp,
    openCommandPalette,
    closeCommandPalette,
    setSelectedTableIndex,
    setCurrentSidebarIndex,
    addRecentCommand,
    
    isHotkeyEnabled,
  };

  return (
    <HotkeyContext.Provider value={value}>
      {children}
    </HotkeyContext.Provider>
  );
};