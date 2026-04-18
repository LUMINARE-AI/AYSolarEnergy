import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
});
export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);