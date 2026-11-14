import { supabase } from "../lib/supabaseClient.js";

/**
 * Normalizes an experience record from Supabase to match the UI component expectations.
 * Handles the Supabase `experience` table columns (id, checkpoint, period, role, etc.)
 */
export const normalizeExperience = (row) => {
  if (!row) return null;

  const parseArrayField = (val) => {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    if (typeof val === "object") return Object.values(val);
    try {
      const parsed = JSON.parse(val);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  return {
    id: row.id,
    checkpoint: row.checkpoint || "CHECKPOINT",
    period: row.period || "",
    role: row.role || "Software Engineer",
    entity: row.entity || "",
    status: row.status || "SYSTEMS OPERATIONAL",
    type: row.type || "",
    highlight: row.highlight || "",
    description: row.description || "",
    responsibilities: parseArrayField(row.responsibilities),
    technologies: parseArrayField(row.technologies),
    coordinate: row.coordinate || "",
    accent: row.accent || "#8B5CF6",
    displayOrder: row.display_order ?? row.id ?? 0,
  };
};

/**
 * Fetches all experience items from Supabase ordered by checkpoint id.
 */
export async function getExperience() {
  try {
    const { data, error } = await supabase
      .from("experience")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("[ExperienceService] Error fetching experience:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      return [];
    }

    return data.map(normalizeExperience);
  } catch (err) {
    console.error("[ExperienceService] Unexpected error in getExperience:", err);
    throw err;
  }
}
