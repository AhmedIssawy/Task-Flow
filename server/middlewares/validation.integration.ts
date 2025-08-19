// Integration file for all validation middleware
// This file provides easy imports for controllers and routes

// Zod validation middleware
export { 
  validateSchema, 
  validateQuery, 
  validateParams 
} from './zod.validation.middleware.js';

// Zod schemas
export {
  // Authentication schemas
  loginSchema,
  
  // Student schemas
  createStudentSchema,
  updateStudentSchema,
  
  // University schemas
  createUniversitySchema,
  updateUniversitySchema,
  
  // College schemas
  createCollegeSchema,
  updateCollegeSchema,
  
  // Department schemas
  createDepartmentSchema,
  updateDepartmentSchema,
  
  // Course schemas
  createCourseSchema,
  updateCourseSchema,
  
  // Section schemas
  createSectionSchema,
  updateSectionSchema,
  
  // Teacher schemas
  createTeacherSchema,
  updateTeacherSchema,
  
  // Admin schemas
  createAdminSchema,
  updateAdminSchema,
  
  // Common schemas
  objectIdSchema,
  paginationSchema,
  
  // Type exports
  type LoginInput,
  type CreateStudentInput,
  type UpdateStudentInput,
  type CreateUniversityInput,
  type UpdateUniversityInput,
  type CreateCollegeInput,
  type UpdateCollegeInput,
  type CreateDepartmentInput,
  type UpdateDepartmentInput,
  type CreateCourseInput,
  type UpdateCourseInput,
  type CreateSectionInput,
  type UpdateSectionInput,
  type CreateTeacherInput,
  type UpdateTeacherInput,
  type CreateAdminInput,
  type UpdateAdminInput,
  type PaginationInput
} from '../validators/schemas.js';

// Legacy validation middleware (for backward compatibility)
export {
  validateObjectId,
  validateStudentId,
  validateLoginData,
  validateUniversityId,
  validateStudentUpdateData,
  
  // New Zod-based parameter validators
  validateObjectIdParam,
  validateUniversityIdParam,
  validateStudentIdParam,
  validateCourseIdParam,
  validateCollegeIdParam,
  validateDepartmentIdParam,
  validateSectionIdParam
} from './validation.middleware.js';

// Authentication and authorization
export { default as authenticate } from './auth/authintication.middleware.js';
export { default as authorize } from './auth/authorization.middleware.js';

// Language detection
export { default as detectLanguage } from './user preferences/language.preference.js';

// Common validation patterns
import { validateSchema, validateQuery } from './zod.validation.middleware.js';
import { 
  loginSchema,
  createStudentSchema,
  updateStudentSchema,
  createUniversitySchema,
  updateUniversitySchema,
  createCollegeSchema,
  updateCollegeSchema,
  createDepartmentSchema,
  updateDepartmentSchema,
  createCourseSchema,
  updateCourseSchema,
  createSectionSchema,
  updateSectionSchema,
  createTeacherSchema,
  updateTeacherSchema,
  createAdminSchema,
  updateAdminSchema,
  paginationSchema
} from '../validators/schemas.js';

// Pre-configured validation middleware for common use cases
export const validateLogin = validateSchema(loginSchema);

export const validateCreateStudent = validateSchema(createStudentSchema);
export const validateUpdateStudent = validateSchema(updateStudentSchema);

export const validateCreateUniversity = validateSchema(createUniversitySchema);
export const validateUpdateUniversity = validateSchema(updateUniversitySchema);

export const validateCreateCollege = validateSchema(createCollegeSchema);
export const validateUpdateCollege = validateSchema(updateCollegeSchema);

export const validateCreateDepartment = validateSchema(createDepartmentSchema);
export const validateUpdateDepartment = validateSchema(updateDepartmentSchema);

export const validateCreateCourse = validateSchema(createCourseSchema);
export const validateUpdateCourse = validateSchema(updateCourseSchema);

export const validateCreateSection = validateSchema(createSectionSchema);
export const validateUpdateSection = validateSchema(updateSectionSchema);

export const validateCreateTeacher = validateSchema(createTeacherSchema);
export const validateUpdateTeacher = validateSchema(updateTeacherSchema);

export const validateCreateAdmin = validateSchema(createAdminSchema);
export const validateUpdateAdmin = validateSchema(updateAdminSchema);

export const validatePagination = validateQuery(paginationSchema);