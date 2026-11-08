import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

const Preloader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.max(1, Math.floor(Math.random() * 8) + 1);
        return Math.min(100, prev + increment);
      });
    }, 28);

    return () => clearInterval(interval);
  }, [reduce, setLoading]);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress, setLoading]);

  const phaseText =
    progress > 80
      ? "SYSTEMS SYNCHRONIZED // ENTERING UNIVERSE"
      : progress > 50
      ? "ORCHESTRATING PLANETARY ENGINES"
      : progress > 25
      ? "WARPING CELESTIAL COORDINATES"
      : "CALIBRATING STELLAR SENSORS";

  const circumference = 2 * Math.PI * 44;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        filter: "blur(10px)",
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      }}
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#050510",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        cursor: progress >= 100 ? "default" : "wait",
        pointerEvents: progress >= 100 ? "none" : "auto",
      }}
    >
      {/* Background ambient pulse */}
      <Box
        sx={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(56, 189, 248, 0.08) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Central telemetry circle */}
      <Box sx={{ position: "relative", width: 140, height: 140, mb: 4 }}>
        <svg width="140" height="140" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
          {/* Track */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="rgba(255, 255, 255, 0.06)"
            strokeWidth="1.5"
          />
          {/* Active progress */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="url(#preloaderGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 0.08s ease" }}
          />
          {/* Concentric subtle outer dash */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="0.8"
            strokeDasharray="4 8"
          />
          <defs>
            <linearGradient id="preloaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Counter in center */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.85rem",
              fontWeight: 800,
              color: "#F5F5FA",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {progress.toString().padStart(2, "0")}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.62rem",
              color: "#9292A8",
              letterSpacing: 2,
              mt: 0.5,
            }}
          >
            PCT
          </Typography>
        </Box>
      </Box>

      {/* Brand & telemetry status */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 800,
            letterSpacing: 4,
            color: "#F5F5FA",
            mb: 0.8,
            textTransform: "uppercase",
          }}
        >
          DINESH <span style={{ color: "#38BDF8" }}>//</span> DIGITAL UNIVERSE
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.68rem",
            color: "#9292A8",
            letterSpacing: 2.5,
            textTransform: "uppercase",
          }}
        >
          {phaseText}
        </Typography>
      </Box>

      {/* Orbital coordinate marker */}
      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          display: "flex",
          alignItems: "center",
          gap: 2,
          fontFamily: "'Geist Mono', monospace",
          fontSize: "0.65rem",
          color: "#676780",
          letterSpacing: 2,
        }}
      >
        <span>COORD: 13.0827° N, 80.2707° E</span>
        <span>•</span>
        <span>SECTOR 0x7E // ONLINE</span>
      </Box>
    </Box>
  );
};

export default Preloader;
