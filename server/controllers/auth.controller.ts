// @ts-nocheck
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

// Utils and Types
import sendResponse from "../utils/response.handler.js";
import { AuthenticatedRequest } from "../types/middleware/index.js";
import { Language, UserRole } from "../types/common/index.js";
import { LoginInput } from "../validators/schemas.js";

// Models
import Student from "../models/student.model.js";
import Admin from "../models/admin.model.js";
import Teacher from "../models/teacher.model.js";

interface LoginRequest extends Request {
  body: LoginInput & { lang?: Language };
}

interface LoginResponse {
  role: UserRole;
  user: {
    _id: string;
    id: string;
    name: string;
    email?: string;
    [key: string]: any;
  };
}

const login = asyncHandler(async (req: LoginRequest, res: Response) => {
  const { id, password, lang = "en" } = req.body;
  
  // Determine model based on ID prefix
  let Model;
  if (id.startsWith("STU")) {
    Model = Student;
  } else if (id.startsWith("ADMIN")) {
    Model = Admin;
  } else {
    Model = Teacher;
  }

  const result = await Model.findOne({ id }).lean();
  if (!result) {
    const errorMessage = lang === "ar" 
      ? "معرف أو كلمة مرور غير صحيحة" 
      : "Invalid id or password";
    
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const isMatch = await bcrypt.compare(password, result.password);
  if (!isMatch) {
    const errorMessage = lang === "ar"
      ? "معرف أو كلمة مرور غير صحيحة!"
      : "Invalid id or password!";
    
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const jwtSecret = process.env.JWT_SECRET;
  const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "24h";
  
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined");
  }

  const token = jwt.sign(
    { _id: String(result._id), id: result.id, role: result.role },
    jwtSecret,
    { expiresIn: jwtExpiresIn }
  );

  res.cookie("__Security_access_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  });

  res.cookie("lang", lang, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000,
  });

  const { password: _, createdAt, updatedAt, role, ...response } = result;

  const successMessage = lang === "ar" 
    ? "تم تسجيل الدخول بنجاح" 
    : "Login successfully";

  return sendResponse<LoginResponse>(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: {
      role: result.role as UserRole,
      user: response,
    },
  });
});

const authMe = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const lang: Language = (req.cookies?.lang as Language) || "en";
  const user = req.user;

  if (!user) {
    const errorMessage = lang === "ar" ? "غير مصرح!" : "Unauthorized!";
    return sendResponse(res, {
      success: false,
      statusCode: 401,
      message: errorMessage,
    });
  }

  // Remove sensitive data - user is already properly typed from middleware
  const response = {
    _id: user._id,
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    universityId: user.universityId,
    collegeId: user.collegeId,
    departmentId: user.departmentId,
  };

  const successMessage = lang === "ar"
    ? "تم التحقق من المستخدم بنجاح"
    : "User authenticated successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: response,
  });
});

const logout = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const lang: Language = (req.cookies?.lang as Language) || "en";

  res.clearCookie("__Security_access_token");
  res.clearCookie("lang");

  const successMessage = lang === "ar" 
    ? "تم تسجيل الخروج بنجاح" 
    : "Logout successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
  });
});

export { login, logout, authMe };