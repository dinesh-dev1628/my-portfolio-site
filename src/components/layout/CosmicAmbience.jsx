import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const CosmicAmbience = () => {
  const reduce = useReducedMotion();

  // Mouse tracking spring for desktop cursor glow
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 25, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMouseMove = (e) => {
      mouseX.set(e.clientX - 225);
      mouseY.set(e.clientY - 225);
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
            "radial-gradient(120% 100% at 50% 0%, #0A0D16 0%, #05060A 55%, #030407 100%)",
        }}
      />

      {/* Primary subtle nebula glow (top-left cosmic blue) */}
      <motion.div
        animate={
          reduce
            ? undefined
            : {
                x: [0, 40, -30, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.08, 0.94, 1],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "55vw",
          height: "55vw",
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96, 165, 250, 0.12) 0%, rgba(96, 165, 250, 0.03) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Secondary subtle nebula glow (mid-right muted violet) */}
      <motion.div
        animate={
          reduce
            ? undefined
            : {
                x: [0, -35, 45, 0],
                y: [0, 50, -30, 0],
                scale: [1, 0.95, 1.1, 1],
              }
        }
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "40%",
          right: "-12%",
          width: "50vw",
          height: "50vw",
          maxWidth: 800,
          maxHeight: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.10) 0%, rgba(139, 92, 246, 0.02) 40%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Concentric faint orbital geometry in deep background */}
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
          border: "1px solid rgba(96, 165, 250, 0.012)",
          pointerEvents: "none",
        }}
      />

      {/* Desktop soft cursor luminous aura */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          position: "fixed",
          top: 0,
          left: 0,
          width: 450,
          height: 450,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, rgba(139, 92, 246, 0.03) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
          filter: "blur(30px)",
        }}
      />

      {/* Cinematic noise texture */}
      <div className="cosmic-grain" />
    </Box>
  );
};

export default CosmicAmbience;
