import { Router } from "express";
import authinticate from "../middlewares/auth/authintication.middleware.js";
import authorize from "../middlewares/auth/authorization.middleware.js";

const router = Router();

import {
  getCollegesPage,
  getCollegeById,
  updateCollege,
} from "../controllers/college.controller.js";

router.route("/").get(getCollegesPage);

router
  .route("/:id")
  .get(getCollegeById)
  .patch(authinticate, authorize(["admin", "super-admin"]), updateCollege);

export default router;
