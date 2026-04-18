import { connectDB } from "../../../lib/db";
import Project from "../../../models/Project";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res) {
  await connectDB();
  const { id } = req.query;

  if (req.method === "GET") {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }
    return res.json(project);
  }

  try {
    verifyToken(req);
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  if (req.method === "PUT") {
    const updated = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ msg: "Project not found" });
    }
    return res.json(updated);
  }

  if (req.method === "DELETE") {
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ msg: "Project not found" });
    }
    return res.json({ msg: "Deleted" });
  }

  return res.status(405).json({ msg: "Method not allowed" });
}
