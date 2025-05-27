import mongoose, { Schema, Document } from "mongoose";

export interface Education extends Document {
  university: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
  currentlyStudying: boolean;
  description?: string;
}

const educationSchema: Schema<Education> = new Schema({
  university: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  fieldOfStudy: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
  currentlyStudying: {
    type: Boolean,
    default: false,
  },
  description: String,
});

export const educationModel =
  mongoose.models.Education ||
  mongoose.model<Education>("Education", educationSchema);
