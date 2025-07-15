import Teacher from "../models/teacher.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

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
    let message = "No teachers found";
    if (lang === "ar") message = "لم يتم العثور على معلمين";

    return res.status(404).json({
      message,
      total: 0,
      teachers: [],
    });
  }

  res.status(200).json({ teachers, total: teachers.length });
});

const getTeacherById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { teacherId } = req.params;

  const teacher = await Teacher.findOne({ id: teacherId })
    .select("-password")
    .populate("courses");

  if (!teacher) {
    let message = "Teacher not found";
    if (lang === "ar") message = "المعلم غير موجود";

    return res.status(404).json({
      message,
    });
  }

  res.status(200).json(teacher);
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

  let message = "Teacher created successfully";
  if (lang === "ar") message = "تم إنشاء المعلم بنجاح";

  res.status(201).json({
    message,
    teacher: response,
  });
});

const updateTeacher = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { _id, name, email, courses, phone, address, password, role } =
    req.body;

  const { id } = req.params;

  if (!id && !_id) {
    let message = "Teacher 'id' or '_id' is required";
    if (lang === "ar") message = "معرف المعلم 'id' أو '_id' مطلوب";

    return res.status(400).json({ message });
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
    let message = "Teacher not found";
    if (lang === "ar") message = "المعلم غير موجود";

    return res.status(404).json({ message });
  }

  const {
    password: _password,
    phone: _phone,
    ...response
  } = teacher.toObject();

  let message = "Teacher updated successfully";
  if (lang === "ar") message = "تم تحديث المعلم بنجاح";

  res.status(200).json({
    message,
    teacher: response,
  });
});

const deleteTeacher = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;
  const { _id = "" } = req.body;

  if (!id && !_id) {
    let message = "Teacher 'id' or '_id' is required";
    if (lang === "ar") message = "معرف المعلم 'id' أو '_id' مطلوب";

    return res.status(400).json({ message });
  }

  const teacher = id
    ? await Teacher.findOneAndDelete({ id })
    : await Teacher.findByIdAndDelete(_id);

  if (!teacher) {
    let message = "Teacher not found";
    if (lang === "ar") message = "المعلم غير موجود";

    return res.status(404).json({ message });
  }

  let message = "Teacher deleted successfully";
  if (lang === "ar") message = "تم حذف المعلم بنجاح";

  res.status(200).json({
    message,
  });
});

export {
  getPageOfTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
