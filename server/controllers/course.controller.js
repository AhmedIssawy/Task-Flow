import Course from "../models/course.model";
import asyncHandler from "express-async-handler";

const getCoursesPage = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { page = 1, limit = 40 } = req.query;
  const { departmentId } = req.params;

  const courses = await Course.find({ departmentId })
    .select("-createdAt -updatedAt")
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ _id: -1 })
    .lean();

  if (!courses || courses.length === 0) {
    let message = "No courses found";
    if (lang === "ar") message = "لم يتم العثور على مقررات";

    return res.status(404).json({ message });
  }

  res.status(200).json(courses);
});

const getCourseById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { courseId } = req.params;

  const course = await Course.findOne({ _id: courseId })
    .select("-createdAt -updatedAt")
    .lean();

  if (!course) {
    let message = "Course not found";
    if (lang === "ar") message = "المقرر غير موجود";

    return res.status(404).json({ message });
  }

  res.status(200).json(course);
});

const createCourse = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { name, code, departmentId, description } = req.body;

  if (!name || !code || !departmentId) {
    let message = "Name, code, and department ID are required";
    if (lang === "ar") message = "الاسم، الرمز، ومعرف القسم مطلوبون";

    return res.status(400).json({ message });
  }

  const newCourse = new Course({
    name,
    code,
    departmentId,
    description,
  });

  await newCourse.save();

  res.status(201).json(newCourse);
});

const updateCourse = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { courseId } = req.params;
  const { name, code, description } = req.body;

  if (!courseId) {
    let message = "Course ID is required";
    if (lang === "ar") message = "معرف المقرر مطلوب";

    return res.status(400).json({ message });
  }

  const course = await Course.findByIdAndUpdate(
    courseId,
    { name, code, description },
    { new: true, runValidators: true }
  );

  if (!course) {
    let message = "Course not found";
    if (lang === "ar") message = "المقرر غير موجود";

    return res.status(404).json({ message });
  }

  res.status(200).json(course);
});

const deleteCourse = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { courseId } = req.params;

  if (!courseId) {
    let message = "Course ID is required";
    if (lang === "ar") message = "معرف المقرر مطلوب";

    return res.status(400).json({ message });
  }

  const course = await Course.findByIdAndDelete(courseId);

  if (!course) {
    let message = "Course not found";
    if (lang === "ar") message = "المقرر غير موجود";

    return res.status(404).json({ message });
  }

  res.status(200).json({ message: "Course deleted successfully" });
});

export {
  getCoursesPage,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
