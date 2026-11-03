import React, { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for subtle parallax
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
      initStars();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Generate stars with multi-depth layers
    const STAR_COUNT = Math.min(260, Math.floor((width * height) / 4500));
    let stars = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        // depth: 1 (far, tiny, slow) to 3 (near, slightly larger, faster)
        const depth = Math.random() < 0.65 ? 1 : Math.random() < 0.88 ? 2 : 3;
        const baseRadius = depth === 1 ? 0.6 : depth === 2 ? 1.0 : 1.6;
        const colorPalette = [
          "rgba(248, 250, 252, ", // soft white
          "rgba(96, 165, 250, ",  // cosmic blue
          "rgba(167, 139, 250, ", // nebula violet
          "rgba(224, 231, 255, ", // pale ice blue
        ];
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          depth,
          radius: baseRadius + Math.random() * 0.4,
          color,
          alpha: 0.2 + Math.random() * 0.7,
          baseAlpha: 0.2 + Math.random() * 0.6,
          twinkleSpeed: 0.008 + Math.random() * 0.02,
          twinkleOffset: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.08 * depth,
          vy: (Math.random() - 0.5) * 0.08 * depth,
        });
      }
    };

    initStars();

    // Occasional subtle shooting stars
    let shootingStar = null;
    let nextShootingStarTime = Date.now() + 4000;

    const createShootingStar = () => {
      const startX = Math.random() * width * 0.8;
      const startY = Math.random() * height * 0.4;
      const length = 80 + Math.random() * 100;
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.25; // diagonally down-right
      const speed = 14 + Math.random() * 10;

      shootingStar = {
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length,
        life: 0,
        maxLife: 45,
        opacity: 0.7 + Math.random() * 0.3,
      };
    };

    let tick = 0;

    const render = () => {
      tick++;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const normX = (mouseX / width - 0.5) * 2; // -1 to 1
      const normY = (mouseY / height - 0.5) * 2;

      ctx.clearRect(0, 0, width, height);

      // Render shooting star
      if (!prefersReducedMotion) {
        if (!shootingStar && Date.now() > nextShootingStarTime) {
          createShootingStar();
          nextShootingStarTime = Date.now() + 8000 + Math.random() * 14000;
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
            grad.addColorStop(0, "rgba(96, 165, 250, 0)");
            grad.addColorStop(0.7, `rgba(167, 139, 250, ${currentAlpha * 0.5})`);
            grad.addColorStop(1, `rgba(248, 250, 252, ${currentAlpha})`);

            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.4;
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(shootingStar.x, shootingStar.y);
            ctx.stroke();

            // Head glow
            ctx.beginPath();
            ctx.arc(shootingStar.x, shootingStar.y, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#60A5FA";
            ctx.fill();
            ctx.shadowBlur = 0;
          }

          if (shootingStar.life >= shootingStar.maxLife) {
            shootingStar = null;
          }
        }
      }

      // Draw faint constellation links between near stars
      const linkDist = 65;
      for (let i = 0; i < stars.length; i += 3) {
        const s1 = stars[i];
        if (s1.depth < 2) continue; // only connect mid and foreground stars
        for (let j = i + 1; j < Math.min(i + 8, stars.length); j++) {
          const s2 = stars[j];
          if (s2.depth < 2) continue;
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const lineAlpha = (1 - dist / linkDist) * 0.07;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }

      // Draw stars with parallax
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.x += star.vx;
          star.y += star.vy;

          // Wrap boundaries
          if (star.x < 0) star.x = width;
          else if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          else if (star.y > height) star.y = 0;

          // Subtle twinkle
          star.alpha =
            star.baseAlpha +
            Math.sin(tick * star.twinkleSpeed + star.twinkleOffset) * 0.25;
          star.alpha = Math.max(0.1, Math.min(1, star.alpha));
        }

        // Parallax offset proportional to depth
        const parallaxFactor = star.depth * 10;
        const renderX = star.x - normX * parallaxFactor;
        const renderY = star.y - normY * parallaxFactor;

        ctx.beginPath();
        ctx.arc(renderX, renderY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${star.alpha})`;
        ctx.fill();

        // Foreground stars get soft diffraction flare
        if (star.depth === 3 && star.alpha > 0.6) {
          ctx.beginPath();
          ctx.arc(renderX, renderY, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${star.alpha * 0.15})`;
          ctx.fill();
        }
      }

      if (!document.hidden) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
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
      aria-hidden="true"
    />
  );
};

export default Starfield;
