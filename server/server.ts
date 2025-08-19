import express, { Application } from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

// Database connection
import connectDB from "./config/db.js";

// Routes
import studentRoutes from "./routes/student.routes.js";
import universityRoutes from "./routes/university.routes.js";
import authRoutes from "./routes/auth.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import departmentsRoutes from "./routes/department.routes.js";
import collegesRoutes from "./routes/college.routes.js";
import courseRoutes from "./routes/course.routes.js";

// Middlewares
import detectLanguage from "./middlewares/user preferences/language.preference.js";

const app: Application = express();

const PORT = parseInt(process.env.PORT || "5000", 10);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
const allowedOrigins: string[] = [
  process.env.CLIENT_URL || "http://localhost:3000",
  "http://192.168.56.1:3000", // Mobile development access
];

app.use(
  cors({
    origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
      // Allow requests with no origin (like mobile apps or Postman) or from allowed origins
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(detectLanguage());

// Initialize database connection
connectDB();

// API Routes
app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/universities", universityRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api", collegesRoutes);
app.use("/api", departmentsRoutes);
app.use("/auth", authRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${PORT} and accessible on your local network.`);
});