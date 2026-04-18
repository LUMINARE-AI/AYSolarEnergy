import { connectDB } from "../../../lib/db";
import Project from "../../../models/Project";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const projects = await Project.find();
    return res.json(projects);
  }

  if (req.method === "POST") {
    try {
      verifyToken(req);
    } catch {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    try {
      const project = await Project.create(req.body);
      return res.json(project);
    } catch (e) {
      console.error("[projects POST]", e);
      return res.status(500).json({ msg: e.message || "Server error" });
    }
  }
}