import express from "express";
import { educationModel } from "../models/education";

const router = express.Router();
router.get("/", async (req, res) => {
  const education = await educationModel.find();
  res.json(education);
  console.log(education);
});

export default router;
