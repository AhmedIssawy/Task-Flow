import { Pagination } from "./common";
import { Course } from "./courses";

export interface Student {
  _id: string
  name: string
  email: string
  universityId: { _id: string; name: string }
  courses?: Course[]
}


export interface PaginatedStudentsResponse {
  students: Student[]
  pagination: Pagination
}

export interface StudentApiResponse {
  success: boolean
  message: string
  data: PaginatedStudentsResponse
}


// export interface CourseDetails extends Course {
//   teachers: {
//     _id: string
//     name: string
//     email: string
//   }[]
// }


//todo needs update after endpoints

export interface Grade {
  _id: string
  courseId: string
  courseName: string
  grade: string
  studentId: string
  createdAt: string
  updatedAt: string
}

export interface Assignment {
  _id: string
  title: string
  description: string
  dueDate: string
  courseId: string
  courseName: string
  studentId: string
  createdAt: string
  updatedAt: string
}

export interface Calendar {
  _id: string
  title: string
  description: string
  date: string
  studentId: string
  createdAt: string
  updatedAt: string
  type: 'assignment' | 'event' | 'exam'
}

