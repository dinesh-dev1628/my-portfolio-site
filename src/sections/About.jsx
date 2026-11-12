
import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Chip,
  Button,
  Divider,
} from "@mui/material";

import {
  AutoAwesome,
  Code,
  Terminal,
  Hub,
  CloudQueue,
  RocketLaunch,
  ArrowOutward,
  Bolt,
  Memory,
  Layers,
  Public,
  Verified,
} from "@mui/icons-material";

import { motion, useReducedMotion } from "framer-motion";

import MyProfilePic from "../components/asset/IMG-20240604-WA0002.jpg";

const MotionBox = motion(Box);

const orbits = [
  {
    id: "core",
    number: "01",
    title: "Core Systems",
    subtitle: "The foundation",
    icon: <Terminal />,
    color: "#8B5CF6",
    description:
      "Building reliable foundations with Python, backend development, APIs, databases, and clean engineering practices.",
    skills: ["Python", "FastAPI", "PostgreSQL", "REST APIs"],
  },
  {
    id: "automation",
    number: "02",
    title: "Automation Matrix",
    subtitle: "Engineering workflows",
    icon: <Hub />,
    color: "#38BDF8",
    description:
      "Designing production automation that connects systems, eliminates repetitive work, and makes complex workflows easier to manage.",
    skills: ["Playwright", "n8n", "Web Automation", "Workflow Design"],
  },
  {
    id: "fullstack",
    number: "03",
    title: "Full-Stack Galaxy",
    subtitle: "From interface to backend",
    icon: <Code />,
    color: "#D946EF",
    description:
      "Creating modern interfaces and connecting them with powerful backend services to build complete, practical applications.",
    skills: ["React", "Next.js", "FastAPI", "Material UI"],
  },
  {
    id: "ai",
    number: "04",
    title: "AI Frontier",
    subtitle: "Exploring what's next",
    icon: <CloudQueue />,
    color: "#2DD4BF",
    description:
      "Exploring AI-powered applications, intelligent agents, cloud infrastructure, and systems that make software more capable.",
    skills: ["AI Integration", "LLMs", "Docker", "Google Cloud"],
  },
];

const principles = [
  {
    icon: <Bolt />,
    title: "Automation First",
    description: "Less repetitive work. More meaningful output.",
  },
  {
    icon: <Verified />,
    title: "Production Mindset",
    description: "Building for real users and real-world reliability.",
  },
  {
    icon: <RocketLaunch />,
    title: "Always Exploring",
    description: "Learning, experimenting, and improving every day.",
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
];

const stars = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  delay: (i % 8) * 0.35,
  size: i % 5 === 0 ? 3 : 2,
}));

