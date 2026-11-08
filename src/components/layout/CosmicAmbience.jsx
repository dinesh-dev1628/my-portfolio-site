import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const CosmicAmbience = () => {
  const reduce = useReducedMotion();

  // Mouse tracking spring for subtle cursor glow
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 22, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMouseMove = (e) => {
      mouseX.set(e.clientX - 220);
      mouseY.set(e.clientY - 220);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [mouseX, mouseY]);

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Deep cosmic base gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(130% 100% at 50% 0%, #0A0A18 0%, #050510 50%, #03030A 100%)",
        }}
      />

      {/* Primary nebula glow (Cosmic Violet #8B5CF6) */}
      <motion.div
        animate={
          reduce
            ? undefined
            : {
                x: [0, 35, -25, 0],
                y: [0, -35, 20, 0],
                scale: [1, 1.06, 0.95, 1],
              }
        }
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-10%",
          left: "-8%",
          width: "55vw",
          height: "55vw",
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.03) 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Secondary nebula glow (Electric Blue #38BDF8) */}
      <motion.div
        animate={
          reduce
            ? undefined
            : {
                x: [0, -40, 35, 0],
                y: [0, 45, -25, 0],
                scale: [1, 0.94, 1.08, 1],
              }
        }
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "35%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          maxWidth: 850,
          maxHeight: 850,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.10) 0%, rgba(56, 189, 248, 0.02) 40%, transparent 65%)",
          filter: "blur(85px)",
        }}
      />

      {/* Tertiary deep nebula glow (Nebula Pink #D946EF) */}
      <motion.div
        animate={
          reduce
            ? undefined
            : {
                x: [0, 30, -30, 0],
                y: [0, 20, -30, 0],
                scale: [1, 1.05, 0.96, 1],
              }
        }
        transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "20%",
          width: "45vw",
          height: "45vw",
          maxWidth: 750,
          maxHeight: 750,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(217, 70, 239, 0.07) 0%, rgba(139, 92, 246, 0.02) 40%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />

      {/* Concentric faint orbital geometry */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120vw",
          height: "120vw",
          maxWidth: "1800px",
          maxHeight: "1800px",
          borderRadius: "50%",
          border: "1px dashed rgba(255, 255, 255, 0.015)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
          maxWidth: "1200px",
          maxHeight: "1200px",
          borderRadius: "50%",
          border: "1px solid rgba(56, 189, 248, 0.02)",
          pointerEvents: "none",
        }}
      />

      {/* Cursor luminous aura */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          position: "fixed",
          top: 0,
          left: 0,
          width: 440,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, rgba(139, 92, 246, 0.03) 38%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
          filter: "blur(32px)",
        }}
      />

      {/* Cinematic noise texture */}
      <div className="cosmic-grain" />
    </Box>
  );
};

export default CosmicAmbience;
