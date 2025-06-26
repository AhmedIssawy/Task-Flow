// API Types for LMS Platform - Based on Enhanced Endpoint Format

// =======================================================================
// BASE TYPES
// =======================================================================

export interface PaginatedResponse<T> {
    data: T[]
    total: number
    page: number
    totalPages: number
}

export interface ApiResponse<T> {
    success: boolean
    data: T
    message?: string
}

export interface DeleteResponse {
    message: string
}

// =======================================================================
// COURSE TYPES
// =======================================================================

export interface Course {
    id: string
    name: string
    description: string
    universityId: string
    teacherId: string
    createdAt: string
    updatedAt: string
}

export interface CreateCourseRequest {
    name: string
    description: string
    universityId: string
    teacherId: string
}

export interface UpdateCourseRequest {
    name?: string
    description?: string
    teacherId?: string
}

// =======================================================================
// STUDENT TYPES
// =======================================================================

export interface Student {
    _id: string
    id: string
    name: string
    email: string
    phone?: string
    universityId: string | {
        _id: string
        name: string
    }
    courses: string[]
    role: string
    password?: string
    createdAt: string
    updatedAt: string
}

export interface CreateStudentRequest {
    name: string
    email: string
    password: string
    universityId: string
    courses?: string[]
}

export interface UpdateStudentRequest {
    name?: string
    email?: string
    phone?: string
    courses?: string[]
}

// =======================================================================
// TEACHER TYPES
// =======================================================================

export interface Teacher {
    id: string
    name: string
    email: string
    phone?: string
    universityId: string
    courses: string[]
    role: string
    createdAt: string
    updatedAt: string
}

export interface CreateTeacherRequest {
    name: string
    email: string
    password: string
    universityId: string
    courses?: string[]
    role: string
}

export interface UpdateTeacherRequest {
    name?: string
    email?: string
    phone?: string
    courses?: string[]
    role?: string
}

// =======================================================================
// ADMIN TYPES
// =======================================================================

export interface Admin {
    id: string
    name: string
    email: string
    phone?: string
    universityId: string
    role: string
    createdAt: string
    updatedAt: string
}

export interface CreateAdminRequest {
    name: string
    email: string
    password: string
    universityId: string
    role: string
}

export interface UpdateAdminRequest {
    name?: string
    email?: string
    phone?: string
    role?: string
}

// =======================================================================
// UNIVERSITY TYPES
// =======================================================================

export interface University {
    id: string
    name: string
    address: string
    phone: string
    email: string
    location: string
    description: string
    website?: string
    establishedYear?: number
    logo?: string
    createdAt: string
    updatedAt: string
}

export interface CreateUniversityRequest {
    name: string
    address: string
    phone: string
    email: string
    location: string
    description: string
    website?: string
    establishedYear?: number
    logo?: string
}

export interface UpdateUniversityRequest {
    name?: string
    address?: string
    phone?: string
    email?: string
    location?: string
    description?: string
    website?: string
    establishedYear?: number
    logo?: string
}

// =======================================================================
// COLLEGE TYPES
// =======================================================================

export interface College {
    id: string
    name: string
    address: string
    phone: string
    email: string
    location: string
    description: string
    website?: string
    establishedYear?: number
    logo?: string
    universityId: string
    createdAt: string
    updatedAt: string
}

export interface CreateCollegeRequest {
    name: string
    address: string
    phone: string
    email: string
    location: string
    description: string
    website?: string
    establishedYear?: number
    logo?: string
    universityId: string
}

export interface UpdateCollegeRequest {
    name?: string
    address?: string
    phone?: string
    email?: string
    location?: string
    description?: string
    website?: string
    establishedYear?: number
    logo?: string
}

// =======================================================================
// DEPARTMENT TYPES
// =======================================================================

export interface Department {
    id: string
    name: string
    description?: string
    collegeId: string
    createdAt: string
    updatedAt: string
}

// =======================================================================
// QUERY PARAMETERS
// =======================================================================

export interface PaginationParams {
    page?: number
    limit?: number
}

export interface SearchParams {
    search?: string
}

export interface UniversityFilterParams {
    universityId?: string
}

export interface CollegeFilterParams {
    collegeId?: string
}

export type CoursesQueryParams = PaginationParams & SearchParams & UniversityFilterParams
export type StudentsQueryParams = PaginationParams & SearchParams & UniversityFilterParams
export type TeachersQueryParams = PaginationParams & SearchParams & UniversityFilterParams
export type CollegesQueryParams = UniversityFilterParams
export type DepartmentsQueryParams = CollegeFilterParams

// =======================================================================
// AUTHENTICATION TYPES
// =======================================================================

export interface LoginRequest {
    userId: string
    password: string
}

export interface LoginResponse {
    message: string
    role: 'super-admin' | 'admin' | 'student' | 'teacher'
    token?: string  // Optional token field
    data: {
        _id: string
        name: string
        id: string
        email?: string  // Optional email field
    }
}

export interface LoginErrorResponse {
    message: string
}