export default function About() {
  const [activeOrbit, setActiveOrbit] = useState("core");
  // const theme = useTheme();
  const reduceMotion = useReducedMotion();

  const active = orbits.find((orbit) => orbit.id === activeOrbit);

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease: "easeOut" },
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
        py: { xs: 9, sm: 11, md: 15 },
        px: { xs: 2, sm: 4, md: 6, lg: 9 },
        background:
          "radial-gradient(ellipse at 15% 15%, rgba(139,92,246,0.13), transparent 38%), radial-gradient(ellipse at 85% 70%, rgba(56,189,248,0.09), transparent 35%), #050510",
        color: "#F8FAFC",
      }}
    >
      {/* BACKGROUND COSMIC EFFECTS */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {stars.map((star) => (
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
              boxShadow: "0 0 10px rgba(255,255,255,0.7)",
            }}
            animate={
              reduceMotion
                ? {}
                : { opacity: [0.2, 0.9, 0.25], scale: [0.8, 1.35, 0.8] }
            }
            transition={{
              duration: 3 + (star.id % 4),
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <Box
          sx={{
            position: "absolute",
            width: { xs: 260, md: 450 },
            height: { xs: 260, md: 450 },
            borderRadius: "50%",
            border: "1px solid rgba(139,92,246,0.10)",
            top: "8%",
            right: "-12%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 320, md: 620 },
            height: { xs: 320, md: 620 },
            borderRadius: "50%",
            border: "1px solid rgba(56,189,248,0.07)",
            bottom: "-20%",
            left: "-18%",
          }}
        />
      </Box>

      {/* SECTION HEADER */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1250,
          mx: "auto",
          mb: { xs: 6, md: 9 },
          textAlign: "center",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Chip
            icon={<AutoAwesome sx={{ fontSize: 16 }} />}
            label="BEYOND THE CODE"
            sx={{
              mb: 2.5,
              px: 1,
              height: 34,
              color: "#C4B5FD",
              border: "1px solid rgba(139,92,246,0.35)",
              background: "rgba(139,92,246,0.10)",
              letterSpacing: 2,
              fontSize: 10,
              fontWeight: 800,
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: "2.7rem", sm: "3.8rem", md: "5rem" },
              fontWeight: 900,
              letterSpacing: { xs: -2, md: -3.5 },
              lineHeight: 1.05,
            }}
          >
            My{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(100deg, #A78BFA 5%, #38BDF8 55%, #D946EF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Universe
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              mx: "auto",
              maxWidth: 580,
              color: "#94A3B8",
              fontSize: { xs: 13, sm: 15 },
              lineHeight: 1.8,
            }}
          >
            A little about the developer behind the systems, automation,
            and ideas I bring to life.
          </Typography>
        </motion.div>
      </Box>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1250,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "0.85fr 1.15fr",
          },
          gap: { xs: 8, md: 7, lg: 11 },
          alignItems: "center",
        }}
      >
        {/* LEFT: PROFILE + INTRO */}
        <Stack spacing={{ xs: 4, md: 4.5 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* PROFILE IMAGE */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 245, sm: 290, md: 300, lg: 330 },
                  height: { xs: 290, sm: 340, md: 355, lg: 390 },
                }}
              >
                {/* IMAGE GLOW */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: "12%",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #8B5CF6, #38BDF8, #D946EF)",
                    filter: "blur(55px)",
                    opacity: 0.36,
                  }}
                />

                {/* ORBIT RINGS */}
                <motion.div
                  animate={reduceMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    inset: "-13px",
                    border: "1px solid rgba(139,92,246,0.65)",
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "12%",
                      left: "12%",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#38BDF8",
                      boxShadow: "0 0 20px #38BDF8",
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={reduceMotion ? {} : { rotate: -360 }}
                  transition={{
                    duration: 38,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  sx={{}}
                  style={{
                    position: "absolute",
                    inset: "-27px",
                    border: "1px dashed rgba(56,189,248,0.3)",
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      right: "13%",
                      bottom: "15%",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#D946EF",
                      boxShadow: "0 0 16px #D946EF",
                    }}
                  />
                </motion.div>

                {/* PROFILE PHOTO */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    padding: "3px",
                    borderRadius: "48% 48% 38% 38%",
                    background:
                      "linear-gradient(145deg, #A78BFA, #38BDF8, #D946EF)",
                    boxShadow:
                      "0 0 45px rgba(139,92,246,0.25), 0 25px 80px rgba(0,0,0,0.45)",
                  }}
                >
                  <Box
                    component="img"
                    src={MyProfilePic}
                    alt="Portrait of Dinesh"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 30%",
                      display: "block",
                      borderRadius: "48% 48% 38% 38%",
                      background: "#101020",
                    }}
                  />
                </Box>

                {/* IMAGE LABEL */}
                <Chip
                  icon={<AutoAwesome sx={{ fontSize: 14 }} />}
                  label="EXPLORER / ONLINE"
                  sx={{
                    position: "absolute",
                    bottom: 13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    whiteSpace: "nowrap",
                    height: 29,
                    color: "#E9D5FF",
                    background: "rgba(9,9,25,0.88)",
                    border: "1px solid rgba(167,139,250,0.55)",
                    backdropFilter: "blur(12px)",
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: 1.4,
                  }}
                />
              </Box>
            </Box>

            {/* IDENTITY */}
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                sx={{
                  color: "#A78BFA",
                  fontSize: 11,
                  letterSpacing: 3,
                  fontWeight: 800,
                  mb: 1,
                }}
              >
                THE HUMAN BEHIND THE SYSTEMS
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 34, sm: 42, md: 45, lg: 51 },
                  fontWeight: 900,
                  letterSpacing: -2,
                  lineHeight: 1.1,
                }}
              >
                Dinesh
                <Box component="span" sx={{ color: "#38BDF8" }}>
                  .
                </Box>
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: "#CBD5E1",
                  fontWeight: 700,
                  letterSpacing: { xs: 1, sm: 1.7 },
                  fontSize: { xs: 10, sm: 12 },
                }}
              >
                PYTHON DEVELOPER
                <Box component="span" sx={{ color: "#8B5CF6", mx: 1 }}>
                  /
                </Box>
                AUTOMATION ENGINEER
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  color: "#94A3B8",
                  fontSize: { xs: 13, sm: 14 },
                  lineHeight: 1.9,
                  maxWidth: 490,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                I enjoy turning complex problems into practical software.
                My work revolves around Python, production automation,
                APIs, and full-stack development. I build systems that
                solve real problems — not just look good in a demo.
              </Typography>
            </Box>
          </motion.div>

          {/* PRINCIPLES */}
          <Stack spacing={2}>
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={reduceMotion ? {} : { x: 7 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    border: "1px solid rgba(148,163,184,0.12)",
                    borderRadius: 3,
                    background: "rgba(15,18,38,0.62)",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(139,92,246,0.5)",
                      background: "rgba(139,92,246,0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      minWidth: 43,
                      width: 43,
                      height: 43,
                      display: "grid",
                      placeItems: "center",
                      color: "#C4B5FD",
                      borderRadius: 2.5,
                      background: "rgba(139,92,246,0.14)",
                      "& svg": { fontSize: 21 },
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      sx={{ fontSize: 13, fontWeight: 800, color: "#F8FAFC" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 11, color: "#94A3B8", mt: 0.4 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Stack>

        {/* RIGHT: INTERACTIVE PLANETARY JOURNEY */}
        <Stack spacing={3}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
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
                    color: "#A78BFA",
                    fontSize: 10,
                    letterSpacing: 2.5,
                    fontWeight: 800,
                  }}
                >
                  EXPLORE MY JOURNEY
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 23, sm: 27 },
                    fontWeight: 850,
                    mt: 0.7,
                  }}
                >
                  Development Galaxy
                </Typography>
              </Box>

              <Chip
                label="04 SYSTEMS"
                size="small"
                sx={{
                  color: "#94A3B8",
                  border: "1px solid rgba(148,163,184,0.2)",
                  background: "rgba(148,163,184,0.06)",
                  fontSize: 9,
                  letterSpacing: 1,
                }}
              />
            </Box>

            {/* PLANET SELECTOR */}
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                minHeight: { xs: 310, sm: 360, md: 400 },
                borderRadius: { xs: 4, md: 5 },
                border: "1px solid rgba(148,163,184,0.15)",
                background:
                  "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15), transparent 40%), linear-gradient(145deg, rgba(16,18,42,0.95), rgba(7,9,22,0.98))",
              }}
            >
              {/* ORBIT PATHS */}
              {[135, 205, 275].map((size) => (
                <Box
                  key={size}
                  sx={{
                    position: "absolute",
                    width: size,
                    height: size,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid rgba(148,163,184,0.12)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />
              ))}

              {/* CENTRAL STAR */}
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        scale: [1, 1.13, 1],
                        rotate: [0, 8, -8, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 78,
                  height: 78,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  background:
                    "radial-gradient(circle at 35% 30%, #DDD6FE, #8B5CF6 55%, #312E81)",
                  boxShadow:
                    "0 0 35px rgba(139,92,246,0.7), 0 0 90px rgba(139,92,246,0.25)",
                  zIndex: 2,
                }}
              >
                <Public sx={{ fontSize: 34, color: "#FFFFFF" }} />
              </motion.div>

              {/* PLANETS */}
              {orbits.map((orbit, index) => {
                const positions = [
                  { top: "13%", left: "50%" },
                  { top: "50%", left: "84%" },
                  { top: "85%", left: "50%" },
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
                    animate={
                      reduceMotion
                        ? {}
                        : { y: [0, -7, 0] }
                    }
                    transition={{
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      ...positions[index],
                      transform: "translate(-50%, -50%)",
                      width: selected ? 65 : 54,
                      height: selected ? 65 : 54,
                      borderRadius: "50%",
                      border: `1px solid ${orbit.color}`,
                      background: selected
                        ? `${orbit.color}35`
                        : "rgba(12,15,34,0.95)",
                      color: orbit.color,
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                      zIndex: 4,
                      boxShadow: selected
                        ? `0 0 28px ${orbit.color}70`
                        : `0 0 14px ${orbit.color}25`,
                      outline: "none",
                    }}
                  >
                    {React.cloneElement(orbit.icon, {
                      sx: { fontSize: selected ? 28 : 23 },
                    })}
                  </motion.button>
                );
              })}

              {/* ORBIT LABEL */}
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 13,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  color: "#64748B",
                  fontSize: 9,
                  letterSpacing: 2,
                  fontWeight: 700,
                }}
              >
                SELECT A PLANET TO EXPLORE
              </Typography>
            </Box>
          </motion.div>

          {/* SELECTED PLANET DETAILS */}
          <motion.div
            key={active.id}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Box
              sx={{
                p: { xs: 2.5, sm: 3.2 },
                borderRadius: 4,
                border: `1px solid ${active.color}45`,
                background:
                  "linear-gradient(145deg, rgba(19,22,45,0.95), rgba(9,11,25,0.95))",
                boxShadow: `0 15px 50px ${active.color}12`,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                gap={2}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      width: 43,
                      height: 43,
                      borderRadius: 2.5,
                      display: "grid",
                      placeItems: "center",
                      color: active.color,
                      background: `${active.color}18`,
                      border: `1px solid ${active.color}45`,
                      "& svg": { fontSize: 23 },
                    }}
                  >
                    {active.icon}
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: active.color,
                        fontSize: 9,
                        letterSpacing: 2,
                        fontWeight: 800,
                      }}
                    >
                      PLANET {active.number}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 17, sm: 20 },
                        fontWeight: 850,
                      }}
                    >
                      {active.title}
                    </Typography>
                  </Box>
                </Stack>

                <AutoAwesome
                  sx={{ color: active.color, opacity: 0.8, fontSize: 23 }}
                />
              </Stack>

              <Typography
                sx={{
                  mt: 2,
                  color: "#94A3B8",
                  fontSize: 13,
                  lineHeight: 1.9,
                }}
              >
                {active.description}
              </Typography>

              <Divider
                sx={{
                  my: 2.5,
                  borderColor: "rgba(148,163,184,0.13)",
                }}
              />

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 2,
                  mb: 1.5,
                }}
              >
                TECHNOLOGIES IN THIS ORBIT
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {active.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      color: "#CBD5E1",
                      background: "rgba(148,163,184,0.08)",
                      border: "1px solid rgba(148,163,184,0.15)",
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </motion.div>

          {/* TECHNOLOGY CONSTELLATION */}
          <Box
            sx={{
              p: { xs: 2.5, sm: 3 },
              borderRadius: 4,
              border: "1px solid rgba(148,163,184,0.13)",
              background: "rgba(12,15,32,0.7)",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.2} mb={2.5}>
              <Memory sx={{ color: "#38BDF8", fontSize: 20 }} />
              <Typography sx={{ fontSize: 13, fontWeight: 800 }}>
                Technology Constellation
              </Typography>
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {technologies.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={reduceMotion ? {} : { y: -4, scale: 1.04 }}
                >
                  <Chip
                    label={tech}
                    size="small"
                    sx={{
                      color: "#CBD5E1",
                      background: "rgba(139,92,246,0.08)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      fontSize: 10,
                      "&:hover": {
                        color: "#FFFFFF",
                        borderColor: "#8B5CF6",
                        background: "rgba(139,92,246,0.2)",
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* BOTTOM CLOSING STATEMENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          mx: "auto",
          mt: { xs: 9, md: 13 },
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
              color: "#94A3B8",
              fontSize: { xs: 12, sm: 14 },
              letterSpacing: 1,
              mb: 2,
            }}
          >
            MY NEXT CHAPTER IS STILL UNWRITTEN
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 25, sm: 34, md: 43 },
              fontWeight: 900,
              letterSpacing: -1.5,
              lineHeight: 1.2,
            }}
          >
            Building beyond{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #A78BFA, #38BDF8)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              imagination.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#64748B",
              fontSize: 12,
            }}
          >
            One idea. One system. One universe at a time.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
