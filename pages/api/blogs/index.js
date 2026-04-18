import { connectDB } from "../../../lib/db";
import Blog from "../../../models/Blog";
import { verifyToken } from "../../../lib/auth";


export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.json(blogs);
  }

  if (req.method === "POST") {
    try {
      verifyToken(req);
    } catch {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    try {
      const blog = await Blog.create(req.body);
      return res.json(blog);
    } catch (e) {
      console.error("[blogs POST]", e);
      return res.status(500).json({ msg: e.message || "Server error" });
    }
  }
}