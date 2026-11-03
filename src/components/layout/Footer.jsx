import React from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import { ArrowUpward, GitHub, LinkedIn, Description } from "@mui/icons-material";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        backgroundColor: "rgba(5, 6, 10, 0.85)",
        backdropFilter: "blur(12px)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {/* Brand & Concept */}
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#60A5FA",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "-0.02em",
                  color: "#F8FAFC",
                }}
              >
                DINESH <span style={{ color: "#60A5FA" }}>//</span> CYBERSPACE
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.72rem",
                color: "#64748B",
                letterSpacing: 1,
              }}
            >
              A universe of ideas. Engineered into reality.
            </Typography>
          </Box>

          {/* Social Icons & Back to Top */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <IconButton
              size="small"
              href="https://github.com/dinesh-dev1628"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              sx={{
                color: "#94A3B8",
                "&:hover": { color: "#F8FAFC", backgroundColor: "rgba(255, 255, 255, 0.05)" },
              }}
            >
              <GitHub fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              href="https://www.linkedin.com/in/dineshm-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              sx={{
                color: "#94A3B8",
                "&:hover": { color: "#60A5FA", backgroundColor: "rgba(255, 255, 255, 0.05)" },
              }}
            >
              <LinkedIn fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              href="https://dinesh-dev1628.github.io/resume/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume Document"
              sx={{
                color: "#94A3B8",
                "&:hover": { color: "#A78BFA", backgroundColor: "rgba(255, 255, 255, 0.05)" },
              }}
            >
              <Description fontSize="small" />
            </IconButton>

            <Box sx={{ width: 1, height: 20, backgroundColor: "rgba(255, 255, 255, 0.1)", mx: 1 }} />

            {/* Scroll to Top */}
            <IconButton
              onClick={scrollToTop}
              aria-label="Scroll to top of universe"
              sx={{
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#F8FAFC",
                p: 1,
                "&:hover": {
                  borderColor: "#60A5FA",
                  backgroundColor: "rgba(96, 165, 250, 0.1)",
                  color: "#60A5FA",
                },
                transition: "all 0.25s ease",
              }}
            >
              <ArrowUpward fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        {/* Bottom copyright line */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(255, 255, 255, 0.04)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.68rem",
              color: "#475569",
            }}
          >
            &copy; {new Date().getFullYear()} DINESH. ALL RIGHTS RESERVED.
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.68rem",
              color: "#475569",
            }}
          >
            PRECISION FRONTEND ARCHITECTURE &bull; REACT 19 &bull; FRAMER MOTION
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
