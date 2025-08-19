import { Types } from 'mongoose';
import { Gender, UserRole, Location } from '../common/index.js';

// Authentication Requests
export interface LoginRequest {
  id: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  gender: Gender;
  role?: UserRole;
  phone?: string;
  universityId: Types.ObjectId;
  collegeId: Types.ObjectId;
  departmentId: Types.ObjectId;
}

// Student Requests
export interface CreateStudentRequest {
  name: string;
  email: string;
  password: string;
  gender: Gender;
  universityId: string;
  collegeId: string;
  departmentId: string;
  courses?: {
    course: string;
    section: string;
  }[];
}

export interface UpdateStudentRequest {
  name?: string;
  password?: string;
  phone?: string;
  role?: 'student' | 'super-student';
  courses?: {
    course: string;
    section: string;
  }[];
}

// University Requests
export interface CreateUniversityRequest {
  name: string;
  address: string;
  phone: string;
  email: string;
  location: Location;
  description: string;
  website?: string;
  establishedYear: number;
  logo?: string;
}

export interface UpdateUniversityRequest {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  location?: Location;
  description?: string;
  website?: string;
  establishedYear?: number;
  logo?: string;
}

// College Requests
export interface CreateCollegeRequest {
  name: string;
  universityId: string;
  description?: string;
}

export interface UpdateCollegeRequest {
  name?: string;
  description?: string;
}

// Department Requests
export interface CreateDepartmentRequest {
  name: string;
  collegeId: string;
  universityId: string;
  description?: string;
}

export interface UpdateDepartmentRequest {
  name?: string;
  description?: string;
}

// Course Requests
export interface CreateCourseRequest {
  name: string;
  code: string;
  credits: number;
  departmentId: string;
  collegeId: string;
  universityId: string;
  description?: string;
  prerequisites?: string[];
}

export interface UpdateCourseRequest {
  name?: string;
  code?: string;
  credits?: number;
  description?: string;
  prerequisites?: string[];
}

// Section Requests
export interface CreateSectionRequest {
  name?: string;
  level?: string;
  code?: string;
  courseId: string;
  capacity: number;
  schedule?: {
    day: string;
    startTime: string;
    endTime: string;
    room?: string;
  }[];
}

export interface UpdateSectionRequest {
  name?: string;
  level?: string;
  code?: string;
  capacity?: number;
  schedule?: {
    day: string;
    startTime: string;
    endTime: string;
    room?: string;
  }[];
}

// Teacher Requests
export interface CreateTeacherRequest {
  name: string;
  email: string;
  password: string;
  gender: Gender;
  universityId: string;
  collegeId: string;
  departmentId: string;
  phone?: string;
  specialization?: string;
  title?: string;
}

export interface UpdateTeacherRequest {
  name?: string;
  password?: string;
  phone?: string;
  specialization?: string;
  title?: string;
}

// Admin Requests
export interface CreateAdminRequest {
  name: string;
  email: string;
  password: string;
  gender: Gender;
  role: 'admin' | 'super-admin';
  universityId?: string;
  phone?: string;
  permissions?: string[];
}

export interface UpdateAdminRequest {
  name?: string;
  password?: string;
  phone?: string;
  permissions?: string[];
}