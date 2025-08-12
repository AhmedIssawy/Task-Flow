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
import courseRoutes from "./routes/course.routes.js";

// Middlewares
import detectLanguage from "./middlewares/user preferences/language.preference.js";

const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// V-- التعديل الجديد والمهم هنا --V
// أنشئ قائمة بالعناوين المسموح بها
const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:3000",
  "http://192.168.56.1:3000", // هذا هو عنوان الواجهة الأمامية عند التشغيل على الهاتف
];

app.use(
  cors({
    origin: function (origin, callback) {
      // اسمح بالطلبات التي لا تحتوي على origin (مثل Postman) أو الموجودة في القائمة البيضاء
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
// ^-- نهاية التعديل --^

app.use(detectLanguage());

connectDB();

app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/universities", universityRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api", collegesRoutes);
app.use("/api", departmentsRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${PORT} and accessible on your local network.`);
});