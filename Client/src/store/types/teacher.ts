import { Course } from './courses';
import { Pagination } from './common';

export interface Teacher {
  _id: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: 'doctor' | 'assistant' | string;
  createdAt: string;
  updatedAt: string;
  universityId: string;
  collegeId?: string;
  departmentId?: string;
  courses: Course[];
}
export interface PaginatedTeachersResponse {
  teachers: Teacher[];
  pagination: Pagination;
}

export interface TeachersApiResponse {
  success: boolean
  message: string
  data: PaginatedTeachersResponse
}