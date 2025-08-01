/**
 * Helper functions for hotkey operations
 */

import type { Role, NavigationHotkey, CommandPaletteItem } from '@/types/hotkeys';
import { ROLE_NAVIGATION, GLOBAL_HOTKEYS } from '@/constants/hotkeyDefinitions';

/**
 * Get navigation hotkeys for a specific role
 */
export function getNavigationHotkeysForRole(role: Role): NavigationHotkey[] {
  return ROLE_NAVIGATION[role] || [];
}

/**
 * Replace {id} placeholder in href with actual user ID
 */
export function buildHrefWithId(href: string, userId: string): string {
  return href.replace('{id}', userId);
}

/**
 * Get the maximum sidebar index for a role (for navigation bounds)
 */
export function getMaxSidebarIndex(role: Role): number {
  const navigation = getNavigationHotkeysForRole(role);
  return Math.max(0, navigation.length - 1);
}

/**
 * Get navigation item by index for a role
 */
export function getNavigationItemByIndex(role: Role, index: number): NavigationHotkey | null {
  const navigation = getNavigationHotkeysForRole(role);
  return navigation[index] || null;
}

/**
 * Get navigation item by number (for Ctrl+Alt+Number shortcuts)
 */
export function getNavigationItemByNumber(role: Role, number: number): NavigationHotkey | null {
  const navigation = getNavigationHotkeysForRole(role);
  return navigation.find(item => item.number === number) || null;
}

/**
 * Check if a hotkey is global (works across all roles)
 */
export function isGlobalHotkey(hotkey: string): boolean {
  return Object.values(GLOBAL_HOTKEYS).includes(hotkey as any);
}

/**
 * Format hotkey for display (e.g., "ctrl+alt+h" -> "Ctrl+Alt+H")
 */
export function formatHotkeyForDisplay(hotkey: string): string {
  return hotkey
    .split('+')
    .map(key => {
      // Capitalize first letter and handle special keys
      switch (key.toLowerCase()) {
        case 'ctrl': return 'Ctrl';
        case 'alt': return 'Alt';
        case 'shift': return 'Shift';
        case 'meta': return 'Cmd';
        case 'escape': return 'Esc';
        case 'enter': return 'Enter';
        case 'up': return '↑';
        case 'down': return '↓';
        case 'left': return '←';
        case 'right': return '→';
        default: return key.toUpperCase();
      }
    })
    .join('+');
}

/**
 * Create command palette items from navigation hotkeys
 */
export function createNavigationCommands(
  role: Role, 
  userId: string, 
  navigate: (href: string) => void,
  t: (key: string) => string
): CommandPaletteItem[] {
  const navigation = getNavigationHotkeysForRole(role);
  
  return navigation.map(item => ({
    id: `nav-${item.number}`,
    title: t(item.labelKey),
    description: item.description,
    hotkey: formatHotkeyForDisplay(item.key),
    category: 'navigation' as const,
    action: () => navigate(buildHrefWithId(item.href, userId)),
    icon: item.icon,
  }));
}

/**
 * Debounce function for hotkey actions
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Check if hotkey should be disabled (e.g., when typing in input fields)
 */
export function shouldDisableHotkey(event: KeyboardEvent): boolean {
  const target = event.target as HTMLElement;
  const tagName = target.tagName.toLowerCase();
  const isContentEditable = target.contentEditable === 'true';
  
  // Disable hotkeys when typing in form elements
  return (
    tagName === 'input' ||
    tagName === 'textarea' ||
    tagName === 'select' ||
    isContentEditable ||
    target.closest('[role="textbox"]') !== null
  );
}