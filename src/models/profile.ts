import mongoose, { Schema, Document } from "mongoose";

export interface Profile extends Document {
  name: string;
  roles: string[];
  bio: string;
  avatarUrl: string;
  email: string;
  resumeUrl: string;
  location: string;
  experience: number;
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
    roles: {
      type: [String],
      enum: [
        "Full Stack Developer",
        "MERN Specialist",
        "Next Js Developer",
        "Docker, Kubernetes",
        "Front-End Developer",
        "Backend Developer",
      ],
      required: true,
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
    resumeUrl: {
      type: String,
      default: "",
      trim: true,
    },
    location: {
      type: String,
      default: "Abbottabad, Pakistan",
    },
    experience: {
      type: Number,
      default: 6,
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
