import mongoose, { Schema, Document } from "mongoose";

export interface Project extends Document {
  _id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  liveLink?: string;
  githubLink?: string;
  techStack: string[];
}

const projectSchema = new Schema<Project>(
  {
    _id: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    liveLink: {
      type: String,
      default: "",
    },
    githubLink: {
      type: String,
      default: "",
    },
    techStack: [{ type: String }],
  },
  { timestamps: true }
);

export const ProjectModel =
  mongoose.models.Project || mongoose.model<Project>("Project", projectSchema);
