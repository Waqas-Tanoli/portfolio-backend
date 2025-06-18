import mongoose, { Schema, Document } from "mongoose";

export interface ContactMessage extends Document {
  name: string;
  email: string;
  message: string;
}

const contactMessageSchema: Schema<ContactMessage> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const ContactMessageModel =
  mongoose.models.ContactMessage ||
  mongoose.model<ContactMessage>("ContactMessage", contactMessageSchema);
