import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import profileRoutes from "./routes/profile";
import projectRoutes from "./routes/projects";
import skillRoutes from "./routes/skills";
import experienceRoutes from "./routes/experience";
import educationRoutes from "./routes/education";
import contactRoutes from "./routes/contact";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/contact", contactRoutes);

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI!;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error);
  });
