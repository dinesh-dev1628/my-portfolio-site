import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ setLoading }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20); // Adjust speed here

    if (counter === 100) {
      setTimeout(() => setLoading(false), 1000); // Hold at 100% for 1s
    }

    return () => clearInterval(timer);
  }, [counter, setLoading]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#020617",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ overflow: "hidden", textAlign: "center" }}>
        {/* Name Reveal */}
        <Typography
          component={motion.h1}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 900,
            letterSpacing: -2,
            mb: 2,
          }}
        >
          Dinesh<span style={{ color: "#3b82f6" }}>.</span>
        </Typography>

        {/* Progress Bar Container */}
        <Box
          sx={{
            width: "200px",
            height: "2px",
            backgroundColor: "rgba(255,255,255,0.1)",
            position: "relative",
            mt: 2,
          }}
        >
          <Box
            component={motion.div}
            initial={{ width: 0 }}
            animate={{ width: `${counter}%` }}
            sx={{
              height: "100%",
              backgroundColor: "#3b82f6",
              boxShadow: "0 0 15px #3b82f6",
            }}
          />
        </Box>

        {/* Counter Text */}
        <Typography
          variant="caption"
          sx={{ color: "#475569", mt: 1, display: "block", letterSpacing: 4 }}
        >
          {counter}%
        </Typography>
      </Box>
    </Box>
  );
};

export default Preloader;