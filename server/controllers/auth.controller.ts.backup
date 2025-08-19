import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import sendResponse from "../utils/response.handler.js";
// Models
import Student from "../models/student.model.js";
import Admin from "../models/admin.model.js";
import Teacher from "../models/teacher.model.js";

const login = asyncHandler(async (req, res) => {
  let { id, password, lang = "en" } = req.body;
  let Model = null;
  if (id.startsWith("STU")) {
    Model = Student;
  } else if (id.startsWith("ADMIN")) {
    Model = Admin;
  } else {
    Model = Teacher;
  }

  const result = await Model.findOne({ id }).lean();
  if (!result) {
    const errorMessage =
      lang === "ar" ? "معرف أو كلمة مرور غير صحيحة" : "Invalid id or password";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const isMatch = await bcrypt.compare(password, result.password);
  if (!isMatch) {
    const errorMessage =
      lang === "ar"
        ? "معرف أو كلمة مرور غير صحيحة!"
        : "Invalid id or password!";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const token = jwt.sign(
    { _id: String(result._id), id: result.id, role: result.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.cookie("__Security_access_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.cookie("lang", lang, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000,
  });

  const { password: _, createdAt, updatedAt, role, ...response } = result;

  const successMessage =
    lang === "ar" ? "تم تسجيل الدخول بنجاح" : "Login successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: {
      role: result.role,
      user: response,
    },
  });
});

const authMe = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const user = req.user;

  if (!user) {
    const errorMessage = lang === "ar" ? "غير مصرح!" : "Unauthorized!";
    return sendResponse(res, {
      success: false,
      statusCode: 401,
      message: errorMessage,
    });
  }

  const { password: _, createdAt, updatedAt, ...response } = user?._doc;

  const successMessage =
    lang === "ar"
      ? "تم التحقق من المستخدم بنجاح"
      : "User authenticated successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: response,
  });
});

const logout = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";

  res.clearCookie("__Security_access_token");
  res.clearCookie("lang");

  const successMessage =
    lang === "ar" ? "تم تسجيل الخروج بنجاح" : "Logout successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
  });
});

export { login, logout, authMe };
