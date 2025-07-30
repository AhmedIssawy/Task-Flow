import { Pagination } from "./common";

export interface College {
  _id: string;
  name: string;
  address?: string;
  phone?: string;
  email: string;
  location?: {
    type: 'Point';
    coordinates: [number, number];
  };
  departments: string[];
  description?: string;
  website?: string;
  establishedYear?: number;
  logo?: string;
  universityId: string;
  courses: string[];
  students: string[];
}

export interface PaginatedCollegesResponse {
  colleges: College[];
  pagination: Pagination;
}

export interface CollegeApiResponse {
  success: boolean;
  message: string;
  data: PaginatedCollegesResponse;
}
