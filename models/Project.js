import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  /** Legacy / fallback; prefer mainTopic for the card headline */
  title: String,
  /** Main topic shown as the blue card title (e.g. Home Rooftop Solar) */
  mainTopic: String,
  description: String,
  images: [String],
  customerName: String,
  location: String,
  capacity: String,
  monthlySavings: String,
});
export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);