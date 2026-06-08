import mongoose from "mongoose";

const RoofSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  roofSize: { type: String, required: true },
  electricityBill: { type: String },
  roofType: { type: String },
  imageUrl: { type: String }, // Store Cloudinary URL
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Roof || mongoose.model("Roof", RoofSchema);
