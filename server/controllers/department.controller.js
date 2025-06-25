import Department from "../models/department.model.js";
import asyncHandler from "express-async-handler";

const createDepartment = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    phone,
    email,
    location,
    establishedYear,
    lang = "en",
  } = req.body;

  const { collegeId, universityId } = req.params;

  // التحقق من الحقول المطلوبة
  if (!name || !description || !phone || !email || !location || !collegeId || !universityId || !establishedYear) {
    return res.status(400).json({
      message: lang === "ar" ? "جميع الحقول مطلوبة" : "All fields are required",
    });
  }

  // تحقق من تكرار الاسم في نفس الكلية
  const existingByName = await Department.findOne({ name, collegeId });
  if (existingByName) {
    return res.status(400).json({
      message: lang === "ar" ? "القسم موجود بالفعل في هذه الكلية" : "Department already exists in this college",
    });
  }

  // تحقق من تكرار البريد الإلكتروني
  const existingByEmail = await Department.findOne({ email });
  if (existingByEmail) {
    return res.status(400).json({
      message: lang === "ar" ? "البريد الإلكتروني مستخدم بالفعل" : "Email is already in use",
    });
  }

  // إنشاء القسم
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

  res.status(201).json(department);
});


const getDepartmentsPage = asyncHandler(async (req, res) => {
  const { collegeId } = req.params;
  const { page = 1, limit = 40, lang = "en" } = req.query;

  if (!collegeId) {
    let message = "College ID is required";
    if (lang === "ar") message = "معرف الكلية مطلوب";

    return res.status(400).json({ message });
  }

  const departments = await Department.find({ collegeId })
    .select("-createdAt -updatedAt")
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ _id: -1 })
    .lean();

  res.status(200).json(departments);
});

const updateDepartment = asyncHandler(async (req, res) => {
  const { id, lang = "en", ...updateData } = req.body;

  if (!id) {
    let message = "Department ID is required";
    if (lang === "ar") message = "معرف القسم مطلوب";

    return res.status(400).json({ message });
  }

  const department = await Department.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!department) {
    let message = "Department not found";
    if (lang === "ar") message = "القسم غير موجود";

    return res.status(404).json({ message });
  }

  res.status(200).json(department);
});

const getDepartmentById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { lang = "en" } = req.body;

  const department = await Department.findById(id).populate({
    path: "collegeId", // Example: populate related College if exists
    select: "name address", // Limit fields if needed
  });

  if (!department) {
    const message = lang === "ar" ? "القسم غير موجود" : "Department not found";

    return res.status(404).json({ message });
  }

  res.status(200).json(department);
});

const deleteDepartment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { lang = "en" } = req.query;

  const department = await Department.findByIdAndDelete(id);

  if (!department) {
    const message = lang === "ar" ? "القسم غير موجود" : "Department not found";

    return res.status(404).json({ message });
  }

  res.status(200).json({ message: "Department deleted successfully" });
});

export {
  createDepartment,
  updateDepartment,
  getDepartmentById,
  deleteDepartment,
  getDepartmentsPage,
};
