import { Pagination } from './common';

export interface ScheduleEntry {
  _id?: string;
  day: string;
  startTime: string;
  endTime: string;
}

export interface Section {
  _id: string;
  level: string;
  code: string;
  name?: string;
  capacity: number;
  schedule: ScheduleEntry[];
  course: string;
  semester: string | SemesterInfo;
  universityId: string | UniversityInfo;
  collegeId: string | CollegeInfo;
  departmentId: string | DepartmentInfo;
  teachers: string[] | TeacherInfo[];
  students: string[] | StudentInfo[];
  __v?: number;
}

export interface SemesterInfo {
  _id: string;
  year: number;
  duration: string;
}

export interface UniversityInfo {
  _id: string;
  name: string;
}

export interface CollegeInfo {
  _id: string;
  name: string;
}

export interface DepartmentInfo {
  _id: string;
  name: string;
}

export interface TeacherInfo {
  _id: string;
  name: string;
  email: string;
}

export interface StudentInfo {
  _id: string;
  name: string;
  email: string;
}

export interface PaginatedSectionsResponse {
  sections: Section[];
  pagination: Pagination;
}

export interface SectionApiResponse {
  success: boolean;
  message: string;
  data: Section | PaginatedSectionsResponse;
}
