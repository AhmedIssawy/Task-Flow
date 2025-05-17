import { Router } from "express";

import {
  createUniversity,
  getAllUniversities,
  getStudentsPageOfUniversity,
  getUniversitiesPage,
  getUniversityById,
} from "../controllers/university.controller.js";

const router = Router();

router.route("/").get(getUniversitiesPage).post(createUniversity);

router.route("/all").get(getAllUniversities);

router.route("/:universityId").get(getUniversityById);

router.route("/:universityId/students").get(getStudentsPageOfUniversity);

export default router;
