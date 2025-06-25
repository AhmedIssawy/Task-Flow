import { Router } from "express";

import {
  // createStudent,
  // getAllStudents,
  getStudentsPage,
  getStudentById,
  deleteStudent,
  
} from "../controllers/student.controller.js";

// Middlewares
import authinticate from "../middlewares/authintication.middleware.js";

// Validators
import {
  validateObjectId,
} from "../middlewares/validation.middleware.js";
import authorize from "../middlewares/authorization.middleware.js";

const router = Router();

router.route("/").get(authinticate, getStudentsPage);

router.route("/:universityId");
// .post(validateUniversityId, authorize(["admin"]), createStudent);

// router.route("/all").get(getAllStudents);

router
  .route("/:id")
  .get(validateObjectId, authinticate, getStudentById)
  .delete(authinticate, authorize (["admin", "super-admin"]), deleteStudent)

export default router;
