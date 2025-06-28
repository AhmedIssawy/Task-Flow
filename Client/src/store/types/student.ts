export interface Student {
  _id: string;
  id: string;
  name: string;
  email: string;
  role: 'student';
  universityId: {
    _id: string;
    name: string;
  };
  courses: {
    _id: string;
    name: string;
  }[];
  createdAt?: string;
  updatedAt?: string;
}

export interface PaginatedStudentsResponse {
  students: Student[];
  totalPages: number;
  currentPage: number;
}