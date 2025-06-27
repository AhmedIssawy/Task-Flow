// Global type definitions for the Task Flow application

export interface User {
    id: string
    name: string
    email: string
    role: 'student' | 'teacher' | 'admin'
    avatar?: string
    isActive: boolean
    createdAt: string
    updatedAt: string
}

export interface Student extends User {
    role: 'student'
    studentId: string
    university?: string
    major?: string
    yearOfStudy?: number
    gpa?: number
}

export interface Teacher extends User {
    role: 'teacher'
    teacherId: string
    department?: string
    subjects?: string[]
    university?: string
}

export interface University {
    id: string
    name: string
    code: string
    address: string
    website?: string
    isActive: boolean
    createdAt: string
    updatedAt: string
}

export interface ApiResponse<T = unknown> {
    data: T
    message: string
    success: boolean
    timestamp: string
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
    pagination: {
        page: number
        limit: number
        total: number
        totalPages: number
        hasNext: boolean
        hasPrev: boolean
    }
}

export interface FormField {
    name: string
    label: string
    type: 'text' | 'email' | 'password' | 'select' | 'textarea' | 'number' | 'date'
    placeholder?: string
    required?: boolean
    validation?: {
        min?: number
        max?: number
        pattern?: string
        message?: string
    }
    options?: { label: string; value: string }[]
}

export interface TableColumn<T = unknown> {
    key: keyof T
    label: string
    sortable?: boolean
    filterable?: boolean
    render?: (value: T[keyof T], row: T) => React.ReactNode
}

export interface FilterOption {
    key: string
    label: string
    type: 'select' | 'text' | 'date' | 'range'
    options?: { label: string; value: string }[]
}

export interface NavigationItem {
    label: string
    href: string
    icon?: React.ComponentType
    children?: NavigationItem[]
    permissions?: string[]
}
