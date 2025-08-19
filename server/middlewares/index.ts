// Main middleware export file
// Provides centralized access to all middleware functions

// Authentication & Authorization
export { default as authenticate } from './auth/authintication.middleware.js';
export { default as authorize } from './auth/authorization.middleware.js';

// Validation
export * from './validation.middleware.js';
export * from './zod.validation.middleware.js';
export * from './validation.integration.js';

// User Preferences
export { default as detectLanguage } from './user preferences/language.preference.js';

// Types
export type { 
  AuthenticatedRequest, 
  JWTPayload, 
  AuthorizeRoles,
  ValidationError 
} from '../types/middleware/index.js';