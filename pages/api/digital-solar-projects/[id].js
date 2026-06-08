import { connectDB } from "../../../lib/db";
import DSProject from "../../../models/DSProject";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res) {
  await connectDB();
  const { id } = req.query;

  try {
    verifyToken(req);
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  if (req.method === "PUT") {
    try {
      const updated = await DSProject.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updated) {
        return res.status(404).json({ msg: "Project not found" });
      }
      return res.json(updated);
    } catch (e) {
      console.error("[DSProjects PUT error]:", e);
      return res.status(500).json({ msg: "Server error updating project" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const deleted = await DSProject.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({ msg: "Project not found" });
      }
      return res.json({ msg: "Deleted" });
    } catch (e) {
      console.error("[DSProjects DELETE error]:", e);
      return res.status(500).json({ msg: "Server error deleting project" });
    }
  }

  return res.status(405).json({ msg: "Method not allowed" });
}
