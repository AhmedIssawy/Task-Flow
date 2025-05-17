import express from "express";
import "dotenv/config";
import cors from "cors";

// Database connection
import connectDB from "./config/db.js";

// Routes
import studentRoutes from "./routes/student.routes.js";
import universityRoutes from "./routes/university.routes.js";
import authRoutes from "./routes/auth.routes.js"

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

connectDB();

app.use("/api/students", studentRoutes);
app.use("/api/universities", universityRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
