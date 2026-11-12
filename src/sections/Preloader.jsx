import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

// Generate deterministic radial stars for true 3D depth projection
const generateStars = (count) =>
  Array.from({ length: count }, (_, i) => {
    const angle = (i * 137.508) * (Math.PI / 180); // Golden angle distribution
    const radius = 8 + ((i * 29) % 44); // Keep center clear for singularity
    return {
      id: i,
      angle,
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius,
      dx: Math.cos(angle),
      dy: Math.sin(angle),
      size: i % 11 === 0 ? 3 : i % 4 === 0 ? 2 : 1.2,
      delay: (i % 15) * 0.15,
      duration: 2.2 + (i % 4) * 0.6,
      color: i % 7 === 0 ? "#38BDF8" : i % 5 === 0 ? "#C084FC" : "#FFFFFF",
    };
  });

// Radial hyperspace streaks aligned with the center vanishing point
const generateWarpStreaks = (count) =>
  Array.from({ length: count }, (_, i) => {
    const angleDeg = (360 / count) * i + (i % 3) * 4;
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      id: i,
      angleDeg,
      dx: Math.cos(angleRad),
      dy: Math.sin(angleRad),
      delay: (i % 8) * 0.08,
      duration: 0.45 + (i % 4) * 0.08,
      length: 70 + (i % 5) * 35,
    };
  });

