import { Router } from "express";

import {
  // createStudent,
  // getAllStudents,
  getStudentsPage,
  getStudentById,
  deleteStudent,
  getStudentCourses,
  getStudentCourseById,
} from "../controllers/student.controller.js";

// Middlewares
import authenticate from "../middlewares/auth/authintication.middleware.js";
import authorize from "../middlewares/auth/authorization.middleware.js";
import { 
  validateObjectIdParam,
  validatePagination 
} from "../middlewares/validation.integration.js";

const router = Router();

router.route("/").get(authenticate, validatePagination, getStudentsPage);

router.route("/:universityId");
// .post(validateUniversityIdParam, authorize(["admin"]), createStudent);

// router.route("/all").get(getAllStudents);

router
  .route("/:id")
  .get(validateObjectIdParam, authenticate, getStudentById)
  .delete(authenticate, authorize(["admin", "super-admin"]), deleteStudent);

router.route("/:id/courses").get(authenticate, getStudentCourses); //add validate user if its his own courses using jwt cookie if not send 403

router.route("/:id/courses/:courseId").get(authenticate, getStudentCourses); //add validate user if its his own courses using jwt cookie if not send 403

export default router;
