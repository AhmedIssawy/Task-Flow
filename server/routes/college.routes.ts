import { Router } from "express";
import authenticate from "../middlewares/auth/authintication.middleware.js";
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
  .patch(authenticate, authorize(["admin", "super-admin"]), updateCollege);

export default router;
