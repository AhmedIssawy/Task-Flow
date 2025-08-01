// Hotkey configuration and data
export const HOTKEY_KEYS = {
  // Global Navigation
  SIDEBAR_PREV: 'ctrl+shift+up',
  SIDEBAR_NEXT: 'ctrl+shift+down', 
  
  // UI Controls
  TOGGLE_THEME: 'ctrl+alt+t', // Changed to avoid browser conflicts
  TOGGLE_LANGUAGE: 'ctrl+shift+l',
  GO_TO_SETTINGS: 'ctrl+shift+s',
  LOGOUT: 'ctrl+shift+q',
  COMMAND_PALETTE: 'ctrl+shift+k',
  SHOW_HELP: 'f1', // Changed to F1 key (standard help key)
  ESCAPE: 'escape',
  ENTER: 'enter', // Added for popup submission
} as const;

export const HOTKEY_DESCRIPTIONS = {
  [HOTKEY_KEYS.SIDEBAR_PREV]: 'Previous sidebar item',
  [HOTKEY_KEYS.SIDEBAR_NEXT]: 'Next sidebar item',
  [HOTKEY_KEYS.TOGGLE_THEME]: 'Toggle theme',
  [HOTKEY_KEYS.TOGGLE_LANGUAGE]: 'Toggle language',
  [HOTKEY_KEYS.GO_TO_SETTINGS]: 'Go to settings',
  [HOTKEY_KEYS.LOGOUT]: 'Logout',
  [HOTKEY_KEYS.COMMAND_PALETTE]: 'Open command palette',
  [HOTKEY_KEYS.SHOW_HELP]: 'Show keyboard shortcuts',
  [HOTKEY_KEYS.ESCAPE]: 'Close modal/popup',
  [HOTKEY_KEYS.ENTER]: 'Submit form/popup',
} as const;

export const HOTKEY_CATEGORIES = {
  NAVIGATION: 'navigation',
  ACTIONS: 'actions', 
  UI: 'ui',
  TABLE: 'table'
} as const;

// Role-based command palette data - Only unique actions with hotkeys
export const COMMAND_PALETTE_DATA = {
  global: [
    { id: 'settings', label: 'Go to Settings', category: 'navigation', action: 'navigate', target: 'settings', hotkey: 'Ctrl+Shift+S' },
    { id: 'theme', label: 'Toggle Theme', category: 'ui', action: 'toggle-theme', hotkey: 'Ctrl+Alt+T' },
    { id: 'language', label: 'Toggle Language', category: 'ui', action: 'toggle-language', hotkey: 'Ctrl+Shift+L' },
    { id: 'help', label: 'Show Help', category: 'ui', action: 'show-help', hotkey: 'F1' },
    { id: 'logout', label: 'Logout', category: 'ui', action: 'logout', hotkey: 'Ctrl+Shift+Q' },
    { id: 'command-palette', label: 'Open Command Palette', category: 'ui', action: 'command-palette', hotkey: 'Ctrl+Shift+K' },
  ],
  
  student: [
    { id: 'sidebar-prev', label: 'Previous Sidebar Item', category: 'navigation', action: 'sidebar-prev', hotkey: 'Ctrl+Shift+↑' },
    { id: 'sidebar-next', label: 'Next Sidebar Item', category: 'navigation', action: 'sidebar-next', hotkey: 'Ctrl+Shift+↓' },
  ],
  
  teacher: [
    { id: 'sidebar-prev', label: 'Previous Sidebar Item', category: 'navigation', action: 'sidebar-prev', hotkey: 'Ctrl+Shift+↑' },
    { id: 'sidebar-next', label: 'Next Sidebar Item', category: 'navigation', action: 'sidebar-next', hotkey: 'Ctrl+Shift+↓' },
  ],
  
  admin: [
    { id: 'sidebar-prev', label: 'Previous Sidebar Item', category: 'navigation', action: 'sidebar-prev', hotkey: 'Ctrl+Shift+↑' },
    { id: 'sidebar-next', label: 'Next Sidebar Item', category: 'navigation', action: 'sidebar-next', hotkey: 'Ctrl+Shift+↓' },
  ],
  
  'super-admin': [
    { id: 'sidebar-prev', label: 'Previous Sidebar Item', category: 'navigation', action: 'sidebar-prev', hotkey: 'Ctrl+Shift+↑' },
    { id: 'sidebar-next', label: 'Next Sidebar Item', category: 'navigation', action: 'sidebar-next', hotkey: 'Ctrl+Shift+↓' },
  ],
} as const;

// Context-specific actions mapping
export const CONTEXT_ACTIONS = {
  students: {
    create: 'Create New Student',
    edit: 'Edit Student', 
    delete: 'Delete Student'
  },
  teachers: {
    create: 'Create New Teacher',
    edit: 'Edit Teacher',
    delete: 'Delete Teacher'
  },
  courses: {
    create: 'Create New Course', 
    edit: 'Edit Course',
    delete: 'Delete Course'
  },
  assignments: {
    create: 'Create New Assignment',
    edit: 'Edit Assignment', 
    delete: 'Delete Assignment'
  },
  sections: {
    create: 'Create New Section',
    edit: 'Edit Section',
    delete: 'Delete Section'
  },
  colleges: {
    create: 'Create New College',
    edit: 'Edit College',
    delete: 'Delete College'
  },
  departments: {
    create: 'Create New Department', 
    edit: 'Edit Department',
    delete: 'Delete Department'
  },
  university: {
    create: 'Create New University',
    edit: 'Edit University',
    delete: 'Delete University'
  }
} as const;