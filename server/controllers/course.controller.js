import Course from "../models/course.model.js";
import asyncHandler from "express-async-handler";
import sendResponse from "../utils/response.handler.js";
import mongoose from "mongoose";

const getCoursesPage = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const {
    page = 1,
    limit = 40,
    universityId,
    collegeId,
    departmentId,
  } = req.query;

  if (!universityId || !collegeId || !departmentId) {
    const errorMessage =
      lang === "ar"
        ? "معرف الجامعة، الكلية، والقسم مطلوبون"
        : "University ID, college ID, and department ID are required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }
  
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const filter = {
    departmentId: new mongoose.Types.ObjectId(departmentId),
    collegeId: new mongoose.Types.ObjectId(collegeId),
    universityId: new mongoose.Types.ObjectId(universityId),
  };

  const courses = await Course.find(filter)
    .select("-createdAt -updatedAt -collegeId -departmentId -universityId")
    .populate("teachers", "name _id")
    .limit(limitNum)
    .skip(skip)
    .sort({ _id: -1 })
    .lean();

  const totalCourses = await Course.countDocuments(filter);
  const totalPages = Math.ceil(totalCourses / limitNum);

  if (!courses || courses.length === 0) {
    const message =
      lang === "ar" ? "لم يتم العثور على مقررات" : "No courses found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message,
    });
  }

  const successMessage =
    lang === "ar" ? "تم جلب المقررات بنجاح" : "Courses retrieved successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: {
      courses,
      pagination: {
        currentPage: pageNum,
        totalPages,
        totalCourses,
        limit: limitNum,
        hasNextPage: pageNum < totalPages,
        hasPrevPage: pageNum > 1,
      },
    },
  });
});

const getCourseById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { courseId } = req.params;

  const course = await Course.findOne({ _id: courseId })
    .select("-createdAt -updatedAt")
    .lean();

  if (!course) {
    const errorMessage =
      lang === "ar" ? "المقرر غير موجود" : "Course not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم جلب المقرر بنجاح" : "Course retrieved successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: course,
  });
});

const createCourse = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { name, code, departmentId, description, universityId, collegeId } =
    req.body;

  if (!name || !code || !departmentId || !universityId || !collegeId) {
    const errorMessage =
      lang === "ar"
        ? "الاسم، الرمز، ومعرف القسم مطلوبون"
        : "Name, code, and department ID are required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const newCourse = new Course({
    name,
    code,
    departmentId,
    universityId,
    collegeId,
    description,
  });

  await newCourse.save();

  const successMessage =
    lang === "ar" ? "تم إنشاء المقرر بنجاح" : "Course created successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: successMessage,
    data: newCourse,
  });
});

const updateCourse = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { courseId } = req.params;
  const { name, code, description } = req.body;

  if (!courseId) {
    const errorMessage =
      lang === "ar" ? "معرف المقرر مطلوب" : "Course ID is required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const course = await Course.findByIdAndUpdate(
    courseId,
    { name, code, description },
    { new: true, runValidators: true }
  );

  if (!course) {
    const errorMessage =
      lang === "ar" ? "المقرر غير موجود" : "Course not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم تحديث المقرر بنجاح" : "Course updated successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: course,
  });
});

const deleteCourse = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { courseId } = req.params;

  if (!courseId) {
    const errorMessage =
      lang === "ar" ? "معرف المقرر مطلوب" : "Course ID is required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }

  const course = await Course.findByIdAndDelete(courseId);

  if (!course) {
    const errorMessage =
      lang === "ar" ? "المقرر غير موجود" : "Course not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }

  const successMessage =
    lang === "ar" ? "تم حذف المقرر بنجاح" : "Course deleted successfully";

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: course,
  });
});

export {
  getCoursesPage,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
