import express, { RequestHandler } from "express";
import { ContactMessageModel } from "../models/contact";
import mongoose from "mongoose";

const router = express.Router();

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

// Properly typed handler with void return
const contactHandler: RequestHandler = async (req, res, next) => {
  try {
    const { name, email, message } = req.body as ContactRequestBody;

    // Input validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      res.status(400).json({
        success: false,
        error: "All fields are required and cannot be empty",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        error: "Please enter a valid email address",
      });
      return;
    }

    // Check database connection
    if (mongoose.connection.readyState !== 1) {
      throw new Error("Database not connected");
    }

    const newMessage = new ContactMessageModel({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    const savedMessage = await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Contact message saved successfully",
      data: {
        id: savedMessage._id,
        name: savedMessage.name,
        email: savedMessage.email,
        date: savedMessage.date,
      },
    });
  } catch (error) {
    console.error("Database save error:", error);

    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).json({
        success: false,
        error: "Validation failed",
        details: error.message,
      });
      return;
    }

    res.status(500).json({
      success: false,
      error: "Failed to save message",
      details:
        error instanceof Error ? error.message : "Unknown database error",
    });
  }
};

router.post("/", contactHandler);

export default router;
