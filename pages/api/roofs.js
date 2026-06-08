import { v2 as cloudinary } from "cloudinary";
import { connectDB } from "@/lib/db";
import Roof from "@/models/Roof";
import { verifyToken } from "@/lib/auth";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      verifyToken(req);
    } catch (error) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    try {
      const roofs = await Roof.find().sort({ createdAt: -1 });
      return res.json(roofs);
    } catch (error) {
      console.error("[Roofs GET error]:", error);
      return res.status(500).json({ msg: "Server error" });
    }
  }

  if (req.method === "POST") {
    try {
      const { ownerName, phone, email, address, roofSize, electricityBill, roofType, image } = req.body;

      if (!ownerName || !phone || !email || !address || !roofSize) {
        return res.status(400).json({ msg: "All required fields must be filled" });
      }

      let imageUrl = "";

      if (image) {
        // Upload base64 image to Cloudinary
        const result = await cloudinary.uploader.upload(image, {
          folder: "rent-a-roof-submissions",
        });
        imageUrl = result.secure_url;
      }

      const newRoof = await Roof.create({
        ownerName,
        phone,
        email,
        address,
        roofSize,
        electricityBill,
        roofType,
        imageUrl,
      });

      return res.status(201).json({ success: true, data: newRoof });
    } catch (error) {
      console.error("[Roofs API error]:", error);
      return res.status(500).json({ msg: error.message || "Something went wrong" });
    }
  }

  return res.status(405).json({ msg: "Method not allowed" });
}

