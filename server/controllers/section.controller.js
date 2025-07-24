import Section from "../models/section.model.js";
import AsyncHandler from "express-async-handler";
import getCurrentSemester from "../utils/getCurrentSemester.js";
import Semester from "../models/semester.model.js";

const createSection = AsyncHandler(async (req, res) => {
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
    semester.save();
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
  res.status(201).json(section);
});

const getSectionById = AsyncHandler(async (req, res) => {
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
    res.status(404).json({ message: "Section not found" });
    return;
  }
  res.status(200).json(section);
});

const updateSection = AsyncHandler(async (req, res) => {
  const { sectionId } = req.params;
  const updates = req.body;

  const section = await Section.findByIdAndUpdate(
    sectionId,
    updates,
    { new: true, runValidators: true }
  );

  if (!section) {
    res.status(404).json({ message: "Section not found" });
    return;
  }

  res.status(200).json(section);
});

export default createSection;

export { createSection, getSectionById, updateSection };
