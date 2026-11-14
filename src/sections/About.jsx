import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Chip,
  Divider,
  Container,
} from "@mui/material";
import {
  AutoAwesome,
  Code,
  Terminal,
  Hub,
  CloudQueue,
  RocketLaunch,
  Bolt,
  Memory,
  Public,
  Verified,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import MyProfilePic from "../components/asset/IMG-20240604-WA0002.jpg";

const orbits = [
  {
    id: "core",
    number: "01",
    title: "Core Systems",
    subtitle: "The Foundation",
    icon: <Terminal />,
    color: "#8B5CF6",
    description:
      "Architecting reliable foundations with Python, robust API design, database schemas, and structured software engineering principles.",
    skills: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "SQL"],
  },
  {
    id: "automation",
    number: "02",
    title: "Automation Matrix",
    subtitle: "Engineering Workflows",
    icon: <Hub />,
    color: "#38BDF8",
    description:
      "Engineering production browser automations, worker pipelines, resilient retry loops, and webhook synchronizations that eliminate manual toil.",
    skills: ["Playwright", "Web Scraping", "n8n", "Workflow Automation", "Session Handling"],
  },
  {
    id: "fullstack",
    number: "03",
    title: "Full-Stack Galaxy",
    subtitle: "Interface to Backend",
    icon: <Code />,
    color: "#D946EF",
    description:
      "Crafting high-speed modern web applications and operational dashboards with React, Material UI, and seamless backend integrations.",
    skills: ["React", "JavaScript", "Material UI", "Framer Motion", "Vite"],
  },
  {
    id: "ai",
    number: "04",
    title: "AI Frontier",
    subtitle: "Autonomous Horizons",
    icon: <CloudQueue />,
    color: "#2DD4BF",
    description:
      "Exploring multi-step AI agent task orchestrators, LLM reasoning pipelines, containerized deployments, and cloud worker systems.",
    skills: ["AI Agents", "LLM APIs", "Docker", "Google Cloud", "FastAPI"],
  },
];

const principles = [
  {
    icon: <Bolt />,
    title: "Automation First",
    description: "Eliminating manual, repetitive friction so human intellect can focus on high-leverage innovation.",
  },
  {
    icon: <Verified />,
    title: "Production Mindset",
    description: "Designing for real users, edge cases, failure recovery, and verifiable real-world resilience.",
  },
  {
    icon: <RocketLaunch />,
    title: "Continuous Exploration",
    description: "Tenacious curiosity: testing emerging architectures, optimizing latencies, and mastering new paradigms.",
  },
];

const technologies = [
  "Python",
  "React",
  "FastAPI",
  "Playwright",
  "PostgreSQL",
  "Docker",
  "Google Cloud",
  "AI & LLMs",
  "Material UI",
  "Framer Motion",
  "Supabase",
  "Git & GitHub",
];

