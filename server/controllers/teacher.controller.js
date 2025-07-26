import Teacher from "../models/teacher.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import Course from "../models/course.model.js";
import sendResponse from "../utils/response.handler.js";

const getPageOfTeachers = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { page = 1, limit = 40 } = req.query;

  const teachers = await Teacher.find()
    .select("-password")
    .populate("courses")
    .skip((page - 1) * 40)
    .limit(limit)
    .lean();

  if (!teachers || teachers.length === 0) {
    const errorMessage =
      lang === "ar" ? "لم يتم العثور على معلمين" : "No teachers found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على المعلمين بنجاح"
      : "Teachers retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: { teachers, total: teachers.length },
  });
});

const getTeacherById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { teacherId } = req.params;

  const teacher = await Teacher.findOne({ id: teacherId })
    .select("-password")
    .populate("courses");

  if (!teacher) {
    const errorMessage =
      lang === "ar" ? "المعلم غير موجود" : "Teacher not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على المعلم بنجاح"
      : "Teacher retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: teacher,
  });
});

const createTeacher = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const {
    name,
    email,
    courses = [],
    phone,
    address,
    password,
    universityId,
    departmentId,
    collegeId,
    role = "teacher",
  } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const teacher = await Teacher.create({
    name,
    email,
    courses,
    phone,
    address,
    password: hashedPassword,
    universityId,
    departmentId,
    collegeId,
    role,
  });

  const { password: _password, ...response } = teacher.toObject();

  const successMessage =
    lang === "ar" ? "تم إنشاء المعلم بنجاح" : "Teacher created successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: successMessage,
    data: response,
  });
});

const updateTeacher = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { _id, name, email, courses, phone, address, password, role } =
    req.body;

  const { id } = req.params;

  if (!id && !_id) {
    const errorMessage =
      lang === "ar"
        ? "معرف المعلم 'id' أو '_id' مطلوب"
        : "Teacher 'id' or '_id' is required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const updateData = {};

  if (name) updateData.name = name;
  if (email) updateData.email = email;
  if (courses) updateData.courses = courses;
  if (phone) updateData.phone = phone;
  if (address) updateData.address = address;
  if (role) updateData.role = role;
  if (password) updateData.password = await bcrypt.hash(password, 10);

  const teacher = id
    ? await Teacher.findOneAndUpdate({ id }, updateData, { new: true })
    : await Teacher.findByIdAndUpdate(_id, updateData, { new: true });

  if (!teacher) {
    const errorMessage =
      lang === "ar" ? "المعلم غير موجود" : "Teacher not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const {
    password: _password,
    phone: _phone,
    ...response
  } = teacher.toObject();

  const successMessage =
    lang === "ar" ? "تم تحديث المعلم بنجاح" : "Teacher updated successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: response,
  });
});

const deleteTeacher = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;
  const { _id = "" } = req.body;

  if (!id && !_id) {
    const errorMessage =
      lang === "ar"
        ? "معرف المعلم 'id' أو '_id' مطلوب"
        : "Teacher 'id' or '_id' is required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const teacher = id
    ? await Teacher.findOneAndDelete({ id })
    : await Teacher.findByIdAndDelete(_id);

  if (!teacher) {
    const errorMessage =
      lang === "ar" ? "المعلم غير موجود" : "Teacher not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم حذف المعلم بنجاح" : "Teacher deleted successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
  });
});

export {
  getPageOfTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
