import express from "express";
import { ProfileModel } from "../models/profile";

const router = express.Router();
router.get("/", async (req, res) => {
  const profile = await ProfileModel.findOne();
  res.json(profile);
  // console.log(profile);
});

export default router;
