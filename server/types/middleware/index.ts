import { Request, Response } from 'express';
import { UserRole } from '../common/index.js';

// Extended Request interface with user authentication
export interface AuthenticatedRequest extends Request {
  user?: {
    _id: string;
    id: string;
    role: UserRole;
    email: string;
    name: string;
    universityId?: string;
    collegeId?: string;
    departmentId?: string;
  };
}

// JWT Payload interface
export interface JWTPayload {
  _id: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}

// Language preference middleware
export interface LanguageRequest extends Request {
  cookies: {
    lang?: 'en' | 'ar';
    [key: string]: any;
  };
}

// Authorization middleware types
export type AuthorizeRoles = UserRole[];

export interface ValidationError {
  field: string;
  message: string;
}