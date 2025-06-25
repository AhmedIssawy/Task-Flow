import jwt from "jsonwebtoken";

import "dotenv/config";
// Models
import Student from "../models/student.model.js";
import Admin from "../models/admin.model.js";
import Teacher from "../models/teacher.model.js";

const authintication = async (req, res, next) => {
  const token = req?.cookies?.jwt || req?.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let Model = null;
    if (decoded.role == "student") Model = Student;
    else if (decoded.role == "teacher") Model = Teacher;
    else Model = Admin;
    // console.log("Decoded token:", decoded._id);
    
    const user = await Model.findById(decoded._id);

    req.user = user;
    // console.log("Authenticated user:", user);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};
export default authintication;
