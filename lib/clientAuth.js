/**
 * Browser-only helpers for JWT requests from pages.
 */

export function getAuthHeaders() {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("token")?.trim();
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
}

/**
 * Call from axios catch blocks when using protected APIs.
 * @returns {boolean} true if this was a 401 and state was cleared
 */
export function handleUnauthorized(error, setIsAdmin, setMessage) {
  if (error?.response?.status !== 401) return false;
  try {
    localStorage.removeItem("token");
  } catch {
    // ignore
  }
  setIsAdmin(false);
  setMessage(
    "Unauthorized: log in at /admin/login. If you already logged in, your session may have expired, or you opened a different URL (use only localhost or only 127.0.0.1 — they do not share login)."
  );
  return true;
}
