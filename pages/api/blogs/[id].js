import { connectDB } from "../../../lib/db";
import Blog from "../../../models/Blog";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  if (req.method === "PUT" || req.method === "DELETE") {
    try {
      verifyToken(req);
    } catch {
      return res.status(401).json({ msg: "Unauthorized" });
    }
  }

  if (req.method === "PUT") {
    try {
      const updated = await Blog.findByIdAndUpdate(id, req.body, { new: true });
      if (!updated) {
        return res.status(404).json({ msg: "Not found" });
      }
      return res.json(updated);
    } catch (e) {
      console.error("[blogs/[id] PUT]", e);
      return res.status(500).json({ msg: e.message || "Server error" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const deleted = await Blog.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({ msg: "Not found" });
      }
      return res.json({ msg: "Deleted" });
    } catch (e) {
      console.error("[blogs/[id] DELETE]", e);
      return res.status(500).json({ msg: e.message || "Server error" });
    }
  }

  return res.status(405).json({ msg: "Method not allowed" });
}
