import { supabase } from "../lib/supabaseClient.js";

/**
 * Normalizes a project record from Supabase to match the UI component expectations.
 * Handles snake_case schema from the Supabase `projects` table.
 */
export const normalizeProject = (row) => {
  if (!row) return null;

  const parseJsonField = (val, defaultVal) => {
    if (!val) return defaultVal;
    if (typeof val === "object") return val;
    try {
      return JSON.parse(val);
    } catch {
      return defaultVal;
    }
  };

  return {
    id: row.id || "mission-" + Math.random(),
    title: row.title || "Untitled Mission",
    codename: row.codename || "",
    sector: row.sector || "",
    category: row.category || "Full-Stack & Systems",
    subtitle: row.subtitle || "",
    description: row.description || "",
    problemSolved: row.problem_solved ?? row.problemSolved ?? "",
    technologies: parseJsonField(row.technologies, []),
    keyFeatures: parseJsonField(row.key_features ?? row.keyFeatures, []),
    github: row.github || null,
    demo: row.demo || null,
    featured: Boolean(row.featured),
    status: row.status || (row.coming_soon ? "COMING SOON" : "MISSION ACCOMPLISHED"),
    inDevelopment: Boolean(row.in_development ?? row.inDevelopment),
    comingSoon: Boolean(row.coming_soon ?? row.comingSoon),
    accent: row.accent || "#38BDF8",
    glow: row.glow || "rgba(56, 189, 248, 0.4)",
    stats: parseJsonField(row.stats, {}),
    displayOrder: row.display_order ?? (row.id === "expense-tracker" ? 1 : 2),
  };
};

/**
 * Fetches all projects from Supabase with graceful ordering.
 */
export async function getProjects() {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*");

    if (error) {
      console.error("[ProjectsService] Error fetching projects:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      return [];
    }

    // Sort to keep expense-tracker first, project-zero second (or by display_order if present)
    const sorted = [...data].sort((a, b) => {
      const orderA = a.display_order ?? (a.id === "expense-tracker" ? 1 : 2);
      const orderB = b.display_order ?? (b.id === "expense-tracker" ? 1 : 2);
      return orderA - orderB;
    });

    return sorted.map(normalizeProject);
  } catch (err) {
    console.error("[ProjectsService] Unexpected error in getProjects:", err);
    throw err;
  }
}
