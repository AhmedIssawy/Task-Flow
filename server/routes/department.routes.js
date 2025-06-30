import { Router } from "express";
import authinticate from "../middlewares/auth/authintication.middleware.js";
import authorize from "../middlewares/auth/authorization.middleware.js";

const router = Router();

import {
  createDepartment,
  getDepartmentsPage,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} from "../controllers/department.controller.js";

router.route("/").get(getDepartmentsPage);

router
  .route("/admin/:universityId/:collegeId")
  .post(authinticate, authorize(["admin", "super-admin"]), createDepartment)
  .patch(authinticate, authorize(["admin", "super-admin"]), updateDepartment)

export default router;
