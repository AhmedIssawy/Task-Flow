import { RoleEnum } from '../store/slices/authSlice';

// Type definitions for role filters
export type Role = keyof typeof RoleEnum;
export type Permission = string;
export type AccessLevel = 'read' | 'write' | 'delete' | 'admin';

// Role hierarchy levels (lower number = higher privilege)
export const ROLE_HIERARCHY: Record<Role, number> = {
    SUPER_ADMIN: 0,
    ADMIN: 1,
    TEACHER: 2,
    STUDENT: 3,
};

// Role display names for UI
export const ROLE_DISPLAY_NAMES: Record<Role, string> = {
    SUPER_ADMIN: 'Super Administrator',
    ADMIN: 'Administrator',
    TEACHER: 'Teacher',
    STUDENT: 'Student',
};

// Role colors for UI components
export const ROLE_COLORS: Record<Role, { bg: string; text: string; border: string }> = {
    SUPER_ADMIN: {
        bg: 'bg-red-100 dark:bg-red-900/20',
        text: 'text-red-800 dark:text-red-200',
        border: 'border-red-300 dark:border-red-700',
    },
    ADMIN: {
        bg: 'bg-purple-100 dark:bg-purple-900/20',
        text: 'text-purple-800 dark:text-purple-200',
        border: 'border-purple-300 dark:border-purple-700',
    },
    TEACHER: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-800 dark:text-blue-200',
        border: 'border-blue-300 dark:border-blue-700',
    },
    STUDENT: {
        bg: 'bg-green-100 dark:bg-green-900/20',
        text: 'text-green-800 dark:text-green-200',
        border: 'border-green-300 dark:border-green-700',
    },
};

// Permissions system
export const PERMISSIONS = {
    // User management
    USER_CREATE: 'user:create',
    USER_READ: 'user:read',
    USER_UPDATE: 'user:update',
    USER_DELETE: 'user:delete',

    // University hierarchy management
    UNIVERSITY_CREATE: 'university:create',
    UNIVERSITY_READ: 'university:read',
    UNIVERSITY_UPDATE: 'university:update',
    UNIVERSITY_DELETE: 'university:delete',

    COLLEGE_CREATE: 'college:create',
    COLLEGE_READ: 'college:read',
    COLLEGE_UPDATE: 'college:update',
    COLLEGE_DELETE: 'college:delete',

    DEPARTMENT_CREATE: 'department:create',
    DEPARTMENT_READ: 'department:read',
    DEPARTMENT_UPDATE: 'department:update',
    DEPARTMENT_DELETE: 'department:delete',

    // Course management
    COURSE_CREATE: 'course:create',
    COURSE_READ: 'course:read',
    COURSE_UPDATE: 'course:update',
    COURSE_DELETE: 'course:delete',
    COURSE_ENROLL: 'course:enroll',

    // Assignment management
    ASSIGNMENT_CREATE: 'assignment:create',
    ASSIGNMENT_READ: 'assignment:read',
    ASSIGNMENT_UPDATE: 'assignment:update',
    ASSIGNMENT_DELETE: 'assignment:delete',
    ASSIGNMENT_SUBMIT: 'assignment:submit',
    ASSIGNMENT_GRADE: 'assignment:grade',

    // Grading system
    GRADE_CREATE: 'grade:create',
    GRADE_READ: 'grade:read',
    GRADE_UPDATE: 'grade:update',
    GRADE_DELETE: 'grade:delete',
    GRADE_VIEW_ALL: 'grade:view_all',

    // Analytics and reports
    ANALYTICS_VIEW: 'analytics:view',
    REPORTS_GENERATE: 'reports:generate',
    SYSTEM_STATS: 'system:stats',

    // Settings and configuration
    SETTINGS_SYSTEM: 'settings:system',
    SETTINGS_UNIVERSITY: 'settings:university',
    SETTINGS_PERSONAL: 'settings:personal',
} as const;

