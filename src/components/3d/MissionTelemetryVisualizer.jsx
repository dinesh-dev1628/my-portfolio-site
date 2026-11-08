import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useReducedMotion } from "framer-motion";

const MissionTelemetryVisualizer = ({ missionId, accentColor = "#38BDF8" }) => {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.width = Math.floor(canvas.clientWidth * dpr);
      height = canvas.height = Math.floor(canvas.clientHeight * dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    // Mission-specific particle or node setups
    const nodes = [];
    const nodeCount = 18;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (width || 300),
        y: Math.random() * (height || 140),
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: 1.5 + Math.random() * 2,
      });
    }

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // 1. Grid lines / Radar rings
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1;
      const gridSize = 24;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Mission-specific dynamic waveforms & node connections
      if (missionId === "expense-tracker") {
        // Financial Ledger Transaction Analytics waveform
        ctx.beginPath();
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 2;
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = 10;
        for (let x = 0; x < width; x += 4) {
          const y = height * 0.55 + Math.sin(x * 0.02 + tick * 0.04) * 22 + Math.cos(x * 0.05) * 12;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      } else if (missionId === "playwright-automation") {
        // Automation scraping pipeline graph nodes
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (!reduce) {
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 0 || n.x > width) n.vx *= -1;
            if (n.y < 0 || n.y > height) n.vy *= -1;
          }

          // Connect nearby nodes
          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const d = Math.hypot(n.x - n2.x, n.y - n2.y);
            if (d < 65) {
              ctx.strokeStyle = `${accentColor}${Math.floor((1 - d / 65) * 80).toString(16).padStart(2, "0")}`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.stroke();
            }
          }

          // Node dot
          ctx.fillStyle = accentColor;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (missionId === "cyberspace-universe") {
        // Stellar warp field
        const cx = width / 2;
        const cy = height / 2;
        for (let i = 0; i < 24; i++) {
          const angle = (i * Math.PI * 2) / 24 + tick * 0.015;
          const dist = ((tick * 1.5 + i * 14) % (width * 0.5));
          const px = cx + Math.cos(angle) * dist;
          const py = cy + Math.sin(angle) * (dist * 0.5);
          ctx.fillStyle = accentColor;
          ctx.beginPath();
          ctx.arc(px, py, (dist / (width * 0.5)) * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        // Autonomous Agent Graph Loop
        const cx = width / 2;
        const cy = height / 2;
        const r = Math.min(width, height) * 0.35;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `${accentColor}40`;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Orbiting agent worker pulse
        const agentAngle = tick * 0.03;
        const ax = cx + Math.cos(agentAngle) * r;
        const ay = cy + Math.sin(agentAngle) * r;
        ctx.fillStyle = accentColor;
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(ax, ay, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [missionId, accentColor, reduce]);

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "90px", sm: "110px" },
        borderRadius: "14px",
        overflow: "hidden",
        backgroundColor: "rgba(5, 5, 16, 0.7)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 8,
          left: 12,
          display: "flex",
          alignItems: "center",
          gap: 0.8,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: accentColor,
            boxShadow: `0 0 6px ${accentColor}`,
          }}
        />
        <span
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.62rem",
            color: "#9292A8",
            letterSpacing: "1.5px",
          }}
        >
          LIVE TELEMETRY FEED
        </span>
      </Box>
    </Box>
  );
};

export default MissionTelemetryVisualizer;
