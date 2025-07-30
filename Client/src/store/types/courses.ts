import { Pagination } from './common';

export interface Course {
  _id: string;
  name: string;
  hours: number;
  lectures: string[];
  collegeId: string;
  departmentId: string;
  universityId: string;
  teachers?: {
    _id: string;
    name: string;
  }[];
}

export interface PaginatedCoursesResponse {
  courses: Course[];
  pagination: Pagination;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
