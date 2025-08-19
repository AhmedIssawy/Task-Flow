import { Request, Response, NextFunction } from 'express';
import mongoose from "mongoose";
import { z } from 'zod';
import { Language } from '../types/common/index.js';

// Legacy validation functions - now enhanced with TypeScript
// These work alongside our new Zod validation middleware

const validateObjectId = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      message: "Invalid ID format",
    });
    return;
  }
  next();
};

const validateStudentId = (req: Request, res: Response, next: NextFunction): void => {
  const { studentId } = req.params;
  if (!studentId || studentId.length < 5) {
    res.status(400).json({
      message: "Invalid student ID format",
    });
    return;
  }
  next();
};

const validateUniversityId = (req: Request, res: Response, next: NextFunction): void => {
  const { universityId } = req.params;
  if (!universityId) {
    res.status(400).json({
      message: "Invalid university ID format",
    });
    return;
  }
  next();
};

const validateLoginData = (req: Request, res: Response, next: NextFunction): void => {
  const { id, password } = req.body;
  if (!id || !password) {
    res.status(400).json({
      message: "id and password are required",
    });
    return;
  }
  next();
};

const validateStudentUpdateData = (req: Request, res: Response, next: NextFunction): void => {
  const { name, password, phone, role } = req.body;

  if (!name && !password && !phone && !role) {
    res.status(400).json({
      message: "At least one field is required for update",
    });
    return;
  }

  next();
};

// New Zod-based validation helpers
const createParamValidator = (paramName: string) => {
  const schema = z.object({
    [paramName]: z.string().refine(
      (val) => mongoose.Types.ObjectId.isValid(val),
      { message: `Invalid ${paramName} format` }
    )
  });

  return (req: Request, res: Response, next: NextFunction): void => {
    const lang: Language = (req.cookies?.lang as Language) || 'en';
    
    try {
      schema.parse(req.params);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = lang === 'ar' 
          ? 'معرف غير صحيح' 
          : 'Invalid ID format';
        
        res.status(400).json({
          success: false,
          message: errorMessage,
          error: {
            details: error.errors.reduce((acc, curr) => {
              acc[curr.path.join('.')] = curr.message;
              return acc;
            }, {} as Record<string, string>)
          }
        });
        return;
      }
      
      const errorMessage = lang === 'ar' 
        ? 'خطأ في التحقق من المعرف' 
        : 'ID validation error';
      
      res.status(500).json({
        success: false,
        message: errorMessage
      });
    }
  };
};

// Create specific validators using the factory
export const validateObjectIdParam = createParamValidator('id');
export const validateUniversityIdParam = createParamValidator('universityId');
export const validateStudentIdParam = createParamValidator('studentId');
export const validateCourseIdParam = createParamValidator('courseId');
export const validateCollegeIdParam = createParamValidator('collegeId');
export const validateDepartmentIdParam = createParamValidator('departmentId');
export const validateSectionIdParam = createParamValidator('sectionId');

export {
  validateObjectId,
  validateStudentId,
  validateLoginData,
  validateUniversityId,
  validateStudentUpdateData,
};
