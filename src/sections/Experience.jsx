import React from "react";
import { Box, Typography, Container, Stack, Skeleton, Button } from "@mui/material";
import { Refresh, Explore } from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import { useExperience } from "../hooks/useExperience.js";

const Experience = () => {
  const reduce = useReducedMotion();
  const { experience, loading, error, refetch, isEmpty } = useExperience();

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

        {/* Error Fallback Banner */}
        {error && (
          <Box
            sx={{
              maxWidth: "980px",
              mx: "auto",
              mb: 5,
              p: 2.5,
              borderRadius: "16px",
              border: "1px solid rgba(239, 68, 68, 0.35)",
              background: "rgba(239, 68, 68, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  color: "#FCA5A5",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: 1,
                }}
              >
                [SUPABASE TRAJECTORY OFFLINE // RENDERING CACHED CHECKPOINTS]
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "0.8rem", mt: 0.5 }}>
                {error?.message || "Using local fallback timeline."}
              </Typography>
            </Box>
            <Button
              size="small"
              variant="outlined"
              onClick={refetch}
              startIcon={<Refresh />}
              sx={{
                borderColor: "#F87171",
                color: "#FCA5A5",
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                "&:hover": { borderColor: "#EF4444", background: "rgba(239, 68, 68, 0.15)" },
              }}
            >
              Retry Trajectory
            </Button>
          </Box>
        )}

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

          {loading ? (
            <Stack spacing={{ xs: 6, md: 8 }}>
              {[1, 2].map((sk) => (
                <Box key={sk} sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      p: { xs: 3.5, sm: 4.5 },
                      borderRadius: "24px",
                      backgroundColor: "rgba(16, 16, 38, 0.5)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(18px)",
                    }}
                  >
                    <Skeleton variant="text" width="30%" height={24} sx={{ bgcolor: "rgba(255, 255, 255, 0.08)" }} />
                    <Skeleton variant="text" width="60%" height={40} sx={{ bgcolor: "rgba(255, 255, 255, 0.08)", my: 1 }} />
                    <Skeleton variant="text" width="40%" height={24} sx={{ bgcolor: "rgba(255, 255, 255, 0.08)" }} />
                    <Skeleton variant="rectangular" width="100%" height={80} sx={{ bgcolor: "rgba(255, 255, 255, 0.05)", borderRadius: "12px", my: 2 }} />
                    <Box sx={{ display: "flex", gap: 1 }}>
                      {[1, 2, 3, 4].map((t) => (
                        <Skeleton key={t} variant="rounded" width={80} height={26} sx={{ bgcolor: "rgba(255, 255, 255, 0.08)", borderRadius: "6px" }} />
                      ))}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
          ) : isEmpty ? (
            <Box
              sx={{
                p: { xs: 6, md: 8 },
                textAlign: "center",
                borderRadius: "24px",
                border: "1px dashed rgba(255, 255, 255, 0.12)",
                background: "rgba(16, 16, 38, 0.3)",
              }}
            >
              <Explore sx={{ fontSize: 44, color: "#38BDF8", mb: 2, opacity: 0.8 }} />
              <Typography sx={{ color: "#F5F5FA", fontWeight: 700, fontSize: "1.2rem", mb: 1 }}>
                No Trajectory Checkpoints Found
              </Typography>
              <Typography sx={{ color: "#9292A8", fontSize: "0.9rem" }}>
                Checkpoints are being calibrated in the central telemetry ledger.
              </Typography>
            </Box>
          ) : (
            <Stack spacing={{ xs: 6, md: 8 }}>
              {experience.map((milestone, index) => (
                <motion.div
                  key={milestone.id || milestone.checkpoint || index}
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
                        borderColor: milestone.accent || "#8B5CF6",
                        boxShadow: `0 0 16px ${milestone.accent || "#8B5CF6"}`,
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
                          backgroundColor: milestone.accent || "#8B5CF6",
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
                          borderColor: milestone.accent || "#8B5CF6",
                          boxShadow: `0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 25px ${milestone.accent || "#8B5CF6"}20`,
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
                              color: milestone.accent || "#8B5CF6",
                              letterSpacing: 1.5,
                            }}
                          >
                            {milestone.checkpoint}
                          </Typography>
                          {milestone.type && (
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
                          )}
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
                      {(milestone.responsibilities || []).length > 0 && (
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
                            {(milestone.responsibilities || []).map((r, rIdx) => (
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
                                    backgroundColor: milestone.accent || "#8B5CF6",
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
                      )}

                      {/* Checkpoint Tech Badges */}
                      {(milestone.technologies || []).length > 0 && (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {(milestone.technologies || []).map((tech) => (
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
                      )}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
