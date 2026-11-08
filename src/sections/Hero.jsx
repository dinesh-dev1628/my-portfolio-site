import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import { ArrowDownward, NorthEast, ExploreOutlined } from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import HeroPlanet from "../components/3d/HeroPlanet.jsx";
import MagneticButton from "../components/common/MagneticButton.jsx";

const Hero = () => {
  const reduce = useReducedMotion();

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
        pt: { xs: 14, sm: 16, md: 14 },
        pb: { xs: 8, sm: 10, md: 12 },
      }}
    >
      {/* 1. Full-Screen Photorealistic 3D Planet & Planetary Rings (Zero clipping, full 100vw x 100vh) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "auto",
        }}
      >
        <HeroPlanet />
      </Box>

      {/* 2. Deep Atmospheric Horizon Light Glow behind planet */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: "46%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "360px", sm: "640px", md: "960px" },
          height: { xs: "360px", sm: "520px", md: "700px" },
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.22) 0%, rgba(56, 189, 248, 0.10) 45%, rgba(217, 70, 239, 0.04) 65%, transparent 75%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 3. Subtle Concentric Orbit Rings & Satellite Beacons */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: "46%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "380px", sm: "580px", md: "840px" },
          height: { xs: "380px", sm: "580px", md: "840px" },
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
            border: "1px dashed rgba(56, 189, 248, 0.12)",
            animation: reduce ? "none" : "celestial-orbit 65s linear infinite",
          }}
        >
          {/* Orbiting Satellite Node 1 */}
          <Box
            sx={{
              position: "absolute",
              top: "-5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#38BDF8",
              boxShadow: "0 0 12px #38BDF8, 0 0 24px #38BDF8",
            }}
          />
        </Box>

        {/* Inner reverse orbital ring */}
        <Box
          sx={{
            position: "absolute",
            inset: { xs: "40px", sm: "65px", md: "95px" },
            borderRadius: "50%",
            border: "1px solid rgba(139, 92, 246, 0.10)",
            animation: reduce ? "none" : "celestial-orbit-reverse 48s linear infinite",
          }}
        >
          {/* Orbiting Satellite Node 2 */}
          <Box
            sx={{
              position: "absolute",
              bottom: "-4px",
              right: "28%",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#D946EF",
              boxShadow: "0 0 10px #D946EF, 0 0 20px #D946EF",
            }}
          />
        </Box>
      </Box>

      {/* 4. Four-Corner Tactical HUD Framing Reticles */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 90,
          left: { xs: 16, sm: 36, md: 64 },
          display: { xs: "none", sm: "block" },
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.65rem",
            color: "#676780",
            letterSpacing: 2,
          }}
        >
          + [0x7E: SOL-ORBIT]
        </Typography>
      </Box>

      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 90,
          right: { xs: 16, sm: 36, md: 64 },
          display: { xs: "none", sm: "block" },
          textAlign: "right",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.65rem",
            color: "#676780",
            letterSpacing: 2,
          }}
        >
          LAT: 13.08° N // LONG: 80.27° E +
        </Typography>
      </Box>

      {/* Futuristic Floating HUD Astronomical Telemetry (Desktop Left) */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: { xs: 130, md: 150 },
          left: { xs: 24, md: 64 },
          display: { xs: "none", lg: "block" },
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <Box
            sx={{
              p: 2.2,
              borderRadius: "16px",
              backgroundColor: "rgba(10, 10, 24, 0.65)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.7rem",
                color: "#38BDF8",
                letterSpacing: 2,
                mb: 0.6,
                fontWeight: 700,
              }}
            >
              // ORBITAL COORDINATES
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.68rem",
                color: "#9292A8",
                letterSpacing: 1.5,
                lineHeight: 1.6,
              }}
            >
              RA: 19h 50m 47s<br />
              DEC: +08° 52′ 06″<br />
              TILT: 23.4° // STABLE<br />
              ORBIT: GEO-SYNCHRONOUS
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Futuristic Floating HUD Telemetry (Desktop Right) */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: { xs: 130, md: 150 },
          right: { xs: 24, md: 64 },
          display: { xs: "none", lg: "block" },
          zIndex: 2,
          textAlign: "right",
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <Box
            sx={{
              p: 2.2,
              borderRadius: "16px",
              backgroundColor: "rgba(10, 10, 24, 0.65)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.7rem",
                color: "#8B5CF6",
                letterSpacing: 2,
                mb: 0.6,
                fontWeight: 700,
              }}
            >
              // MISSION TELEMETRY
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.68rem",
                color: "#9292A8",
                letterSpacing: 1.5,
                lineHeight: 1.6,
              }}
            >
              WARP VELOCITY: 0.04c<br />
              GRAVITATIONAL: 1.00 G<br />
              FRAME RATE: 60 FPS [LOCKED]<br />
              SECTOR: 0x7E [SOL-DINESH]
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* 5. Foreground Hero Narrative (Proportionally Balanced, 100% Readable) */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3, pointerEvents: "none" }}>
        <Box
          sx={{
            maxWidth: "920px",
            mx: "auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: "auto",
          }}
        >
          {/* Staggered Entrance 1: Role Identification */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: { xs: 2.2, sm: 2.8 },
                py: 0.85,
                borderRadius: "999px",
                backgroundColor: "rgba(10, 10, 24, 0.82)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                backdropFilter: "blur(18px)",
                mb: { xs: 2.5, sm: 3.5 },
                boxShadow: "0 0 25px rgba(56, 189, 248, 0.18)",
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#38BDF8",
                  boxShadow: "0 0 10px #38BDF8",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: { xs: "0.68rem", sm: "0.78rem" },
                  color: "#F5F5FA",
                  letterSpacing: { xs: 1.2, sm: 2 },
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Python Developer | Automation Engineer | Full-Stack Developer
              </Typography>
            </Box>
          </motion.div>

          {/* Staggered Entrance 2: Main Headline */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "clamp(2.1rem, 7vw, 2.8rem)",
                  sm: "clamp(2.8rem, 6.2vw, 4.2rem)",
                  md: "clamp(3.6rem, 5.2vw, 5rem)",
                },
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                mb: 2.5,
                userSelect: "none",
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #F5F5FA 45%, #9292A8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 28px rgba(5, 5, 16, 0.95)) drop-shadow(0 0 35px rgba(139, 92, 246, 0.3))",
              }}
            >
              EXPLORING THE{" "}
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 50%, #D946EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(56, 189, 248, 0.4))",
                }}
              >
                DIGITAL UNIVERSE.
              </Box>
            </Typography>
          </motion.div>

          {/* Staggered Entrance 3: Supporting Narrative */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.12rem", md: "1.2rem" },
                color: "#E2E8F0",
                maxWidth: "680px",
                mx: "auto",
                lineHeight: 1.7,
                fontWeight: 400,
                mb: { xs: 3.5, sm: 4.5 },
                textShadow: "0 2px 14px rgba(5, 5, 16, 0.95), 0 0 10px rgba(5, 5, 16, 0.8)",
              }}
            >
              I'm Dinesh — a developer building intelligent automation, scalable
              applications, and experiences where code meets creativity.
            </Typography>
          </motion.div>

          {/* Staggered Entrance 4: Magnetic CTA Buttons */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.65 }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2.2}
              alignItems="center"
              justifyContent="center"
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              {/* Primary CTA */}
              <MagneticButton>
                <Button
                  variant="contained"
                  onClick={() => scrollTo("about")}
                  startIcon={<ExploreOutlined />}
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    minWidth: { xs: "220px", sm: "210px" },
                    px: 3.8,
                    py: 1.5,
                    borderRadius: "14px",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "0.04em",
                    color: "#FFFFFF",
                    backgroundColor: "rgba(139, 92, 246, 0.32)",
                    border: "1px solid rgba(139, 92, 246, 0.65)",
                    boxShadow: "0 0 35px rgba(139, 92, 246, 0.5)",
                    backdropFilter: "blur(14px)",
                    "&:hover": {
                      backgroundColor: "rgba(139, 92, 246, 0.48)",
                      borderColor: "#8B5CF6",
                      boxShadow: "0 0 50px rgba(139, 92, 246, 0.75)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  EXPLORE MY UNIVERSE
                </Button>
              </MagneticButton>

              {/* Secondary CTA */}
              <MagneticButton>
                <Button
                  variant="outlined"
                  onClick={() => scrollTo("projects")}
                  endIcon={<NorthEast sx={{ fontSize: "1.05rem !important" }} />}
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    minWidth: { xs: "220px", sm: "185px" },
                    px: 3.6,
                    py: 1.5,
                    borderRadius: "14px",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "0.04em",
                    color: "#F5F5FA",
                    borderColor: "rgba(56, 189, 248, 0.42)",
                    backgroundColor: "rgba(10, 10, 24, 0.6)",
                    backdropFilter: "blur(14px)",
                    "&:hover": {
                      borderColor: "#38BDF8",
                      backgroundColor: "rgba(56, 189, 248, 0.18)",
                      boxShadow: "0 0 35px rgba(56, 189, 248, 0.4)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  VIEW MY WORK
                </Button>
              </MagneticButton>
            </Stack>
          </motion.div>

          {/* Astronomical Telemetry Grid Footnote */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 2.5, sm: 5 },
              mt: { xs: 5, sm: 7, md: 8 },
              pt: 3,
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              width: "100%",
              maxWidth: "700px",
            }}
          >
            <Box sx={{ textAlign: "center", minWidth: "140px" }}>
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#F5F5FA",
                }}
              >
                Python &amp; AsyncIO
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#9292A8",
                  letterSpacing: 1.5,
                  mt: 0.3,
                }}
              >
                CORE BACKEND ARCHITECTURE
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center", minWidth: "140px" }}>
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#F5F5FA",
                }}
              >
                Playwright &amp; n8n
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#9292A8",
                  letterSpacing: 1.5,
                  mt: 0.3,
                }}
              >
                PRODUCTION AUTOMATION
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center", minWidth: "140px" }}>
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#F5F5FA",
                }}
              >
                React 19 &amp; Next.js
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#9292A8",
                  letterSpacing: 1.5,
                  mt: 0.3,
                }}
              >
                INTERACTIVE FRONTEND
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
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: 0.8,
          cursor: "pointer",
          color: "rgba(245, 245, 250, 0.45)",
          "&:hover": { color: "#38BDF8" },
          transition: "color 0.25s ease",
          zIndex: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: 2.5,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          SCROLL TO EXPLORE
        </Typography>
        <motion.div
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownward sx={{ fontSize: "1.1rem" }} />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
