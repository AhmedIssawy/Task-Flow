import { Pagination } from "./common";

export interface Course {
  _id: string
  name: string
  code: string
  departmentId: string
  description?: string
  teachers?: {
    _id: string
    name: string
    email: string
  }[]
  students?: string[]
}


export interface PaginatedCoursesResponse {
  courses: Course[]
  pagination: Pagination
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}