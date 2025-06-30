import { Router } from "express";

// Validation
import { validateUniversityId } from "../middlewares/validation.middleware.js";
// Middlewares
import authinticate from "../middlewares/auth/authintication.middleware.js";
import authorize from "../middlewares/auth/authorization.middleware.js";
// controllers
import { createCollege } from "../controllers/college.controller.js";
import {
  getDepartmentById,
  getDepartmentsPage,
} from "../controllers/department.controller.js";

import {
  createUniversity,
  // getAllUniversities,
  getStudentsPageOfUniversity,
  getUniversitiesPage,
  getUniversityById,
  getTeachersPageOfUniversity,
} from "../controllers/university.controller.js";

import {
  getCollegeById,
  getCollegesPage,
  updateCollege,
} from "../controllers/college.controller.js";

const router = Router();

router.route("/").get(getUniversitiesPage).post(createUniversity);

router.route("/:universityId").get(getUniversityById);

router
  .route("/:universityId/students")
  .get(validateUniversityId, authinticate, getStudentsPageOfUniversity);

router.route("/:universityId/teachers").get(getTeachersPageOfUniversity);

router
  .route("/:universityId/colleges")
  .get(getCollegesPage)
  .post(authinticate, authorize(["admin", "super-admin"]), validateUniversityId, createCollege);

router
  .route("/:universityId/colleges/:collegeId")
  .get(getCollegeById)
  .post(authinticate, validateUniversityId, updateCollege);

router
  .route("/:universityId/colleges/:collegeId/departments")
  .get(getDepartmentsPage);

router
  .route("/:universityId/colleges/:collegeId/departments/:departmentId")
  .get(getDepartmentById);

router.get(
  "/:universityId/colleges/:collegeId/departments/:departmentId/teachers",
  getTeachersPageOfUniversity
);

export default router;
