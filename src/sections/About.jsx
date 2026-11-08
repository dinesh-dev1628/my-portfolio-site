import React, { useState } from "react";
import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import {
  Code,
  AutoAwesome,
  HubOutlined,
  Memory,
  Security,
  CloudQueue,
  NorthEast,
  Explore,
  Radar,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import MyProfilePic from "../components/asset/IMG-20240604-WA0002.jpg";

// Interactive Orbital Odyssey Epochs for the right-side planetary journey
const journeyOrbits = [
  {
    id: "systems-core",
    name: "Orbit 01: Core Systems",
    epoch: "FOUNDATIONAL CORE",
    color: "#8B5CF6", // Cosmic violet
    distance: "120 AU",
    description:
      "Deep grounding in clean Python architecture, relational database schema modeling in PostgreSQL, and deterministic algorithmic problem solving.",
    tech: ["Python", "PostgreSQL", "Data Structures", "Docker"],
  },
  {
    id: "automation-orbit",
    name: "Orbit 02: Automation Matrix",
    epoch: "AUTONOMOUS PIPELINES",
    color: "#38BDF8", // Electric blue
    distance: "240 AU",
    description:
      "Engineering resilient browser automations with Playwright, anti-flakiness retry systems, and high-volume dynamic SPA scraping pipelines.",
    tech: ["Playwright", "AsyncIO", "n8n", "Postman"],
  },
  {
    id: "fullstack-orbit",
    name: "Orbit 03: Full-Stack Galaxy",
    epoch: "REACTIVE SYSTEMS",
    color: "#D946EF", // Nebula pink
    distance: "360 AU",
    description:
      "Building seamless end-to-end full-stack applications with React 19, FastAPI, modern micro-interactions, and accessible typography.",
    tech: ["React 19", "FastAPI", "Next.js", "Framer Motion"],
  },
  {
    id: "ai-frontier",
    name: "Orbit 04: Frontier & AI",
    epoch: "AGENTIC EXPEDITION",
    color: "#2DD4BF", // Teal nebula
    distance: "480 AU",
    description:
      "Orchestrating multi-step autonomous AI agent workflows, webhook integrations, and cloud deployment pipelines on Google Cloud.",
    tech: ["AI Agents", "Google Cloud", "API Automation", "Redis"],
  },
];

// Animated Stats Data
const statsData = [
  { value: "12+", label: "PROJECTS BUILT", detail: "Production & Systems" },
  { value: "15+", label: "TECHNOLOGIES EXPLORED", detail: "Languages & Frameworks" },
  { value: "50+", label: "AUTOMATION WORKFLOWS", detail: "Pipelines & Scrapers" },
  { value: "3+", label: "YEARS OF EXPERIENCE", detail: "Software Engineering" },
];

const About = () => {
  const reduce = useReducedMotion();
  const [activeOrbit, setActiveOrbit] = useState(journeyOrbits[0]);

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 7, md: 9 } }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
            <Box
              sx={{
                width: 24,
                height: 2,
                backgroundColor: "#8B5CF6",
                boxShadow: "0 0 10px #8B5CF6",
              }}
            />
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                color: "#8B5CF6",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              01 // THE ORIGIN
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "clamp(2rem, 5vw, 3.8rem)" },
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#F5F5FA",
              maxWidth: "850px",
            }}
          >
            THE STORY BEHIND{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #8B5CF6, #38BDF8, #D946EF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              THE UNIVERSE.
            </Box>
          </Typography>
        </Box>

        {/* Split Layout: Left Introduction & Philosophy | Right Interactive Planetary System */}
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="stretch">
          {/* Left Column: Personal Introduction & Professional Philosophy */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.8 }}
              >
                {/* Profile Visual with Astronaut HUD Viewfinder Frame */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: "95px", sm: "115px" },
                      height: { xs: "95px", sm: "115px" },
                      borderRadius: "24px",
                      overflow: "hidden",
                      border: "2px solid rgba(56, 189, 248, 0.45)",
                      boxShadow: "0 0 30px rgba(56, 189, 248, 0.25)",
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={MyProfilePic}
                      alt="Dinesh"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "contrast(1.05)",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(5, 5, 16, 0.6) 0%, transparent 60%)",
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: { xs: "1.45rem", sm: "1.7rem" },
                        color: "#F5F5FA",
                        lineHeight: 1.1,
                      }}
                    >
                      Dinesh
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.78rem",
                        color: "#38BDF8",
                        letterSpacing: 1.5,
                        mt: 0.5,
                      }}
                    >
                      CYBERSPACE EXPLORER // 2026
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.68rem",
                        color: "#9292A8",
                        letterSpacing: 1,
                        mt: 0.4,
                      }}
                    >
                      STATION: SOL-EARTH // STATUS: ONLINE
                    </Typography>
                  </Box>
                </Box>

                {/* Core Narrative / Specified Content */}
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "20px",
                    backgroundColor: "rgba(16, 16, 38, 0.65)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    mb: 3.5,
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: { xs: "1.12rem", sm: "1.25rem" },
                      fontWeight: 600,
                      lineHeight: 1.6,
                      color: "#F5F5FA",
                      mb: 2,
                    }}
                  >
                    "I'm a developer focused on building practical software
                    solutions, production automation systems, and intelligent
                    applications. I enjoy turning complex workflows into simple,
                    reliable experiences."
                  </Typography>

                  <Typography
                    sx={{
                      color: "#9292A8",
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                    }}
                  >
                    Every software system I build is approached with the
                    rigor of a space mission: resilient to unexpected environmental
                    failures, architected for low resource consumption, and crafted
                    with obsessive attention to operational simplicity and telemetry.
                  </Typography>
                </Box>

                {/* Professional Philosophy Principles */}
                <Stack spacing={1.5} sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      p: 2,
                      borderRadius: "14px",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <Box
                      sx={{
                        p: 0.8,
                        borderRadius: "8px",
                        backgroundColor: "rgba(139, 92, 246, 0.15)",
                        color: "#8B5CF6",
                        display: "flex",
                      }}
                    >
                      <Code fontSize="small" />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.92rem",
                          color: "#F5F5FA",
                        }}
                      >
                        Clean &amp; Deterministic Logic
                      </Typography>
                      <Typography sx={{ fontSize: "0.82rem", color: "#9292A8", mt: 0.2 }}>
                        Favoring readable modularity and predictable state transitions over unnecessary complexity.
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      p: 2,
                      borderRadius: "14px",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <Box
                      sx={{
                        p: 0.8,
                        borderRadius: "8px",
                        backgroundColor: "rgba(56, 189, 248, 0.15)",
                        color: "#38BDF8",
                        display: "flex",
                      }}
                    >
                      <AutoAwesome fontSize="small" />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.92rem",
                          color: "#F5F5FA",
                        }}
                      >
                        Zero-Flakiness Automation
                      </Typography>
                      <Typography sx={{ fontSize: "0.82rem", color: "#9292A8", mt: 0.2 }}>
                        Designing browser scrapers and API workers that gracefully recover from network jitter and DOM shifts.
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </motion.div>
            </Box>
          </Grid>

          {/* Right Column: Interactive Planetary System representing development journey */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: "26px",
                  backgroundColor: "rgba(16, 16, 38, 0.68)",
                  border: "1px solid rgba(139, 92, 246, 0.28)",
                  backdropFilter: "blur(20px)",
                  boxShadow:
                    "0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(139, 92, 246, 0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Header for Planetary Journey */}
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        color: "#F5F5FA",
                      }}
                    >
                      Orbital Development Journey
                    </Typography>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.4,
                        borderRadius: "999px",
                        backgroundColor: "rgba(56, 189, 248, 0.12)",
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.68rem",
                          color: "#38BDF8",
                          fontWeight: 600,
                        }}
                      >
                        INTERACTIVE SYSTEM
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: "#9292A8", fontSize: "0.85rem" }}>
                    Select an orbital sector to inspect the systems and technologies established along my path.
                  </Typography>
                </Box>

                {/* Interactive Orbital Selector Nodes */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 1.5,
                    mb: 3,
                  }}
                >
                  {journeyOrbits.map((orbit) => {
                    const isSelected = activeOrbit.id === orbit.id;
                    return (
                      <Box
                        key={orbit.id}
                        onClick={() => setActiveOrbit(orbit)}
                        sx={{
                          p: 2,
                          borderRadius: "14px",
                          backgroundColor: isSelected
                            ? "rgba(139, 92, 246, 0.18)"
                            : "rgba(255, 255, 255, 0.02)",
                          border: "1px solid",
                          borderColor: isSelected
                            ? orbit.color
                            : "rgba(255, 255, 255, 0.06)",
                          cursor: "pointer",
                          transition: "all 0.25s ease",
                          boxShadow: isSelected
                            ? `0 0 20px ${orbit.color}30`
                            : "none",
                          "&:hover": {
                            borderColor: orbit.color,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                          },
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 0.8 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor: orbit.color,
                              boxShadow: `0 0 8px ${orbit.color}`,
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontWeight: 700,
                              fontSize: "0.92rem",
                              color: isSelected ? "#F5F5FA" : "#E2E8F0",
                            }}
                          >
                            {orbit.name}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.68rem",
                            color: isSelected ? orbit.color : "#9292A8",
                            letterSpacing: 1,
                          }}
                        >
                          {orbit.epoch}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>

                {/* Active Orbital Deep-Dive Telemetry Display */}
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    backgroundColor: "rgba(5, 5, 16, 0.82)",
                    border: `1px solid ${activeOrbit.color}35`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: 140,
                      height: 140,
                      background: `radial-gradient(circle at top right, ${activeOrbit.color}25 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />

                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.72rem",
                        color: activeOrbit.color,
                        letterSpacing: 1.5,
                        fontWeight: 600,
                      }}
                    >
                      // {activeOrbit.epoch}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.68rem",
                        color: "#9292A8",
                      }}
                    >
                      DISTANCE: {activeOrbit.distance}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "0.94rem",
                      color: "#F5F5FA",
                      lineHeight: 1.75,
                      mb: 2.5,
                    }}
                  >
                    {activeOrbit.description}
                  </Typography>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#9292A8",
                        letterSpacing: 1.5,
                        mb: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      DEPLOYED TECHNOLOGIES IN THIS ORBIT:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {activeOrbit.tech.map((t) => (
                        <Box
                          key={t}
                          sx={{
                            px: 1.4,
                            py: 0.4,
                            borderRadius: "6px",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.09)",
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.72rem",
                            color: "#E2E8F0",
                          }}
                        >
                          {t}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Animated Statistics Section */}
        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            pt: { xs: 6, md: 8 },
            borderTop: "1px solid rgba(255, 255, 255, 0.07)",
          }}
        >
          <Grid container spacing={{ xs: 3, sm: 4 }}>
            {statsData.map((stat, idx) => (
              <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.12 }}
                >
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: "18px",
                      backgroundColor: "rgba(16, 16, 38, 0.45)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(56, 189, 248, 0.35)",
                        boxShadow: "0 12px 30px -10px rgba(0, 0, 0, 0.6)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: { xs: "2.4rem", sm: "3rem", md: "3.4rem" },
                        fontWeight: 800,
                        lineHeight: 1,
                        background:
                          idx === 0
                            ? "linear-gradient(90deg, #8B5CF6, #C084FC)"
                            : idx === 1
                            ? "linear-gradient(90deg, #38BDF8, #7DD3FC)"
                            : idx === 2
                            ? "linear-gradient(90deg, #D946EF, #F472B6)"
                            : "linear-gradient(90deg, #2DD4BF, #5EEAD4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#F5F5FA",
                        lineHeight: 1.2,
                        mb: 0.5,
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.68rem",
                        color: "#9292A8",
                        letterSpacing: 1,
                      }}
                    >
                      {stat.detail}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
