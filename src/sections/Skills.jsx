import React from "react";
import { Box, Typography, Grid, Container, Stack } from "@mui/material";
import { Language, GitHub, BugReport } from "@mui/icons-material";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    subtitle: "User Interface & Experience",
    icon: <Language sx={{ fontSize: 40 }} />,
    color: "#3b82f6",
    skills: ["React", "JavaScript", "Next.js", "MUI", "Framer Motion"],
  },
  {
    title: "Backend",
    subtitle: "Logic & Scalable Systems",
    icon: <BugReport sx={{ fontSize: 40 }} />,
    color: "#10b981",
    skills: ["Python", "FastAPI", "RESTful APIs", "Docker"],
  },
  {
    title: "Core Tools",
    subtitle: "Version Control & Workflow",
    icon: <GitHub sx={{ fontSize: 40 }} />,
    color: "#a855f7",
    skills: ["Git", "Postman", "PostgreSQL", "Playwright"],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 20 },
        backgroundColor: "#020617",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Element */}
      <Box 
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="overline"
              sx={{ color: "#3b82f6", fontWeight: 800, letterSpacing: 4, display: "block", mb: 1 }}
            >
              EXPERTISE
            </Typography>
            <Typography
              variant="h2"
              sx={{ 
                color: "#fff", 
                fontWeight: 900, 
                fontSize: { xs: "2.5rem", md: "4rem" },
                letterSpacing: -2 
              }}
            >
              My Tech <span style={{ color: "#3b82f6" }}>Universe.</span>
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {skillCategories.map((cat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "32px",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      borderColor: `${cat.color}66`,
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      boxShadow: `0 20px 40px -20px ${cat.color}33`,
                    },
                  }}
                >
                  {/* Card Header */}
                  <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                    <Box 
                      sx={{ 
                        p: 1.5, 
                        borderRadius: "16px", 
                        backgroundColor: `${cat.color}15`, 
                        color: cat.color,
                        display: "flex"
                      }}
                    >
                      {cat.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight={800} sx={{ color: "#fff" }}>
                        {cat.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 500 }}>
                        {cat.subtitle}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Skills Tag Cloud */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                    {cat.skills.map((skill) => (
                      <Box
                        key={skill}
                        component={motion.div}
                        whileHover={{ scale: 1.1 }}
                        sx={{
                          px: 2,
                          py: 0.8,
                          borderRadius: "100px",
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          color: "#cbd5e1",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          transition: "0.2s",
                          "&:hover": {
                            color: "#fff",
                            backgroundColor: `${cat.color}22`,
                            borderColor: cat.color,
                          },
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
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

export default Skills;