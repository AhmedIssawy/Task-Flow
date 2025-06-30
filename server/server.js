import express from "express";
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

// Middlewares
import detectLanguage from "./middlewares/user preferences/language.preference.js";

const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(detectLanguage());

connectDB();

app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/universities", universityRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api", collegesRoutes);
app.use("/api", departmentsRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
