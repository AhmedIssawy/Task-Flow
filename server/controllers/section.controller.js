import Section from "../models/section.model.js";
import AsyncHandler from "express-async-handler";
import getCurrentSemester from "../utils/getCurrentSemester.js";
import Semester from "../models/semester.model.js";
import sendResponse from "../utils/response.handler.js";

const createSection = AsyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { level, code, course, schedule, capacity, teachers, students } =
    req.body;

  const { universityId, collegeId, departmentId } = req.params;

  const { year, duration } = getCurrentSemester();

  let semester = await Semester.findOne({ year, duration });
  if (!semester) {
    semester = await Semester.create({
      year,
      duration,
    });
    await semester.save();
  }

  console.log("Semester: ", semester);

  const section = new Section({
    level,
    code,
    course,
    schedule,
    capacity,
    teachers,
    students,
    universityId,
    semester: semester._id,
    collegeId,
    departmentId,
  });

  await section.save();

  const successMessage =
    lang === "ar" ? "تم إنشاء القسم بنجاح" : "Section created successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: successMessage,
    data: section,
  });
});

const getPageOfSections = AsyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { universityId, collegeId, departmentId } = req.params;

  const sections = await Section.find({
    universityId,
    collegeId,
    departmentId,
  }).lean();

  if (!sections || sections.length === 0) {
    const errorMessage =
      lang === "ar" ? "لم يتم العثور على أقسام" : "No sections found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على الأقسام بنجاح"
      : "Sections retrieved successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: sections,
  });
});

const getSectionById = AsyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { sectionId } = req.params;

  const section = await Section.findById(sectionId)
    .populate([
      { path: "teachers", select: "name email" },
      { path: "students", select: "name email" },
      { path: "universityId", select: "name" },
      { path: "collegeId", select: "name" },
      { path: "departmentId", select: "name" },
      { path: "semester", select: "year duration" },
    ])
    .lean();

  if (!section) {
    const errorMessage =
      lang === "ar" ? "القسم غير موجود" : "Section not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar"
      ? "تم العثور على القسم بنجاح"
      : "Section retrieved successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: section,
  });
});

const updateSection = AsyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { sectionId } = req.params;
  const updates = req.body;

  const section = await Section.findByIdAndUpdate(sectionId, updates, {
    new: true,
    runValidators: true,
  });

  if (!section) {
    const errorMessage =
      lang === "ar" ? "القسم غير موجود" : "Section not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم تحديث القسم بنجاح" : "Section updated successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: section,
  });
});

const deleteSection = AsyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { sectionId } = req.params;

  const section = await Section.findByIdAndDelete(sectionId);

  if (!section) {
    const errorMessage =
      lang === "ar" ? "القسم غير موجود" : "Section not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم حذف القسم بنجاح" : "Section deleted successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
  });
});

export {
  createSection,
  getPageOfSections,
  getSectionById,
  updateSection,
  deleteSection,
};
