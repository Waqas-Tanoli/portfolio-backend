import express from "express";
import { SkillModel } from "../models/skills";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const skills = await SkillModel.find();
    res.json(skills);
  } catch (error) {
    console.log(`Error getting skills`, error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

export default router;
