import mongoose from "mongoose";

const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  next();
};

const validateStudentId = (req, res, next) => {
  const { studentId } = req.params;
  if (!studentId || studentId.length < 5) {
    return res.status(400).json({
      message: "Invalid student ID format",
    });
  }
  next();
};

const validateUniversityId = (req, res, next) => {
  const { universityId } = req.params;
  if (!universityId) {
    return res.status(400).json({
      message: "Invalid university ID format",
    });
  }
  next();
};

const validateLoginData = (req, res, next) => {
  const { id, password } = req.body;
  if (!id || !password) {
    return res.status(400).json({
      message: "id and password are required",
    });
  }
  next();
};

const validateStudentUpdateData = (req, res, next) => {
  const { name, password, phone, role } = req.body;

  if (!name && !password && !phone && !role) {
    return res.status(400).json({
      message: "At least one field is required for update",
    });
  }

  next();
};

export {
  validateObjectId,
  validateStudentId,
  validateLoginData,
  validateUniversityId,
  validateStudentUpdateData,
};
