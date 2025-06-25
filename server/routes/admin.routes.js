import { Router } from "express";
// Middlewares
import authinticate from "../middlewares/authintication.middleware.js";
import authorize from "../middlewares/authorization.middleware.js";
import {
  createStudent,
  createAdmin,
} from "../controllers/admin.controller.js";
import {
  getAdminById,
  createTeacher,
  updateTeacher,
  updateAdmin,
  deleteAdmin,
  getPageOfAdmins,
  createCollege,
} from "../controllers/admin.controller.js";
import { createUniversity, updateUniversity } from "../controllers/university.controller.js";
import { updateCollege } from "../controllers/college.controller.js";

const router = Router();

router
  .route("/")
  .get(authinticate, authorize(["super-admin"]), getPageOfAdmins);

router
  .route("/admin")
  .post(authinticate, authorize(["super-admin"]), createAdmin)
  .patch(authinticate, authorize(["super-admin"]), updateAdmin)
  .delete(authinticate, authorize(["super-admin"]), deleteAdmin);

router
  .route("/:id")
  .get(authinticate, authorize(["super-admin"]), getAdminById);

router
  .route("/student")
  .post(authinticate, authorize(["admin", "super-admin"]), createStudent);
router
  .route("/teacher")
  .post(authinticate, authorize(["admin", "super-admin"]), createTeacher)
  .patch(authinticate, authorize(["admin", "super-admin"]), updateTeacher);

router
  .route("/university")
  .post(authinticate, authorize(["super-admin"]), createUniversity)
  .patch(authinticate, authorize(["admin", "super-admin"]), updateUniversity);

router
  .route("/university/college")
  .post(authinticate, authorize(["admin", "super-admin"]), createCollege)
  .patch(authinticate, authorize(["admin", "super-admin"]), updateCollege);

export default router;
