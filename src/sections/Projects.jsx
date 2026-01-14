import React from "react";
import { Box, Typography, Container, Grid, Button, Stack, Chip, IconButton } from "@mui/material";
import { GitHub, Launch, LockClock, AutoGraph, TrendingUp } from "@mui/icons-material";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const xMove = useTransform(scrollYProgress, [0, 1], [0, -600]);

  // GitHub Link Variable
  const githubRepo = "https://github.com/dinesh-dev1628/expense_tracker_app";

  return (
    <Box 
      id="projects" 
      sx={{ 
        py: { xs: 8, md: 15 }, 
        backgroundColor: "#020617", 
        position: "relative", 
        overflow: "hidden" 
      }}
    >
      {/* ANIMATED BACKGROUND TEXT */}
      <motion.div style={{ x: xMove, whiteSpace: "nowrap", position: "absolute", top: "10%", left: 0, zIndex: 0 }}>
        <Typography
          sx={{
            fontSize: { xs: "5rem", md: "12rem" },
            fontWeight: 900,
            color: "rgba(255, 255, 255, 0.02)",
            letterSpacing: 10,
            userSelect: "none"
          }}
        >
          SELECTED WORKS SELECTED WORKS SELECTED WORKS
        </Typography>
      </motion.div>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        
        {/* SECTION HEADER */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box sx={{ width: 40, height: 2, bgcolor: "#3b82f6" }} />
              <Typography variant="overline" sx={{ color: "#3b82f6", fontWeight: 900, letterSpacing: 3 }}>
                PORTFOLIO
              </Typography>
            </Stack>
            <Typography variant="h2" sx={{ color: "#fff", fontWeight: 900, mt: 1, fontSize: { xs: "2rem", md: "3.5rem" } }}>
              Proven <span style={{ color: "#3b82f6" }}>Solutions.</span>
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3}>
          {/* FEATURED PROJECT: EXPENSE TRACKER */}
          <Grid item xs={12} md={7}>
            <motion.div
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  p: { xs: 4, md: 5 },
                  height: "450px",
                  background: "linear-gradient(135deg, #064e3b 0%, #020617 100%)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  cursor: "pointer"
                }}
                onClick={() => window.open(githubRepo, "_blank")}
              >
                <Box sx={{ zIndex: 2 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Box sx={{ p: 1.5, bgcolor: "rgba(16, 185, 129, 0.1)", borderRadius: "12px", color: "#10b981" }}>
                      <TrendingUp fontSize="large" />
                    </Box>
                    <IconButton 
                      href={githubRepo} 
                      target="_blank"
                      onClick={(e) => e.stopPropagation()} // Prevents double-triggering card click
                      sx={{ color: "rgba(255,255,255,0.3)", "&:hover": { color: "#fff" } }}
                    >
                      <GitHub />
                    </IconButton>
                  </Stack>
                  
                  <Typography variant="h3" sx={{ color: "#fff", fontWeight: 900, mt: 3, mb: 1, fontSize: "2.2rem" }}>
                    Expense Tracker
                  </Typography>
                  <Typography sx={{ color: "#94a3b8", fontSize: "1rem", maxWidth: "380px", lineHeight: 1.7 }}>
                    Precision-built Python core for automated finance management. 
                    Real-time PostgreSQL analytics wrapped in a minimalist logic layer.
                  </Typography>
                </Box>

                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ zIndex: 2 }}>
                  <Chip label="Python" size="small" sx={{ bgcolor: "rgba(16, 185, 129, 0.2)", color: "#10b981", fontWeight: 700 }} />
                  <Chip label="PostgreSQL" size="small" sx={{ bgcolor: "rgba(255,255,255,0.05)", color: "#94a3b8" }} />
                  <Button 
                    variant="contained" 
                    size="small" 
                    href={githubRepo}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    endIcon={<Launch />}
                    sx={{ ml: "auto", bgcolor: "#10b981", borderRadius: "8px", fontWeight: 700, px: 3 }}
                  >
                    Source Code
                  </Button>
                </Stack>

                <AutoGraph sx={{ position: "absolute", bottom: -20, right: -20, fontSize: "18rem", color: "#10b981", opacity: 0.03 }} />
              </Box>
            </motion.div>
          </Grid>

          {/* COMING SOON CARD */}
          <Grid item xs={12} md={5}>
            <motion.div whileHover={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300 }}>
              <Box
                sx={{
                  borderRadius: "24px", p: 4, height: "450px", display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", textAlign: "center",
                  backgroundColor: "rgba(255,255,255,0.01)", border: "1px dashed rgba(59, 130, 246, 0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                  <LockClock sx={{ color: "#3b82f6", fontSize: 50, mb: 2, opacity: 0.5 }} />
                </motion.div>
                <Typography variant="h5" sx={{ color: "#fff", fontWeight: 800, mb: 1 }}>Project Zero</Typography>
                <Typography variant="body2" sx={{ color: "#475569", maxWidth: "200px", mb: 4 }}>My Next one.</Typography>
                <Box sx={{ px: 3, py: 0.5, borderRadius: "100px", background: "linear-gradient(90deg, #3b82f6, #8b5cf6)", color: "#fff", fontSize: "0.7rem", fontWeight: 900, letterSpacing: 2 }}>
                  IN DEVELOPMENT
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;