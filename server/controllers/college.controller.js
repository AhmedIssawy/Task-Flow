import College from "../models/college.model.js";
import asyncHandler from "express-async-handler";

const getCollegesPage = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { page = 1, limit = 40 } = req.query;
  const { universityId } = req.params;

  const colleges = await College.find({ universityId })
    .select("-createdAt -updatedAt")
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ _id: -1 })
    .lean();

  if (!colleges || colleges.length === 0) {
    let message = "No colleges found";
    if (lang === "ar") message = "لم يتم العثور على كليات";

    return res.status(404).json({ message });
  }

  res.status(200).json(colleges);
});

const getCollegeById = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { universityId, collegeId } = req.params;
  
  if (!collegeId) {
    let message = "College ID is required";
    if (lang === "ar") message = "معرف الكلية مطلوب";
    
    return res.status(400).json({ message });
  }
  
  const college = await College.findOne({_id: collegeId, universityId})
    .select("-createdAt -updatedAt")
    .lean();
    
  if (!college) {
    let message = "College not found";
    if (lang === "ar") message = "الكلية غير موجودة";
    
    return res.status(404).json({ message });
  }
  
  res.status(200).json(college);
});

const updateCollege = asyncHandler(async (req, res) => {
  const lang = req.cookies?.lang || "en";
  const { id, ...updateData } = req.body;

  if (!id) {
    let message = "College ID is required";
    if (lang === "ar") message = "معرف الكلية مطلوب";
    
    return res.status(400).json({ message });
  }

  const college = await College.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!college) {
    let message = "College not found";
    if (lang === "ar") message = "الكلية غير موجودة";
    
    return res.status(404).json({ message });
  }

  let message = "College updated successfully";
  if (lang === "ar") message = "تم تحديث الكلية بنجاح";

  res.status(200).json({
    message,
    college,
  });
});

const createCollege = asyncHandler(async (req, res) => {
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
    universityId,
  } = req.body;

  // Check if College with same email exists
  const existingCollege = await College.findOne({ email });
  if (existingCollege) {
    let message = "College already exists, please use a different email";
    if (lang === "ar") message = "الكلية موجودة بالفعل، يرجى استخدام بريد إلكتروني مختلف";
    
    return res.status(400).json({ message });
  }

  // Create College
  const college = await College.create({
    name,
    address,
    phone,
    email,
    location,
    description,
    website,
    establishedYear,
    logo,
    universityId,
  });

  let message = "College created successfully";
  if (lang === "ar") message = "تم إنشاء الكلية بنجاح";

  res.status(201).json({
    message,
    college,
  });
});

export { getCollegesPage, getCollegeById, updateCollege, createCollege };
