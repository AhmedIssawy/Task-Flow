import College from "../models/college.model.js";

import asyncHandler from "express-async-handler";

const getCollegesPage = asyncHandler(async (req, res) => {
  const { page = 1, limit = 40 } = req.query;
  const { universityId } = req.params;

  const colleges = await College.find({ universityId })
    .select("-createdAt -updatedAt")
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ _id: -1 })
    .lean();

  res.status(200).json(colleges);
});

const getCollegeById = asyncHandler(async (req, res) => {
  const { universityId, collegeId } = req.params;
  if (!collegeId) {
    return res.status(400).json({ message: "College ID is required" });
  }
  const college = await College.find({_id: collegeId, universityId})
    .select("-createdAt -updatedAt")
    .lean();
  if (!college) {
    return res.status(404).json({ message: "College not found" });
  }
  res.status(200).json(college);
});

const updateCollege = asyncHandler(async (req, res) => {
  const { id, ...updateData } = req.body;

  if (!id) {
    return res.status(400).json({ message: "College ID is required" });
  }

  const college = await College.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!college) {
    return res.status(404).json({ message: "College not found" });
  }

  res.status(200).json(college);
});

export { getCollegesPage, getCollegeById, updateCollege };
