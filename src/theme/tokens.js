/**
 * Centralized Design Tokens for Digital Universe Theme
 */

export const colors = {
  space: {
    black: "#050510",
    deep: "#070714",
    surface: "#0D0E1F",
    surfaceElevated: "#14152E",
    glass: "rgba(13, 14, 31, 0.65)",
    glassHover: "rgba(20, 21, 46, 0.8)",
  },
  primary: {
    main: "#1976d2", // Requested primary color
    light: "#60a5fa",
    dark: "#0d47a1",
    glow: "rgba(25, 118, 210, 0.35)",
  },
  accent: {
    cyan: "#38bdf8",
    cyanGlow: "rgba(56, 189, 248, 0.35)",
    violet: "#8b5cf6",
    violetGlow: "rgba(139, 92, 246, 0.35)",
    magenta: "#d946ef",
    magentaGlow: "rgba(217, 70, 239, 0.3)",
    emerald: "#10b981",
    emeraldGlow: "rgba(16, 185, 129, 0.3)",
  },
  text: {
    primary: "#F8FAFC",
    secondary: "#CBD5E1",
    muted: "#94A3B8",
    subtle: "#64748B",
  },
  border: {
    subtle: "rgba(255, 255, 255, 0.08)",
    highlight: "rgba(56, 189, 248, 0.35)",
    violet: "rgba(139, 92, 246, 0.35)",
  },
};

export const typography = {
  fontDisplay: "'Space Grotesk', sans-serif",
  fontBody: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  fontMono: "'Geist Mono', monospace",
};

export const transitions = {
  default: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
  slow: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
};
