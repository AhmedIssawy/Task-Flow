import { Router } from "express";
import authinticate from "../middlewares/authintication.middleware.js";
import authorize from "../middlewares/authorization.middleware.js";

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
  .route("/:collegeId")
  .get(getDepartmentById)
  .post(authinticate, authorize(["admin", "super-admin"]), createDepartment)
  .patch(authinticate, authorize(["admin", "super-admin"]), updateDepartment)
  .delete(authinticate, authorize(["admin", "super-admin"]), deleteDepartment);


export default router;
