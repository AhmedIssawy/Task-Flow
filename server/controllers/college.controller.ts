// @ts-nocheck
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import College from "../models/college.model.js";
import University from "../models/university.model.js";
import sendResponse from "../utils/response.handler.js";
import { Language } from "../types/common/index.js";

const getCollegesPage = asyncHandler(async (req: Request, res: Response) => {
  const lang: Language = (req.cookies?.lang as Language) || "en";
  const { page = 1, limit = 40 } = req.query;
  const { universityId } = req.params;
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;
  const [colleges, totalEstimate] = await Promise.all([
    College.find({ universityId })
      .select("-createdAt -updatedAt")
      .limit(limitNum)
      .skip(skip)
      .sort({ _id: -1 })
      .lean(),
    College.estimatedDocumentCount({ universityId })
  ]);
  if (!colleges || colleges.length === 0) {
    const errorMessage =
      lang === "ar" ? "لم يتم العثور على كليات" : "No colleges found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }
  const totalPages = Math.ceil(totalEstimate / limitNum);
  const hasNextPage = pageNum < totalPages;
  const hasPrevPage = pageNum > 1;
  const successMessage =
    lang === "ar"
      ? "تم العثور على الكليات بنجاح"
      : "Colleges retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: {
      colleges,
      pagination: {
        currentPage: pageNum,
        totalPages,
        totalEstimate,
        limit: limitNum,
        hasNextPage,
        hasPrevPage
      }
    },
  });
});
const getCollegeById = asyncHandler(async (req: Request, res: Response) => {
  const lang: Language = (req.cookies?.lang as Language) || "en";
  const { universityId, collegeId } = req.params;
  if (!collegeId) {
    const errorMessage =
      lang === "ar" ? "معرف الكلية مطلوب" : "College ID is required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }
  const college = await College.findOne({ _id: collegeId, universityId })
    .select("-createdAt -updatedAt")
    .lean();
  if (!college) {
    const errorMessage =
      lang === "ar" ? "الكلية غير موجودة" : "College not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }
  const successMessage =
    lang === "ar"
      ? "تم العثور على الكلية بنجاح"
      : "College retrieved successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: college,
  });
});
const updateCollege = asyncHandler(async (req: Request, res: Response) => {
  const lang: Language = (req.cookies?.lang as Language) || "en";
  const { id, ...updateData } = req.body;
  if (!id) {
    const errorMessage =
      lang === "ar" ? "معرف الكلية مطلوب" : "College ID is required";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }
  const college = await College.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  if (!college) {
    const errorMessage =
      lang === "ar" ? "الكلية غير موجودة" : "College not found";
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: errorMessage,
    });
  }
  const successMessage =
    lang === "ar" ? "تم تحديث الكلية بنجاح" : "College updated successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: successMessage,
    data: college,
  });
});
const createCollege = asyncHandler(async (req: Request, res: Response) => {
  const lang: Language = (req.cookies?.lang as Language) || "en";
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
  const existingCollege = await College.findOne({ email });
  if (existingCollege) {
    const errorMessage =
      lang === "ar"
        ? "الكلية موجودة بالفعل، يرجى استخدام بريد إلكتروني مختلف"
        : "College already exists, please use a different email";
    return sendResponse(res, {
      success: false,
      statusCode: 400,
      message: errorMessage,
    });
  }
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
  const successMessage =
    lang === "ar" ? "تم إنشاء الكلية بنجاح" : "College created successfully";
  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: successMessage,
    data: college,
  });
});
export { getCollegesPage, getCollegeById, updateCollege, createCollege };
