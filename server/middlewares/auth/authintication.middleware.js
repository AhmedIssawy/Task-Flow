import jwt from "jsonwebtoken";

import "dotenv/config";
// Models
import Student from "../../models/student.model.js";
import Admin from "../../models/admin.model.js";
import Teacher from "../../models/teacher.model.js";


const authinticate = async (req, res, next) => {
  const lang = req.cookies?.lang || "en";
  const token =
    req?.cookies["__Security_access_token"]   ||
    req?.headers?.authorization?.split(" ")[1];

  if (!token) {
    let message = "Unauthorized!";
    if (lang === "ar") message = "غير مصرح!";

    return res.status(401).json({ message });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let Model = null;
    if (decoded.role == "student") Model = Student;
    else if (decoded.role == "teacher") Model = Teacher;
    else Model = Admin;
    // console.log("Decoded token:", decoded._id);

    const user = await Model.findById(decoded._id);

    if (!user) {
      let message = "User not found!";
      if (lang === "ar") message = "المستخدم غير موجود!";

      return res.status(401).json({ message });
    }

    req.user = user;
    // console.log("Authenticated user:", user);
    next();
  } catch (error) {
    let message = "Unauthorized!";
    if (lang === "ar") message = "غير مصرح!";

    return res.status(401).json({ message });
  }
};

export default authinticate;
