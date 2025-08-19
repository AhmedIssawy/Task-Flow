import { Document, Types } from 'mongoose';
import { Location, Gender, UserRole } from '../common/index.js';
import { SemesterDuration } from '../../utils/getCurrentSemester.js';

// Base interface for all models
export interface BaseModel {
  createdAt: Date;
  updatedAt: Date;
}

// University Model Interface
export interface IUniversity extends Document, BaseModel {
  name: string;
  id: string;
  address: string;
  phone: string;
  email: string;
  location: Location;
  colleges: Types.ObjectId[];
  students: Types.ObjectId[];
  teachers: Types.ObjectId[];
  description: string;
  website?: string;
  establishedYear: number;
  logo: string;
}

// College Model Interface
export interface ICollege extends Document, BaseModel {
  name: string;
  address: string;
  phone: string;
  email: string;
  location: Location;
  universityId: Types.ObjectId;
  departments: Types.ObjectId[];
  students: Types.ObjectId[];
  description: string;
  website: string;
  establishedYear: number;
  logo: string;
}

// Department Model Interface
export interface IDepartment extends Document, BaseModel {
  name: string;
  phone: string;
  email: string;
  location: Location;
  collegeId: Types.ObjectId;
  universityId: Types.ObjectId;
  courses: Types.ObjectId[];
  description: string;
  establishedYear: number;
}

// Course Model Interface
export interface ICourse extends Document, BaseModel {
  name: string;
  description: string;
  hours: number;
  id: string;
  departmentId: Types.ObjectId;
  collegeId: Types.ObjectId;
  universityId: Types.ObjectId;
  teachers: Types.ObjectId[];
  students: Types.ObjectId[];
  tasks: Types.ObjectId[];
}

// Section Model Interface
export interface ISection extends Document, BaseModel {
  level: string;
  code: string;
  name: string;
  capacity: number;
  schedule: {
    day: 'Saturday' | 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday';
    startTime: string;
    endTime: string;
  }[];
  semester: Types.ObjectId;
  universityId: Types.ObjectId;
  collegeId: Types.ObjectId;
  departmentId: Types.ObjectId;
  course: Types.ObjectId;
  lectures: Types.ObjectId[];
  teachers: Types.ObjectId[];
  students: Types.ObjectId[];
}

// Student Course Enrollment
export interface StudentCourse {
  course: Types.ObjectId;
  section: Types.ObjectId;
}

// Student Model Interface
export interface IStudent extends Document, BaseModel {
  id: string;
  password: string;
  name: string;
  gender: Gender;
  role: 'student' | 'super-student';
  email: string;
  phone?: string;
  universityId: Types.ObjectId;
  collegeId: Types.ObjectId;
  departmentId: Types.ObjectId;
  courses: StudentCourse[];
}

// Teacher Model Interface
export interface ITeacher extends Document, BaseModel {
  id: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: 'doctor' | 'assistant' | 'teacher';
  universityId: Types.ObjectId;
  collegeId: Types.ObjectId;
  departmentId: Types.ObjectId;
  courses: Types.ObjectId[];
}

// Admin Model Interface
export interface IAdmin extends Document, BaseModel {
  id: string;
  password: string;
  name: string;
  phone?: string;
  role: 'admin' | 'super-admin';
  universityId: string;
  collegeId: string;
}

// Semester Model Interface
export interface ISemester extends Document, BaseModel {
  year: number;
  duration: SemesterDuration;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  universityId: Types.ObjectId;
}

// Lecture Model Interface
export interface ILecture extends Document, BaseModel {
  title: string;
  description?: string;
  sectionId: Types.ObjectId;
  courseId: Types.ObjectId;
  teacherId: Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  room?: string;
  type: 'lecture' | 'lab' | 'tutorial';
  attendance?: {
    studentId: Types.ObjectId;
    present: boolean;
    timestamp?: Date;
  }[];
}