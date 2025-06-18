import mongoose, { Schema, Document } from "mongoose";

// TypeScript interface
export interface Skill extends Document {
  skillSet: {
    name: string;
    skillLogo: string;
  }[];
}

// Mongoose schema
const skillSchema: Schema<Skill> = new Schema(
  {
    skillSet: [
      {
        name: { type: String, required: true },
        logo: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const SkillModel =
  mongoose.models.Skill || mongoose.model<Skill>("Skill", skillSchema);
