import mongoose from "mongoose";

const RescoProjectSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  industryType: { type: String, required: true, trim: true },
  capacity: { type: String, required: true, trim: true },
  contractTenure: { type: String, required: true, trim: true },
  savingsNote: { type: String, required: true, trim: true },
  status: {
    type: String,
    required: true,
    enum: ["active", "coming_soon", "completed"],
    default: "active",
  },
  imageUrl: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.RescoProject ||
  mongoose.model("RescoProject", RescoProjectSchema);
