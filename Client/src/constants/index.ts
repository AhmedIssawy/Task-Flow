// Application constants for Task Flow

export const APP_CONFIG = {
    name: 'Task Flow',
    version: '1.0.0',
    description: 'Student Management System',
    author: 'Task Flow Team',
    defaultLanguage: 'en' as const,
    supportedLanguages: ['en', 'ar'] as const,
    defaultTheme: 'system' as const,
    supportedThemes: ['light', 'dark', 'system'] as const,
} as const

export const API_CONFIG = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
    timeout: 30000,
    retries: 3,
} as const

export const ROUTES = {
    home: '/',
    login: '/auth/login',
    register: '/auth/register',
    dashboard: '/dashboard',
    students: '/students',
    teachers: '/teachers',
    universities: '/universities',
    admin: '/admin',
    profile: '/profile',
    settings: '/settings',
} as const

export const USER_ROLES = {
    STUDENT: 'student',
    TEACHER: 'teacher',
    ADMIN: 'admin',
} as const

export const PERMISSIONS = {
    // Student permissions
    VIEW_PROFILE: 'view_profile',
    EDIT_PROFILE: 'edit_profile',

    // Teacher permissions
    VIEW_STUDENTS: 'view_students',
    MANAGE_STUDENTS: 'manage_students',

    // Admin permissions
    VIEW_ALL_USERS: 'view_all_users',
    MANAGE_ALL_USERS: 'manage_all_users',
    MANAGE_UNIVERSITIES: 'manage_universities',
    SYSTEM_SETTINGS: 'system_settings',
} as const

export const PAGINATION = {
    defaultPage: 1,
    defaultLimit: 10,
    maxLimit: 100,
    pageSizeOptions: [10, 25, 50, 100],
} as const

export const VALIDATION = {
    password: {
        minLength: 8,
        maxLength: 128,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true,
    },
    email: {
        maxLength: 254,
    },
    name: {
        minLength: 2,
        maxLength: 100,
    },
} as const

export const LOCAL_STORAGE_KEYS = {
    language: 'language',
    theme: 'theme',
    user: 'user',
    token: 'token',
    preferences: 'preferences',
} as const

export const SESSION_STORAGE_KEYS = {
    redirectUrl: 'redirectUrl',
    formData: 'formData',
} as const
