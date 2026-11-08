import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useReducedMotion } from "framer-motion";

const SolarOrreryCanvas = ({ system, activePlanet, onSelectPlanet }) => {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();
  const hoveredIndexRef = useRef(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.width = Math.floor(canvas.clientWidth * dpr);
      height = canvas.height = Math.floor(canvas.clientHeight * dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    // Planet state tracking (angles and trails)
    const planetsState = system.planets.map((p, idx) => ({
      angle: (idx * (Math.PI * 2)) / system.planets.length,
      trail: [],
    }));

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = canvas.width / canvas.clientWidth;
      mouseX = (e.clientX - rect.left) * dpr;
      mouseY = (e.clientY - rect.top) * dpr;
    };

    const handlePointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      hoveredIndexRef.current = -1;
    };

    const handleClick = () => {
      const idx = hoveredIndexRef.current;
      if (idx >= 0 && idx < system.planets.length) {
        onSelectPlanet(system.planets[idx]);
      }
    };

    canvas.addEventListener("pointermove", handlePointerMove, { passive: true });
    canvas.addEventListener("pointerleave", handlePointerLeave);
    canvas.addEventListener("click", handleClick);

    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - lastTime) * 0.001, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const maxRadius = Math.min(width, height) * 0.44;
      const ringStep = (maxRadius - 35) / system.planets.length;

      // 1. Draw Central Star (Sun) with Solar Corona
      const starRadius = Math.max(14, Math.min(width, height) * 0.045);
      const coronaGrad = ctx.createRadialGradient(cx, cy, starRadius * 0.4, cx, cy, starRadius * 2.5);
      coronaGrad.addColorStop(0, `${system.starColor}CC`);
      coronaGrad.addColorStop(0.5, `${system.starColor}33`);
      coronaGrad.addColorStop(1, "transparent");

      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, starRadius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Solid central core
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = system.starColor;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(cx, cy, starRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      let closestHoverIdx = -1;
      const minDistance = 28;

      // 2. Draw Orbital Rings and Planets
      for (let i = 0; i < system.planets.length; i++) {
        const planet = system.planets[i];
        const state = planetsState[i];
        const orbitRadius = 40 + (i + 1) * ringStep;
        const isSelected = activePlanet?.name === planet.name;

        // Draw orbital track line
        ctx.beginPath();
        ctx.arc(cx, cy, orbitRadius, 0, Math.PI * 2);
        ctx.strokeStyle = isSelected
          ? `${planet.color}80`
          : "rgba(255, 255, 255, 0.07)";
        ctx.lineWidth = isSelected ? 1.5 : 1;
        if (!isSelected) {
          ctx.setLineDash([3, 6]);
        } else {
          ctx.setLineDash([]);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Update orbital physics (velocity inversely proportional to orbit distance)
        if (!reduce) {
          const orbitalSpeed = (2.2 / Math.sqrt(orbitRadius)) * 0.8;
          state.angle += orbitalSpeed * dt;
        }

        const px = cx + Math.cos(state.angle) * orbitRadius;
        const py = cy + Math.sin(state.angle) * orbitRadius;

        // Mouse hover detection
        const distToMouse = Math.hypot(mouseX - px, mouseY - py);
        if (distToMouse < minDistance) {
          closestHoverIdx = i;
        }

        // Orbital comet trail
        if (!reduce) {
          state.trail.push({ x: px, y: py });
          if (state.trail.length > 18) {
            state.trail.shift();
          }

          // Render trail
          for (let t = 0; t < state.trail.length; t++) {
            const alpha = (t / state.trail.length) * 0.35;
            ctx.fillStyle = `${planet.color}${Math.floor(alpha * 255).toString(16).padStart(2, "0")}`;
            ctx.beginPath();
            ctx.arc(state.trail[t].x, state.trail[t].y, (planet.size * 0.18) * (t / state.trail.length), 0, Math.PI * 2);
            ctx.fill();
          }
        }

        const isHovered = closestHoverIdx === i;
        const pSize = (planet.size * 0.42) * (isHovered || isSelected ? 1.35 : 1.0);

        // Planet Atmosphere Halo
        const haloGrad = ctx.createRadialGradient(px, py, pSize * 0.5, px, py, pSize * 2.2);
        haloGrad.addColorStop(0, `${planet.color}90`);
        haloGrad.addColorStop(1, "transparent");

        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(px, py, pSize * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Planet Core
        ctx.fillStyle = planet.color;
        ctx.shadowColor = planet.color;
        ctx.shadowBlur = isHovered || isSelected ? 22 : 8;
        ctx.beginPath();
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label on hover or selected
        if (isHovered || isSelected) {
          ctx.font = "bold 12px 'Space Grotesk', sans-serif";
          ctx.fillStyle = "#F5F5FA";
          ctx.textAlign = "center";
          ctx.fillText(planet.name, px, py - pSize - 10);
        }
      }

      hoveredIndexRef.current = closestHoverIdx;
      canvas.style.cursor = closestHoverIdx >= 0 ? "pointer" : "default";

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [system, activePlanet, onSelectPlanet, reduce]);

  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </Box>
  );
};

export default SolarOrreryCanvas;
