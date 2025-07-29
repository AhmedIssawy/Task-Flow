export interface Teacher {
  _id: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: 'teacher';
  courses: {
    _id: string;
    name: string;
    [key: string]: unknown;
  }[];
  universityId: string;
  departmentId: string;
  collegeId: string;
}

export interface PaginatedTeacherResponse {
  students: Teacher[]
  totalPages: number
  currentPage: number
  totalCount: number
}