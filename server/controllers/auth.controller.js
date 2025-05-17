import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import Student from "../models/student.model.js";

const loginStudent = asyncHandler(async (req, res) => {
  const { studentId, password } = req.body;
  if (!studentId || !password) {
    return res.status(400).json({
      message: "Please provide studentId and password",
    });
  }
  const student = await Student.findOne({ studentId }).lean();
  if (!student) {
    return res.status(400).json({
      message: "Invalid studentId or password",
    });
  }
  const isMatch = await bcrypt.compare(password, student.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid studentId or password",
    });
  }

  const token = jwt.sign(
    { id: student._id, studentId: student.studentId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    message: "Login successful",
    token,
    student,
  });
});

export { loginStudent };
