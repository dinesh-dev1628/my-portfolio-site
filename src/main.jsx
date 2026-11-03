import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App.jsx";
import ErrorBoundary from "./components/common/ErrorBoundary.jsx";
import "./style/index.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#05060A",
      paper: "#101522",
    },
    primary: {
      main: "#60A5FA",
      light: "#93C5FD",
      dark: "#2563EB",
    },
    secondary: {
      main: "#8B5CF6",
      light: "#A78BFA",
      dark: "#7C3AED",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },
    divider: "rgba(255, 255, 255, 0.08)",
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "'Space Grotesk', sans-serif",
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
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
