import jwt from "jsonwebtoken";

function getJwtSecret() {
  const raw = process.env.JWT_SECRET;
  if (raw == null || String(raw).trim() === "") {
    throw new Error("JWT_SECRET is not defined in environment variables.");
  }
  let s = String(raw).trim();
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1);
  }
  return s;
}

function extractBearerToken(req) {
  const h =
    req.headers?.authorization ??
    req.headers?.Authorization ??
    (Array.isArray(req.headers?.authorization)
      ? req.headers.authorization[0]
      : undefined);
  if (h == null || typeof h !== "string") {
    throw new Error("Authorization header missing");
  }
  const trimmed = h.trim();
  const m = trimmed.match(/^Bearer\s+(.+)$/i);
  if (!m) {
    throw new Error("Authorization must be Bearer token");
  }
  const token = m[1].trim();
  if (!token) {
    throw new Error("Token missing");
  }
  return token;
}

export function createToken(user) {
  const id = user?._id != null ? String(user._id) : user?.id;
  return jwt.sign({ id, email: user.email }, getJwtSecret(), {
    expiresIn: "7d",
  });
}

export function verifyToken(req) {
  const token = extractBearerToken(req);
  return jwt.verify(token, getJwtSecret());
}
