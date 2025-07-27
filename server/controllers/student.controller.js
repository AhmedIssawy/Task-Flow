// models
import Student from "../models/student.model.js";
// libraries
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import sendResponse from "../utils/response.handler.js";

import asyncHandler from "express-async-handler";

const createStudent = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const {
    name,
    email,
    courses = [],
    universityId,
    collegeId,
    departmentId,
    password,
    gender,
  } = req.body;

  const existingStudent = await Student.findOne({ email });
  if (existingStudent) {
    const errorMessage =
      lang === "ar"
        ? "الطالب موجود بالفعل، يرجى استخدام بريد إلكتروني مختلف"
        : "Student already exists, please use a different email";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const response = await Student.create({
    name,
    email,
    courses,
    gender,
    universityId,
    collegeId,
    departmentId,
    password: hashedPassword,
  });

  const { password: _, ...student } = response.toObject();

  const successMessage =
    lang === "ar" ? "تم إنشاء الطالب بنجاح" : "Student created successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: successMessage,
    data: student,
  });
});

const getStudentsPageOfUniversity = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { universityId } = req.params;
  const { page = 1, limit = 40 } = req.query;

  const students = await Student.find({ universityId })
    .select("-createdAt -updatedAt")
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ _id: -1 })
    .lean();

  if (!students || students.length === 0) {
    const errorMessage =
      lang === "ar" ? "لم يتم العثور على طلاب" : "No students found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على الطلاب بنجاح"
      : "Students retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: students,
  });
});

const getAllStudentsOfUniversity = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { universityId } = req.params;

  const students = await Student.find({ universityId })
    .select("-createdAt -updatedAt -courses")
    .sort({ _id: -1 })
    .lean();

  if (!students || students.length === 0) {
    const errorMessage =
      lang === "ar" ? "لم يتم العثور على طلاب" : "No students found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على الطلاب بنجاح"
      : "Students retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: students,
  });
});

const getStudentsPage = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { page = 1, limit = 40 } = req.query;
  const totalStudents = await Student.countDocuments();
  const totalPages = Math.ceil(totalStudents / limit);

  const students = await Student.find()
    .select("-createdAt -updatedAt -courses")
    .populate({
      path: "universityId",
      select: "name",
    })
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ _id: -1 })
    .lean();

  if (!students || students.length === 0) {
    const errorMessage =
      lang === "ar" ? "لم يتم العثور على طلاب" : "No students found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على الطلاب بنجاح"
      : "Students retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: {
      students,
      totalPages,
      currentPage: page,
    },
  });
});

const getStudentById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;

  const student = await Student.findById(id)
    .populate({
      path: "universityId",
      select: "name",
    })
    .populate({
      path: "courses",
      select: "_id name",
    })
    .lean();

  if (!student) {
    const errorMessage =
      lang === "ar" ? "الطالب غير موجود" : "Student not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const { password: _, createdAt, updatedAt, ...response } = student;

  const successMessage =
    lang === "ar"
      ? "تم العثور على الطالب بنجاح"
      : "Student retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: response,
  });
});

const updateStudent = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;

  const updatedStudent = await Student.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true, runValidators: true }
  ).select("-password");

  if (!updatedStudent) {
    const errorMessage =
      lang === "ar" ? "الطالب غير موجود" : "Student not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم تحديث الطالب بنجاح" : "Student updated successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: updatedStudent,
  });
});

const deleteStudent = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    const errorMessage =
      lang === "ar" ? "معرّف الطالب غير صالح" : "Invalid student ID";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
    const errorMessage =
      lang === "ar" ? "الطالب غير موجود" : "Student not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم حذف الطالب نهائياً"
      : "Student has been removed permanently";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
  });
});

const getStudentCourses = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;

  const student = await Student.findById(id)
    .populate([{ path: "courses.course" }, { path: "courses.section" }])
    .select("courses")
    .lean();

  if (!student) {
    const errorMessage =
      lang === "ar" ? "الطالب غير موجود" : "Student not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم استرداد المقررات بنجاح"
      : "Courses retrieved successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: student.courses, // contains course & section populated
  });
});

const getStudentCourseById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id, courseId } = req.params;

  const student = await Student.findById(id)
    .populate([
      {
        path: "courses.course",
        select: "-teachers",
      },
      {
        path: "courses.section",
        populate: {
          path: "teachers",
          select: "-password -__v",
        },
      },
    ])
    .select("courses")
    .lean();

  if (!student) {
    const errorMessage =
      lang === "ar" ? "الطالب غير موجود" : "Student not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const courseEntry = student.courses.find(
    (c) => c.course && c.course._id?.toString() === courseId
  );

  if (!courseEntry) {
    const errorMessage =
      lang === "ar" ? "المقرر غير موجود" : "Course not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم استرداد المقرر بنجاح" : "Course retrieved successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: courseEntry,
  });
});

export {
  createStudent,
  getStudentsPageOfUniversity,
  getAllStudentsOfUniversity,
  getStudentsPage,
  getStudentById,
  deleteStudent,
  updateStudent,
  getStudentCourses,
  getStudentCourseById,
};
