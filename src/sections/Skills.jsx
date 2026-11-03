import React, { useState } from "react";
import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import {
  Code,
  AutoAwesome,
  Memory,
  Tune,
  Terminal,
  ApiOutlined,
  DataObject,
  Storage,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "../data/skills";

const Skills = () => {
  const reduce = useReducedMotion();
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <Box
      id="skills"
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
            <Box sx={{ width: 24, height: 1, backgroundColor: "#A78BFA" }} />
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                color: "#A78BFA",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              04 // CAPABILITY MATRIX
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
            My Tech{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #A78BFA, #60A5FA)",
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
              maxWidth: "600px",
            }}
          >
            A cohesive ecosystem of languages, automation frameworks, runtime
            environments, and systems tools.
          </Typography>
        </Box>

        {/* 4 Quadrants Matrix */}
        <Grid container spacing={3.5}>
          {skillCategories.map((cat, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={cat.id}>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    borderRadius: "24px",
                    backgroundColor: "rgba(16, 21, 34, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: cat.accent,
                      boxShadow: `0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 25px ${cat.accent}12`,
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {/* Category Header */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: "#F8FAFC",
                      }}
                    >
                      {cat.name}
                    </Typography>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: cat.accent,
                        boxShadow: `0 0 10px ${cat.accent}`,
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "0.75rem",
                      color: cat.accent,
                      letterSpacing: 1,
                      mb: 2,
                    }}
                  >
                    {cat.tagline}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#94A3B8",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {cat.description}
                  </Typography>

                  {/* Interactive Skill Indicator Badges */}
                  <Stack spacing={1.2}>
                    {cat.skills.map((skill) => {
                      const isHovered = selectedSkill?.name === skill.name;
                      return (
                        <Box
                          key={skill.name}
                          onMouseEnter={() => setSelectedSkill(skill)}
                          onMouseLeave={() => setSelectedSkill(null)}
                          sx={{
                            p: 1.5,
                            borderRadius: "12px",
                            backgroundColor: isHovered
                              ? "rgba(255, 255, 255, 0.05)"
                              : "rgba(5, 6, 10, 0.5)",
                            border: "1px solid",
                            borderColor: isHovered
                              ? cat.accent
                              : "rgba(255, 255, 255, 0.05)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 2,
                            transition: "all 0.2s ease",
                            cursor: "default",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                            <Box
                              sx={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                backgroundColor: isHovered ? cat.accent : "#475569",
                                transition: "background-color 0.2s ease",
                              }}
                            />
                            <Typography
                              sx={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: "0.92rem",
                                fontWeight: 600,
                                color: isHovered ? "#F8FAFC" : "#E2E8F0",
                              }}
                            >
                              {skill.name}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <Typography
                              sx={{
                                display: { xs: "none", sm: "block" },
                                fontSize: "0.78rem",
                                color: "#94A3B8",
                                textAlign: "right",
                              }}
                            >
                              {skill.detail}
                            </Typography>
                            <Box
                              sx={{
                                px: 1.2,
                                py: 0.3,
                                borderRadius: "6px",
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                color: isHovered ? cat.accent : "#64748B",
                                fontFamily: "'Geist Mono', monospace",
                                fontSize: "0.68rem",
                                fontWeight: 600,
                                flexShrink: 0,
                              }}
                            >
                              {skill.level}
                            </Box>
                          </Box>
                        </Box>
                      );
                    })}
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
