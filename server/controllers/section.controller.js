import Section from "../models/section.model";
import AsyncHandler from "express-async-handler";

const createSection = AsyncHandler(async (req, res) => {
  const { course, semester, schedule, capacity, level, code } = req.body;

  const section = new Section({
    course,
    semester,
    schedule,
    capacity,
    level,
    code,
  });

  await section.save();
  res.status(201).json(section);
});
