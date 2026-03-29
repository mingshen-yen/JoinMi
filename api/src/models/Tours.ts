import { Schema, model } from "mongoose";

const tourSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  topic: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, required: true },
  language: { type: String, required: true },
  duration: { type: Number, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  webUrl: { type: String, required: true },
  ticket: { type: Number, required: true },
  tourGuide: {
    name: { type: String, required: true },
    languages: [{ type: String, required: true }],
  },
});

export default model("Tour", tourSchema);
