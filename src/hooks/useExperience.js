import { useState, useEffect, useCallback } from "react";
import { getExperience } from "../services/experienceService.js";

export function useExperience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExperienceData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getExperience();
      setExperience(data || []);
    } catch (err) {
      console.error("[useExperience] Error fetching experience from Supabase:", err);
      setError(err);
      setExperience([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExperienceData();
  }, [fetchExperienceData]);

  return {
    experience,
    loading,
    error,
    refetch: fetchExperienceData,
    isEmpty: !loading && experience.length === 0,
  };
}
