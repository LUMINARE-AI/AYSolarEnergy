/**
 * Shared categories for blog posts and project cards (filters + badges).
 */
export const CONTENT_CATEGORIES = [
  "Solar Tips",
  "Government Schemes",
  "Cost Analysis",
  "Solar Technology",
  "Maintenance",
  "Finance",
];

export const DEFAULT_CATEGORY = "Solar Tips";

/** @param {string | undefined} value */
export function isValidCategory(value) {
  return typeof value === "string" && CONTENT_CATEGORIES.includes(value);
}

/** @param {string | undefined} value */
export function normalizeCategory(value) {
  return isValidCategory(value) ? value : DEFAULT_CATEGORY;
}
