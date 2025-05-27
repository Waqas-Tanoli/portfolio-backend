import mongoose, { Schema, Document } from "mongoose";

export interface Experience extends Document {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  currentlyWorking: boolean;
  description: string;
  TechnologiesUsed: string[];
}

const ExperienceSchema: Schema<Experience> = new Schema(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    currentlyWorking: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    TechnologiesUsed: {
      type: [String],
    },
  },
  { timestamps: true }
);

export const experienceModel =
  mongoose.models.Experience ||
  mongoose.model<Experience>("Experience", ExperienceSchema);
