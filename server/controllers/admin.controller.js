import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
// Models
import Admin from "../models/admin.model.js";

const getAdminById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id } = req.params;
  const admin = await Admin.findOne({ id })
    .select("-password")
    .populate([
      { path: "collegeId", select: "name _id id" },
      { path: "universityId", select: "name _id id" },
    ])
    .lean();

  let message = "";
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
  const lang = req.cookies?.lang || "en";
  const { page = 1 } = req.query;
  const admins = await Admin.find()
    .select("-password")
    .skip((page - 1) * 40)
    .limit(40)
    .lean();
  res.status(200).json({
    admins,
    total: admins.length,
  });
});
const createAdmin = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { password, name, universityId, collegeId } = req.body;
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
    universityId,
    collegeId,
    role: "admin",
  });

  let message = "Admin created successfully";
  if (lang === "ar") message = "تم إنشاء المسؤول بنجاح";

  res.status(201).json({
    message,
    admin,
  });
});

const updateAdmin = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id, name, password } = req.body;

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
  const lang = req.cookies?.lang || "en";
  const { id } = req.body;

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

export { createAdmin, updateAdmin, deleteAdmin, getAdminById, getPageOfAdmins };
