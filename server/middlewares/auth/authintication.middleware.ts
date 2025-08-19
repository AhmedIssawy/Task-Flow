import jwt from "jsonwebtoken";
import { Response, NextFunction } from 'express';
import "dotenv/config";

// Models
import Student from "../../models/student.model.js";
import Admin from "../../models/admin.model.js";
import Teacher from "../../models/teacher.model.js";

// Types
import { AuthenticatedRequest, JWTPayload } from '../../types/middleware/index.js';
import { Language, UserRole } from '../../types/common/index.js';

const authenticate = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  const lang: Language = (req.cookies?.lang as Language) || "en";
  const token = 
    req?.cookies?.["__Security_access_token"] ||
    req?.headers?.authorization?.split(" ")[1];

  if (!token) {
    const message = lang === "ar" ? "غير مصرح!" : "Unauthorized!";
    res.status(401).json({ 
      success: false,
      message 
    });
    return;
  }

  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decoded = jwt.verify(token, jwtSecret) as JWTPayload;
    
    // Determine which model to use based on role and find user
    let user: any;
    switch (decoded.role) {
      case "student":
      case "super-student":
        user = await Student.findById(decoded._id).lean();
        break;
      case "teacher":
        user = await Teacher.findById(decoded._id).lean();
        break;
      case "admin":
      case "super-admin":
        user = await Admin.findById(decoded._id).lean();
        break;
      default:
        throw new Error("Invalid user role");
    }

    // console.log("Decoded token:", decoded._id);

    if (!user) {
      const message = lang === "ar" ? "المستخدم غير موجود!" : "User not found!";
      res.status(401).json({ 
        success: false,
        message 
      });
      return;
    }

    // Attach user to request with proper typing
    req.user = {
      _id: user._id.toString(),
      id: user.id,
      role: user.role as UserRole,
      email: user.email || '',
      name: user.name,
      universityId: user.universityId?.toString(),
      collegeId: user.collegeId?.toString(),
      departmentId: user.departmentId?.toString(),
    };

    // console.log("Authenticated user:", user);
    next();
  } catch (error) {
    const message = lang === "ar" ? "غير مصرح!" : "Unauthorized!";
    res.status(401).json({ 
      success: false,
      message 
    });
  }
};

export default authenticate;
