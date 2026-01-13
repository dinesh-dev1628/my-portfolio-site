import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@mui/material";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Preloader from "./sections/Preloader.jsx";

// --- The "Perfect" Reveal Component ---
const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, filter: "blur(10px)" }} // Start with a slight blur for "High-End" feel
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ 
      once: true, 
      amount: 0.2, // Triggers when 20% of the section is visible
      margin: "0px 0px -100px 0px" // "Wait" until the section is 100px into the screen
    }}
    transition={{ 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1], // Ultra-smooth "Quartz" easing
      delay: 0.1 // Small delay so it doesn't feel abrupt
    }}
  >
    {children}
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader setLoading={setLoading} key="loader" />}
      </AnimatePresence>

      {!loading && (
        <Box 
          component="main" 
          sx={{ 
            backgroundColor: "#020617", 
            minHeight: "100vh",
            overflowX: "hidden" 
          }}
        >
          <Navbar />
          
          {/* Hero triggers its own entry animation in its own file */}
          <Hero />

          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 10, md: 20 } }}>
            <ScrollReveal>
              <About />
            </ScrollReveal>

            <ScrollReveal>
              <Skills />
            </ScrollReveal>

            <ScrollReveal>
              <Projects />
            </ScrollReveal>

            <ScrollReveal>
              <Contact />
            </ScrollReveal>
          </Box>
          
        </Box>
      )}
    </>
  );
}

export default App;