function Spaceship({ reduce, entering, progress }) {
  // Subtle thrust intensity scales with loading progress
  const thrustScale = 0.8 + (progress / 100) * 0.8;

  return (
    <MotionBox
      animate={
        reduce
          ? {}
          : entering
          ? {
              y: [0, 14, -45],
              scale: [1, 1.08, 0.02],
              opacity: [1, 1, 0],
              rotate: [0, -1.5, 0],
            }
          : {
              y: [0, -8, 0],
              x: [-2, 2, -2],
              rotate: [-1.2, 1.2, -1.2],
            }
      }
      transition={
        entering
          ? {
              duration: 1.45,
              times: [0, 0.25, 1],
              ease: [0.65, 0, 0.2, 1],
            }
          : {
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      sx={{
        position: "absolute",
        left: "50%",
        top: "52%",
        width: { xs: 110, sm: 138, md: 156 },
        height: 130,
        zIndex: 12,
        marginLeft: { xs: "-55px", sm: "-69px", md: "-78px" },
        marginTop: "-65px",
        pointerEvents: "none",
      }}
    >
      {/* TWIN ION THRUSTER PLUMES */}
      <MotionBox
        animate={
          reduce
            ? {}
            : {
                scaleY: entering ? [1, 2.8, 0] : [0.85, 1.25, 0.9],
                opacity: entering ? [1, 1, 0] : [0.75, 1, 0.8],
              }
        }
        transition={{
          duration: entering ? 1.1 : 0.16,
          repeat: entering ? 0 : Infinity,
        }}
        sx={{
          position: "absolute",
          bottom: -14,
          left: "50%",
          transform: `translateX(-50%) scale(${thrustScale})`,
          transformOrigin: "top center",
          width: 48,
          height: 36,
          display: "flex",
          justifyContent: "space-between",
          px: "8px",
        }}
      >
        {/* Left Thruster */}
        <Box
          sx={{
            width: 10,
            height: "100%",
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #38BDF8 40%, #8B5CF6 80%, transparent 100%)",
            filter: "blur(3px)",
          }}
        />
        {/* Right Thruster */}
        <Box
          sx={{
            width: 10,
            height: "100%",
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #38BDF8 40%, #8B5CF6 80%, transparent 100%)",
            filter: "blur(3px)",
          }}
        />
      </MotionBox>

      {/* SLEEK INTERSTELLAR STARFIGHTER SVG */}
      <svg
        viewBox="0 0 200 170"
        width="100%"
        height="100%"
        fill="none"
        style={{
          overflow: "visible",
          filter: "drop-shadow(0 12px 24px rgba(56, 189, 248, 0.45))",
        }}
      >
        <defs>
          <linearGradient id="hullMain" x1="100" y1="10" x2="100" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="45%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="wingGrad" x1="20" y1="70" x2="180" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#312E81" />
          </linearGradient>
          <linearGradient id="canopyGrad" x1="100" y1="40" x2="100" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="40%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        {/* Outer Swept Wings */}
        <path
          d="M100 52 L14 122 L26 136 L82 112 Z"
          fill="url(#wingGrad)"
          stroke="#7DD3FC"
          strokeWidth="1.2"
        />
        <path
          d="M100 52 L186 122 L174 136 L118 112 Z"
          fill="url(#wingGrad)"
          stroke="#7DD3FC"
          strokeWidth="1.2"
        />

        {/* Wingtip Nav Lights */}
        <circle cx="16" cy="123" r="2.2" fill="#F43F5E" />
        <circle cx="184" cy="123" r="2.2" fill="#38BDF8" />

        {/* Twin Engine Nacelles */}
        <rect x="74" y="96" width="14" height="44" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.2" />
        <rect x="112" y="96" width="14" height="44" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.2" />

        {/* Central Fuselage */}
        <path
          d="M100 8 C84 34 76 68 78 126 L100 146 L122 126 C124 68 116 34 100 8 Z"
          fill="url(#hullMain)"
          stroke="#E2E8F0"
          strokeWidth="1.5"
        />

        {/* Armored Panel Lines */}
        <path
          d="M84 82 L42 118 M116 82 L158 118"
          stroke="#BAE6FD"
          strokeOpacity="0.65"
          strokeWidth="1.5"
        />

        {/* Cockpit Canopy */}
        <path
          d="M100 42 C91 54 89 72 91 90 L100 98 L109 90 C111 72 109 54 100 42 Z"
          fill="url(#canopyGrad)"
          stroke="#FFFFFF"
          strokeOpacity="0.85"
          strokeWidth="1.2"
        />

        {/* Thruster Core Glow Rings */}
        <circle cx="81" cy="140" r="4" fill="#FFFFFF" />
        <circle cx="119" cy="140" r="4" fill="#FFFFFF" />
      </svg>
    </MotionBox>
  );
}

const Preloader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();

  const stars = useMemo(() => generateStars(75), []);
  const warpStreaks = useMemo(() => generateWarpStreaks(32), []);

  const entering = progress >= 88;
  const finished = progress >= 100;

  // Dynamic telemetry values
  const warpVelocity = entering
    ? "9.98c"
    : `${((progress / 100) * 4.2).toFixed(2)}c`;

  useEffect(() => {
    if (reduce) {
      setLoading(false);
      return;
    }

    let current = 0;
    const interval = window.setInterval(() => {
      // Realistic non-linear loading curve: fast initial boot, brief calibration, rapid warp surge
      const step = current < 40 ? 2 : current < 75 ? 1 : 3;
      current = Math.min(100, current + step);
      setProgress(current);

      if (current >= 100) {
        window.clearInterval(interval);
      }
    }, 32);

    return () => window.clearInterval(interval);
  }, [reduce, setLoading]);

  useEffect(() => {
    if (!finished) return;

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1150);

    return () => window.clearTimeout(timer);
  }, [finished, setLoading]);

  const phaseText = entering
    ? finished
      ? "SINGULARITY BREACHED // WELCOME"
      : "ENGAGING QUANTUM WORMHOLE DRIVE"
    : progress > 60
    ? "GRAVITATIONAL LENS LOCKED"
    : progress > 30
    ? "ALIGNING NAVIGATIONAL THRUSTERS"
    : "INITIALIZING DEEP SPACE TELEMETRY";

  return (
    <MotionBox
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.15,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
      }}
      role="status"
      aria-label={`Entering Dinesh Digital Universe, ${progress}%`}
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        overflow: "hidden",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background:
          "radial-gradient(circle at 50% 46%, #130B2E 0%, #060714 52%, #010104 100%)",
        color: "#FFFFFF",
        isolation: "isolate",
        userSelect: "none",
        pointerEvents: finished ? "none" : "auto",
      }}
    >
      {/* SUBTLE CINEMATIC FILM GRAIN & SCANLINE OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 3px)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />

      {/* COCKPIT HUD CORNER BRACKETS */}
      <Box
        sx={{
          position: "absolute",
          inset: { xs: 16, sm: 28, md: 40 },
          pointerEvents: "none",
          zIndex: 15,
          opacity: entering ? 0.25 : 0.75,
          transition: "opacity 0.6s ease",
        }}
      >
        {/* Top Left HUD */}
        <Box sx={{ position: "absolute", top: 0, left: 0 }}>
          <Box
            sx={{
              width: 24,
              height: 24,
              borderTop: "1.5px solid rgba(56, 189, 248, 0.6)",
              borderLeft: "1.5px solid rgba(56, 189, 248, 0.6)",
            }}
          />
          <Typography
            sx={{
              mt: 1,
              fontFamily: "monospace",
              fontSize: { xs: 9, sm: 10 },
              letterSpacing: 1.5,
              color: "#64748B",
            }}
          >
            SYS.NODE // <Box component="span" sx={{ color: "#38BDF8" }}>ORION-09</Box>
          </Typography>
        </Box>

        {/* Top Right HUD */}
        <Box sx={{ position: "absolute", top: 0, right: 0, textAlign: "right" }}>
          <Box
            sx={{
              ml: "auto",
              width: 24,
              height: 24,
              borderTop: "1.5px solid rgba(56, 189, 248, 0.6)",
              borderRight: "1.5px solid rgba(56, 189, 248, 0.6)",
            }}
          />
          <Typography
            sx={{
              mt: 1,
              fontFamily: "monospace",
              fontSize: { xs: 9, sm: 10 },
              letterSpacing: 1.5,
              color: "#64748B",
            }}
          >
            VELOCITY // <Box component="span" sx={{ color: "#A78BFA" }}>{warpVelocity}</Box>
          </Typography>
        </Box>

        {/* Bottom Left Bracket */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 24,
            height: 24,
            borderBottom: "1.5px solid rgba(167, 139, 250, 0.45)",
            borderLeft: "1.5px solid rgba(167, 139, 250, 0.45)",
          }}
        />

        {/* Bottom Right Bracket */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 24,
            height: 24,
            borderBottom: "1.5px solid rgba(167, 139, 250, 0.45)",
            borderRight: "1.5px solid rgba(167, 139, 250, 0.45)",
          }}
        />
      </Box>

      {/* DEEP SPACE NEBULA GLOW */}
      <MotionBox
        animate={
          reduce
            ? {}
            : {
                scale: [1, 1.18, 1],
                rotate: [0, 12, 0],
                opacity: [0.4, 0.75, 0.4],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          width: { xs: 380, md: 780 },
          height: { xs: 380, md: 780 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.24) 0%, rgba(56,189,248,0.12) 42%, rgba(217,70,239,0.06) 65%, transparent 75%)",
          filter: "blur(45px)",
          zIndex: -2,
        }}
      />

      {/* 3D PERSPECTIVE STARFIELD */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: -1 }}>
        {stars.map((star) => (
          <MotionBox
            key={star.id}
            animate={
              reduce
                ? {}
                : entering
                ? {
                    x: [0, star.dx * 320],
                    y: [0, star.dy * 320],
                    opacity: [0.9, 1, 0],
                    scale: [1, 2.8],
                  }
                : {
                    opacity: [0.2, 0.95, 0.2],
                    scale: [0.8, 1.3, 0.8],
                  }
            }
            transition={
              entering
                ? {
                    duration: 0.75,
                    repeat: Infinity,
                    delay: star.delay * 0.15,
                    ease: "easeIn",
                  }
                : {
                    duration: star.duration,
                    repeat: Infinity,
                    delay: star.delay,
                  }
            }
            sx={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              background: star.color,
              boxShadow: `0 0 8px ${star.color}`,
            }}
          />
        ))}
      </Box>

      {/* RADIAL HYPERSPACE STREAKS (ON WORMHOLE ENTRY) */}
      <AnimatePresence>
        {entering && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              overflow: "hidden",
              zIndex: 8,
            }}
          >
            {warpStreaks.map((streak) => (
              <MotionBox
                key={streak.id}
                initial={{ opacity: 0, scaleX: 0.1 }}
                animate={{
                  opacity: [0, 0.95, 0],
                  scaleX: [0.2, 2.4, 4.5],
                  x: [0, streak.dx * 480],
                  y: [0, streak.dy * 480],
                }}
                transition={{
                  duration: streak.duration,
                  repeat: Infinity,
                  delay: streak.delay,
                  ease: "easeIn",
                }}
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "46%",
                  width: streak.length,
                  height: 1.5,
                  transformOrigin: "left center",
                  rotate: `${streak.angleDeg}deg`,
                  background:
                    "linear-gradient(90deg, transparent, #38BDF8 45%, #FFFFFF 100%)",
                  boxShadow: "0 0 10px #38BDF8",
                }}
              />
            ))}
          </Box>
        )}
      </AnimatePresence>

      {/* WORMHOLE & SINGULARITY STAGE */}
      <MotionBox
        animate={
          entering
            ? { scale: [1, 1.25, 2.6], rotate: [0, 15, 45] }
            : { scale: [1, 1.03, 1] }
        }
        transition={
          entering
            ? { duration: 1.55, ease: [0.7, 0, 0.2, 1] }
            : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
        }
        sx={{
          position: "relative",
          width: { xs: 280, sm: 360, md: 430 },
          height: { xs: 280, sm: 360, md: 430 },
          display: "grid",
          placeItems: "center",
          mb: { xs: 2, md: 3 },
        }}
      >
        {/* OUTER TELEMETRY ORBIT RING */}
        <MotionBox
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            "&::after": {
              content: '""',
              position: "absolute",
              width: 8,
              height: 8,
              top: "14%",
              left: "14%",
              borderRadius: "50%",
              background: "#38BDF8",
              boxShadow: "0 0 18px #38BDF8, 0 0 32px #38BDF8",
            },
          }}
        />

        {/* TILTED 3D ACCRETION DISK (INTERSTELLAR EFFECT) */}
        <MotionBox
          animate={reduce ? {} : { rotate: -360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          sx={{
            position: "absolute",
            width: "96%",
            height: "36%",
            borderRadius: "50%",
            border: "2px solid rgba(56, 189, 248, 0.45)",
            background:
              "radial-gradient(ellipse at center, transparent 48%, rgba(139, 92, 246, 0.28) 68%, rgba(56, 189, 248, 0.15) 85%, transparent 100%)",
            boxShadow: "0 0 40px rgba(56, 189, 248, 0.25)",
            transform: "rotate(-18deg)",
            pointerEvents: "none",
          }}
        />

        {/* COUNTER-ROTATING QUANTUM RING */}
        <MotionBox
          animate={reduce ? {} : { rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          sx={{
            position: "absolute",
            inset: "12%",
            borderRadius: "50%",
            border: "1px dashed rgba(192, 132, 252, 0.5)",
          }}
        />

        {/* GRAVITATIONAL LENSING HALO */}
        <MotionBox
          animate={
            reduce
              ? {}
              : {
                  rotate: [0, 360],
                  scale: [0.96, 1.04, 0.96],
                }
          }
          transition={{
            rotate: { duration: 9, repeat: Infinity, ease: "linear" },
            scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          }}
          sx={{
            width: "52%",
            height: "52%",
            borderRadius: "50%",
            padding: "4px",
            background:
              "conic-gradient(from 0deg, #7C3AED, #38BDF8, #FFFFFF, #E879F9, #7C3AED)",
            boxShadow:
              "0 0 35px rgba(124, 58, 237, 0.75), 0 0 80px rgba(56, 189, 248, 0.4)",
          }}
        >
          {/* EVENT HORIZON SINGULARITY CORE */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 50% 50%, #000000 42%, #0B071E 68%, #3B82F6 96%, #FFFFFF 100%)",
              boxShadow: "inset 0 0 28px #000000, inset 0 0 14px #8B5CF6",
              display: "grid",
              placeItems: "center",
            }}
          />
        </MotionBox>

        {/* STARFIGHTER */}
        <Spaceship reduce={reduce} entering={entering} progress={progress} />
      </MotionBox>

      {/* BRAND IDENTITY & MISSION STATUS */}
      <MotionBox
        animate={entering ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        sx={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          width: "min(92%, 540px)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: { xs: 16, sm: 20 },
            fontWeight: 900,
            letterSpacing: { xs: 3, sm: 5 },
            textShadow: "0 0 24px rgba(56, 189, 248, 0.45)",
          }}
        >
          DINESH
          <Box component="span" sx={{ color: "#38BDF8", mx: 1.2 }}>
            //
          </Box>
          DIGITAL UNIVERSE
        </Typography>

        <Typography
          sx={{
            mt: 1.2,
            color: entering ? "#38BDF8" : "#A78BFA",
            fontFamily: "'Geist Mono', monospace",
            fontSize: { xs: 9.5, sm: 10.5 },
            letterSpacing: { xs: 1.5, sm: 2.5 },
            transition: "color 0.35s ease",
          }}
        >
          {phaseText}
        </Typography>
      </MotionBox>

      {/* PRECISION WARP PROGRESS BAR */}
      <MotionBox
        animate={entering ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
        sx={{
          width: { xs: "72%", sm: 320 },
          mt: 3,
          position: "relative",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            height: 3,
            borderRadius: 6,
            overflow: "hidden",
            background: "rgba(255, 255, 255, 0.08)",
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.8)",
          }}
        >
          <MotionBox
            sx={{
              height: "100%",
              width: `${progress}%`,
              borderRadius: 6,
              background:
                "linear-gradient(90deg, #7C3AED 0%, #38BDF8 65%, #FFFFFF 100%)",
              boxShadow: "0 0 16px #38BDF8",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1.2,
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: 9,
              letterSpacing: 1.8,
              fontFamily: "monospace",
            }}
          >
            WARP CAPACITOR
          </Typography>

          <Typography
            sx={{
              color: "#E2E8F0",
              fontSize: 11,
              fontWeight: 800,
              fontFamily: "monospace",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {String(progress).padStart(3, "0")}%
          </Typography>
        </Box>
      </MotionBox>

      {/* BOTTOM TELEMETRY FOOTER */}
      <MotionBox
        animate={entering ? { opacity: 0 } : { opacity: 1 }}
        sx={{
          position: "absolute",
          bottom: { xs: 20, sm: 30 },
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 9,
            color: "#64748B",
            letterSpacing: 2,
            fontFamily: "monospace",
          }}
        >
          SECTOR 07E // MILKY WAY
        </Typography>

        <Box
          sx={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#38BDF8",
            boxShadow: "0 0 10px #38BDF8",
          }}
        />

        <Typography
          sx={{
            fontSize: 9,
            color: "#64748B",
            letterSpacing: 2,
            fontFamily: "monospace",
          }}
        >
          SINGULARITY READY
        </Typography>
      </MotionBox>

      {/* CINEMATIC HYPERSPACE FLASH AT 100% */}
      <AnimatePresence>
        {finished && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.95, 0] }}
            transition={{ duration: 1.05, times: [0, 0.35, 1], ease: "easeInOut" }}
            sx={{
              position: "fixed",
              inset: 0,
              zIndex: 999999,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at center, #FFFFFF 0%, #BAE6FD 45%, #38BDF8 100%)",
            }}
          />
        )}
      </AnimatePresence>
    </MotionBox>
  );
};

export default Preloader;