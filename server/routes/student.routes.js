import { Router } from "express";

import {
  // createStudent,
  // getAllStudents,
  getStudentsPage,
  getStudentById,
  
} from "../controllers/student.controller.js";

// Middlewares
import authinticate from "../middlewares/authintication.middleware.js";

// Validators
import {
  validateObjectId,
} from "../middlewares/validation.middleware.js";

const router = Router();

router.route("/").get(authinticate, getStudentsPage);

router.route("/:universityId");
// .post(validateUniversityId, authorize(["admin"]), createStudent);

// router.route("/all").get(getAllStudents);

router
  .route("/:id")
  .get(validateObjectId, authinticate, getStudentById)

export default router;
