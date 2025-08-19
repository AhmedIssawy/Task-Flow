import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import { Language } from '../types/common/index.js';

// Generic validation middleware factory
export const validateSchema = <T>(schema: z.ZodSchema<T>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const lang: Language = (req.cookies?.lang as Language) || 'en';
    
    try {
      // Validate request body
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = lang === 'ar' 
          ? 'بيانات غير صحيحة' 
          : 'Invalid input data';
        
        const validationErrors = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }));

        return res.status(400).json({
          success: false,
          message: errorMessage,
          error: {
            details: validationErrors.reduce((acc, curr) => {
              acc[curr.field] = curr.message;
              return acc;
            }, {} as Record<string, string>)
          }
        });
      }
      
      // Handle unexpected errors
      const errorMessage = lang === 'ar' 
        ? 'خطأ في التحقق من البيانات' 
        : 'Validation error';
      
      return res.status(500).json({
        success: false,
        message: errorMessage,
        error: { message: 'Internal validation error' }
      });
    }
  };
};

// Validate query parameters
export const validateQuery = <T>(schema: z.ZodSchema<T>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const lang: Language = (req.cookies?.lang as Language) || 'en';
    
    try {
      const validatedQuery = schema.parse(req.query);
      req.query = validatedQuery as typeof req.query;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = lang === 'ar' 
          ? 'معاملات الاستعلام غير صحيحة' 
          : 'Invalid query parameters';
        
        const validationErrors = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }));

        return res.status(400).json({
          success: false,
          message: errorMessage,
          error: {
            details: validationErrors.reduce((acc, curr) => {
              acc[curr.field] = curr.message;
              return acc;
            }, {} as Record<string, string>)
          }
        });
      }
      
      const errorMessage = lang === 'ar' 
        ? 'خطأ في التحقق من معاملات الاستعلام' 
        : 'Query validation error';
      
      return res.status(500).json({
        success: false,
        message: errorMessage,
        error: { message: 'Internal validation error' }
      });
    }
  };
};

// Validate URL parameters
export const validateParams = <T>(schema: z.ZodSchema<T>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const lang: Language = (req.cookies?.lang as Language) || 'en';
    
    try {
      const validatedParams = schema.parse(req.params);
      req.params = validatedParams as typeof req.params;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = lang === 'ar' 
          ? 'معاملات المسار غير صحيحة' 
          : 'Invalid URL parameters';
        
        const validationErrors = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }));

        return res.status(400).json({
          success: false,
          message: errorMessage,
          error: {
            details: validationErrors.reduce((acc, curr) => {
              acc[curr.field] = curr.message;
              return acc;
            }, {} as Record<string, string>)
          }
        });
      }
      
      const errorMessage = lang === 'ar' 
        ? 'خطأ في التحقق من معاملات المسار' 
        : 'Parameter validation error';
      
      return res.status(500).json({
        success: false,
        message: errorMessage,
        error: { message: 'Internal validation error' }
      });
    }
  };
};