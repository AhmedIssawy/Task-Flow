// Route definitions for the Learning Management System
export const routes = {    // Public routes accessible without authentication
    public: [
        '/',
        '/login',
        '/register',
        '/forgot-password',
        '/reset-password',
        '/_error',
        '/404',
        '/500'
    ],    // Role-based route mapping
    roleMap: {
        STUDENT: '/student',
        TEACHER: '/teacher',
        ADMIN: '/admin',
        SUPER_ADMIN: '/admins'
    },

    // Protected routes by role
    protected: {
        STUDENT: [
            '/student/*',
            '/student/courses',
            '/student/assignments',
            '/student/grades',
            '/student/schedule',
            '/student/profile'
        ],
        TEACHER: [
            '/teacher/*',
            '/teacher/courses',
            '/teacher/students',
            '/teacher/assignments',
            '/teacher/grades',
            '/teacher/schedule',
            '/teacher/profile'
        ],
        ADMIN: [
            '/admin/*',
            '/admin/dashboard',
            '/admin/users',
            '/admin/courses',
            '/admin/departments',
            '/admin/reports',
            '/admin/settings',
            '/admin/profile'
        ], SUPER_ADMIN: [
            '/admins/*',
            '/admins/dashboard',
            '/admins/institutions',
            '/admins/admins',
            '/admins/system',
            '/admins/analytics',
            '/admins/settings',
            '/admins/profile'
        ]
    },

    // Navigation structure for each role
    navigation: {
        STUDENT: [
            { label: 'Dashboard', href: '/student', icon: 'Home' },
            { label: 'Courses', href: '/student/courses', icon: 'BookOpen' },
            { label: 'Assignments', href: '/student/assignments', icon: 'FileText' },
            { label: 'Grades', href: '/student/grades', icon: 'BarChart' },
            { label: 'Schedule', href: '/student/schedule', icon: 'Calendar' },
            { label: 'Profile', href: '/student/profile', icon: 'User' }
        ],
        TEACHER: [
            { label: 'Dashboard', href: '/teacher', icon: 'Home' },
            { label: 'Courses', href: '/teacher/courses', icon: 'BookOpen' },
            { label: 'Students', href: '/teacher/students', icon: 'Users' },
            { label: 'Assignments', href: '/teacher/assignments', icon: 'FileText' },
            { label: 'Grades', href: '/teacher/grades', icon: 'BarChart' },
            { label: 'Schedule', href: '/teacher/schedule', icon: 'Calendar' },
            { label: 'Profile', href: '/teacher/profile', icon: 'User' }
        ],
        ADMIN: [
            { label: 'Dashboard', href: '/admin', icon: 'Home' },
            { label: 'Users', href: '/admin/users', icon: 'Users' },
            { label: 'Courses', href: '/admin/courses', icon: 'BookOpen' },
            { label: 'Departments', href: '/admin/departments', icon: 'Building' },
            { label: 'Reports', href: '/admin/reports', icon: 'BarChart' },
            { label: 'Settings', href: '/admin/settings', icon: 'Settings' },
            { label: 'Profile', href: '/admin/profile', icon: 'User' }
        ], SUPER_ADMIN: [
            { label: 'Dashboard', href: '/admins', icon: 'Home' },
            { label: 'Institutions', href: '/admins/institutions', icon: 'Building2' },
            { label: 'Admins', href: '/admins/admins', icon: 'UserCog' },
            { label: 'System', href: '/admins/system', icon: 'Server' },
            { label: 'Analytics', href: '/admins/analytics', icon: 'TrendingUp' },
            { label: 'Settings', href: '/admins/settings', icon: 'Settings' },
            { label: 'Profile', href: '/admins/profile', icon: 'User' }
        ]
    }
}

// Utility functions for route management
export const isPublicRoute = (path: string): boolean => {
    return routes.public.includes(path)
}

export const getRoleBasedRoute = (role: string): string => {
    return routes.roleMap[role as keyof typeof routes.roleMap] || '/login'
}

export const isRouteAllowedForRole = (path: string, role: string): boolean => {
    const allowedRoutes = routes.protected[role as keyof typeof routes.protected] || []
    return allowedRoutes.some(route =>
        path.startsWith(route.replace('/*', '').replace('*', ''))
    )
}

export const getNavigationForRole = (role: string) => {
    return routes.navigation[role as keyof typeof routes.navigation] || []
}

export type UserRole = keyof typeof routes.roleMap
export type NavigationItem = {
    label: string
    href: string
    icon: string
}
