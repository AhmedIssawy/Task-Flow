// models
import Student from "../models/student.model.js";
// libraries
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import asyncHandler from "express-async-handler";

const createStudent = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const {
    name,
    email,
    courses = [],
    gender,
    universityId,
    collegeId,
    departmentId,
    password,
    gender,
  } = req.body;

  const existingStudent = await Student.findOne({ email });
  if (existingStudent) {
    let message = "Student already exists, please use a different email";
    if (lang === "ar")
      message = "الطالب موجود بالفعل، يرجى استخدام بريد إلكتروني مختلف";

    return res.status(400).json({
      message,
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
    gender,
  });

  const {password: _, ...student} = response.toObject();

  let message = "Student created successfully";
  if (lang === "ar") message = "تم إنشاء الطالب بنجاح";

  res.status(201).json({
    message,
    student,
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
    let message = "No students found";
    if (lang === "ar") message = "لم يتم العثور على طلاب";

    return res.status(404).json({ message });
  }

  res.status(200).json(students);
});

const getAllStudentsOfUniversity = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { universityId } = req.params;

  const students = await Student.find({ universityId })
    .select("-createdAt -updatedAt -courses")
    .sort({ _id: -1 })
    .lean();

  if (!students || students.length === 0) {
    let message = "No students found";
    if (lang === "ar") message = "لم يتم العثور على طلاب";

    return res.status(404).json({ message });
  }

  res.status(200).json(students);
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
    let message = "No students found";
    if (lang === "ar") message = "لم يتم العثور على طلاب";

    return res.status(404).json({ message });
  }

  res.status(200).json({
    students,
    totalPages,
    currentPage: page,
  });
});

const getStudentById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";

  const student = await Student.findById(req.params.id)
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
    let message = "Student not found";
    if (lang === "ar") message = "الطالب غير موجود";

    return res.status(404).json({
      message,
    });
  }
  res.status(200).json(student);
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
    let message = "Student not found";
    if (lang === "ar") message = "الطالب غير موجود";

    return res.status(404).json({
      message,
    });
  }

  let message = "Student updated successfully";
  if (lang === "ar") message = "تم تحديث الطالب بنجاح";

  res.status(200).json({
    message,
    student: updatedStudent,
  });
});

const deleteStudent = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    let message = "Invalid student ID";
    if (lang === "ar") message = "معرّف الطالب غير صالح";

    return res.status(400).json({
      message,
    });
  }

  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
    let message = "Student not found";
    if (lang === "ar") message = "الطالب غير موجود";

    return res.status(404).json({
      message,
    });
  }

  let message = "Student has been removed permanently";
  if (lang === "ar") message = "تم حذف الطالب نهائياً";

  res.status(200).json({
    message,
  });
});

const getStudentCourses = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;

  const student = await Student.findById(id)
    .populate("courses")
    .select("courses")
    .lean();

  if (!student) {
    let message = "Student not found";
    if (lang === "ar") message = "الطالب غير موجود";

    return res.status(404).json({
      message,
    });
  }

  let message = "Courses retrieved successfully";
  if (lang === "ar") message = "تم استرداد المقررات بنجاح";

  res.status(200).json({
    courses: student.courses,
    message,
  });
});

const getStudentCourseById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id, courseId } = req.params;

  const student = await Student.findById(id)
    .populate({
      path: "courses",
      populate: { path: "teachers", select: "-password" },
    })
    .select("courses")
    .lean();

  if (!student) {
    let message = "Student not found";
    if (lang === "ar") message = "الطالب غير موجود";

    return res.status(404).json({
      message,
    });
  }

  const course = student.courses.find((c) => c._id.toString() === courseId);

  if (!course) {
    let message = "Course not found";
    if (lang === "ar") message = "المقرر غير موجود";

    return res.status(404).json({
      message,
    });
  }

  let message = "Course retrieved successfully";
  if (lang === "ar") message = "تم استرداد المقرر بنجاح";

  res.status(200).json({
    course,
    message,
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
