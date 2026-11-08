import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useReducedMotion } from "framer-motion";

const HeroPlanet = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
    });

    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let isDragging = false;
    let lastDragX = 0;
    let lastDragY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;
    let currentRotY = -0.4;
    let currentRotX = 0.22; // Natural celestial polar inclination

    const handleMouseMove = (e) => {
      if (reduce) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2.0; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2.0;
      targetMouseX = x;
      targetMouseY = y;
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      lastDragX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      lastDragY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      dragVelocityX = 0;
      dragVelocityY = 0;
    };

    const handlePointerMove = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const deltaX = clientX - lastDragX;
      const deltaY = clientY - lastDragY;
      lastDragX = clientX;
      lastDragY = clientY;

      dragVelocityX = deltaX * 0.004;
      dragVelocityY = deltaY * 0.004;
      currentRotY += dragVelocityX;
      currentRotX += dragVelocityY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp);

    // 2D Fallback if WebGL unavailable
    if (!gl) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const render2DFallback = () => {
        const w = (canvas.width = canvas.clientWidth * (window.devicePixelRatio || 1));
        const h = (canvas.height = canvas.clientHeight * (window.devicePixelRatio || 1));
        ctx.clearRect(0, 0, w, h);
        const cx = w / 2;
        const cy = h * 0.45;
        const r = Math.min(w, h) * 0.32;

        const grad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.08, cx, cy, r);
        grad.addColorStop(0, "#38BDF8");
        grad.addColorStop(0.35, "#8B5CF6");
        grad.addColorStop(0.85, "#161632");
        grad.addColorStop(1, "#050510");

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      };
      render2DFallback();
      return () => {
        window.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };
    }

    // --- Full-Screen Photorealistic Raymarched Celestial Cosmos Shader ---
    const vertexShaderSrc = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSrc = `
      precision highp float;
      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_planetRot;

      #define PI 3.14159265359

      mat3 rotateY(float a) {
        float c = cos(a); float s = sin(a);
        return mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
      }

      mat3 rotateX(float a) {
        float c = cos(a); float s = sin(a);
        return mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c);
      }

      mat3 rotateZ(float a) {
        float c = cos(a); float s = sin(a);
        return mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0);
      }

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 5; ++i) {
          v += a * noise(p);
          p = rot * p * 2.15 + shift;
          a *= 0.48;
        }
        return v;
      }

      // Domain warping for hyper-realistic continental geology
      float domainWarpTerrain(vec2 p) {
        vec2 q = vec2(fbm(p), fbm(p + vec2(5.2, 1.3)));
        vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2)), fbm(p + 4.0 * q + vec2(8.3, 2.8)));
        return fbm(p + 3.8 * r);
      }

      void main() {
        // Fullscreen UV coordinates: center is (0.0, 0.0) regardless of aspect ratio
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);

        // Fixed camera ray across entire viewport
        vec3 ro = vec3(0.0, 0.0, 3.2);
        vec3 rd = normalize(vec3(uv, -1.8));

        // Center sphere slightly elevated for majestic composition with typography
        vec3 sphereCenter = vec3(0.0, 0.08, 0.0);
        float sphereRadius = 0.98;

        // Sunlight source vector (illuminating from top-left, slightly toward camera)
        vec3 lightDir = normalize(vec3(-1.3, 0.85, 1.4));

        // Ray-Sphere intersection
        vec3 oc = ro - sphereCenter;
        float b = dot(oc, rd);
        float c = dot(oc, oc) - sphereRadius * sphereRadius;
        float h = b * b - c;

        vec4 finalColor = vec4(0.0);

        // --- 1. Atmospheric Rayleigh & Mie Outer Glow ---
        float distToCenter = length(oc - dot(oc, rd) * rd);
        if (distToCenter > sphereRadius && distToCenter < sphereRadius * 1.55) {
          float altitude = (distToCenter - sphereRadius) / (sphereRadius * 0.55);
          float atmoDensity = exp(-altitude * 4.4) * smoothstep(1.0, 0.8, altitude);

          // Sunlight forward scattering (crescent rim illumination)
          vec2 toLimb = normalize(uv - sphereCenter.xy);
          float sunDot = dot(toLimb, normalize(lightDir.xy));
          float sunFacing = smoothstep(-0.35, 0.85, sunDot);

          vec3 rayleighColor = mix(vec3(0.545, 0.361, 0.965), vec3(0.22, 0.741, 0.973), altitude);
          vec3 mieGlow = vec3(0.92, 0.96, 1.0) * pow(max(sunFacing, 0.0), 2.8);

          vec3 atmosphereLight = (rayleighColor + mieGlow * 0.65) * atmoDensity * (0.3 + sunFacing * 0.9);
          finalColor += vec4(atmosphereLight, atmoDensity * 0.65 * (0.25 + sunFacing * 0.75));
        }

        // --- 2. Dual Tilted Orbital Rings Definition ---
        // Tilted ring plane (Saturnian 23.4° polar inclination + subtle mouse tilt)
        float ringTiltZ = 0.38 + u_mouse.x * 0.06;
        float ringTiltX = 0.22 - u_mouse.y * 0.06;
        mat3 ringRot = rotateZ(ringTiltZ) * rotateX(ringTiltX);
        vec3 ringNormal = ringRot * vec3(0.0, 1.0, 0.0);

        // Rings extend majestically across the widescreen canvas
        float rInner = 1.35;
        float rOuter = 2.45;

        float tSphere = (h > 0.0) ? (-b - sqrt(h)) : -1.0;
        float tRing = -1.0;
        float ringDenom = dot(rd, ringNormal);
        if (abs(ringDenom) > 0.0001) {
          tRing = -dot(oc, ringNormal) / ringDenom;
        }

        // --- 3. Shading the Photorealistic Planet Surface ---
        if (h > 0.0 && tSphere > 0.0) {
          vec3 hitPos = ro + tSphere * rd;
          vec3 normal = normalize(hitPos - sphereCenter);

          // Rotate planetary coordinate system inside anchored sphere
          mat3 planetRotMatrix = rotateX(u_planetRot.y + u_mouse.y * 0.1) * rotateY(u_planetRot.x + u_mouse.x * 0.12);
          vec3 localNorm = planetRotMatrix * normal;

          // Spherical latitude & longitude
          float lon = atan(localNorm.z, localNorm.x);
          float lat = acos(clamp(localNorm.y, -1.0, 1.0));
          vec2 sphereUV = vec2(lon / (2.0 * PI) + 0.5, lat / PI);

          // Domain-warped continental landmass map
          float continent = domainWarpTerrain(sphereUV * vec2(6.5, 3.25));

          // Dual cloud layers with independent atmospheric wind velocities
          float cloudTime1 = u_time * 0.022;
          float cloudTime2 = u_time * 0.014;
          float clouds1 = fbm(sphereUV * vec2(10.0, 4.0) + vec2(cloudTime1, 0.0));
          float clouds2 = fbm(sphereUV * vec2(20.0, 8.0) - vec2(cloudTime2, 0.0));
          float cloudDensity = smoothstep(0.44, 0.78, clouds1 * 0.65 + clouds2 * 0.35);

          // Realistic Color Palette (Deep ocean -> coastal shelves -> landmass -> mountains)
          vec3 deepAbyss = vec3(0.015, 0.015, 0.06);     // Dark oceanic basin
          vec3 shelfWater = vec3(0.05, 0.18, 0.42);     // Coastal turquoise
          vec3 shoreCyan = vec3(0.12, 0.58, 0.82);      // Shallow coral reef
          vec3 landLowland = vec3(0.10, 0.12, 0.28);    // Continental shelf
          vec3 highlands = vec3(0.24, 0.18, 0.52);      // Plateau ridges
          vec3 mountainPeaks = vec3(0.55, 0.36, 0.96);   // Violet mountain ranges
          vec3 snowCaps = vec3(0.88, 0.92, 1.0);        // Polar & mountain snow

          // Ocean layer
          vec3 oceanCol = mix(deepAbyss, shelfWater, smoothstep(0.25, 0.46, continent));
          oceanCol = mix(oceanCol, shoreCyan, smoothstep(0.46, 0.495, continent));

          // Land layer
          vec3 landCol = mix(landLowland, highlands, smoothstep(0.50, 0.65, continent));
          landCol = mix(landCol, mountainPeaks, smoothstep(0.65, 0.82, continent));
          landCol = mix(landCol, snowCaps, smoothstep(0.82, 0.94, continent));

          // Blend ocean and land
          float isLand = smoothstep(0.49, 0.51, continent);
          vec3 surfaceCol = mix(oceanCol, landCol, isLand);

          // --- 3D Cloud Shadows Cast Onto Surface ---
          vec3 localLight = planetRotMatrix * lightDir;
          vec2 shadowUV = sphereUV - localLight.xy * 0.016;
          float cloudShadowSample = fbm(shadowUV * vec2(10.0, 4.0) + vec2(cloudTime1, 0.0));
          float cloudShadow = 1.0 - smoothstep(0.48, 0.76, cloudShadowSample) * 0.55;
          surfaceCol *= cloudShadow;

          // Blend volumetric clouds over surface
          vec3 cloudCol = mix(vec3(0.92, 0.96, 1.0), vec3(0.98, 0.90, 1.0), clouds1);
          surfaceCol = mix(surfaceCol, cloudCol, cloudDensity * 0.78);

          // --- Lighting: Diffuse, Wrap & Specular ---
          float NdotL = dot(normal, lightDir);
          float diffuse = max(NdotL, 0.0);
          float wrapLight = max((NdotL + 0.18) / 1.18, 0.0);

          // Specular sun glint on open water (masked by land and clouds)
          vec3 halfVec = normalize(lightDir - rd);
          float specN = max(dot(normal, halfVec), 0.0);
          float oceanGlint = pow(specN, 36.0) * (1.0 - isLand) * (1.0 - cloudDensity) * 0.85;

          // Rayleigh limb Fresnel
          float fresnel = pow(1.0 - max(dot(-rd, normal), 0.0), 3.0);
          vec3 atmosphereRim = mix(vec3(0.22, 0.741, 0.973), vec3(0.85, 0.27, 0.94), fresnel);

          // --- Ring Shadow Cast Onto the Planet ---
          float ringShadowFactor = 1.0;
          float shadowDenom = dot(lightDir, ringNormal);
          if (abs(shadowDenom) > 0.001) {
            vec3 hitRelative = hitPos - sphereCenter;
            float tShadowRing = -dot(hitRelative, ringNormal) / shadowDenom;
            if (tShadowRing > 0.0) {
              vec3 shadowRingHit = hitRelative + tShadowRing * lightDir;
              float shadowDist = length(shadowRingHit);
              if (shadowDist > rInner && shadowDist < rOuter) {
                float normDist = (shadowDist - rInner) / (rOuter - rInner);
                float cassiniPass = smoothstep(0.02, 0.08, abs(normDist - 0.56));
                ringShadowFactor = 0.25 + 0.75 * (1.0 - cassiniPass);
              }
            }
          }

          // Shaded day side
          vec3 planetShaded = surfaceCol * (diffuse * ringShadowFactor + 0.035) + oceanGlint * ringShadowFactor + atmosphereRim * fresnel * 0.9 * wrapLight;

          // --- Night Side: Bio-Luminescent City Light Networks ---
          float nightSide = smoothstep(0.05, -0.25, NdotL);
          if (nightSide > 0.0) {
            float cityNoise = fbm(sphereUV * vec2(32.0, 16.0));
            float coastalProximity = (1.0 - abs(continent - 0.52) * 4.0) * isLand;
            float cityMask = smoothstep(0.58, 0.78, cityNoise) * max(coastalProximity, 0.1);

            vec3 cityColor = mix(vec3(0.98, 0.75, 0.35), vec3(0.22, 0.74, 0.97), cityNoise);
            planetShaded += cityColor * cityMask * nightSide * 0.85;
          }

          finalColor = vec4(planetShaded, 1.0);
        }

        // --- 4. Shading the Photorealistic Planetary Rings Across Viewport ---
        if (tRing > 0.0) {
          vec3 ringHit = ro + tRing * rd;
          vec3 ringHitRelative = ringHit - sphereCenter;
          float ringDist = length(ringHitRelative);

          if (ringDist > rInner && ringDist < rOuter) {
            // Planet occlusion: if ring is behind planet, discard
            bool occluded = (h > 0.0 && tSphere > 0.0 && tRing > tSphere);

            if (!occluded) {
              float normRing = (ringDist - rInner) / (rOuter - rInner);

              // Photorealistic Cassini Division (dark gap at 0.56) and Encke Gap (at 0.88)
              float cassiniGap = smoothstep(0.025, 0.055, abs(normRing - 0.56));
              float enckeGap = smoothstep(0.01, 0.025, abs(normRing - 0.88));

              // Ring fine dust banding
              float fineRings = sin(normRing * 150.0) * 0.5 + 0.5;
              float broadBands = sin(normRing * 30.0) * 0.5 + 0.5;
              float ringStructure = (fineRings * 0.35 + broadBands * 0.65) * cassiniGap * enckeGap;

              // Planet umbra shadow cast onto the ring!
              float planetShadowOnRing = 1.0;
              vec3 toLight = lightDir;
              float bShadow = dot(ringHitRelative, toLight);
              float cShadow = dot(ringHitRelative, ringHitRelative) - sphereRadius * sphereRadius;
              if (bShadow < 0.0 && (bShadow * bShadow - cShadow) > 0.0) {
                planetShadowOnRing = 0.12; // In dark umbra shadow
              }

              // Ring color gradient: Electric Cyan -> Cosmic Violet -> Dusty Magenta
              vec3 ringColor = mix(vec3(0.22, 0.741, 0.973), vec3(0.545, 0.361, 0.965), normRing);
              ringColor = mix(ringColor, vec3(0.85, 0.27, 0.94), smoothstep(0.68, 1.0, normRing));
              ringColor *= (0.65 + ringStructure * 0.45) * planetShadowOnRing;

              // Soft edge fading at inner and outer boundaries so rings fade to 0 naturally
              float edgeAlpha = smoothstep(0.0, 0.06, normRing) * smoothstep(1.0, 0.86, normRing);
              float ringAlpha = edgeAlpha * (0.35 + ringStructure * 0.48) * cassiniGap;

              finalColor = mix(finalColor, vec4(ringColor, 1.0), ringAlpha * 0.88);
            }
          }
        }

        gl_FragColor = finalColor;
      }
    `;

    const createShader = (type, src) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader error: ", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, vertexShaderSrc);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSrc);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error: ", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPosLoc);
    gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

    const uResLoc = gl.getUniformLocation(program, "u_resolution");
    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uMouseLoc = gl.getUniformLocation(program, "u_mouse");
    const uPlanetRotLoc = gl.getUniformLocation(program, "u_planetRot");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const displayWidth = Math.floor(canvas.clientWidth * dpr);
      const displayHeight = Math.floor(canvas.clientHeight * dpr);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    window.addEventListener("resize", resize, { passive: true });
    resize();

    let lastTime = performance.now();

    const render = (currentTime) => {
      resize();

      const dt = Math.min((currentTime - lastTime) * 0.001, 0.05);
      lastTime = currentTime;

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      if (!isDragging) {
        dragVelocityX *= 0.94;
        dragVelocityY *= 0.94;
        currentRotY += dragVelocityX;
        currentRotX += dragVelocityY;

        if (!reduce) {
          currentRotY += 0.035 * dt;
        }
      }

      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform1f(uTimeLoc, currentTime * 0.001);
      gl.uniform2f(uMouseLoc, mouseX, mouseY);
      gl.uniform2f(uPlanetRotLoc, currentRotY, currentRotX);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(program);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, [reduce]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "auto",
        cursor: "grab",
        "&:active": { cursor: "grabbing" },
      }}
    >
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

export default HeroPlanet;
