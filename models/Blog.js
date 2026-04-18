import mongoose from "mongoose";
import { DEFAULT_CATEGORY } from "../lib/contentCategories";

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: { type: String, default: DEFAULT_CATEGORY },
  excerpt: String,
  readTimeMinutes: { type: Number, min: 1 },
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);