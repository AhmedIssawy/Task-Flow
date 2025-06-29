export interface Student {
  _id: string
  name: string
  email: string
  universityId: { _id: string; name: string }
  courses?: Course[]
}

export interface Course {
  _id: string
  name: string
}

export interface CourseDetails extends Course {
  teachers: {
    _id: string
    name: string
    email: string
  }[]
}

export interface PaginatedStudentsResponse {
  students: Student[]
  totalPages: number
  currentPage: number
}
