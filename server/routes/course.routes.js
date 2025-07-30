import { Router } from "express";

import {
  getCoursesPage,
  getCourseById,
  createCourse,
} from "../controllers/course.controller.js";

import authenticate from "../middlewares/auth/authintication.middleware.js";
import authorize from "../middlewares/auth/authorization.middleware.js";

const router = Router();

router
  .route("/")
  .get(authenticate, getCoursesPage)
  .post(authenticate, authorize(["admin", "super-admin"]), createCourse);

export default router;