// Role-based permissions mapping
export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
    SUPER_ADMIN: [
        // Full system access
        PERMISSIONS.USER_CREATE,
        PERMISSIONS.USER_READ,
        PERMISSIONS.USER_UPDATE,
        PERMISSIONS.USER_DELETE,

        PERMISSIONS.UNIVERSITY_CREATE,
        PERMISSIONS.UNIVERSITY_READ,
        PERMISSIONS.UNIVERSITY_UPDATE,
        PERMISSIONS.UNIVERSITY_DELETE,

        PERMISSIONS.COLLEGE_CREATE,
        PERMISSIONS.COLLEGE_READ,
        PERMISSIONS.COLLEGE_UPDATE,
        PERMISSIONS.COLLEGE_DELETE,

        PERMISSIONS.DEPARTMENT_CREATE,
        PERMISSIONS.DEPARTMENT_READ,
        PERMISSIONS.DEPARTMENT_UPDATE,
        PERMISSIONS.DEPARTMENT_DELETE,

        PERMISSIONS.COURSE_CREATE,
        PERMISSIONS.COURSE_READ,
        PERMISSIONS.COURSE_UPDATE,
        PERMISSIONS.COURSE_DELETE,

        PERMISSIONS.ASSIGNMENT_CREATE,
        PERMISSIONS.ASSIGNMENT_READ,
        PERMISSIONS.ASSIGNMENT_UPDATE,
        PERMISSIONS.ASSIGNMENT_DELETE,
        PERMISSIONS.ASSIGNMENT_GRADE,

        PERMISSIONS.GRADE_CREATE,
        PERMISSIONS.GRADE_READ,
        PERMISSIONS.GRADE_UPDATE,
        PERMISSIONS.GRADE_DELETE,
        PERMISSIONS.GRADE_VIEW_ALL,

        PERMISSIONS.ANALYTICS_VIEW,
        PERMISSIONS.REPORTS_GENERATE,
        PERMISSIONS.SYSTEM_STATS,

        PERMISSIONS.SETTINGS_SYSTEM,
        PERMISSIONS.SETTINGS_UNIVERSITY,
        PERMISSIONS.SETTINGS_PERSONAL,
    ],

    ADMIN: [
        // University-level administration
        PERMISSIONS.USER_CREATE,
        PERMISSIONS.USER_READ,
        PERMISSIONS.USER_UPDATE,
        PERMISSIONS.USER_DELETE,

        PERMISSIONS.UNIVERSITY_READ,
        PERMISSIONS.UNIVERSITY_UPDATE,

        PERMISSIONS.COLLEGE_CREATE,
        PERMISSIONS.COLLEGE_READ,
        PERMISSIONS.COLLEGE_UPDATE,
        PERMISSIONS.COLLEGE_DELETE,

        PERMISSIONS.DEPARTMENT_CREATE,
        PERMISSIONS.DEPARTMENT_READ,
        PERMISSIONS.DEPARTMENT_UPDATE,
        PERMISSIONS.DEPARTMENT_DELETE,

        PERMISSIONS.COURSE_CREATE,
        PERMISSIONS.COURSE_READ,
        PERMISSIONS.COURSE_UPDATE,
        PERMISSIONS.COURSE_DELETE,

        PERMISSIONS.ASSIGNMENT_READ,
        PERMISSIONS.ASSIGNMENT_UPDATE,

        PERMISSIONS.GRADE_READ,
        PERMISSIONS.GRADE_VIEW_ALL,

        PERMISSIONS.ANALYTICS_VIEW,
        PERMISSIONS.REPORTS_GENERATE,

        PERMISSIONS.SETTINGS_UNIVERSITY,
        PERMISSIONS.SETTINGS_PERSONAL,
    ],

    TEACHER: [
        // Course and assignment management
        PERMISSIONS.USER_READ, // Limited to enrolled students

        PERMISSIONS.COURSE_READ,
        PERMISSIONS.COURSE_UPDATE, // Only assigned courses

        PERMISSIONS.ASSIGNMENT_CREATE,
        PERMISSIONS.ASSIGNMENT_READ,
        PERMISSIONS.ASSIGNMENT_UPDATE,
        PERMISSIONS.ASSIGNMENT_DELETE,
        PERMISSIONS.ASSIGNMENT_GRADE,

        PERMISSIONS.GRADE_CREATE,
        PERMISSIONS.GRADE_READ,
        PERMISSIONS.GRADE_UPDATE,
        PERMISSIONS.GRADE_DELETE,

        PERMISSIONS.ANALYTICS_VIEW, // Limited to own courses

        PERMISSIONS.SETTINGS_PERSONAL,
    ],

    STUDENT: [
        // Basic student access
        PERMISSIONS.COURSE_READ,
        PERMISSIONS.COURSE_ENROLL,

        PERMISSIONS.ASSIGNMENT_READ,
        PERMISSIONS.ASSIGNMENT_SUBMIT,

        PERMISSIONS.GRADE_READ, // Only own grades

        PERMISSIONS.SETTINGS_PERSONAL,
    ],
};

// Navigation filters based on role
export const NAVIGATION_FILTERS: Record<Role, string[]> = {
    SUPER_ADMIN: [
        'dashboard',
        'users',
        'universities',
        'colleges',
        'departments',
        'courses',
        'assignments',
        'grades',
        'analytics',
        'settings',
        'system-logs',
    ],
    ADMIN: [
        'dashboard',
        'users',
        'colleges',
        'departments',
        'courses',
        'assignments',
        'grades',
        'analytics',
        'settings',
    ],
    TEACHER: [
        'dashboard',
        'courses',
        'assignments',
        'grades',
        'students',
        'analytics',
        'settings',
    ],
    STUDENT: [
        'dashboard',
        'courses',
        'assignments',
        'grades',
        'settings',
    ],
};

