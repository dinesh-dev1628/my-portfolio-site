import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Stack,
  IconButton,
  Chip,
} from "@mui/material";
import {
  GitHub,
  Launch,
  RocketLaunch,
  CheckCircle,
  Speed,
  Memory,
  Tune,
  NorthEast,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import { projectsData } from "../data/projects";
import MissionTelemetryVisualizer from "../components/3d/MissionTelemetryVisualizer.jsx";
import MagneticButton from "../components/common/MagneticButton.jsx";

const Projects = () => {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "ALL MISSIONS" },
    { id: "automation", label: "AUTOMATION & SCRAPING" },
    { id: "web", label: "FULL-STACK & INTERACTIVE" },
    { id: "ai", label: "WORKFLOWS & AI" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    if (filter === "automation") return p.category.includes("Automation");
    if (filter === "web") return p.category.includes("Full-Stack");
    if (filter === "ai") return p.category.includes("Workflow") || p.category.includes("AI");
    return true;
  });

  return (
    <Box
      id="projects"
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
                backgroundColor: "#D946EF",
                boxShadow: "0 0 10px #D946EF",
              }}
            />
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                color: "#D946EF",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              03 // EXPEDITIONS & ARTIFACTS
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
            MISSIONS{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #D946EF, #8B5CF6, #38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              COMPLETED.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#9292A8",
              fontSize: { xs: "0.98rem", sm: "1.1rem" },
              mt: 1.8,
              maxWidth: "680px",
              lineHeight: 1.7,
            }}
          >
            Each project is engineered as an autonomous space exploration mission,
            solving tangible problems across production automation, database architectures,
            and high-performance digital experiences.
          </Typography>

          {/* Mission Filter Tabs */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.2,
              mt: 4,
            }}
          >
            {filterOptions.map((opt) => {
              const isActive = filter === opt.id;
              return (
                <Button
                  key={opt.id}
                  onClick={() => setFilter(opt.id)}
                  sx={{
                    px: 2.5,
                    py: 0.8,
                    borderRadius: "999px",
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: 1.2,
                    fontWeight: 600,
                    color: isActive ? "#F5F5FA" : "#9292A8",
                    backgroundColor: isActive
                      ? "rgba(217, 70, 239, 0.18)"
                      : "rgba(255, 255, 255, 0.02)",
                    border: "1px solid",
                    borderColor: isActive
                      ? "rgba(217, 70, 239, 0.5)"
                      : "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#D946EF",
                      backgroundColor: "rgba(217, 70, 239, 0.12)",
                      color: "#F5F5FA",
                    },
                  }}
                >
                  {opt.label}
                </Button>
              );
            })}
          </Box>
        </Box>

        {/* Space Mission Cards Stack */}
        <Stack spacing={{ xs: 6, md: 8 }}>
          {filteredProjects.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={reduce ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.85, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5, md: 5.5 },
                  borderRadius: "28px",
                  backgroundColor: "rgba(16, 16, 38, 0.72)",
                  border: "1px solid",
                  borderColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow:
                    "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(139, 92, 246, 0.06)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    borderColor: mission.accent,
                    boxShadow: `0 30px 70px -15px rgba(0, 0, 0, 0.9), 0 0 45px ${mission.glow}`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Ambient Radial Flare in corner */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 380,
                    height: 380,
                    background: `radial-gradient(circle at top right, ${mission.accent}18 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Top Dossier Header Bar */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    pb: 3,
                    mb: 3.5,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: mission.accent,
                        boxShadow: `0 0 12px ${mission.accent}`,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: mission.accent,
                        letterSpacing: 2,
                      }}
                    >
                      {mission.codename}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.72rem",
                        color: "#9292A8",
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      // {mission.sector}
                    </Typography>
                  </Box>

                  {/* Mission Status Badge */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      px: 2,
                      py: 0.5,
                      borderRadius: "999px",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: mission.inDevelopment ? "#FACC15" : "#10B981",
                        boxShadow: mission.inDevelopment
                          ? "0 0 8px #FACC15"
                          : "0 0 8px #10B981",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        color: "#F5F5FA",
                        letterSpacing: 1,
                      }}
                    >
                      {mission.status}
                    </Typography>
                  </Box>
                </Box>

                {/* Main Content Split: Details Left, Problem & Features Right */}
                <Grid container spacing={{ xs: 4, md: 6 }}>
                  {/* Left Column: Title, Subtitle, Description, Live Telemetry Canvas & Action Links */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                      <Box>
                        <Typography
                          variant="h3"
                          sx={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.6rem" },
                            fontWeight: 800,
                            letterSpacing: "-0.025em",
                            color: "#F5F5FA",
                            lineHeight: 1.15,
                            mb: 1,
                          }}
                        >
                          {mission.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.85rem",
                            color: mission.accent,
                            letterSpacing: 1.2,
                            fontWeight: 600,
                            mb: 2,
                          }}
                        >
                          {mission.subtitle}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#9292A8",
                            fontSize: "0.98rem",
                            lineHeight: 1.8,
                            mb: 3,
                          }}
                        >
                          {mission.description}
                        </Typography>

                        {/* Interactive Live Mission Telemetry Feed Visualizer */}
                        <Box sx={{ mb: 3.5 }}>
                          <MissionTelemetryVisualizer
                            missionId={mission.id}
                            accentColor={mission.accent}
                          />
                        </Box>

                        {/* Technology Stack Badges */}
                        <Box sx={{ mb: 4 }}>
                          <Typography
                            sx={{
                              fontFamily: "'Geist Mono', monospace",
                              fontSize: "0.68rem",
                              color: "#9292A8",
                              letterSpacing: 1.5,
                              textTransform: "uppercase",
                              mb: 1.2,
                            }}
                          >
                            MISSION TECH STACK:
                          </Typography>
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                            {mission.technologies.map((tech) => (
                              <Box
                                key={tech}
                                sx={{
                                  px: 1.6,
                                  py: 0.5,
                                  borderRadius: "8px",
                                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                                  border: "1px solid rgba(255, 255, 255, 0.09)",
                                  fontFamily: "'Geist Mono', monospace",
                                  fontSize: "0.75rem",
                                  color: "#F5F5FA",
                                  fontWeight: 500,
                                }}
                              >
                                {tech}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>

                      {/* External Mission Action Links */}
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
                        {mission.github && (
                          <MagneticButton>
                            <Button
                              variant="outlined"
                              href={mission.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              startIcon={<GitHub />}
                              sx={{
                                px: 3.2,
                                py: 1.3,
                                borderRadius: "12px",
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: "0.88rem",
                                letterSpacing: "0.02em",
                                color: "#F5F5FA",
                                borderColor: "rgba(255, 255, 255, 0.15)",
                                backgroundColor: "rgba(255, 255, 255, 0.03)",
                                "&:hover": {
                                  borderColor: mission.accent,
                                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                                  transform: "translateY(-2px)",
                                },
                                transition: "all 0.25s ease",
                              }}
                            >
                              MISSION REPO
                            </Button>
                          </MagneticButton>
                        )}

                        {mission.demo && (
                          <MagneticButton>
                            <Button
                              variant="contained"
                              href={mission.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              endIcon={<NorthEast sx={{ fontSize: "1rem !important" }} />}
                              sx={{
                                px: 3.2,
                                py: 1.3,
                                borderRadius: "12px",
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: "0.88rem",
                                letterSpacing: "0.02em",
                                color: "#FFFFFF",
                                backgroundColor: mission.accent,
                                boxShadow: `0 0 20px ${mission.glow}`,
                                "&:hover": {
                                  backgroundColor: mission.accent,
                                  filter: "brightness(1.15)",
                                  boxShadow: `0 0 30px ${mission.glow}`,
                                  transform: "translateY(-2px)",
                                },
                                transition: "all 0.25s ease",
                              }}
                            >
                              LIVE DEMO
                            </Button>
                          </MagneticButton>
                        )}
                      </Stack>
                    </Box>
                  </Grid>

                  {/* Right Column: Problem Solved & Key Features */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Stack spacing={3}>
                      {/* Problem Solved Container */}
                      <Box
                        sx={{
                          p: 3.2,
                          borderRadius: "18px",
                          backgroundColor: "rgba(5, 5, 16, 0.78)",
                          border: `1px solid ${mission.accent}35`,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.72rem",
                            color: mission.accent,
                            letterSpacing: 2,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            mb: 1.2,
                          }}
                        >
                          // PROBLEM SOLVED
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.94rem",
                            color: "#E2E8F0",
                            lineHeight: 1.75,
                          }}
                        >
                          {mission.problemSolved}
                        </Typography>
                      </Box>

                      {/* Key Features Container */}
                      <Box
                        sx={{
                          p: 3.2,
                          borderRadius: "18px",
                          backgroundColor: "rgba(5, 5, 16, 0.58)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.72rem",
                            color: "#9292A8",
                            letterSpacing: 2,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            mb: 2,
                          }}
                        >
                          // KEY MISSION ARCHITECTURES
                        </Typography>

                        <Stack spacing={1.5}>
                          {mission.keyFeatures.map((feature, fIdx) => (
                            <Box
                              key={fIdx}
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1.5,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: "50%",
                                  backgroundColor: mission.accent,
                                  mt: 0.8,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                sx={{
                                  fontSize: "0.88rem",
                                  color: "#9292A8",
                                  lineHeight: 1.6,
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Box>

                      {/* Mission Telemetry Stats */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 2,
                          pt: 1,
                        }}
                      >
                        {Object.entries(mission.stats).map(([k, v]) => (
                          <Box
                            key={k}
                            sx={{
                              px: 2.2,
                              py: 1.2,
                              borderRadius: "12px",
                              backgroundColor: "rgba(255, 255, 255, 0.03)",
                              border: "1px solid rgba(255, 255, 255, 0.07)",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "'Geist Mono', monospace",
                                fontSize: "0.62rem",
                                color: "#9292A8",
                                textTransform: "uppercase",
                                letterSpacing: 1.2,
                              }}
                            >
                              {k}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: "#F5F5FA",
                              }}
                            >
                              {v}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;
