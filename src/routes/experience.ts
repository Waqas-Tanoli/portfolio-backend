import express from "express";
import { experienceModel } from "../models/experience";

const router = express.Router();
router.get("/", async (req, res) => {
  const experiences = await experienceModel.find();
  res.json(experiences);
  //console.log(experiences);
});

export default router;
