import { Router } from "express";
// Middlewares
import authenticate from "../middlewares/auth/authintication.middleware.js";
import authorize from "../middlewares/auth/authorization.middleware.js";

import { createAdmin } from "../controllers/admin.controller.js";
import {
  getAdminById,
  updateAdmin,
  deleteAdmin,
  getPageOfAdmins,
} from "../controllers/admin.controller.js";
import {
  createStudent,
  deleteStudent,
  updateStudent,
} from "../controllers/student.controller.js";
import {
  createTeacher,
  deleteTeacher,
  updateTeacher,
} from "../controllers/teacher.controller.js";
import {
  createUniversity,
  updateUniversity,
} from "../controllers/university.controller.js";
import {
  updateCollege,
  createCollege,
} from "../controllers/college.controller.js";

import {
  createSection,
  getPageOfSections,
  deleteSection,
  getSectionById,
  updateSection,
} from "../controllers/section.controller.js";

const router = Router();

router
  .route("/")
  .get(authenticate, authorize(["super-admin"]), getPageOfAdmins);

router
  .route("/admin")
  .post(authenticate, authorize(["super-admin"]), createAdmin)
  .patch(authenticate, authorize(["super-admin"]), updateAdmin)
  .delete(authenticate, authorize(["super-admin"]), deleteAdmin);

router
  .route("/student")
  .post(authenticate, authorize(["admin", "super-admin"]), createStudent);
router
  .route("/teacher")
  .post(authenticate, authorize(["admin", "super-admin"]), createTeacher);

router
  .route("/university")
  .post(authenticate, authorize(["super-admin"]), createUniversity)
  .patch(authenticate, authorize(["admin", "super-admin"]), updateUniversity);

router
  .route("/university/college")
  .post(authenticate, authorize(["admin", "super-admin"]), createCollege)
  .patch(authenticate, authorize(["admin", "super-admin"]), updateCollege);

router
  .route(
    "/university/:universityId/college/:collegeId/department/:departmentId/section"
  )
  .get(authenticate, authorize(["admin", "super-admin"]), getPageOfSections)
  .post(authenticate, authorize(["admin", "super-admin"]), createSection);

router
  .route("/section/:sectionId")
  .get(authenticate, getSectionById)
  .patch(authenticate, authorize(["admin", "super-admin"]), updateSection)
  .delete(authenticate, authorize(["admin", "super-admin"]), deleteSection);

router
  .route("/:id")
  .get(authenticate, authorize(["super-admin"]), getAdminById);

router
  .route("/teacher/:id")
  .patch(authenticate, authorize(["admin", "super-admin"]), updateTeacher)
  .delete(authenticate, authorize(["admin", "super-admin"]), deleteTeacher);

router
  .route("/student/:id")
  .patch(authenticate, authorize(["admin", "super-admin"]), updateStudent)
  .delete(authenticate, authorize(["admin", "super-admin"]), deleteStudent);

export default router;
