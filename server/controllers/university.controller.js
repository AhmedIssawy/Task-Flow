import asyncHandler from "express-async-handler";
import Student from "../models/student.model.js";
import University from "../models/university.model.js";

const createUniversity = asyncHandler(async (req, res) => {
  const {
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

  // Check for duplicate email
  const existing = await University.findOne({ email });
  if (existing) {
    return res.status(400).json({
      message:
        lang === "ar"
          ? "الجامعة موجودة بالفعل، يرجى استخدام بريد إلكتروني مختلف"
          : "University already exists, please use a different email",
    });
  }

  // Create new University
  const university = await University.create({
    name,
    address,
    phone,
    email,
    location,
    description,
    website,
    establishedYear,
    logo,
  });

  return res.status(201).json(university);
});

const getUniversityById = asyncHandler(async (req, res) => {
  const { universityId } = req.params;
  const { lang = "en" } = req.query;

  const university = await University.findById(universityId)
    .select("-createdAt -updatedAt")
    .lean();

  if (!university) {
    let message = "University not found";
    if (lang === "ar") message = "الجامعة غير موجودة";

    return res.status(404).json({
      message,
    });
  }

  res.status(200).json(university);
});

const getUniversitiesPage = asyncHandler(async (req, res) => {
  const { page = 1, limit = 40, lang = "en" } = req.query;

  const universities = await University.find()
    .select("-createdAt -updatedAt")
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  if (!universities || universities.length === 0) {
    let message = "No universities found";
    if (lang === "ar") message = "لم يتم العثور على جامعات";

    return res.status(404).json({
      message,
    });
  }

  res.status(200).json(universities);
});

const getStudentsPageOfUniversity = asyncHandler(async (req, res) => {
  const { universityId } = req.params;
  const page = Math.max(parseInt(req.query.page) || 1, 1);
  const limit = Math.max(parseInt(req.query.limit) || 40, 1);
  const { lang = "en" } = req.query;

  const students = await Student.find({ universityId })
    .limit(limit)
    .skip((page - 1) * limit)
    .lean();

  if (!students || students.length === 0) {
    let message = "No students found";
    if (lang === "ar") message = "لم يتم العثور على طلاب";

    return res.status(404).json({
      message,
    });
  }

  res.status(200).json(students);
});

const getTeachersPageOfUniversity = asyncHandler(async (req, res) => {
  const { universityId, collegeId, departmentId } = req.params;
  const { page = 1, limit = 40, lang = "en" } = req.query;

  const university = await University.findById(universityId)
    .populate({
      path: "teachers",
      options: {
        skip: (page - 1) * limit,
        limit: limit,
      },
    })
    .select("teachers")
    .lean();

  if (!university || !university.teachers || university.teachers.length === 0) {
    let message = "No teachers found";
    if (lang === "ar") message = "لم يتم العثور على معلمين";

    return res.status(404).json({
      message,
      total: 0,
      teachers: [],
    });
  }

  res.status(200).json({
    total: university.teachers.length,
    teachers: university.teachers,
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
  createUniversity,
  getUniversityById,
  getUniversitiesPage,
  getStudentsPageOfUniversity,
  getTeachersPageOfUniversity,
  updateUniversity,
};
