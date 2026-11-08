import React, { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initCosmos();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Multi-depth stars and cosmic dust
    const STAR_COUNT = Math.min(280, Math.floor((width * height) / 4000));
    const DUST_COUNT = Math.min(60, Math.floor((width * height) / 16000));
    let stars = [];
    let dustParticles = [];

    const initCosmos = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        const depth = Math.random() < 0.65 ? 1 : Math.random() < 0.9 ? 2 : 3;
        const baseRadius = depth === 1 ? 0.6 : depth === 2 ? 1.1 : 1.7;
        const colorPalette = [
          "rgba(245, 245, 250, ", // Soft white (#F5F5FA)
          "rgba(56, 189, 248, ",  // Electric blue (#38BDF8)
          "rgba(139, 92, 246, ", // Cosmic violet (#8B5CF6)
          "rgba(217, 70, 239, ", // Nebula pink (#D946EF)
        ];
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          depth,
          radius: baseRadius + Math.random() * 0.4,
          color,
          alpha: 0.2 + Math.random() * 0.7,
          twinkleSpeed: 0.008 + Math.random() * 0.02,
          twinkleOffset: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.06 * depth,
          vy: (Math.random() - 0.5) * 0.06 * depth,
        });
      }

      // Cosmic dust particles (larger, softer, drifting slowly)
      dustParticles = [];
      for (let i = 0; i < DUST_COUNT; i++) {
        dustParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 12 + Math.random() * 24,
          color: Math.random() < 0.5 ? "rgba(139, 92, 246, " : "rgba(56, 189, 248, ",
          alpha: 0.02 + Math.random() * 0.04,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
        });
      }
    };

    initCosmos();

    let shootingStar = null;
    let nextShootingStarTime = Date.now() + 3500;

    const createShootingStar = () => {
      const startX = Math.random() * width * 0.8;
      const startY = Math.random() * height * 0.4;
      const length = 90 + Math.random() * 110;
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
      const speed = 15 + Math.random() * 8;

      shootingStar = {
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length,
        life: 0,
        maxLife: 48,
        opacity: 0.8 + Math.random() * 0.2,
      };
    };

    let tick = 0;

    const render = () => {
      tick++;

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const normX = (mouseX / width - 0.5) * 2;
      const normY = (mouseY / height - 0.5) * 2;

      ctx.clearRect(0, 0, width, height);

      // 1. Render Cosmic Dust
      for (let i = 0; i < dustParticles.length; i++) {
        const dust = dustParticles[i];
        if (!prefersReducedMotion) {
          dust.x += dust.vx;
          dust.y += dust.vy;
          if (dust.x < -dust.radius) dust.x = width + dust.radius;
          if (dust.x > width + dust.radius) dust.x = -dust.radius;
          if (dust.y < -dust.radius) dust.y = height + dust.radius;
          if (dust.y > height + dust.radius) dust.y = -dust.radius;
        }

        const dustGrad = ctx.createRadialGradient(
          dust.x, dust.y, 0,
          dust.x, dust.y, dust.radius
        );
        dustGrad.addColorStop(0, `${dust.color}${dust.alpha})`);
        dustGrad.addColorStop(1, `${dust.color}0)`);

        ctx.fillStyle = dustGrad;
        ctx.beginPath();
        ctx.arc(dust.x, dust.y, dust.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render Shooting Star
      if (!prefersReducedMotion) {
        if (!shootingStar && Date.now() > nextShootingStarTime) {
          createShootingStar();
          nextShootingStarTime = Date.now() + 7000 + Math.random() * 12000;
        }

        if (shootingStar) {
          shootingStar.x += shootingStar.dx;
          shootingStar.y += shootingStar.dy;
          shootingStar.life++;

          const progress = shootingStar.life / shootingStar.maxLife;
          const currentAlpha = Math.sin(progress * Math.PI) * shootingStar.opacity;

          if (currentAlpha > 0.01) {
            const tailX = shootingStar.x - (shootingStar.dx / 18) * shootingStar.length;
            const tailY = shootingStar.y - (shootingStar.dy / 18) * shootingStar.length;

            const grad = ctx.createLinearGradient(
              tailX,
              tailY,
              shootingStar.x,
              shootingStar.y
            );
            grad.addColorStop(0, "rgba(56, 189, 248, 0)");
            grad.addColorStop(0.6, `rgba(139, 92, 246, ${currentAlpha * 0.6})`);
            grad.addColorStop(1, `rgba(245, 245, 250, ${currentAlpha})`);

            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(shootingStar.x, shootingStar.y);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(shootingStar.x, shootingStar.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#38BDF8";
            ctx.fill();
            ctx.shadowBlur = 0;
          }

          if (shootingStar.life >= shootingStar.maxLife) {
            shootingStar = null;
          }
        }
      }

      // 3. Render Stars with Twinkle & Parallax
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.x += star.vx;
          star.y += star.vy;
          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;
        }

        const parallaxMultiplier = star.depth * 5;
        const renderX = star.x - normX * parallaxMultiplier;
        const renderY = star.y - normY * parallaxMultiplier;

        const twinkle = prefersReducedMotion
          ? 0.7
          : 0.35 + 0.65 * (Math.sin(tick * star.twinkleSpeed + star.twinkleOffset) * 0.5 + 0.5);

        const currentAlpha = star.alpha * twinkle;

        ctx.fillStyle = `${star.color}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow for brightest nearest stars
        if (star.depth === 3 && star.radius > 1.8 && currentAlpha > 0.6) {
          ctx.beginPath();
          ctx.arc(renderX, renderY, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}${currentAlpha * 0.15})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default Starfield;
