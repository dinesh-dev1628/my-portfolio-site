import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            bottom: 28,
            right: 28,
            zIndex: 1200,
          }}
        >
          <Tooltip title="Ascend to Orbit (Top)" placement="left" arrow>
            <IconButton
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "rgba(16, 16, 38, 0.75)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                backdropFilter: "blur(16px)",
                color: "#38BDF8",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(56, 189, 248, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  borderColor: "#38BDF8",
                  color: "#FFFFFF",
                  transform: "translateY(-4px)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(56, 189, 248, 0.4)",
                },
                "&:focus-visible": {
                  outline: "2px solid #38BDF8",
                  outlineOffset: "3px",
                },
              }}
            >
              <KeyboardArrowUp sx={{ fontSize: 28 }} />
            </IconButton>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
