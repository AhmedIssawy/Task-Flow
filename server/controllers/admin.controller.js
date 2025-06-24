import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
// Models
import Student from "../models/student.model.js";
import Admin from "../models/admin.model.js";
import Teacher from "../models/teacher.model.js";

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

const getAdminById = asyncHandler(async (req, res) => {
  const { id, lang = "en" } = req.body;
  const admin = await Admin.findOne({ id }).lean();
  if (!admin) {
    let message = "Admin not found";
    if (lang === "ar") message = "المسؤول غير موجود";

    return res.status(404).json({
      message,
    });
  }
  const { password, ...response } = admin;

  message = "Admin found successfully";
  if (lang === "ar") message = "تم العثور على المسؤول";

  res.status(200).json({
    message,
    admin: response,
  });
});

const getPageOfAdmins = asyncHandler(async (req, res) => {
  const { page = 1, lang = "en" } = req.query;
  const admins = await Admin.find()
    .skip((page - 1) * 40)
    .limit(40)
    .lean();
  res.status(200).json({
    admins,
    total: admins.length,
  });
});
const createAdmin = asyncHandler(async (req, res) => {
  const { password, name, lang = "en" } = req.body;
  if (!password) {
    let message = "Please provide a password";

    if (lang === "ar") message = "يرجى تقديم كلمة مرور";

    return res.status(400).json({
      message,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    name,
    password: hashedPassword,
    role: "admin",
  });

  let message = "Admin created successfully";
  if (lang === "ar") message = "تم إنشاء المسؤول بنجاح";

  res.status(201).json({
    message,
    admin,
  });
});

const createTeacher = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    courses = [],
    phone,
    address,
    password,
    universityId,
    role,
    lang = "en",
  } = req.body;

  const existingTeacher = await Teacher.findOne({ email });
  if (existingTeacher) {
    let message = "Teacher already exists, please use a different email";
    if (lang === "ar")
      message = "المعلم موجود بالفعل، يرجى استخدام بريد إلكتروني مختلف";

    return res.status(400).json({
      message,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const teacher = await Teacher.create({
    name,
    email,
    courses,
    phone,
    address,
    password: hashedPassword,
    universityId,
    role,
  });

  const {
    password: _password,
    phone: _phone,
    ...response
  } = teacher.toObject();

  let message = "Teacher created successfully";
  if (lang === "ar") message = "تم إنشاء المعلم بنجاح";

  res.status(201).json({
    message,
    teacher: response,
  });
});

const updateTeacher = asyncHandler(async (req, res) => {
  const {
    id,
    _id,
    name,
    email,
    courses,
    phone,
    address,
    password,
    role,
    lang = "en",
  } = req.body;

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

const updateAdmin = asyncHandler(async (req, res) => {
  const { id, name, password, lang = "en" } = req.body;

  const updateData = {};
  if (name) updateData.name = name;
  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    updateData.password = hashedPassword;
  }

  const admin = await Admin.findOneAndUpdate({ id }, updateData, { new: true });

  if (!admin) {
    let message = "Admin not found";
    if (lang === "ar") message = "المسؤول غير موجود";

    return res.status(404).json({ message });
  }

  let message = "Admin updated successfully";
  if (lang === "ar") message = "تم تحديث المسؤول بنجاح";

  res.status(200).json({
    message,
    admin,
  });
});

const deleteAdmin = asyncHandler(async (req, res) => {
  const { id, lang = "en" } = req.body;

  if (!id) {
    let message = "Admin ID is required";
    if (lang === "ar") message = "معرف المسؤول مطلوب";

    return res.status(400).json({ message });
  }

  const admin = await Admin.findOneAndDelete({ id });

  if (!admin) {
    let message = "Admin not found";
    if (lang === "ar") message = "المسؤول غير موجود";

    return res.status(404).json({ message });
  }

  let message = "Admin deleted successfully";
  if (lang === "ar") message = "تم حذف المسؤول بنجاح";

  res.status(200).json({
    message,
    admin,
  });
});

const updateUniversity = asyncHandler(async (req, res) => {
  const {
    id,
    name,
    address,
    phone,
    email,
    location,
    description,
    website,
    establishedYear,
    logo,
    lang = "en",
  } = req.body;

  if (!id) {
    let message = "University ID is required";
    if (lang === "ar") message = "معرف الجامعة مطلوب";

    return res.status(400).json({ message });
  }

  const updateData = {};

  if (name) updateData.name = name;
  if (address) updateData.address = address;
  if (phone) updateData.phone = phone;
  if (email) updateData.email = email;
  if (location) updateData.location = location;
  if (description) updateData.description = description;
  if (website) updateData.website = website;
  if (establishedYear) updateData.establishedYear = establishedYear;
  if (logo) updateData.logo = logo;

  const university = await University.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  if (!university) {
    let message = "University not found";
    if (lang === "ar") message = "الجامعة غير موجودة";

    return res.status(404).json({ message });
  }

  let message = "University updated successfully";
  if (lang === "ar") message = "تم تحديث الجامعة بنجاح";

  res.status(200).json({
    message,
    university,
  });
});

export {
  createStudent,
  createAdmin,
  createTeacher,
  updateTeacher,
  updateAdmin,
  deleteAdmin,
  updateUniversity,
  getAdminById,
  getPageOfAdmins,
};
