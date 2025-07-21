import { Router } from "express";
import { authMe, login, logout } from "../controllers/auth.controller.js";
import { validateLoginData } from "../middlewares/validation.middleware.js";
import authinticate from "../middlewares/auth/authintication.middleware.js";

const router = Router();

router.route("/login").post(validateLoginData, login);

router.route("/logout").post(authinticate, logout);

router.route("/").get(authinticate, authMe);

export default router;
