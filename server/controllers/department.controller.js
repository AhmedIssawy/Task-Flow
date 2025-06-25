import Department from "../models/department.model.js";
import asyncHandler from "express-async-handler";

const createDepartment = asyncHandler(async (req, res) => {
  const { name, description, collegeId, lang = "en" } = req.body;

  // Check for duplicate department name in the same college
  const existing = await Department.findOne({
    name,
    collegeId,
  });
  if (existing) {
    let message = "Department already exists in this college";
    if (lang === "ar") message = "القسم موجود بالفعل في هذه الكلية";

    return res.status(400).json({
      message,
    });
  }
  // Create new Department
  const department = await Department.create({
    name,
    description,
    collegeId,
  });
  return res.status(201).json(department);
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
    if (lang === "ar") message = "الأقسام غير موجوده";

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
