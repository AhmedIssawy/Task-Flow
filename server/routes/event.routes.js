import { Router } from "express";

import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller.js";

// Middlewares
import authinticate from "../middlewares/auth/authintication.middleware.js";
// import authorize from "../middlewares/auth/authorization.middleware.js"; // Will be used later for specific role checks

const router = Router();

// Apply authentication middleware to all event routes
router.use(authinticate);

// Routes
router.route("/").post(createEvent).get(getEvents);
router.route("/:id").get(getEventById).put(updateEvent).delete(deleteEvent);

export default router;