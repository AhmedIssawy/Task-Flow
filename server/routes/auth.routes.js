import { Router } from "express";
import { loginStudent } from "../controllers/auth.controller.js";

const router = Router();

router.route("/login").post(loginStudent);

export default router;
