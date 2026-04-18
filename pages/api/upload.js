import { v2 as cloudinary } from "cloudinary";
import { verifyToken } from "@/lib/auth";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" });
  }

  try {
    verifyToken(req);
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const { file } = req.body;
  if (!file) {
    return res.status(400).json({ msg: "File is required" });
  }

  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: "ay-solar-projects",
    });

    return res.status(200).json({ url: result.secure_url });
  } catch (error) {
    return res.status(500).json({ msg: "Image upload failed" });
  }
}
