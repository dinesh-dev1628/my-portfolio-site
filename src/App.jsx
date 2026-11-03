import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Box } from "@mui/material";

import Navbar from "./components/layout/Navbar.jsx";
import Starfield from "./components/layout/Starfield.jsx";
import CosmicAmbience from "./components/layout/CosmicAmbience.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import Preloader from "./sections/Preloader.jsx";

const EASE = [0.16, 1, 0.3, 1];

// Scroll reveal component for celestial transitions
const SectionReveal = ({ children, id }) => {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      initial={
        reduce
          ? false
          : { opacity: 0, y: 60, scale: 0.98, filter: "blur(8px)" }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 1.1, ease: EASE }}
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
            backgroundColor: "#05060A",
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
                "linear-gradient(90deg, #60A5FA 0%, #8B5CF6 50%, #A78BFA 100%)",
              boxShadow: "0 0 10px rgba(96, 165, 250, 0.7)",
            }}
          />

          {/* Foreground Universe Content */}
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Navbar />

            <Hero />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 8, md: 14 },
              }}
            >
              <SectionReveal id="about">
                <About />
              </SectionReveal>

              <SectionReveal id="experience">
                <Experience />
              </SectionReveal>

              <SectionReveal id="projects">
                <Projects />
              </SectionReveal>

              <SectionReveal id="skills">
                <Skills />
              </SectionReveal>

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
