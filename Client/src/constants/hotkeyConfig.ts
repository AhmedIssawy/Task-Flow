// Hotkey configuration and data
export const HOTKEY_KEYS = {
  // Global Navigation
  SIDEBAR_PREV: 'ctrl+up',
  SIDEBAR_NEXT: 'ctrl+down', 
  SIDEBAR_TOGGLE: 'ctrl+\\',
  
  // Table Navigation
  TABLE_UP: 'ctrl+b',
  TABLE_DOWN: 'ctrl+m',
  
  // Context Actions
  CREATE_NEW: 'ctrl+n',
  EDIT_ITEM: 'ctrl+u', 
  DELETE_ITEM: 'ctrl+d',
  
  // UI Controls
  TOGGLE_THEME: 'ctrl+shift+t',
  TOGGLE_LANGUAGE: 'ctrl+shift+l',
  GO_TO_SETTINGS: 'ctrl+s',
  LOGOUT: 'ctrl+shift+q',
  COMMAND_PALETTE: 'ctrl+k',
  SHOW_HELP: 'ctrl+/',
  ESCAPE: 'escape',
} as const;

export const HOTKEY_DESCRIPTIONS = {
  [HOTKEY_KEYS.SIDEBAR_PREV]: 'Previous sidebar item',
  [HOTKEY_KEYS.SIDEBAR_NEXT]: 'Next sidebar item',
  [HOTKEY_KEYS.SIDEBAR_TOGGLE]: 'Toggle sidebar',
  [HOTKEY_KEYS.TABLE_UP]: 'Navigate up in table',
  [HOTKEY_KEYS.TABLE_DOWN]: 'Navigate down in table', 
  [HOTKEY_KEYS.CREATE_NEW]: 'Create new item',
  [HOTKEY_KEYS.EDIT_ITEM]: 'Edit selected item',
  [HOTKEY_KEYS.DELETE_ITEM]: 'Delete selected item',
  [HOTKEY_KEYS.TOGGLE_THEME]: 'Toggle theme',
  [HOTKEY_KEYS.TOGGLE_LANGUAGE]: 'Toggle language',
  [HOTKEY_KEYS.GO_TO_SETTINGS]: 'Go to settings',
  [HOTKEY_KEYS.LOGOUT]: 'Logout',
  [HOTKEY_KEYS.COMMAND_PALETTE]: 'Open command palette',
  [HOTKEY_KEYS.SHOW_HELP]: 'Show keyboard shortcuts',
  [HOTKEY_KEYS.ESCAPE]: 'Close modal/popup',
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
    { id: 'settings', label: 'Go to Settings', category: 'navigation', action: 'navigate', target: 'settings', hotkey: 'Ctrl+S' },
    { id: 'theme', label: 'Toggle Theme', category: 'ui', action: 'toggle-theme', hotkey: 'Ctrl+Shift+T' },
    { id: 'language', label: 'Toggle Language', category: 'ui', action: 'toggle-language', hotkey: 'Ctrl+Shift+L' },
    { id: 'help', label: 'Show Help', category: 'ui', action: 'show-help', hotkey: 'Ctrl+/' },
    { id: 'logout', label: 'Logout', category: 'ui', action: 'logout', hotkey: 'Ctrl+Shift+Q' },
    { id: 'command-palette', label: 'Open Command Palette', category: 'ui', action: 'command-palette', hotkey: 'Ctrl+K' },
    { id: 'sidebar-toggle', label: 'Toggle Sidebar', category: 'ui', action: 'sidebar-toggle', hotkey: 'Ctrl+\\' },
  ],
  
  student: [
    { id: 'sidebar-prev', label: 'Previous Sidebar Item', category: 'navigation', action: 'sidebar-prev', hotkey: 'Ctrl+↑' },
    { id: 'sidebar-next', label: 'Next Sidebar Item', category: 'navigation', action: 'sidebar-next', hotkey: 'Ctrl+↓' },
  ],
  
  teacher: [
    { id: 'sidebar-prev', label: 'Previous Sidebar Item', category: 'navigation', action: 'sidebar-prev', hotkey: 'Ctrl+↑' },
    { id: 'sidebar-next', label: 'Next Sidebar Item', category: 'navigation', action: 'sidebar-next', hotkey: 'Ctrl+↓' },
    { id: 'table-up', label: 'Navigate Up in Table', category: 'table', action: 'table-up', hotkey: 'Ctrl+B' },
    { id: 'table-down', label: 'Navigate Down in Table', category: 'table', action: 'table-down', hotkey: 'Ctrl+M' },
    { id: 'create-new', label: 'Create New Item', category: 'actions', action: 'create-context', hotkey: 'Ctrl+N' },
    { id: 'edit-item', label: 'Edit Selected Item', category: 'actions', action: 'edit-context', hotkey: 'Ctrl+U' },
    { id: 'delete-item', label: 'Delete Selected Item', category: 'actions', action: 'delete-context', hotkey: 'Ctrl+D' },
  ],
  
  admin: [
    { id: 'sidebar-prev', label: 'Previous Sidebar Item', category: 'navigation', action: 'sidebar-prev', hotkey: 'Ctrl+↑' },
    { id: 'sidebar-next', label: 'Next Sidebar Item', category: 'navigation', action: 'sidebar-next', hotkey: 'Ctrl+↓' },
    { id: 'table-up', label: 'Navigate Up in Table', category: 'table', action: 'table-up', hotkey: 'Ctrl+B' },
    { id: 'table-down', label: 'Navigate Down in Table', category: 'table', action: 'table-down', hotkey: 'Ctrl+M' },
    { id: 'create-new', label: 'Create New Item', category: 'actions', action: 'create-context', hotkey: 'Ctrl+N' },
    { id: 'edit-item', label: 'Edit Selected Item', category: 'actions', action: 'edit-context', hotkey: 'Ctrl+U' },
    { id: 'delete-item', label: 'Delete Selected Item', category: 'actions', action: 'delete-context', hotkey: 'Ctrl+D' },
  ],
  
  'super-admin': [
    { id: 'sidebar-prev', label: 'Previous Sidebar Item', category: 'navigation', action: 'sidebar-prev', hotkey: 'Ctrl+↑' },
    { id: 'sidebar-next', label: 'Next Sidebar Item', category: 'navigation', action: 'sidebar-next', hotkey: 'Ctrl+↓' },
    { id: 'table-up', label: 'Navigate Up in Table', category: 'table', action: 'table-up', hotkey: 'Ctrl+B' },
    { id: 'table-down', label: 'Navigate Down in Table', category: 'table', action: 'table-down', hotkey: 'Ctrl+M' },
    { id: 'create-new', label: 'Create New Item', category: 'actions', action: 'create-context', hotkey: 'Ctrl+N' },
    { id: 'edit-item', label: 'Edit Selected Item', category: 'actions', action: 'edit-context', hotkey: 'Ctrl+U' },
    { id: 'delete-item', label: 'Delete Selected Item', category: 'actions', action: 'delete-context', hotkey: 'Ctrl+D' },
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