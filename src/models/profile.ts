import mongoose, { Schema, Document } from "mongoose";

export interface Profile extends Document {
  name: string;
  bio: string;
  avatarUrl: string;
  email: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

const profileSchema = new Schema<Profile>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      default: "",
      trim: true,
    },
    avatarUrl: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    socialLinks: {
      github: {
        type: String,
        default: "",
      },
      linkedin: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

export const ProfileModel =
  mongoose.models.Profile || mongoose.model<Profile>("Profile", profileSchema);