// Data visibility filters
export const DATA_VISIBILITY_FILTERS: Record<Role, {
    canViewAllUsers: boolean;
    canViewAllCourses: boolean;
    canViewAllGrades: boolean;
    canViewSystemStats: boolean;
    canViewFinancials: boolean;
}> = {
    SUPER_ADMIN: {
        canViewAllUsers: true,
        canViewAllCourses: true,
        canViewAllGrades: true,
        canViewSystemStats: true,
        canViewFinancials: true,
    },
    ADMIN: {
        canViewAllUsers: true, // Within university
        canViewAllCourses: true, // Within university
        canViewAllGrades: true, // Within university
        canViewSystemStats: false,
        canViewFinancials: true,
    },
    TEACHER: {
        canViewAllUsers: false, // Only enrolled students
        canViewAllCourses: false, // Only assigned courses
        canViewAllGrades: false, // Only own course grades
        canViewSystemStats: false,
        canViewFinancials: false,
    },
    STUDENT: {
        canViewAllUsers: false,
        canViewAllCourses: false, // Only enrolled courses
        canViewAllGrades: false, // Only own grades
        canViewSystemStats: false,
        canViewFinancials: false,
    },
};

// Action filters for UI components
export const ACTION_FILTERS: Record<Role, {
    canCreate: string[];
    canEdit: string[];
    canDelete: string[];
    canExport: string[];
}> = {
    SUPER_ADMIN: {
        canCreate: ['users', 'universities', 'colleges', 'departments', 'courses', 'assignments'],
        canEdit: ['users', 'universities', 'colleges', 'departments', 'courses', 'assignments', 'grades'],
        canDelete: ['users', 'universities', 'colleges', 'departments', 'courses', 'assignments'],
        canExport: ['users', 'courses', 'assignments', 'grades', 'analytics'],
    },
    ADMIN: {
        canCreate: ['users', 'colleges', 'departments', 'courses'],
        canEdit: ['users', 'colleges', 'departments', 'courses'],
        canDelete: ['users', 'colleges', 'departments', 'courses'],
        canExport: ['users', 'courses', 'assignments', 'grades'],
    },
    TEACHER: {
        canCreate: ['assignments'],
        canEdit: ['assignments', 'grades'],
        canDelete: ['assignments'],
        canExport: ['assignments', 'grades'],
    },
    STUDENT: {
        canCreate: [],
        canEdit: [],
        canDelete: [],
        canExport: [],
    },
};

// Utility functions for role checking
export const roleUtils = {
    /**
     * Check if a role has a specific permission
     */
    hasPermission: (role: Role | null, permission: Permission): boolean => {
        if (!role) return false;
        return ROLE_PERMISSIONS[role].includes(permission);
    },

    /**
     * Check if a role has higher or equal privilege than another role
     */
    hasHigherOrEqualPrivilege: (role: Role | null, targetRole: Role): boolean => {
        if (!role) return false;
        return ROLE_HIERARCHY[role] <= ROLE_HIERARCHY[targetRole];
    },

    /**
     * Get all roles with lower privilege than the given role
     */
    getLowerPrivilegeRoles: (role: Role): Role[] => {
        const currentLevel = ROLE_HIERARCHY[role];
        return Object.entries(ROLE_HIERARCHY)
            .filter(([_, level]) => level > currentLevel)
            .map(([roleName]) => roleName as Role);
    },

    /**
     * Check if a role can access a navigation item
     */
    canAccessNavigation: (role: Role | null, navItem: string): boolean => {
        if (!role) return false;
        return NAVIGATION_FILTERS[role].includes(navItem);
    },

    /**
     * Check if a role can perform an action on a resource
     */
    canPerformAction: (role: Role | null, action: 'create' | 'edit' | 'delete' | 'export', resource: string): boolean => {
        if (!role) return false;
        const actionMap = {
            create: 'canCreate',
            edit: 'canEdit',
            delete: 'canDelete',
            export: 'canExport',
        } as const;
        return ACTION_FILTERS[role][actionMap[action]].includes(resource);
    },

    /**
     * Get role display information
     */
    getRoleDisplay: (role: Role | null) => {
        if (!role) return null;
        return {
            name: ROLE_DISPLAY_NAMES[role],
            colors: ROLE_COLORS[role],
            level: ROLE_HIERARCHY[role],
        };
    },

    /**
     * Filter data based on role visibility
     */
    getDataVisibility: (role: Role | null) => {
        if (!role) return null;
        return DATA_VISIBILITY_FILTERS[role];
    },
};