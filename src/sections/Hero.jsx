import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import { ArrowDownward, NorthEast, ExploreOutlined } from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";

const Hero = () => {
  const reduce = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20, // -10 to +10px
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reduce]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 14, md: 10 },
        pb: { xs: 8, md: 10 },
      }}
    >
      {/* Atmospheric lighting focal aura behind hero typography */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "300px", md: "650px" },
          height: { xs: "280px", md: "450px" },
          background:
            "radial-gradient(ellipse at center, rgba(96, 165, 250, 0.12) 0%, rgba(139, 92, 246, 0.05) 45%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Elegant Orbital Gyroscope Visual Element in background */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "320px", sm: "480px", md: "680px" },
          height: { xs: "320px", sm: "480px", md: "680px" },
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Outer orbital ring */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.04)",
            animation: reduce ? "none" : "celestial-orbit 60s linear infinite",
          }}
        >
          {/* Orbiting celestial satellite node */}
          <Box
            sx={{
              position: "absolute",
              top: "-4px",
              left: "50%",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#60A5FA",
              boxShadow: "0 0 12px #60A5FA",
            }}
          />
        </Box>

        {/* Inner tilted orbital ring */}
        <Box
          sx={{
            position: "absolute",
            inset: { xs: "35px", md: "70px" },
            borderRadius: "50%",
            border: "1px dashed rgba(139, 92, 246, 0.08)",
            animation: reduce ? "none" : "celestial-orbit-reverse 45s linear infinite",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "-3px",
              left: "30%",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#A78BFA",
              boxShadow: "0 0 8px #A78BFA",
            }}
          />
        </Box>
      </Box>

      {/* Hero Content Container */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          component={motion.div}
          animate={
            reduce
              ? undefined
              : {
                  x: mousePos.x * 0.5,
                  y: mousePos.y * 0.5,
                }
          }
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          sx={{
            maxWidth: "920px",
            mx: "auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Telemetry Status Pill */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.2,
                py: 0.7,
                borderRadius: "999px",
                backgroundColor: "rgba(10, 13, 22, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                mb: { xs: 3, md: 4 },
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                  boxShadow: "0 0 8px #10B981",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: { xs: "0.68rem", sm: "0.75rem" },
                  color: "#CBD5E1",
                  letterSpacing: 2,
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                AVAILABLE FOR NEW PROJECTS // 2026
              </Typography>
            </Box>
          </motion.div>

          {/* Large Personal Brand Eyebrow */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                color: "#60A5FA",
                letterSpacing: { xs: 4, md: 6 },
                textTransform: "uppercase",
                fontWeight: 600,
                mb: 1.5,
              }}
            >
              // DEVELOPER & SYSTEMS ARCHITECT
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3.2rem", sm: "5rem", md: "6.8rem" },
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: { xs: "-0.04em", md: "-0.05em" },
                color: "#F8FAFC",
                textTransform: "uppercase",
                mb: 2.5,
                userSelect: "none",
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 60%, #94A3B8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DINESH
            </Typography>
          </motion.div>

          {/* Core Cinematic Headline */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.45rem", sm: "2rem", md: "2.4rem" },
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.025em",
                color: "#F8FAFC",
                maxWidth: "780px",
                mx: "auto",
                mb: 2.5,
              }}
            >
              Building Digital Experiences{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Beyond Limits.
              </span>
            </Typography>
          </motion.div>

          {/* Supporting Narrative */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.98rem", sm: "1.12rem" },
                color: "#94A3B8",
                maxWidth: "680px",
                mx: "auto",
                lineHeight: 1.7,
                fontWeight: 400,
                mb: { xs: 4, md: 5 },
              }}
            >
              I'm a developer focused on Python, automation, APIs, and modern
              web experiences. I turn complex ideas into practical, scalable
              solutions.
            </Typography>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              {/* Primary CTA */}
              <Button
                variant="contained"
                onClick={() => scrollTo("about")}
                startIcon={<ExploreOutlined />}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  px: 3.5,
                  py: 1.5,
                  borderRadius: "14px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.01em",
                  color: "#FFFFFF",
                  backgroundColor: "rgba(96, 165, 250, 0.16)",
                  border: "1px solid rgba(96, 165, 250, 0.4)",
                  boxShadow: "0 0 25px rgba(96, 165, 250, 0.25)",
                  backdropFilter: "blur(12px)",
                  "&:hover": {
                    backgroundColor: "rgba(96, 165, 250, 0.26)",
                    borderColor: "#60A5FA",
                    boxShadow: "0 0 35px rgba(96, 165, 250, 0.4)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Explore My Universe
              </Button>

              {/* Secondary CTA */}
              <Button
                variant="outlined"
                onClick={() => scrollTo("projects")}
                endIcon={<NorthEast sx={{ fontSize: "1rem !important" }} />}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  px: 3.5,
                  py: 1.5,
                  borderRadius: "14px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.01em",
                  color: "#F8FAFC",
                  borderColor: "rgba(255, 255, 255, 0.12)",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View Selected Work
              </Button>
            </Stack>
          </motion.div>

          {/* Quick Telemetry Footnote */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 2.5, sm: 4 },
              mt: { xs: 6, md: 8 },
              pt: 3,
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#F8FAFC",
                }}
              >
                Python & React
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#64748B",
                  letterSpacing: 1.5,
                }}
              >
                CORE SPECIALIZATION
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#F8FAFC",
                }}
              >
                Playwright & APIs
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#64748B",
                  letterSpacing: 1.5,
                }}
              >
                AUTOMATION STACK
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#F8FAFC",
                }}
              >
                PostgreSQL & Docker
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#64748B",
                  letterSpacing: 1.5,
                }}
              >
                DATA & DEVOPS
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Subtle Scroll Indicator */}
      <Box
        onClick={() => scrollTo("about")}
        sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          cursor: "pointer",
          color: "rgba(255, 255, 255, 0.35)",
          "&:hover": { color: "#60A5FA" },
          transition: "color 0.2s ease",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          SCROLL TO EXPLORE
        </Typography>
        <motion.div
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownward sx={{ fontSize: "1rem" }} />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
