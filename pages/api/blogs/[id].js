import { connectDB } from "../../../lib/db";
import Blog from "../../../models/Blog";
import { verifyToken } from "../../../lib/auth";


export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  try {
    verifyToken(req);

    if (req.method === "PUT") {
      const updated = await Blog.findByIdAndUpdate(id, req.body, { new: true });
      return res.json(updated);
    }

    if (req.method === "DELETE") {
      await Blog.findByIdAndDelete(id);
      return res.json({ msg: "Deleted" });
    }
  } catch {
    return res.status(401).json({ msg: "Unauthorized" });
  }
}