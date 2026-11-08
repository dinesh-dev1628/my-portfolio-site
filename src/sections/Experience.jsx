import React from "react";
import { Box, Typography, Container, Stack, Chip, Grid } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { timelineData } from "../data/experience";

const Experience = () => {
  const reduce = useReducedMotion();

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
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
              04 // CHRONOLOGICAL TRAJECTORY
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3.2rem", md: "3.8rem" },
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#F5F5FA",
              maxWidth: "850px",
            }}
          >
            MY JOURNEY{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #8B5CF6, #38BDF8, #D946EF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              THROUGH TIME.
            </span>
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
            An orbital timeline mapping professional milestones, core technical
            breakthroughs, and software engineering learning achievements.
          </Typography>
        </Box>

        {/* Space-Themed Vertical Timeline */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "980px",
            mx: "auto",
            pl: { xs: 3.5, md: 6 },
          }}
        >
          {/* Continuous Connected Orbital Trajectory Line */}
          <Box
            sx={{
              position: "absolute",
              top: 20,
              bottom: 20,
              left: { xs: "8px", md: "14px" },
              width: "2px",
              background:
                "linear-gradient(180deg, #38BDF8 0%, #8B5CF6 50%, #D946EF 100%)",
              boxShadow: "0 0 10px rgba(56, 189, 248, 0.4)",
            }}
          />

          <Stack spacing={{ xs: 6, md: 8 }}>
            {timelineData.map((milestone, index) => (
              <motion.div
                key={milestone.checkpoint}
                initial={reduce ? false : { opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.85, delay: index * 0.12 }}
              >
                <Box sx={{ position: "relative" }}>
                  {/* Orbital Checkpoint Marker Node */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: "-32px", md: "-46px" },
                      top: "6px",
                      width: { xs: 18, md: 24 },
                      height: { xs: 18, md: 24 },
                      borderRadius: "50%",
                      backgroundColor: "#050510",
                      border: "2px solid",
                      borderColor: milestone.accent,
                      boxShadow: `0 0 16px ${milestone.accent}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 6, md: 8 },
                        height: { xs: 6, md: 8 },
                        borderRadius: "50%",
                        backgroundColor: milestone.accent,
                      }}
                    />
                  </Box>

                  {/* Checkpoint Dossier Card */}
                  <Box
                    sx={{
                      p: { xs: 3.5, sm: 4.5 },
                      borderRadius: "24px",
                      backgroundColor: "rgba(16, 16, 38, 0.65)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(18px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: milestone.accent,
                        boxShadow: `0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 25px ${milestone.accent}20`,
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    {/* Top Row: Checkpoint Code, Period, Type */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: milestone.accent,
                            letterSpacing: 1.5,
                          }}
                        >
                          {milestone.checkpoint}
                        </Typography>
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.3,
                            borderRadius: "999px",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Geist Mono', monospace",
                              fontSize: "0.68rem",
                              color: "#F5F5FA",
                              fontWeight: 600,
                            }}
                          >
                            {milestone.type}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.78rem",
                          color: "#9292A8",
                          letterSpacing: 1,
                        }}
                      >
                        {milestone.period}
                      </Typography>
                    </Box>

                    {/* Role & Entity */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: { xs: "1.5rem", sm: "1.85rem" },
                        fontWeight: 800,
                        color: "#F5F5FA",
                        mb: 0.5,
                      }}
                    >
                      {milestone.role}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1rem",
                        color: "#38BDF8",
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {milestone.entity}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        color: "#9292A8",
                        lineHeight: 1.8,
                        mb: 3,
                      }}
                    >
                      {milestone.description}
                    </Typography>

                    {/* Responsibilities & Achievements */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        sx={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.68rem",
                          color: "#9292A8",
                          letterSpacing: 1.5,
                          textTransform: "uppercase",
                          mb: 1.5,
                        }}
                      >
                        ORBITAL ACHIEVEMENTS:
                      </Typography>
                      <Stack spacing={1.2}>
                        {milestone.responsibilities.map((r, rIdx) => (
                          <Box
                            key={rIdx}
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                backgroundColor: milestone.accent,
                                mt: 0.8,
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: "0.88rem",
                                color: "#E2E8F0",
                                lineHeight: 1.6,
                              }}
                            >
                              {r}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>

                    {/* Checkpoint Tech Badges */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {milestone.technologies.map((tech) => (
                        <Box
                          key={tech}
                          sx={{
                            px: 1.4,
                            py: 0.4,
                            borderRadius: "6px",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.72rem",
                            color: "#9292A8",
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
