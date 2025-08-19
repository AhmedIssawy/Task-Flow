import { Types } from 'mongoose';
import { ApiResponse, PaginatedResponse, Gender, UserRole, Location } from '../common/index.js';

// Authentication Responses
export interface LoginResponse {
  user: {
    _id: string;
    id: string;
    name: string;
    email: string;
    role: UserRole;
    universityId?: string;
    collegeId?: string;
    departmentId?: string;
  };
  token: string;
}

// Student Responses
export interface StudentResponse {
  _id: string;
  id: string;
  name: string;
  gender: Gender;
  role: 'student' | 'super-student';
  email: string;
  phone?: string;
  universityId: string | {
    _id: string;
    name: string;
  };
  collegeId: string;
  departmentId: string;
  courses?: {
    course: {
      _id: string;
      name: string;
      code: string;
    };
    section: {
      _id: string;
      name: string;
      teachers?: {
        _id: string;
        name: string;
        email: string;
      }[];
    };
  }[];
}

export type StudentsPageResponse = ApiResponse<PaginatedResponse<StudentResponse>>;
export type StudentDetailResponse = ApiResponse<StudentResponse>;
export type StudentCoursesResponse = ApiResponse<StudentResponse['courses']>;

// University Responses
export interface UniversityResponse {
  _id: string;
  name: string;
  id: string;
  address: string;
  phone: string;
  email: string;
  location: Location;
  colleges: string[];
  students: string[];
  teachers: string[];
  description: string;
  website?: string;
  establishedYear: number;
  logo: string;
}

export type UniversitiesResponse = ApiResponse<UniversityResponse[]>;
export type UniversityDetailResponse = ApiResponse<UniversityResponse>;

// College Responses
export interface CollegeResponse {
  _id: string;
  name: string;
  universityId: string | {
    _id: string;
    name: string;
  };
  departments: string[];
  students: string[];
  teachers: string[];
  description?: string;
}

export type CollegesResponse = ApiResponse<CollegeResponse[]>;
export type CollegeDetailResponse = ApiResponse<CollegeResponse>;

// Department Responses
export interface DepartmentResponse {
  _id: string;
  name: string;
  collegeId: string | {
    _id: string;
    name: string;
  };
  universityId: string | {
    _id: string;
    name: string;
  };
  courses: string[];
  students: string[];
  teachers: string[];
  description?: string;
}

export type DepartmentsResponse = ApiResponse<DepartmentResponse[]>;
export type DepartmentDetailResponse = ApiResponse<DepartmentResponse>;

// Course Responses
export interface CourseResponse {
  _id: string;
  name: string;
  code: string;
  credits: number;
  departmentId: string | {
    _id: string;
    name: string;
  };
  collegeId: string;
  universityId: string;
  teachers: string[];
  sections: string[];
  description?: string;
  prerequisites?: string[];
}

export type CoursesResponse = ApiResponse<CourseResponse[]>;
export type CourseDetailResponse = ApiResponse<CourseResponse>;

// Section Responses
export interface SectionResponse {
  _id: string;
  name: string;
  level?: string;
  code?: string;
  courseId: string | {
    _id: string;
    name: string;
    code: string;
  };
  teachers: string[] | {
    _id: string;
    name: string;
    email: string;
  }[];
  students: string[];
  capacity: number;
  schedule?: {
    day: string;
    startTime: string;
    endTime: string;
    room?: string;
  }[];
}

export type SectionsResponse = ApiResponse<SectionResponse[]>;
export type SectionDetailResponse = ApiResponse<SectionResponse>;

// Teacher Responses
export interface TeacherResponse {
  _id: string;
  id: string;
  name: string;
  gender: Gender;
  role: 'teacher';
  email: string;
  phone?: string;
  universityId: string | {
    _id: string;
    name: string;
  };
  collegeId: string;
  departmentId: string;
  courses: string[];
  sections: string[];
  specialization?: string;
  title?: string;
}

export type TeachersResponse = ApiResponse<TeacherResponse[]>;
export type TeacherDetailResponse = ApiResponse<TeacherResponse>;

// Admin Responses
export interface AdminResponse {
  _id: string;
  id: string;
  name: string;
  gender: Gender;
  role: 'admin' | 'super-admin';
  email: string;
  phone?: string;
  universityId?: string;
  permissions: string[];
}

export type AdminsResponse = ApiResponse<AdminResponse[]>;
export type AdminDetailResponse = ApiResponse<AdminResponse>;

// Error Responses
export interface ErrorResponse {
  success: false;
  message: string;
  error?: {
    details?: Record<string, string>;
    code?: string;
    stack?: string;
  };
}