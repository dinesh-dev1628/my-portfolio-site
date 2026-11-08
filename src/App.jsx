import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Box, Typography } from "@mui/material";

import Navbar from "./components/layout/Navbar.jsx";
import Starfield from "./components/layout/Starfield.jsx";
import CosmicAmbience from "./components/layout/CosmicAmbience.jsx";
import SectorTracker from "./components/layout/SectorTracker.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import Preloader from "./sections/Preloader.jsx";

const EASE = [0.16, 1, 0.3, 1];

// Celestial orbital transition divider
const OrbitalDivider = ({ label }) => (
  <Box
    aria-hidden="true"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      py: { xs: 2, md: 4 },
      opacity: 0.45,
      userSelect: "none",
    }}
  >
    <Box
      sx={{
        width: { xs: 40, sm: 80, md: 140 },
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.4))",
      }}
    />
    <Typography
      sx={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: "0.65rem",
        color: "#9292A8",
        letterSpacing: 2,
        textTransform: "uppercase",
      }}
    >
      {label}
    </Typography>
    <Box
      sx={{
        width: { xs: 40, sm: 80, md: 140 },
        height: 1,
        background: "linear-gradient(90deg, rgba(56, 189, 248, 0.4), transparent)",
      }}
    />
  </Box>
);

// Scroll reveal component for celestial transitions
const SectionReveal = ({ children, id }) => {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      initial={
        reduce
          ? false
          : { opacity: 0, y: 45, scale: 0.99, filter: "blur(6px)" }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.85, ease: EASE }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // Top scroll progress "orbital telemetry line"
  const { scrollYProgress } = useScroll();
  const progressSpring = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader setLoading={setLoading} key="cosmic-preloader" />}
      </AnimatePresence>

      {!loading && (
        <Box
          component="main"
          sx={{
            position: "relative",
            minHeight: "100vh",
            backgroundColor: "#050510",
            overflowX: "hidden",
          }}
        >
          {/* Deep Space Atmosphere Layers */}
          <CosmicAmbience />
          <Starfield />

          {/* Top Orbital Scroll Progress Bar */}
          <motion.div
            aria-hidden="true"
            style={{
              scaleX: progressSpring,
              transformOrigin: "0% 50%",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: 2.5,
              zIndex: 1400,
              background:
                "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 50%, #D946EF 100%)",
              boxShadow: "0 0 12px rgba(56, 189, 248, 0.7)",
            }}
          />

          {/* Floating Orbital Sector Waypoint HUD (Desktop) */}
          <SectorTracker />

          {/* Foreground Universe Content */}
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Navbar />

            <Hero />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 6, md: 10 },
              }}
            >
              <OrbitalDivider label="ORBITAL THRESHOLD // ORIGIN SECTOR" />
              <SectionReveal id="about">
                <About />
              </SectionReveal>

              <OrbitalDivider label="ORBITAL THRESHOLD // TECHNOLOGICAL GALAXY" />
              <SectionReveal id="skills">
                <Skills />
              </SectionReveal>

              <OrbitalDivider label="ORBITAL THRESHOLD // EXPEDITION ARCHIVES" />
              <SectionReveal id="projects">
                <Projects />
              </SectionReveal>

              <OrbitalDivider label="ORBITAL THRESHOLD // CHRONOLOGICAL TRAJECTORY" />
              <SectionReveal id="experience">
                <Experience />
              </SectionReveal>

              <OrbitalDivider label="ORBITAL THRESHOLD // DIRECT FREQUENCY" />
              <SectionReveal id="contact">
                <Contact />
              </SectionReveal>
            </Box>

            <Footer />
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;
