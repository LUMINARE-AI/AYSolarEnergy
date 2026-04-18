import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" });
  }

  await connectDB();

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ msg: "User already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed });

  return res.status(201).json({ msg: "Admin account created" });
}
