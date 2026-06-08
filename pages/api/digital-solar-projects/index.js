import { connectDB } from "../../../lib/db";
import DSProject from "../../../models/DSProject";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const projects = await DSProject.find().sort({ createdAt: -1 });
      return res.json(projects);
    } catch (e) {
      console.error("[DSProjects GET error]:", e);
      return res.status(500).json({ msg: "Server error fetching projects" });
    }
  }

  if (req.method === "POST") {
    try {
      verifyToken(req);
    } catch (error) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    try {
      const { name, location, managedBy, capacity, operationalValidity, projectedReward, status, imageUrl } = req.body;

      if (!name || !location || !managedBy || !capacity || !operationalValidity || !projectedReward || !status || !imageUrl) {
        return res.status(400).json({ msg: "All fields are required" });
      }

      const newProject = await DSProject.create({
        name,
        location,
        managedBy,
        capacity,
        operationalValidity,
        projectedReward,
        status,
        imageUrl,
      });

      return res.status(201).json(newProject);
    } catch (e) {
      console.error("[DSProjects POST error]:", e);
      return res.status(500).json({ msg: e.message || "Server error saving project" });
    }
  }

  return res.status(405).json({ msg: "Method not allowed" });
}
