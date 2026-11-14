import { createTheme } from "@mui/material";
import { colors, typography } from "./tokens.js";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: colors.space.black,
      paper: colors.space.surface,
    },
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
    },
    secondary: {
      main: colors.accent.violet,
      light: "#A78BFA",
      dark: "#7C3AED",
    },
    info: {
      main: colors.accent.cyan,
    },
    success: {
      main: colors.accent.emerald,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.muted,
    },
    divider: colors.border.subtle,
  },
  typography: {
    fontFamily: typography.fontBody,
    h1: {
      fontFamily: typography.fontDisplay,
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily: typography.fontDisplay,
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontFamily: typography.fontDisplay,
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: typography.fontDisplay,
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontFamily: typography.fontDisplay,
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontFamily: typography.fontDisplay,
      fontWeight: 600,
    },
    button: {
      fontFamily: typography.fontDisplay,
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          minHeight: 44, // WCAG touch target
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontMono,
        },
      },
    },
  },
});
