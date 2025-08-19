import { z } from 'zod';
import mongoose from 'mongoose';

// Common validation schemas
export const objectIdSchema = z.string().refine(
  (val) => mongoose.Types.ObjectId.isValid(val),
  { message: 'Invalid ObjectId format' }
);

export const emailSchema = z.string().email('Invalid email format');

export const passwordSchema = z.string()
  .min(6, 'Password must be at least 6 characters long')
  .max(100, 'Password must not exceed 100 characters');

export const phoneSchema = z.string()
  .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format')
  .optional();

export const genderSchema = z.enum(['male', 'female']);

export const userRoleSchema = z.enum(['student', 'super-student', 'teacher', 'admin', 'super-admin']);

export const languageSchema = z.enum(['en', 'ar']);

// Location validation schema
export const locationSchema = z.object({
  type: z.literal('Point'),
  coordinates: z.array(z.number()).length(2, 'Coordinates must be [longitude, latitude]')
});

// Pagination validation schema
export const paginationSchema = z.object({
  page: z.union([z.string(), z.number()]).transform(Number).pipe(z.number().min(1)).optional(),
  limit: z.union([z.string(), z.number()]).transform(Number).pipe(z.number().min(1).max(250)).optional()
});

// Authentication schemas
export const loginSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  password: passwordSchema
});

// Student validation schemas
export const createStudentSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must not exceed 100 characters'),
  email: emailSchema,
  password: passwordSchema,
  gender: genderSchema,
  universityId: objectIdSchema,
  collegeId: objectIdSchema,
  departmentId: objectIdSchema,
  phone: phoneSchema,
  courses: z.array(z.object({
    course: objectIdSchema,
    section: objectIdSchema
  })).optional()
});

export const updateStudentSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  password: passwordSchema.optional(),
  phone: phoneSchema,
  role: z.enum(['student', 'super-student']).optional(),
  courses: z.array(z.object({
    course: objectIdSchema,
    section: objectIdSchema
  })).optional()
});

// University validation schemas
export const createUniversitySchema = z.object({
  name: z.string().min(1, 'Name is required').max(200, 'Name must not exceed 200 characters'),
  address: z.string().min(1, 'Address is required').max(500, 'Address must not exceed 500 characters'),
  phone: z.string().min(1, 'Phone is required'),
  email: emailSchema,
  location: locationSchema,
  description: z.string().min(1, 'Description is required').max(1000, 'Description must not exceed 1000 characters'),
  website: z.string().url('Invalid website URL').optional(),
  establishedYear: z.number().min(1800, 'Invalid year').max(new Date().getFullYear(), 'Year cannot be in the future'),
  logo: z.string().optional()
});

export const updateUniversitySchema = createUniversitySchema.partial();

// College validation schemas
export const createCollegeSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200, 'Name must not exceed 200 characters'),
  universityId: objectIdSchema,
  description: z.string().max(1000, 'Description must not exceed 1000 characters').optional()
});

export const updateCollegeSchema = createCollegeSchema.partial().omit({ universityId: true });

// Department validation schemas
export const createDepartmentSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200, 'Name must not exceed 200 characters'),
  collegeId: objectIdSchema,
  universityId: objectIdSchema,
  description: z.string().max(1000, 'Description must not exceed 1000 characters').optional()
});

export const updateDepartmentSchema = createDepartmentSchema.partial().omit({ collegeId: true, universityId: true });

// Course validation schemas
export const createCourseSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200, 'Name must not exceed 200 characters'),
  code: z.string().min(1, 'Course code is required').max(20, 'Course code must not exceed 20 characters'),
  credits: z.number().min(1, 'Credits must be at least 1').max(10, 'Credits must not exceed 10'),
  departmentId: objectIdSchema,
  collegeId: objectIdSchema,
  universityId: objectIdSchema,
  description: z.string().max(1000, 'Description must not exceed 1000 characters').optional(),
  prerequisites: z.array(objectIdSchema).optional()
});

export const updateCourseSchema = createCourseSchema.partial().omit({ departmentId: true, collegeId: true, universityId: true });

// Section validation schemas
export const scheduleItemSchema = z.object({
  day: z.string().min(1, 'Day is required'),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
  room: z.string().optional()
});

export const createSectionSchema = z.object({
  name: z.string().max(100, 'Name must not exceed 100 characters').optional(),
  level: z.string().max(50, 'Level must not exceed 50 characters').optional(),
  code: z.string().max(20, 'Code must not exceed 20 characters').optional(),
  courseId: objectIdSchema,
  capacity: z.number().min(1, 'Capacity must be at least 1').max(1000, 'Capacity must not exceed 1000'),
  schedule: z.array(scheduleItemSchema).optional()
});

export const updateSectionSchema = createSectionSchema.partial().omit({ courseId: true });

// Teacher validation schemas
export const createTeacherSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must not exceed 100 characters'),
  email: emailSchema,
  password: passwordSchema,
  gender: genderSchema,
  universityId: objectIdSchema,
  collegeId: objectIdSchema,
  departmentId: objectIdSchema,
  phone: phoneSchema,
  specialization: z.string().max(200, 'Specialization must not exceed 200 characters').optional(),
  title: z.string().max(100, 'Title must not exceed 100 characters').optional()
});

export const updateTeacherSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  password: passwordSchema.optional(),
  phone: phoneSchema,
  specialization: z.string().max(200).optional(),
  title: z.string().max(100).optional()
});

// Admin validation schemas
export const createAdminSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must not exceed 100 characters'),
  email: emailSchema,
  password: passwordSchema,
  gender: genderSchema,
  role: z.enum(['admin', 'super-admin']),
  universityId: objectIdSchema.optional(),
  phone: phoneSchema,
  permissions: z.array(z.string()).optional()
});

export const updateAdminSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  password: passwordSchema.optional(),
  phone: phoneSchema,
  permissions: z.array(z.string()).optional()
});

// Validation middleware helper types
export type LoginInput = z.infer<typeof loginSchema>;
export type CreateStudentInput = z.infer<typeof createStudentSchema>;
export type UpdateStudentInput = z.infer<typeof updateStudentSchema>;
export type CreateUniversityInput = z.infer<typeof createUniversitySchema>;
export type UpdateUniversityInput = z.infer<typeof updateUniversitySchema>;
export type CreateCollegeInput = z.infer<typeof createCollegeSchema>;
export type UpdateCollegeInput = z.infer<typeof updateCollegeSchema>;
export type CreateDepartmentInput = z.infer<typeof createDepartmentSchema>;
export type UpdateDepartmentInput = z.infer<typeof updateDepartmentSchema>;
export type CreateCourseInput = z.infer<typeof createCourseSchema>;
export type UpdateCourseInput = z.infer<typeof updateCourseSchema>;
export type CreateSectionInput = z.infer<typeof createSectionSchema>;
export type UpdateSectionInput = z.infer<typeof updateSectionSchema>;
export type CreateTeacherInput = z.infer<typeof createTeacherSchema>;
export type UpdateTeacherInput = z.infer<typeof updateTeacherSchema>;
export type CreateAdminInput = z.infer<typeof createAdminSchema>;
export type UpdateAdminInput = z.infer<typeof updateAdminSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;