/**
 * TypeScript interfaces for the hotkey system
 */

import type { LucideIcon } from 'lucide-react';

export type Role = 'student' | 'teacher' | 'admin' | 'super-admin';

export interface HotkeyDefinition {
  key: string;
  description: string;
  action: () => void;
  category: 'navigation' | 'action' | 'ui';
  global?: boolean; // If true, works across all roles
  roles?: Role[]; // If specified, only works for these roles
}

export interface NavigationHotkey {
  key: string;
  description: string;
  href: string;
  labelKey: string;
  icon: LucideIcon;
  number?: number; // For numbered navigation (Ctrl+Alt+1, etc.)
}

export interface CommandPaletteItem {
  id: string;
  title: string;
  description: string;
  hotkey: string;
  category: 'navigation' | 'action' | 'ui';
  action: () => void;
  icon?: LucideIcon;
}

export interface HotkeyContextType {
  isCommandPaletteOpen: boolean;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  executeCommand: (commandId: string) => void;
  getAvailableCommands: () => CommandPaletteItem[];
  currentSidebarIndex: number;
  navigateSidebar: (direction: 'up' | 'down') => void;
}

export interface SidebarNavigationState {
  currentIndex: number;
  maxIndex: number;
  isNavigating: boolean;
}