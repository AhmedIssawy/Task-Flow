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
import authinticate from "../middlewares/auth/authintication.middleware.js";

// Validators
import { validateObjectId } from "../middlewares/validation.middleware.js";
import authorize from "../middlewares/auth/authorization.middleware.js";

const router = Router();

router.route("/").get(authinticate, getStudentsPage);

router.route("/:universityId");
// .post(validateUniversityId, authorize(["admin"]), createStudent);

// router.route("/all").get(getAllStudents);

router
  .route("/:id")
  .get(validateObjectId, authinticate, getStudentById)
  .delete(authinticate, authorize(["admin", "super-admin"]), deleteStudent);

router.route("/:id/courses").get(authinticate, getStudentCourses); //add validate user if its his own courses using jwt cookie if not send 403

router.route("/:id/courses/:courseId").get(authinticate, getStudentCourseById); //add validate user if its his own courses using jwt cookie if not send 403

export default router;
