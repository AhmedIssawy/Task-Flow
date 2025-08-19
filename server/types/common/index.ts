// Common types used across the application

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationInfo;
}

export type Language = 'en' | 'ar';

export type UserRole = 'student' | 'super-student' | 'teacher' | 'admin' | 'super-admin';

export type Gender = 'male' | 'female';

export interface Location {
  type: 'Point';
  coordinates: [number, number]; // [longitude, latitude]
}

export interface ErrorDetails {
  field?: string;
  message: string;
  code?: string;
}