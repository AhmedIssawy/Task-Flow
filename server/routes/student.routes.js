import { Router } from "express";

import {
  createStudent,
  getAllStudents,
  getStudentsPage,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/students.controller.js";

const router = Router();

router.route("/").get(getStudentsPage);
router.route("/:universityId").post(createStudent);

router.route("/all").get(getAllStudents);

router
  .route("/:id")
  .get(getStudentById)
  .patch(updateStudent)
  .delete(deleteStudent);

export default router;
