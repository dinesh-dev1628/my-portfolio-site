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
  Code,
  AutoAwesome,
  Memory,
  Tune,
  CheckCircle,
  TrendingUp,
  Schedule,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import { projectsData } from "../data/projects";

const Projects = () => {
  const reduce = useReducedMotion();
  const [activeProjectTab, setActiveProjectTab] = useState("overview");

  const featuredProject = projectsData[0]; // Expense Tracker
  const otherProjects = projectsData.slice(1);

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 10, md: 18 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
            <Box sx={{ width: 24, height: 1, backgroundColor: "#60A5FA" }} />
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                color: "#60A5FA",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              03 // STELLAR ARTIFACTS
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "3.6rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#F8FAFC",
            }}
          >
            The Stars of My{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Universe.
            </span>
          </Typography>
          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              mt: 1.5,
              maxWidth: "650px",
            }}
          >
            Each project is engineered as an autonomous discovery within my technical
            orbit, solving real-world data, automation, and interface challenges.
          </Typography>
        </Box>

        {/* 1. HERO FEATURED PROJECT: EXPENSE TRACKER */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              p: { xs: 3.5, md: 5 },
              borderRadius: "28px",
              backgroundColor: "rgba(16, 21, 34, 0.75)",
              border: "1px solid rgba(96, 165, 250, 0.2)",
              backdropFilter: "blur(16px)",
              position: "relative",
              overflow: "hidden",
              boxShadow:
                "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(96, 165, 250, 0.08)",
              mb: 6,
              transition: "border-color 0.3s ease",
              "&:hover": {
                borderColor: "rgba(96, 165, 250, 0.4)",
              },
            }}
          >
            {/* Ambient corner glow */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "400px",
                height: "400px",
                background:
                  "radial-gradient(circle at top right, rgba(96, 165, 250, 0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Top Bar with Codename & External Links */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                pb: 3,
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                mb: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    borderRadius: "6px",
                    backgroundColor: "rgba(96, 165, 250, 0.12)",
                    border: "1px solid rgba(96, 165, 250, 0.3)",
                    color: "#60A5FA",
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: 1.5,
                  }}
                >
                  {featuredProject.codename}
                </Box>
                <Typography
                  sx={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.75rem",
                    color: "#94A3B8",
                    letterSpacing: 1,
                  }}
                >
                  {featuredProject.subtitle}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<GitHub />}
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: "10px",
                    borderColor: "rgba(255, 255, 255, 0.12)",
                    color: "#F8FAFC",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                    "&:hover": {
                      borderColor: "#60A5FA",
                      backgroundColor: "rgba(96, 165, 250, 0.08)",
                    },
                  }}
                >
                  Source Code
                </Button>
              </Box>
            </Box>

            <Grid container spacing={4} alignItems="center">
              {/* Left Column: Project Identity & Interactive View Tabs */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
                    fontWeight: 800,
                    color: "#F8FAFC",
                    letterSpacing: "-0.03em",
                    mb: 1.5,
                  }}
                >
                  {featuredProject.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {featuredProject.description}
                </Typography>

                {/* Sub-Tabs: Overview vs Technical Challenges vs Key Features */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    p: 0.6,
                    backgroundColor: "rgba(5, 6, 10, 0.6)",
                    borderRadius: "12px",
                    width: "fit-content",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    mb: 3,
                  }}
                >
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "challenges", label: "Challenges Solved" },
                    { id: "features", label: "Key Features" },
                  ].map((tab) => {
                    const isActive = activeProjectTab === tab.id;
                    return (
                      <Box
                        key={tab.id}
                        onClick={() => setActiveProjectTab(tab.id)}
                        sx={{
                          px: 2,
                          py: 0.6,
                          borderRadius: "8px",
                          cursor: "pointer",
                          userSelect: "none",
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.82rem",
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? "#F8FAFC" : "#94A3B8",
                          backgroundColor: isActive
                            ? "rgba(96, 165, 250, 0.16)"
                            : "transparent",
                          border: "1px solid",
                          borderColor: isActive
                            ? "rgba(96, 165, 250, 0.35)"
                            : "transparent",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {tab.label}
                      </Box>
                    );
                  })}
                </Box>

                {/* Dynamic Content Based on Tab */}
                <Box sx={{ minHeight: "130px", mb: 3 }}>
                  {activeProjectTab === "overview" && (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "1.4rem",
                            fontWeight: 700,
                            color: "#60A5FA",
                          }}
                        >
                          PostgreSQL
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.68rem",
                            color: "#64748B",
                            letterSpacing: 1.5,
                          }}
                        >
                          RELATIONAL PERSISTENCE
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "1.4rem",
                            fontWeight: 700,
                            color: "#F8FAFC",
                          }}
                        >
                          &lt;15ms
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.68rem",
                            color: "#64748B",
                            letterSpacing: 1.5,
                          }}
                        >
                          QUERY OPTIMIZATION
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "1.4rem",
                            fontWeight: 700,
                            color: "#A78BFA",
                          }}
                        >
                          Modular Python
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.68rem",
                            color: "#64748B",
                            letterSpacing: 1.5,
                          }}
                        >
                          CORE ARCHITECTURE
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  {activeProjectTab === "challenges" && (
                    <Stack spacing={1}>
                      {featuredProject.challenges.map((c, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                          <Box
                            sx={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              backgroundColor: "#60A5FA",
                              mt: "8px",
                              flexShrink: 0,
                            }}
                          />
                          <Typography sx={{ color: "#CBD5E1", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            {c}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  )}

                  {activeProjectTab === "features" && (
                    <Stack spacing={1}>
                      {featuredProject.features.map((f, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                          <CheckCircle sx={{ fontSize: "1rem", color: "#10B981", mt: "3px", flexShrink: 0 }} />
                          <Typography sx={{ color: "#CBD5E1", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            {f}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  )}
                </Box>

                {/* Tech Chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {featuredProject.technologies.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(96, 165, 250, 0.08)",
                        border: "1px solid rgba(96, 165, 250, 0.25)",
                        color: "#93C5FD",
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.78rem",
                        borderRadius: "8px",
                      }}
                    />
                  ))}
                </Box>
              </Grid>

              {/* Right Column: Visual Telemetry Card / Architecture HUD */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    backgroundColor: "rgba(5, 6, 10, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      pb: 2,
                      borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                      mb: 2,
                    }}
                  >
                    <Typography sx={{ fontSize: "0.72rem", color: "#60A5FA", letterSpacing: 1.5 }}>
                      SYSTEM TELEMETRY
                    </Typography>
                    <Box
                      sx={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        backgroundColor: "#10B981",
                        boxShadow: "0 0 6px #10B981",
                      }}
                    />
                  </Box>

                  <Box sx={{ color: "#94A3B8", fontSize: "0.8rem", lineHeight: 1.8 }}>
                    <div>&gt; initialize_service(&quot;expense_tracker&quot;)</div>
                    <div>&gt; db.connect(&quot;postgresql://...&quot;) [OK]</div>
                    <div>&gt; active_ledger_workers: 4</div>
                    <div>&gt; analytic_aggregations: realtime</div>
                    <div>&gt; integrity_check: 100% verified</div>
                  </Box>

                  <Box
                    sx={{
                      mt: 3,
                      pt: 2,
                      borderTop: "1px dashed rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.7rem", color: "#64748B" }}>
                      STATUS: PRODUCTION STABLE
                    </Typography>
                    <Button
                      size="small"
                      href={featuredProject.github}
                      target="_blank"
                      endIcon={<Launch sx={{ fontSize: "0.85rem !important" }} />}
                      sx={{
                        color: "#60A5FA",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.8rem",
                        p: 0,
                        "&:hover": { color: "#93C5FD", background: "none" },
                      }}
                    >
                      Explore Repo
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* 2. OTHER DISCOVERIES: ASYMMETRIC GRID */}
        <Grid container spacing={3.5}>
          {otherProjects.map((project, idx) => (
            <Grid
              item
              xs={12}
              md={project.inDevelopment ? 4 : 4}
              key={project.id}
            >
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "24px",
                    backgroundColor: "rgba(16, 21, 34, 0.6)",
                    border: "1px solid",
                    borderColor: project.inDevelopment
                      ? "rgba(96, 165, 250, 0.25)"
                      : "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: project.accent,
                      boxShadow: `0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 20px ${project.accent}15`,
                    },
                  }}
                >
                  <Box>
                    {/* Header */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.72rem",
                          color: project.accent,
                          letterSpacing: 1.5,
                          fontWeight: 600,
                        }}
                      >
                        {project.codename}
                      </Typography>

                      <Box sx={{ display: "flex", gap: 1 }}>
                        {project.github && (
                          <IconButton
                            size="small"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: "rgba(255, 255, 255, 0.4)",
                              "&:hover": { color: "#F8FAFC" },
                            }}
                          >
                            <GitHub fontSize="small" />
                          </IconButton>
                        )}
                        {project.demo && (
                          <IconButton
                            size="small"
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: "rgba(255, 255, 255, 0.4)",
                              "&:hover": { color: "#60A5FA" },
                            }}
                          >
                            <Launch fontSize="small" />
                          </IconButton>
                        )}
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.45rem",
                        fontWeight: 700,
                        color: "#F8FAFC",
                        mb: 1,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#94A3B8",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        mb: 3,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technical challenge highlight */}
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: "12px",
                        backgroundColor: "rgba(5, 6, 10, 0.5)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        mb: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.68rem",
                          color: "#60A5FA",
                          letterSpacing: 1,
                          mb: 0.5,
                        }}
                      >
                        // KEY CHALLENGE
                      </Typography>
                      <Typography sx={{ fontSize: "0.82rem", color: "#CBD5E1", lineHeight: 1.5 }}>
                        {project.challenges[0]}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Tech stack footer */}
                  <Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 2 }}>
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.07)",
                            color: "#CBD5E1",
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.72rem",
                            borderRadius: "6px",
                          }}
                        />
                      ))}
                    </Box>

                    {project.inDevelopment ? (
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 1,
                          px: 1.5,
                          py: 0.4,
                          borderRadius: "999px",
                          backgroundColor: "rgba(96, 165, 250, 0.1)",
                          border: "1px solid rgba(96, 165, 250, 0.3)",
                          color: "#60A5FA",
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.68rem",
                          letterSpacing: 1,
                        }}
                      >
                        <Schedule sx={{ fontSize: "0.85rem" }} />
                        IN ACTIVE ORBIT // ALPHA
                      </Box>
                    ) : (
                      <Button
                        size="small"
                        href={project.github}
                        target="_blank"
                        endIcon={<Launch sx={{ fontSize: "0.85rem !important" }} />}
                        sx={{
                          p: 0,
                          color: "#94A3B8",
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.82rem",
                          "&:hover": { color: "#60A5FA", background: "none" },
                        }}
                      >
                        View Project Repository
                      </Button>
                    )}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
