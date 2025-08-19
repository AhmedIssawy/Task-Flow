import { Router } from "express";
import { authMe, login, logout } from "../controllers/auth.controller.js";
import { validateLogin } from "../middlewares/validation.integration.js";
import authenticate from "../middlewares/auth/authintication.middleware.js";

const router = Router();

router.route("/login").post(validateLogin, login);

router.route("/logout").post(authenticate, logout);

router.route("/").get(authenticate, authMe);

export default router;
