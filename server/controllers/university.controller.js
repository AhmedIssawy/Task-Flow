import asyncHandler from "express-async-handler";
import Student from "../models/student.model.js";
import University from "../models/university.model.js";
import sendResponse from "../utils/response.handler.js";

const createUniversity = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
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
  } = req.body;

  // Check for duplicate email
  const existing = await University.findOne({ email });
  if (existing) {
    const errorMessage =
      lang === "ar"
        ? "الجامعة موجودة بالفعل، يرجى استخدام بريد إلكتروني مختلف"
        : "University already exists, please use a different email";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
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

  const successMessage =
    lang === "ar"
      ? "تم إنشاء الجامعة بنجاح"
      : "University created successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: successMessage,
    data: university,
  });
});

const getUniversityById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { universityId } = req.params;

  const university = await University.findById(universityId)
    .select("-createdAt -updatedAt")
    .lean();

  if (!university) {
    const errorMessage =
      lang === "ar" ? "الجامعة غير موجودة" : "University not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على الجامعة بنجاح"
      : "University retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: university,
  });
});

const getUniversitiesPage = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { page = 1, limit = 40 } = req.query;

  const universities = await University.find()
    .select("-createdAt -updatedAt")
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  if (!universities || universities.length === 0) {
    const errorMessage =
      lang === "ar" ? "لم يتم العثور على جامعات" : "No universities found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على الجامعات بنجاح"
      : "Universities retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: universities,
  });
});

const getStudentsPageOfUniversity = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { universityId } = req.params;
  const page = Math.max(parseInt(req.query.page) || 1, 1);
  const limit = Math.max(parseInt(req.query.limit) || 40, 1);

  const students = await Student.find({ universityId })
    .limit(limit)
    .skip((page - 1) * limit)
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

const getTeachersPageOfUniversity = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { universityId, collegeId, departmentId } = req.params;
  const { page = 1, limit = 40 } = req.query;

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
    const errorMessage =
      lang === "ar" ? "لم يتم العثور على معلمين" : "No teachers found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على المعلمين بنجاح"
      : "Teachers retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: {
      total: university.teachers.length,
      teachers: university.teachers,
    },
  });
});

const updateUniversity = asyncHandler(async (req, res) => {
  //its patch req not put recap later
  const lang = req.cookies?.lang || "en";
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
  } = req.body;

  if (!id) {
    const errorMessage =
      lang === "ar" ? "معرف الجامعة مطلوب" : "University ID is required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
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
    const errorMessage =
      lang === "ar" ? "الجامعة غير موجودة" : "University not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم تحديث الجامعة بنجاح"
      : "University updated successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: university,
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
