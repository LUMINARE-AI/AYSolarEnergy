import mongoose from "mongoose";

const DSProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  managedBy: { type: String, required: true },
  capacity: { type: String, required: true },
  operationalValidity: { type: String, required: true },
  projectedReward: { type: String, required: true },
  status: { 
    type: String, 
    required: true, 
    enum: ["active", "coming_soon", "completed"] 
  },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.DSProject || mongoose.model("DSProject", DSProjectSchema);
