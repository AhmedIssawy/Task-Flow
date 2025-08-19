import { Response, NextFunction } from 'express';
import { AuthenticatedRequest, AuthorizeRoles } from '../../types/middleware/index.js';
import { Language } from '../../types/common/index.js';

const authorize = (allowedRoles: AuthorizeRoles) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const lang: Language = (req.cookies?.lang as Language) || 'en';
    const user = req.user;
    
    if (!user) {
      const errorMessage = lang === 'ar' ? 'ممنوع' : 'Forbidden';
      res.status(403).json({ 
        success: false,
        message: errorMessage 
      });
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      const errorMessage = lang === 'ar' 
        ? 'ليس لديك صلاحية للوصول لهذا المورد' 
        : 'You do not have permission to access this resource';
      
      res.status(403).json({ 
        success: false,
        message: errorMessage 
      });
      return;
    }
    
    // console.log("Authorized user:", user.id, "with role:", user.role);
    next();
  };
};

export default authorize;
