import Department from "../models/department.model.js";
import asyncHandler from "express-async-handler";
import sendResponse from "../utils/response.handler.js";
import mongoose from "mongoose";

const createDepartment = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { name, description, phone, email, location, establishedYear } =
    req.body;

  const { collegeId, universityId } = req.params;

  if (
    !name ||
    !description ||
    !phone ||
    !email ||
    !location ||
    !collegeId ||
    !universityId ||
    !establishedYear
  ) {
    const errorMessage =
      lang === "ar" ? "جميع الحقول مطلوبة" : "All fields are required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const existingByName = await Department.findOne({ name, collegeId });
  if (existingByName) {
    const errorMessage =
      lang === "ar"
        ? "القسم موجود بالفعل في هذه الكلية"
        : "Department already exists in this college";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const existingByEmail = await Department.findOne({ email });
  if (existingByEmail) {
    const errorMessage =
      lang === "ar"
        ? "البريد الإلكتروني مستخدم بالفعل"
        : "Email is already in use";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const department = await Department.create({
    name,
    description,
    phone,
    email,
    location,
    collegeId,
    universityId,
    establishedYear,
  });

  const successMessage =
    lang === "ar" ? "تم إنشاء القسم بنجاح" : "Department created successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: successMessage,
    data: department,
  });
});

const getDepartmentsPage = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { collegeId } = req.params;
  const { page = 1, limit = 40 } = req.query;

  if (!collegeId) {
    const errorMessage =
      lang === "ar" ? "معرف الكلية مطلوب" : "College ID is required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const filter = { collegeId: new mongoose.Types.ObjectId(collegeId) };

  const departments = await Department.find(filter)
    .select("-createdAt -updatedAt")
    .limit(limitNum)
    .skip(skip)
    .sort({ _id: -1 })
    .lean();

  const totalDepartments = await Department.countDocuments(filter);
  const totalPages = Math.ceil(totalDepartments / limitNum);

  if (!departments || departments.length === 0) {
    const errorMessage =
      lang === "ar" ? "لم يتم العثور على أقسام" : "No departments found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على الأقسام بنجاح"
      : "Departments retrieved successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: {
      departments,
      pagination: {
        currentPage: pageNum,
        totalPages,
        totalDepartments,
        limit: limitNum,
        hasNextPage: pageNum < totalPages,
        hasPrevPage: pageNum > 1,
        nextPage: pageNum < totalPages ? pageNum + 1 : null,
        prevPage: pageNum > 1 ? pageNum - 1 : null,
      },
    },
  });
});

const updateDepartment = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id, ...updateData } = req.body;

  if (!id) {
    const errorMessage =
      lang === "ar" ? "معرف القسم مطلوب" : "Department ID is required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const department = await Department.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!department) {
    const errorMessage =
      lang === "ar" ? "القسم غير موجود" : "Department not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم تحديث القسم بنجاح" : "Department updated successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: department,
  });
});

const getDepartmentById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;

  const department = await Department.findById(id).populate({
    path: "collegeId",
    select: "name address",
  });

  if (!department) {
    const errorMessage =
      lang === "ar" ? "القسم غير موجود" : "Department not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على القسم بنجاح"
      : "Department retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: department,
  });
});

const deleteDepartment = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;

  const department = await Department.findByIdAndDelete(id);

  if (!department) {
    const errorMessage =
      lang === "ar" ? "القسم غير موجود" : "Department not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم حذف القسم بنجاح" : "Department deleted successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
  });
});

export {
  createDepartment,
  updateDepartment,
  getDepartmentById,
  deleteDepartment,
  getDepartmentsPage,
};
