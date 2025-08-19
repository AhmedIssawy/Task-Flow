// Main utilities export file
// Provides centralized access to all utility functions

// Response handling
export { default as sendResponse } from './response.handler.js';

// Date/Time utilities
export { 
  default as getCurrentSemester,
  type SemesterDuration,
  type CurrentSemester 
} from './getCurrentSemester.js';

// Re-export types for convenience
export type { 
  ApiResponse,
  PaginationParams,
  PaginationInfo,
  PaginatedResponse,
  Language,
  UserRole,
  Gender,
  Location,
  ErrorDetails
} from '../types/common/index.js';