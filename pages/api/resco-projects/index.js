import { connectDB } from "../../../lib/db";
import RescoProject from "../../../models/RescoProject";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const projects = await RescoProject.find().sort({ createdAt: -1 });
      return res.json(projects);
    } catch (e) {
      console.error("[RescoProjects GET error]:", e);
      return res.status(500).json({ msg: "Server error fetching RESCO projects" });
    }
  }

  if (req.method === "POST") {
    try {
      verifyToken(req);
    } catch {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    try {
      const { name, location, industryType, capacity, contractTenure, savingsNote, status, imageUrl } = req.body;
      if (
        !name ||
        !location ||
        !industryType ||
        !capacity ||
        !contractTenure ||
        !savingsNote ||
        !status ||
        !imageUrl
      ) {
        return res.status(400).json({ msg: "All fields are required" });
      }

      const project = await RescoProject.create({
        name,
        location,
        industryType,
        capacity,
        contractTenure,
        savingsNote,
        status,
        imageUrl,
      });

      return res.status(201).json(project);
    } catch (e) {
      console.error("[RescoProjects POST error]:", e);
      return res.status(500).json({ msg: e.message || "Server error saving RESCO project" });
    }
  }

  return res.status(405).json({ msg: "Method not allowed" });
}
