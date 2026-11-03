import React from "react";
import { Box, Typography, Container, Stack, Chip } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { timelineData } from "../data/experience";

const Experience = () => {
  const reduce = useReducedMotion();

  return (
    <Box
      id="experience"
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
            <Box sx={{ width: 24, height: 1, backgroundColor: "#8B5CF6" }} />
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
              02 // TECHNICAL ODYSSEY
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
            Evolution of an{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #8B5CF6, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Engineer.
            </span>
          </Typography>
          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              mt: 1.5,
              maxWidth: "600px",
            }}
          >
            A chronological timeline through the major stages of my engineering
            development and systems specialization.
          </Typography>
        </Box>

        {/* Sophisticated Vertical Timeline */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "960px",
            mx: "auto",
            pl: { xs: 3.5, md: 6 },
          }}
        >
          {/* Subtle vertical connecting line */}
          <Box
            sx={{
              position: "absolute",
              top: 15,
              bottom: 15,
              left: { xs: "7px", md: "11px" },
              width: "1.5px",
              background:
                "linear-gradient(180deg, #60A5FA 0%, #8B5CF6 50%, rgba(139, 92, 246, 0.1) 100%)",
            }}
          />

          <Stack spacing={{ xs: 6, md: 8 }}>
            {timelineData.map((stage, index) => (
              <motion.div
                key={stage.coordinate}
                initial={reduce ? false : { opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <Box sx={{ position: "relative" }}>
                  {/* Timeline indicator node */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: "-32px", md: "-44px" },
                      top: "6px",
                      width: { xs: 16, md: 20 },
                      height: { xs: 16, md: 20 },
                      borderRadius: "50%",
                      backgroundColor: "#05060A",
                      border: "2px solid",
                      borderColor: index === 0 ? "#60A5FA" : "#8B5CF6",
                      boxShadow:
                        index === 0
                          ? "0 0 14px rgba(96, 165, 250, 0.6)"
                          : "0 0 10px rgba(139, 92, 246, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: index === 0 ? "#60A5FA" : "#A78BFA",
                      }}
                    />
                  </Box>

                  {/* Stage Card */}
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      borderRadius: "20px",
                      backgroundColor: "rgba(16, 21, 34, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      backdropFilter: "blur(12px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(96, 165, 250, 0.25)",
                        boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.5)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {/* Header meta */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 1.5,
                        mb: 1.5,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.75rem",
                            color: "#60A5FA",
                            letterSpacing: 2,
                            fontWeight: 600,
                          }}
                        >
                          {stage.period}
                        </Typography>
                        <Box
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            backgroundColor: "#475569",
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.68rem",
                            color: "#94A3B8",
                            letterSpacing: 1.5,
                          }}
                        >
                          {stage.coordinate}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          px: 1.8,
                          py: 0.4,
                          borderRadius: "999px",
                          backgroundColor:
                            index === 0
                              ? "rgba(96, 165, 250, 0.12)"
                              : "rgba(255, 255, 255, 0.04)",
                          border: "1px solid",
                          borderColor:
                            index === 0
                              ? "rgba(96, 165, 250, 0.3)"
                              : "rgba(255, 255, 255, 0.08)",
                          color: index === 0 ? "#60A5FA" : "#94A3B8",
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          letterSpacing: 1,
                        }}
                      >
                        {stage.status}
                      </Box>
                    </Box>

                    {/* Role & Entity */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: { xs: "1.3rem", sm: "1.6rem" },
                        fontWeight: 700,
                        color: "#F8FAFC",
                        mb: 0.5,
                      }}
                    >
                      {stage.role}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#8B5CF6",
                        fontSize: "0.92rem",
                        fontWeight: 500,
                        mb: 2,
                      }}
                    >
                      {stage.entity}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: "#94A3B8",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      {stage.description}
                    </Typography>

                    {/* Responsibilities list */}
                    <Box sx={{ mb: 3 }}>
                      {stage.responsibilities.map((resp, rIdx) => (
                        <Box
                          key={rIdx}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.5,
                            mb: 1.2,
                          }}
                        >
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
                          <Typography
                            sx={{
                              fontSize: "0.88rem",
                              color: "#CBD5E1",
                              lineHeight: 1.6,
                            }}
                          >
                            {resp}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Tech Badges */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {stage.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.07)",
                            color: "#CBD5E1",
                            fontSize: "0.78rem",
                            fontFamily: "'Geist Mono', monospace",
                            borderRadius: "8px",
                            "&:hover": {
                              borderColor: "rgba(96, 165, 250, 0.4)",
                              color: "#F8FAFC",
                            },
                          }}
                        />
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
