import express from "express";
import { ProjectModel } from "../models/project";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.json(projects);
    console.log(`Projects from express`, projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

export default router;
