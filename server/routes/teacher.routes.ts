import { Router } from "express";
import { getPageOfTeachers, getTeacherById } from "../controllers/teacher.controller.js";
const router = Router();

// router.route("/all").get(getAllTeachers);

router.route("/").get(getPageOfTeachers);

router.route("/:teacherId").get(getTeacherById);

export default router;
