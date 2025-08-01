/**
 * Hotkey definitions for all roles and global actions
 */

import { 
  Home, 
  Book, 
  Calendar, 
  ClipboardList, 
  BarChart3, 
  Settings,
  University,
  Users,
  GraduationCap,
  Building2
} from 'lucide-react';
import type { Role, NavigationHotkey } from '@/types/hotkeys';

// Global hotkeys that work across all roles
export const GLOBAL_HOTKEYS = {
  COMMAND_PALETTE: 'ctrl+alt+p',
  DASHBOARD: 'ctrl+alt+h', // Same as ctrl+alt+1
  SETTINGS: 'ctrl+alt+s',
  THEME_TOGGLE: 'ctrl+alt+t',
  LANGUAGE_TOGGLE: 'ctrl+alt+l',
  LOGOUT: 'ctrl+shift+q',
  SIDEBAR_UP: 'ctrl+up',
  SIDEBAR_DOWN: 'ctrl+down',
  CLOSE_MODAL: 'escape',
  SUBMIT_FORM: 'enter',
} as const;

// Role-specific navigation mappings based on sidemenudata.ts
export const ROLE_NAVIGATION: Record<Role, NavigationHotkey[]> = {
  student: [
    { key: 'ctrl+alt+1', description: 'Go to Dashboard', href: '/student/{id}', labelKey: 'sidebar.dashboard', icon: Home, number: 1 },
    { key: 'ctrl+alt+2', description: 'Go to Courses', href: '/student/{id}/courses', labelKey: 'sidebar.courses', icon: Book, number: 2 },
    { key: 'ctrl+alt+3', description: 'Go to Assignments', href: '/student/{id}/assignment', labelKey: 'sidebar.assignments', icon: ClipboardList, number: 3 },
    { key: 'ctrl+alt+4', description: 'Go to Grades', href: '/student/{id}/grades', labelKey: 'sidebar.grades', icon: BarChart3, number: 4 },
    { key: 'ctrl+alt+5', description: 'Go to Calendar', href: '/student/{id}/calendar', labelKey: 'sidebar.calendar', icon: Calendar, number: 5 },
    { key: 'ctrl+alt+6', description: 'Go to Sections', href: '/student/{id}/sections', labelKey: 'sidebar.sections', icon: ClipboardList, number: 6 },
    { key: 'ctrl+alt+7', description: 'Go to Settings', href: '/student/{id}/settings', labelKey: 'sidebar.settings', icon: Settings, number: 7 },
  ],
  
  teacher: [
    { key: 'ctrl+alt+1', description: 'Go to Dashboard', href: '/teacher/{id}', labelKey: 'sidebar.dashboard', icon: Home, number: 1 },
    { key: 'ctrl+alt+2', description: 'Go to Courses', href: '/teacher/{id}/courses', labelKey: 'sidebar.courses', icon: Book, number: 2 },
    { key: 'ctrl+alt+3', description: 'Go to Assignments', href: '/teacher/{id}/assignments', labelKey: 'sidebar.assignments', icon: ClipboardList, number: 3 },
    { key: 'ctrl+alt+4', description: 'Go to Sections', href: '/teacher/{id}/sections', labelKey: 'sidebar.sections', icon: ClipboardList, number: 4 },
    { key: 'ctrl+alt+5', description: 'Go to Settings', href: '/teacher/{id}/settings', labelKey: 'sidebar.settings', icon: Settings, number: 5 },
  ],
  
  admin: [
    { key: 'ctrl+alt+1', description: 'Go to Dashboard', href: '/admin/{id}', labelKey: 'sidebar.dashboard', icon: Home, number: 1 },
    { key: 'ctrl+alt+2', description: 'Go to Colleges', href: '/admin/{id}/colleges', labelKey: 'sidebar.colleges', icon: Building2, number: 2 },
    { key: 'ctrl+alt+3', description: 'Go to Departments', href: '/admin/{id}/departments', labelKey: 'sidebar.departments', icon: BarChart3, number: 3 },
    { key: 'ctrl+alt+4', description: 'Go to Courses', href: '/admin/{id}/courses', labelKey: 'sidebar.courses', icon: ClipboardList, number: 4 },
    { key: 'ctrl+alt+5', description: 'Go to Teachers', href: '/admin/{id}/teachers', labelKey: 'sidebar.teachers', icon: Users, number: 5 },
    { key: 'ctrl+alt+6', description: 'Go to Settings', href: '/admin/{id}/settings', labelKey: 'sidebar.settings', icon: Settings, number: 6 },
  ],
  
  'super-admin': [
    { key: 'ctrl+alt+1', description: 'Go to Dashboard', href: '/super-admin/{id}', labelKey: 'sidebar.dashboard', icon: Home, number: 1 },
    { key: 'ctrl+alt+2', description: 'Go to University', href: '/super-admin/{id}/university', labelKey: 'sidebar.university', icon: University, number: 2 },
    { key: 'ctrl+alt+3', description: 'Go to Colleges', href: '/super-admin/{id}/colleges', labelKey: 'sidebar.colleges', icon: Building2, number: 3 },
    { key: 'ctrl+alt+4', description: 'Go to Departments', href: '/super-admin/{id}/departments', labelKey: 'sidebar.departments', icon: BarChart3, number: 4 },
    { key: 'ctrl+alt+5', description: 'Go to Courses', href: '/super-admin/{id}/courses', labelKey: 'sidebar.courses', icon: ClipboardList, number: 5 },
    { key: 'ctrl+alt+6', description: 'Go to Teachers', href: '/super-admin/{id}/teachers', labelKey: 'sidebar.teachers', icon: Users, number: 6 },
    { key: 'ctrl+alt+7', description: 'Go to Students', href: '/super-admin/{id}/students', labelKey: 'sidebar.students', icon: GraduationCap, number: 7 },
    { key: 'ctrl+alt+8', description: 'Go to Settings', href: '/super-admin/{id}/settings', labelKey: 'sidebar.settings', icon: Settings, number: 8 },
  ],
};

// Command categories for the command palette
export const COMMAND_CATEGORIES = {
  NAVIGATION: 'navigation',
  ACTION: 'action',
  UI: 'ui',
} as const;