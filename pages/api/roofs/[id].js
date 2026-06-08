import { connectDB } from "../../../lib/db";
import Roof from "../../../models/Roof";
import { verifyToken } from "../../../lib/auth";

export default async function handler(req, res) {
  await connectDB();
  const { id } = req.query;

  try {
    verifyToken(req);
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  if (req.method === "DELETE") {
    try {
      const deleted = await Roof.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({ msg: "Roof listing not found" });
      }
      return res.json({ msg: "Deleted" });
    } catch (e) {
      console.error("[Roofs DELETE error]:", e);
      return res.status(500).json({ msg: "Server error" });
    }
  }

  return res.status(405).json({ msg: "Method not allowed" });
}
