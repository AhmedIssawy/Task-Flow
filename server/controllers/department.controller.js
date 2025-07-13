import Department from "../models/department.model.js";
import asyncHandler from "express-async-handler";

const createDepartment = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const {
    name,
    description,
    phone,
    email,
    location,
    establishedYear,
  } = req.body;

  const { collegeId, universityId } = req.params;
 
  if (!name || !description || !phone || !email || !location || !collegeId || !universityId || !establishedYear) {
    let message = "All fields are required";
    if (lang === "ar") message = "جميع الحقول مطلوبة";
    
    return res.status(400).json({ message });
  }

  const existingByName = await Department.findOne({ name, collegeId });
  if (existingByName) {
    let message = "Department already exists in this college";
    if (lang === "ar") message = "القسم موجود بالفعل في هذه الكلية";
    
    return res.status(400).json({ message });
  }

  const existingByEmail = await Department.findOne({ email });
  if (existingByEmail) {
    let message = "Email is already in use";
    if (lang === "ar") message = "البريد الإلكتروني مستخدم بالفعل";
    
    return res.status(400).json({ message });
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

  let message = "Department created successfully";
  if (lang === "ar") message = "تم إنشاء القسم بنجاح";

  res.status(201).json({
    message,
    department,
  });
});

const getDepartmentsPage = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { collegeId } = req.params;
  const { page = 1, limit = 40 } = req.query;

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

  if (!departments || departments.length === 0) {
    let message = "No departments found";
    if (lang === "ar") message = "لم يتم العثور على أقسام";

    return res.status(404).json({ message });
  }

  res.status(200).json(departments);
});

const updateDepartment = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id, ...updateData } = req.body;

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

  let message = "Department updated successfully";
  if (lang === "ar") message = "تم تحديث القسم بنجاح";

  res.status(200).json({
    message,
    department,
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
    let message = "Department not found";
    if (lang === "ar") message = "القسم غير موجود";

    return res.status(404).json({ message });
  }

  res.status(200).json(department);
});

const deleteDepartment = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;

  const department = await Department.findByIdAndDelete(id);

  if (!department) {
    let message = "Department not found";
    if (lang === "ar") message = "القسم غير موجود";

    return res.status(404).json({ message });
  }

  let message = "Department deleted successfully";
  if (lang === "ar") message = "تم حذف القسم بنجاح";

  res.status(200).json({ message });
});

export {
  createDepartment,
  updateDepartment,
  getDepartmentById,
  deleteDepartment,
  getDepartmentsPage,
};
