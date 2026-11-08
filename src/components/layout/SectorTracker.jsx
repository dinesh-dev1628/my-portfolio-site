import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const sectors = [
  { id: "home", code: "00", name: "ENTER UNIVERSE" },
  { id: "about", code: "01", name: "THE ORIGIN" },
  { id: "skills", code: "02", name: "TECH GALAXY" },
  { id: "projects", code: "03", name: "MISSIONS" },
  { id: "experience", code: "04", name: "TRAJECTORY" },
  { id: "contact", code: "05", name: "CONNECTION" },
];

const SectorTracker = () => {
  const [activeSector, setActiveSector] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      for (let i = sectors.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectors[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSector(sectors[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = id === "home" ? 0 : -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box
      aria-label="Orbital waypoint telemetry"
      sx={{
        position: "fixed",
        right: { lg: 24, xl: 36 },
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1200,
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        gap: 2.2,
        pointerEvents: "auto",
      }}
    >
      {sectors.map((sec) => {
        const isActive = activeSector === sec.id;
        return (
          <Box
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              group: "sector-item",
              opacity: isActive ? 1 : 0.35,
              transition: "all 0.25s ease",
              "&:hover": { opacity: 0.9, transform: "translateX(-4px)" },
            }}
          >
            {/* Sector label tooltip (revealed on hover or active) */}
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.65rem",
                color: isActive ? "#38BDF8" : "#9292A8",
                letterSpacing: 1.5,
                fontWeight: isActive ? 700 : 500,
                textAlign: "right",
                userSelect: "none",
                display: isActive ? "block" : "none",
              }}
            >
              {sec.code} // {sec.name}
            </Typography>

            {/* Waypoint Indicator Pill */}
            <Box
              sx={{
                width: isActive ? 24 : 8,
                height: 4,
                borderRadius: "4px",
                backgroundColor: isActive ? "#38BDF8" : "#9292A8",
                boxShadow: isActive ? "0 0 10px #38BDF8" : "none",
                transition: "all 0.3s ease",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default SectorTracker;
