import Student from "../models/student.model.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import asyncHandler from "express-async-handler";

// const getAllStudents = asyncHandler(async (req, res) => {
//   const students = await Student.find().lean();
//   res.status(200).json(students);
// });

const createStudent = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    courses = [],
    universityId,
    password,
    lang = "en",
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

  const student = await Student.create({
    name,
    email,
    courses,
    universityId,
    password: hashedPassword,
  });

  let message = "Student created successfully";

  if (lang === "ar") message = "تم إنشاء الطالب بنجاح";

  res.status(201).json({
    message,
    student,
  });
});

// const registerStudentToUniversity = asyncHandler(async (req, res) => {
//   const { studentId, universityId, lang = "en" } = req.body;

//   if (!studentId || !universityId) {
//     let message = "Please provide a student ID and university ID";
//     if (lang === "ar") message = "يرجى تقديم معرف الطالب ومعرف الجامعة";

//     return res.status(400).json({
//       message,
//     });
//   }

//   const student = await Student.findById(studentId);
//   if (!student) {
//     let message = "Student not found";
//     if (lang === "ar") message = "الطالب غير موجود";

//     return res.status(404).json({
//       message,
//     });
//   }

//   const university = await University.findById(universityId);
//   if (!university) {
//     let message = "University not found";
//     if (lang === "ar") message = "الجامعة غير موجودة";

//     return res.status(404).json({
//       message,
//     });
//   }

//   student.universityId = university._id;
//   await student.save();

//   res.status(200).json(student);
// });

const getStudentsPageOfUniversity = asyncHandler(async (req, res) => {
  const { universityId } = req.params;
  const { page = 1, limit = 40 } = req.query;
  const students = await Student.find({ universityId })
    .select("-createdAt -updatedAt")
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ _id: -1 })
    .lean();
  res.status(200).json(students);
});

const getAllStudentsOfUniversity = asyncHandler(async (req, res) => {
  const { universityId } = req.params;
  const students = await Student.find({ universityId })
    .select("-createdAt -updatedAt -courses")
    .sort({ _id: -1 })
    .lean();
  res.status(200).json(students);
});

const getStudentsPage = asyncHandler(async (req, res) => {
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

  res.status(200).json({
    students,
    totalPages,
    currentPage: page,
  });
});

const getStudentById = asyncHandler(async (req, res) => {
  const { lang = "en" } = req.query;

  const student = await Student.findById(req.params.id)
    .populate({
      path: "universityId",
      select: "name",
    })
    .populate({
      path: "courses",
      select: "_id name", // Populate courses and select name and _id
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
  const { lang = "en", ...updates } = req.body;
  const { id } = req.params;

  const updatedStudent = await Student.findByIdAndUpdate(
    id,
    { $set: updates },
    { new: true, runValidators: true }
  ).select("-password");

  if (!updatedStudent) {
    let message = "Student not found";
    if (lang === "ar") message = "الطالب غير موجود";

    return res.status(404).json({
      message,
    });
  }

  res.status(200).json(updatedStudent);
});

const deleteStudent = asyncHandler(async (req, res) => {
  const lang = req?.body?.lang || req?.query?.lang || "en";

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      message: lang === "ar" ? "معرّف غير صالح" : "Invalid student ID",
    });
  }

  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
    return res.status(404).json({
      message: lang === "ar" ? "الطالب غير موجود" : "Student not found",
    });
  }

  res.status(200).json({
    message:
      lang === "ar"
        ? "تم حذف الطالب نهائياً"
        : "Student has been removed permanently",
  });
});

export {
  // createStudent,
  // getAllStudents,
  // registerStudentToUniversity,
  createStudent,
  getStudentsPageOfUniversity,
  getAllStudentsOfUniversity,
  getStudentsPage,
  getStudentById,
  deleteStudent,
  updateStudent,
};
