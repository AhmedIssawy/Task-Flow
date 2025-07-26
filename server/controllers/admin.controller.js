import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import sendResponse from "../utils/response.handler.js";
// Models
import Admin from "../models/admin.model.js";

const getAdminById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;
  const admin = await Admin.findOne({ id })
    .select("-password")
    .populate([
      { path: "collegeId", select: "name _id id" },
      { path: "universityId", select: "name _id id" },
    ])
    .lean();

  if (!admin) {
    const errorMessage =
      lang === "ar" ? "المسؤول غير موجود" : "Admin not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const { password, ...response } = admin;
  const successMessage =
    lang === "ar" ? "تم العثور على المسؤول" : "Admin found successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: response,
  });
});

const getPageOfAdmins = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { page = 1 } = req.query;

  const admins = await Admin.find()
    .select("-password")
    .skip((page - 1) * 40)
    .limit(40)
    .lean();

  if (!admins || admins.length === 0) {
    const errorMessage =
      lang === "ar" ? "لم يتم العثور على مسؤولين" : "No admins found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على المسؤولين بنجاح"
      : "Admins retrieved successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: {
      admins,
      total: admins.length,
    },
  });
});

const createAdmin = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { password, name, universityId, collegeId } = req.body;

  if (!password) {
    const errorMessage =
      lang === "ar" ? "يرجى تقديم كلمة مرور" : "Please provide a password";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    name,
    password: hashedPassword,
    universityId,
    collegeId,
    role: "admin",
  });

  const successMessage =
    lang === "ar" ? "تم إنشاء المسؤول بنجاح" : "Admin created successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: successMessage,
    data: admin,
  });
});

const updateAdmin = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id, name, password } = req.body;

  const updateData = {};
  if (name) updateData.name = name;
  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    updateData.password = hashedPassword;
  }

  const admin = await Admin.findOneAndUpdate({ id }, updateData, { new: true });

  if (!admin) {
    const errorMessage =
      lang === "ar" ? "المسؤول غير موجود" : "Admin not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم تحديث المسؤول بنجاح" : "Admin updated successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: admin,
  });
});

const deleteAdmin = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.body;

  if (!id) {
    const errorMessage =
      lang === "ar" ? "معرف المسؤول مطلوب" : "Admin ID is required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const admin = await Admin.findOneAndDelete({ id });

  if (!admin) {
    const errorMessage =
      lang === "ar" ? "المسؤول غير موجود" : "Admin not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم حذف المسؤول بنجاح" : "Admin deleted successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: admin,
  });
});

export { createAdmin, updateAdmin, deleteAdmin, getAdminById, getPageOfAdmins };