// Faint background twinkling stars
const ambientStars = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 39 + 7) % 96}%`,
  top: `${(i * 47 + 11) % 94}%`,
  delay: (i % 6) * 0.4,
  size: i % 4 === 0 ? 2.5 : 1.5,
}));

export default function About() {
  const [activeOrbit, setActiveOrbit] = useState("core");
  const reduceMotion = useReducedMotion();

  const active = orbits.find((orbit) => orbit.id === activeOrbit) || orbits[0];

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        py: { xs: 12, md: 18 },
        // Seamless transition with adjacent sections: no abrupt cutoffs
        background:
          "linear-gradient(180deg, transparent 0%, rgba(5, 5, 16, 0.75) 12%, rgba(7, 7, 22, 0.9) 50%, rgba(5, 5, 16, 0.75) 88%, transparent 100%)",
      }}
    >
      {/* AMBIENT COSMIC NEBULA GLOWS & STARFIELD */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Soft violet nebula top-left */}
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            left: "-10%",
            width: { xs: "320px", md: "600px" },
            height: { xs: "320px", md: "600px" },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.02) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Soft cyan nebula bottom-right */}
        <Box
          sx={{
            position: "absolute",
            bottom: "8%",
            right: "-10%",
            width: { xs: "340px", md: "650px" },
            height: { xs: "340px", md: "650px" },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.10) 0%, rgba(56, 189, 248, 0.02) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Faint twinkling stars */}
        {ambientStars.map((star) => (
          <motion.div
            key={star.id}
            style={{
              position: "absolute",
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              background: "#FFFFFF",
              boxShadow: "0 0 8px rgba(255,255,255,0.6)",
            }}
            animate={
              reduceMotion
                ? {}
                : { opacity: [0.15, 0.85, 0.2], scale: [0.9, 1.25, 0.9] }
            }
            transition={{
              duration: 3 + (star.id % 4),
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* SECTION HEADER (Consistent with other sections) */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
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
                01 // ORIGIN CORE & FOUNDATION
              </Typography>
            </Stack>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "clamp(2rem, 5vw, 3.8rem)" },
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#F5F5FA",
                maxWidth: "850px",
              }}
            >
              DISCOVERING THE{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #A78BFA, #38BDF8, #D946EF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DIGITAL UNIVERSE.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#CBD5E1", // WCAG AA compliant text contrast
                fontSize: { xs: "0.98rem", sm: "1.1rem" },
                mt: 1.8,
                maxWidth: "680px",
                lineHeight: 1.7,
              }}
            >
              Exploring the convergence of intelligent Python automation, robust data
              architectures, and high-performance digital systems.
            </Typography>
          </motion.div>
        </Box>

        {/* MAIN TWO-COLUMN CONTENT */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.9fr 1.1fr",
            },
            gap: { xs: 7, md: 6, lg: 9 },
            alignItems: "start",
          }}
        >
          {/* LEFT: PROFILE PORTRAIT + BIOGRAPHY + CORE VALUES */}
          <Stack spacing={{ xs: 4, md: 5 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* Profile Portrait Card with Orbital Rings */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 240, sm: 280, md: 290 },
                    height: { xs: 280, sm: 330, md: 345 },
                  }}
                >
                  {/* Subtle Planetary Ambient Glow */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: "10%",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(139,92,246,0.35), rgba(56,189,248,0.3), rgba(217,70,239,0.25))",
                      filter: "blur(45px)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Outer Orbit Ring */}
                  <motion.div
                    animate={reduceMotion ? {} : { rotate: 360 }}
                    transition={{
                      duration: 32,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      inset: "-12px",
                      border: "1px solid rgba(139,92,246,0.35)",
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "14%",
                        left: "14%",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#38BDF8",
                        boxShadow: "0 0 12px #38BDF8",
                      }}
                    />
                  </motion.div>

                  {/* Inner Dashed Orbit Ring */}
                  <motion.div
                    animate={reduceMotion ? {} : { rotate: -360 }}
                    transition={{
                      duration: 42,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      inset: "-24px",
                      border: "1px dashed rgba(56,189,248,0.2)",
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        right: "15%",
                        bottom: "18%",
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#D946EF",
                        boxShadow: "0 0 10px #D946EF",
                      }}
                    />
                  </motion.div>

                  {/* Profile Photo Wrapper */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      padding: "3px",
                      borderRadius: "28px",
                      background:
                        "linear-gradient(145deg, rgba(167,139,250,0.6), rgba(56,189,248,0.4), rgba(217,70,239,0.5))",
                      boxShadow:
                        "0 20px 50px -10px rgba(0,0,0,0.7), 0 0 30px rgba(139,92,246,0.2)",
                    }}
                  >
                    <Box
                      component="img"
                      src={MyProfilePic}
                      alt="Portrait of Dinesh"
                      loading="lazy"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 28%",
                        display: "block",
                        borderRadius: "26px",
                        background: "#0A0B1A",
                      }}
                    />
                  </Box>

                  {/* Status Pill */}
                  <Chip
                    icon={<AutoAwesome sx={{ fontSize: 13, color: "#38BDF8 !important" }} />}
                    label="EXPLORER // SYSTEMS ONLINE"
                    sx={{
                      position: "absolute",
                      bottom: -14,
                      left: "50%",
                      transform: "translateX(-50%)",
                      whiteSpace: "nowrap",
                      height: 28,
                      color: "#F8FAFC",
                      background: "rgba(10, 12, 28, 0.9)",
                      border: "1px solid rgba(56, 189, 248, 0.4)",
                      backdropFilter: "blur(14px)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: 1.2,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
                    }}
                  />
                </Box>
              </Box>

              {/* Identity & Bio */}
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  sx={{
                    fontFamily: "'Geist Mono', monospace",
                    color: "#8B5CF6",
                    fontSize: "0.75rem",
                    letterSpacing: 2.5,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    mb: 1,
                  }}
                >
                  ENGINEER PROFILE
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: { xs: "2.4rem", sm: "3rem", md: "3.2rem" },
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    color: "#F5F5FA",
                  }}
                >
                  Dinesh
                  <Box component="span" sx={{ color: "#38BDF8" }}>
                    .
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    mt: 1.2,
                    color: "#38BDF8",
                    fontFamily: "'Geist Mono', monospace",
                    fontWeight: 600,
                    letterSpacing: 1.5,
                    fontSize: { xs: "0.78rem", sm: "0.85rem" },
                  }}
                >
                  PYTHON DEVELOPER & AUTOMATION SPECIALIST
                </Typography>

                <Typography
                  sx={{
                    mt: 2.5,
                    color: "#CBD5E1", // WCAG AA text contrast
                    fontSize: { xs: "0.94rem", sm: "1.02rem" },
                    lineHeight: 1.85,
                    maxWidth: 500,
                    mx: { xs: "auto", md: 0 },
                  }}
                >
                  I specialize in turning complex operational bottlenecks into autonomous,
                  production-grade software solutions. My engineering focus combines Python
                  backend services, browser orchestrations, database architectures, and
                  modern web interfaces designed for tangible reliability.
                </Typography>
              </Box>
            </motion.div>

            {/* Core Engineering Principles */}
            <Stack spacing={2}>
              {principles.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={reduceMotion ? {} : { x: 5 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2.2,
                      p: 2.2,
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "18px",
                      backgroundColor: "rgba(16, 16, 38, 0.6)",
                      backdropFilter: "blur(16px)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderColor: "rgba(139, 92, 246, 0.45)",
                        backgroundColor: "rgba(22, 22, 50, 0.75)",
                        boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.25)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 44,
                        width: 44,
                        height: 44,
                        display: "grid",
                        placeItems: "center",
                        color: "#C4B5FD",
                        borderRadius: "12px",
                        background: "rgba(139, 92, 246, 0.14)",
                        border: "1px solid rgba(139, 92, 246, 0.3)",
                        "& svg": { fontSize: 22 },
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.98rem",
                          fontWeight: 700,
                          color: "#F8FAFC",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#CBD5E1", // WCAG AA text contrast
                          mt: 0.3,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Stack>

          {/* RIGHT: INTERACTIVE DEVELOPMENT GALAXY & TECH CONSTELLATION */}
          <Stack spacing={3.5}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* Development Galaxy Subheading */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                  gap: 2,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#38BDF8",
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: 2,
                      fontWeight: 700,
                    }}
                  >
                    ORBITAL SYSTEMS
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: { xs: "1.5rem", sm: "1.8rem" },
                      fontWeight: 800,
                      color: "#F5F5FA",
                      mt: 0.5,
                    }}
                  >
                    Development Galaxy
                  </Typography>
                </Box>

                <Chip
                  label="04 ORBITAL NODES"
                  size="small"
                  sx={{
                    color: "#38BDF8",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    background: "rgba(56, 189, 248, 0.08)",
                    fontSize: "0.68rem",
                    letterSpacing: 1.2,
                  }}
                />
              </Box>

              {/* Interactive Planet Solar Visualizer */}
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: { xs: 300, sm: 340, md: 360 },
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 60%), rgba(16, 16, 38, 0.65)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.8)",
                }}
              >
                {/* Orbit Guideline Rings */}
                {[120, 190, 260].map((size) => (
                  <Box
                    key={size}
                    sx={{
                      position: "absolute",
                      width: size,
                      height: size,
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  />
                ))}

                {/* Central Star Singularity */}
                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          scale: [1, 1.08, 1],
                          rotate: [0, 6, -6, 0],
                        }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    background:
                      "radial-gradient(circle at 35% 30%, #DDD6FE, #8B5CF6 60%, #312E81)",
                    boxShadow:
                      "0 0 35px rgba(139,92,246,0.6), 0 0 80px rgba(139,92,246,0.25)",
                    zIndex: 2,
                  }}
                >
                  <Public sx={{ fontSize: 32, color: "#FFFFFF" }} />
                </motion.div>

                {/* Interactive Orbiting Planet Buttons */}
                {orbits.map((orbit, index) => {
                  const positions = [
                    { top: "14%", left: "50%" },
                    { top: "50%", left: "84%" },
                    { top: "86%", left: "50%" },
                    { top: "50%", left: "16%" },
                  ];

                  const selected = activeOrbit === orbit.id;

                  return (
                    <motion.button
                      key={orbit.id}
                      type="button"
                      aria-label={`Explore ${orbit.title}`}
                      aria-pressed={selected}
                      onClick={() => setActiveOrbit(orbit.id)}
                      whileHover={reduceMotion ? {} : { scale: 1.15 }}
                      whileTap={{ scale: 0.94 }}
                      animate={reduceMotion ? {} : { y: [0, -6, 0] }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        position: "absolute",
                        ...positions[index],
                        transform: "translate(-50%, -50%)",
                        width: selected ? 64 : 52,
                        height: selected ? 64 : 52,
                        borderRadius: "50%",
                        border: `2px solid ${selected ? orbit.color : "rgba(255, 255, 255, 0.15)"}`,
                        background: selected
                          ? `${orbit.color}35`
                          : "rgba(10, 12, 28, 0.95)",
                        color: orbit.color,
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                        zIndex: 4,
                        boxShadow: selected
                          ? `0 0 28px ${orbit.color}70`
                          : `0 0 14px ${orbit.color}20`,
                        outline: "none",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {React.cloneElement(orbit.icon, {
                        sx: { fontSize: selected ? 28 : 22 },
                      })}
                    </motion.button>
                  );
                })}

                {/* Telemetry Interaction Label */}
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: 12,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    color: "#94A3B8",
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: 2,
                    fontWeight: 600,
                  }}
                >
                  SELECT ORBITAL NODE TO INSPECT
                </Typography>
              </Box>
            </motion.div>

            {/* Selected Orbit Card Dossier */}
            <motion.div
              key={active.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  p: { xs: 2.8, sm: 3.5 },
                  borderRadius: "22px",
                  border: `1px solid ${active.color}55`,
                  backgroundColor: "rgba(16, 16, 38, 0.72)",
                  backdropFilter: "blur(20px)",
                  boxShadow: `0 15px 45px -10px ${active.color}25`,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  gap={2}
                >
                  <Stack direction="row" spacing={1.8} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        display: "grid",
                        placeItems: "center",
                        color: active.color,
                        background: `${active.color}18`,
                        border: `1px solid ${active.color}45`,
                        "& svg": { fontSize: 24 },
                      }}
                    >
                      {active.icon}
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: active.color,
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.72rem",
                          letterSpacing: 2,
                          fontWeight: 700,
                        }}
                      >
                        PLANET {active.number} // {active.subtitle.toUpperCase()}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: { xs: "1.25rem", sm: "1.45rem" },
                          fontWeight: 800,
                          color: "#F5F5FA",
                        }}
                      >
                        {active.title}
                      </Typography>
                    </Box>
                  </Stack>

                  <AutoAwesome
                    sx={{ color: active.color, opacity: 0.85, fontSize: 22 }}
                  />
                </Stack>

                <Typography
                  sx={{
                    mt: 2,
                    color: "#CBD5E1", // WCAG AA text contrast
                    fontSize: "0.92rem",
                    lineHeight: 1.8,
                  }}
                >
                  {active.description}
                </Typography>

                <Divider
                  sx={{
                    my: 2.5,
                    borderColor: "rgba(255, 255, 255, 0.08)",
                  }}
                />

                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: 2,
                    mb: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  PRIMARY ARSENAL IN THIS ORBIT:
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {active.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        color: "#F8FAFC",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        height: 28,
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </motion.div>

            {/* Complete Tech Constellation */}
            <Box
              sx={{
                p: { xs: 2.5, sm: 3 },
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backgroundColor: "rgba(16, 16, 38, 0.6)",
                backdropFilter: "blur(16px)",
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.2} mb={2}>
                <Memory sx={{ color: "#38BDF8", fontSize: 20 }} />
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#F8FAFC",
                  }}
                >
                  Technology Constellation
                </Typography>
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {technologies.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={reduceMotion ? {} : { y: -3, scale: 1.05 }}
                  >
                    <Chip
                      label={tech}
                      size="small"
                      sx={{
                        color: "#CBD5E1",
                        background: "rgba(139, 92, 246, 0.08)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                        fontSize: "0.75rem",
                        height: 28,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          color: "#FFFFFF",
                          borderColor: "#8B5CF6",
                          background: "rgba(139, 92, 246, 0.25)",
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>

        {/* BOTTOM CELESTIAL STATEMENT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: 800,
            mx: "auto",
            mt: { xs: 10, md: 14 },
            textAlign: "center",
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                color: "#8B5CF6",
                fontSize: "0.78rem",
                letterSpacing: 2.5,
                mb: 1.5,
                fontWeight: 700,
              }}
            >
              MISSION HORIZON
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                color: "#F5F5FA",
              }}
            >
              Building beyond{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #A78BFA, #38BDF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                imagination.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                color: "#94A3B8",
                fontSize: "0.95rem",
              }}
            >
              One architecture. One automation. One universe at a time.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
