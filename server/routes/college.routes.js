import { Router } from "express";
import authinticate from "../middlewares/authintication.middleware.js";
import authorize from "../middlewares/authorization.middleware.js";

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
