import { Pagination } from './common'
export interface GeoLocation {
  type: 'Point';
  coordinates: [number, number];
}

export interface Department {
  _id: string;
  name: string;
  description: string;
  phone: string;
  email: string;
  location: GeoLocation;
  establishedYear: number;
  collegeId: string;
  universityId: string;
}


export interface PaginatedDepartmentsResponse {
  departments: Department[]
  pagination: Pagination
}

export interface DepartmentApiResponse {
  success: boolean
  message: string
  data: {
    departments: Department[]
    pagination: Pagination
  }
}
