import { connectDB } from "../../../lib/db";
import RescoProject from "../../../models/RescoProject";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res) {
  await connectDB();
  const { id } = req.query;

  try {
    verifyToken(req);
  } catch {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  if (req.method === "PUT") {
    try {
      const updated = await RescoProject.findByIdAndUpdate(id, req.body, { new: true });
      if (!updated) return res.status(404).json({ msg: "Project not found" });
      return res.json(updated);
    } catch (e) {
      console.error("[RescoProjects PUT error]:", e);
      return res.status(500).json({ msg: "Server error updating RESCO project" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const deleted = await RescoProject.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ msg: "Project not found" });
      return res.json({ msg: "Deleted" });
    } catch (e) {
      console.error("[RescoProjects DELETE error]:", e);
      return res.status(500).json({ msg: "Server error deleting RESCO project" });
    }
  }

  return res.status(405).json({ msg: "Method not allowed" });
}
