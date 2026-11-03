import React, { useState } from "react";
import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import {
  Code,
  AutoAwesome,
  Memory,
  Security,
  Speed,
  CloudQueue,
  HubOutlined,
  CheckCircleOutline,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import MyProfilePic from "../components/asset/IMG-20240604-WA0002.jpg";

const corePillars = [
  {
    icon: <Code fontSize="small" />,
    title: "Python Development",
    desc: "Clean backend architectures, robust algorithms, and optimized data processing.",
  },
  {
    icon: <AutoAwesome fontSize="small" />,
    title: "Production Automation",
    desc: "End-to-end browser automation, task runners, and intelligent scraping with Playwright.",
  },
  {
    icon: <HubOutlined fontSize="small" />,
    title: "API Integration",
    desc: "Asynchronous RESTful APIs with FastAPI, secure authentication, and webhook pipelines.",
  },
  {
    icon: <Memory fontSize="small" />,
    title: "React & Next.js",
    desc: "Fluid, accessible, and high-performance frontend interfaces with Framer Motion.",
  },
  {
    icon: <Security fontSize="small" />,
    title: "Docker & Systems",
    desc: "Reproducible containerized environments, PostgreSQL tuning, and persistent storage.",
  },
  {
    icon: <CloudQueue fontSize="small" />,
    title: "Cloud & AI Workflows",
    desc: "Cloud deployment architectures and AI-assisted engineering automations.",
  },
];

const About = () => {
  const reduce = useReducedMotion();
  const [activePillar, setActivePillar] = useState(0);

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 10, md: 18 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
            <Box
              sx={{
                width: 24,
                height: 1,
                backgroundColor: "#60A5FA",
              }}
            />
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
              01 // ORIGIN & ARCHITECTURE
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
              maxWidth: "850px",
            }}
          >
            A universe of ideas.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Engineered into reality.
            </span>
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Portrait with Celestial HUD Viewfinder */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "fit-content",
                  mx: { xs: "auto", md: 0 },
                }}
              >
                {/* Outer Celestial Frame */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: "-12px",
                    borderRadius: "24px",
                    border: "1px dashed rgba(96, 165, 250, 0.2)",
                    pointerEvents: "none",
                  }}
                />

                {/* HUD Corner Accents */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -16,
                    left: -16,
                    width: 20,
                    height: 20,
                    borderTop: "2px solid #60A5FA",
                    borderLeft: "2px solid #60A5FA",
                    pointerEvents: "none",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -16,
                    right: -16,
                    width: 20,
                    height: 20,
                    borderBottom: "2px solid #A78BFA",
                    borderRight: "2px solid #A78BFA",
                    pointerEvents: "none",
                  }}
                />

                {/* Image Container */}
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "270px", sm: "320px", md: "340px" },
                    height: { xs: "340px", sm: "400px", md: "430px" },
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "#101522",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow:
                      "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(96, 165, 250, 0.08)",
                  }}
                >
                  <Box
                    component="img"
                    src={MyProfilePic}
                    alt="Dinesh — Developer"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "grayscale(25%) contrast(1.08)",
                      transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "scale(1.04)",
                        filter: "grayscale(0%) contrast(1.04)",
                      },
                    }}
                  />

                  {/* Gradient overlay for depth */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(5, 6, 10, 0.8) 0%, transparent 40%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Telemetry pill at bottom of portrait */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      right: 16,
                      px: 2,
                      py: 1,
                      borderRadius: "12px",
                      backgroundColor: "rgba(10, 13, 22, 0.75)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#60A5FA",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          color: "#F8FAFC",
                        }}
                      >
                        Dinesh
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#94A3B8",
                        letterSpacing: 1,
                      }}
                    >
                      CYBERSPACE // 2026
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column: Narrative & Interactive Expertise Indicators */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4}>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: { xs: "1.2rem", sm: "1.35rem" },
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: "#F8FAFC",
                    mb: 2,
                  }}
                >
                  I'm a software engineer driven by solving real-world challenges
                  through clean logic, resilient automation, and intuitive digital interfaces.
                </Typography>

                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  My work spans the entire lifecycle of modern applications: from
                  designing high-throughput backend APIs with Python and FastAPI,
                  orchestrating robust browser automation with Playwright, to crafting
                  refined interactive frontend experiences using React 19 and Next.js.
                </Typography>

                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                  }}
                >
                  I prioritize maintainability, minimal complexity, and high engineering
                  precision over temporary shortcuts.
                </Typography>
              </motion.div>

              {/* Interactive Core Expertise Matrix */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.72rem",
                    color: "#60A5FA",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  // INTERACTIVE SYSTEM CAPABILITIES
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 1.5,
                  }}
                >
                  {corePillars.map((pillar, idx) => {
                    const isSelected = activePillar === idx;
                    return (
                      <Box
                        key={pillar.title}
                        onClick={() => setActivePillar(idx)}
                        sx={{
                          p: 2,
                          borderRadius: "14px",
                          backgroundColor: isSelected
                            ? "rgba(96, 165, 250, 0.08)"
                            : "rgba(255, 255, 255, 0.02)",
                          border: "1px solid",
                          borderColor: isSelected
                            ? "rgba(96, 165, 250, 0.35)"
                            : "rgba(255, 255, 255, 0.06)",
                          cursor: "pointer",
                          transition: "all 0.25s ease",
                          "&:hover": {
                            borderColor: "rgba(96, 165, 250, 0.3)",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                          },
                        }}
                      >
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={0.6}>
                          <Box
                            sx={{
                              color: isSelected ? "#60A5FA" : "#94A3B8",
                              display: "flex",
                            }}
                          >
                            {pillar.icon}
                          </Box>
                          <Typography
                            sx={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: "0.92rem",
                              fontWeight: 700,
                              color: isSelected ? "#F8FAFC" : "#E2E8F0",
                            }}
                          >
                            {pillar.title}
                          </Typography>
                        </Stack>
                        <Typography
                          sx={{
                            fontSize: "0.82rem",
                            color: "#94A3B8",
                            lineHeight: 1.5,
                          }}
                        >
                          {pillar.desc}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </motion.div>

              {/* Engineering Metrics (No generic percentage bars!) */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 4, sm: 6 },
                  pt: 2,
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#F8FAFC",
                      lineHeight: 1,
                    }}
                  >
                    99.9%
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "0.7rem",
                      color: "#64748B",
                      letterSpacing: 2,
                      mt: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    CODE INTEGRITY
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#60A5FA",
                      lineHeight: 1,
                    }}
                  >
                    10x
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "0.7rem",
                      color: "#64748B",
                      letterSpacing: 2,
                      mt: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    AUTOMATION SPEED
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#A78BFA",
                      lineHeight: 1,
                    }}
                  >
                    &lt;50ms
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "0.7rem",
                      color: "#64748B",
                      letterSpacing: 2,
                      mt: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    API RESPONSE GOAL
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
