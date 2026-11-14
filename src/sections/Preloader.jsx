import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { FastForward } from "@mui/icons-material";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import MyProfilePic from "../components/asset/IMG-20240604-WA0002.jpg";

const MIN_DISPLAY_MS = 2800; // Minimum time to enjoy cinematic warp sequence
const MAX_TIMEOUT_MS = 6000; // Safety fallback timeout

export default function Preloader({ setLoading }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [phase, setPhase] = useState("cruising"); // 'cruising' | 'warp' | 'burst' | 'complete'
  const [percent, setPercent] = useState(0);
  const [telemetryText, setTelemetryText] = useState("WARP DRIVE CHARGING");

  const finishLoading = useCallback(() => {
    setPhase("complete");
    setTimeout(() => {
      setLoading(false);
    }, 600); // Allow exit zoom fade to finish
  }, [setLoading]);

  // Asset preloading & minimum display duration
  useEffect(() => {
    startTimeRef.current = Date.now();
    let isCancelled = false;

    // Preload critical images & fonts
    const preloadAssets = async () => {
      const img1 = new Image();
      img1.src = MyProfilePic;
      const img2 = new Image();
      img2.src = "/code.png";

      const imgPromises = [
        new Promise((res) => { img1.onload = img1.onerror = res; }),
        new Promise((res) => { img2.onload = img2.onerror = res; }),
      ];

      if (document.fonts?.ready) {
        imgPromises.push(document.fonts.ready);
      }

      await Promise.all(imgPromises);
    };

    preloadAssets();

    // Progress and phase driver
    const interval = setInterval(() => {
      if (isCancelled) return;
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(100, Math.floor((elapsed / MIN_DISPLAY_MS) * 100));
      setPercent(progress);

      if (elapsed < 1100) {
        setPhase("cruising");
        setTelemetryText("ORBITAL CALIBRATION INITIATED");
      } else if (elapsed < 2300) {
        setPhase("warp");
        setTelemetryText("HYPERSPACE ACCELERATION ENGAGED");
      } else if (elapsed < MIN_DISPLAY_MS) {
        setPhase("burst");
        setTelemetryText("GALAXY HORIZON BREACH");
      } else {
        clearInterval(interval);
        finishLoading();
      }
    }, 40);

    // Hard safety timeout
    const safetyTimer = setTimeout(() => {
      if (!isCancelled) {
        finishLoading();
      }
    }, MAX_TIMEOUT_MS);

    // Keyboard 'Escape' listener to skip
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        finishLoading();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      isCancelled = true;
      clearInterval(interval);
      clearTimeout(safetyTimer);
      window.removeEventListener("keydown", handleKeyDown);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [finishLoading]);

  // Canvas 3D Starfield & Hyperspace Warp
  useEffect(() => {
    if (reduceMotion) return; // Skip heavy canvas animation if reduced motion is requested

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const STAR_COUNT = 650;
    const FOV = 280;

    // Generate stars with 3D coordinates
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * width,
      pz: Math.random() * width,
      color:
        Math.random() > 0.8
          ? "#38BDF8"
          : Math.random() > 0.6
          ? "#8B5CF6"
          : Math.random() > 0.5
          ? "#D946EF"
          : "#FFFFFF",
    }));

    let currentSpeed = 3;
    let targetSpeed = 3;

    const render = () => {
      const elapsed = Date.now() - (startTimeRef.current || Date.now());

      // Dynamic speed scaling through warp phases
      if (elapsed < 1100) {
        targetSpeed = 4; // Cruising
      } else if (elapsed < 2300) {
        targetSpeed = 42; // Hyperspace streaks
      } else {
        targetSpeed = 85; // Galaxy burst break
      }

      // Smooth acceleration easing
      currentSpeed += (targetSpeed - currentSpeed) * 0.08;

      // Translucent clear for motion blur trail streaks
      ctx.fillStyle = currentSpeed > 20 ? "rgba(5, 5, 16, 0.28)" : "rgba(5, 5, 16, 0.7)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < STAR_COUNT; i++) {
        const star = stars[i];

        star.pz = star.z;
        star.z -= currentSpeed;

        // Recycle star when passing viewer
        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
          star.z = width;
          star.pz = width;
        }

        const k = FOV / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const prevK = FOV / star.pz;
          const prevX = star.x * prevK + cx;
          const prevY = star.y * prevK + cy;

          const size = Math.max(1, (1 - star.z / width) * 3.5);
          const alpha = Math.min(1, (1 - star.z / width) * 1.3);

          ctx.beginPath();
          if (currentSpeed > 10) {
            // Draw hyperspace warp streaks
            ctx.strokeStyle = star.color;
            ctx.lineWidth = size * 0.8;
            ctx.globalAlpha = alpha;
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(px, py);
            ctx.stroke();
          } else {
            // Draw cruising point star
            ctx.fillStyle = star.color;
            ctx.globalAlpha = alpha;
            ctx.arc(px, py, size / 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "complete" ? 0 : 1 }}
        exit={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          backgroundColor: "#050510",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Hyperspace Warp Canvas */}
        {!reduceMotion && (
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Hyperspace Burst Flash Overlay */}
        <motion.div
          animate={{
            opacity: phase === "burst" ? [0, 0.65, 0] : 0,
            scale: phase === "burst" ? [0.6, 1.8] : 0.6,
          }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, rgba(139, 92, 246, 0.5) 40%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        {/* Top Skip Button */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: 20, sm: 30 },
            right: { xs: 20, sm: 30 },
            zIndex: 10,
          }}
        >
          <Button
            size="small"
            onClick={finishLoading}
            endIcon={<FastForward sx={{ fontSize: 16 }} />}
            sx={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: 1.5,
              color: "#94A3B8",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              borderRadius: "999px",
              px: 2,
              py: 0.6,
              "&:hover": {
                color: "#F8FAFC",
                borderColor: "#38BDF8",
                backgroundColor: "rgba(56, 189, 248, 0.15)",
              },
            }}
          >
            SKIP [ESC]
          </Button>
        </Box>

        {/* Center Brand Identity & Warp Telemetry */}
        <Box
          sx={{
            position: "relative",
            zIndex: 5,
            textAlign: "center",
            px: 3,
            maxWidth: 580,
          }}
        >
          {/* Brand Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: { xs: "0.8rem", sm: "0.95rem" },
                letterSpacing: { xs: 3, sm: 4.5 },
                color: "#38BDF8",
                fontWeight: 700,
                textTransform: "uppercase",
                mb: 1.5,
                textShadow: "0 0 15px rgba(56, 189, 248, 0.5)",
              }}
            >
              Dinesh // Digital Universe
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: { xs: "2.2rem", sm: "3.2rem" },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#F8FAFC",
                lineHeight: 1.1,
              }}
            >
              WARPING INTO GALAXY
            </Typography>
          </motion.div>

          {/* Progress Bar & Telemetry Status */}
          <Box sx={{ mt: 4, width: "100%", maxWidth: 360, mx: "auto" }}>
            {/* Minimal glowing track */}
            <Box
              sx={{
                width: "100%",
                height: 3,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderRadius: "999px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  width: `${percent}%`,
                  background:
                    "linear-gradient(90deg, #8B5CF6, #38BDF8, #D946EF)",
                  boxShadow: "0 0 12px #38BDF8",
                  borderRadius: "999px",
                }}
              />
            </Box>

            {/* Telemetry info row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1.8,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#94A3B8",
                  letterSpacing: 1.5,
                }}
              >
                {telemetryText}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.72rem",
                  color: "#38BDF8",
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                {percent}%
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}
