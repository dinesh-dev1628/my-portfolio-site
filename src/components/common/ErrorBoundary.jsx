import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: "#05060A",
            color: "#F8FAFC",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            textAlign: "center",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                mb: 2,
                color: "#60A5FA",
              }}
            >
              SIGNAL INTERRUPTED
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.85rem",
                color: "#94A3B8",
                mb: 4,
              }}
            >
              A cosmic glitch occurred while rendering the universe.
              {this.state.error?.message && (
                <Box
                  component="pre"
                  sx={{
                    mt: 2,
                    p: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    borderRadius: "8px",
                    textAlign: "left",
                    overflowX: "auto",
                    fontSize: "0.75rem",
                    color: "#F87171",
                  }}
                >
                  {this.state.error.message}
                </Box>
              )}
            </Typography>
            <Button
              variant="outlined"
              onClick={this.handleReload}
              sx={{
                borderColor: "#60A5FA",
                color: "#60A5FA",
                borderRadius: "10px",
                "&:hover": {
                  borderColor: "#93C5FD",
                  backgroundColor: "rgba(96, 165, 250, 0.1)",
                },
              }}
            >
              Re-initialize Systems
            </Button>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
