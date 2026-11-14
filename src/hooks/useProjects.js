import { useState, useEffect, useCallback } from "react";
import { getProjects } from "../services/projectsService.js";

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjectsData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProjects();
      setProjects(data || []);
    } catch (err) {
      console.error("[useProjects] Error fetching projects from Supabase:", err);
      setError(err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjectsData();
  }, [fetchProjectsData]);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjectsData,
    isEmpty: !loading && projects.length === 0,
  };
}
