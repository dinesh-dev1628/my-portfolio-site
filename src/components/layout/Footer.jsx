import React from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import { ArrowUpward, GitHub, LinkedIn, Description, Instagram } from "@mui/icons-material";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        backgroundColor: "rgba(5, 5, 16, 0.9)",
        backdropFilter: "blur(16px)",
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
            <Stack direction="row" alignItems="center" spacing={1.2} mb={0.5}>
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#38BDF8",
                  boxShadow: "0 0 10px #38BDF8",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  letterSpacing: "-0.01em",
                  color: "#F5F5FA",
                }}
              >
                DINESH <span style={{ color: "#38BDF8" }}>//</span> DIGITAL UNIVERSE
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                color: "#9292A8",
                letterSpacing: 1,
              }}
            >
              Exploring the frontiers of automation, systems, and creative code.
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
                color: "#9292A8",
                "&:hover": { color: "#F5F5FA", backgroundColor: "rgba(255, 255, 255, 0.05)" },
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
                color: "#9292A8",
                "&:hover": { color: "#38BDF8", backgroundColor: "rgba(255, 255, 255, 0.05)" },
              }}
            >
              <LinkedIn fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              href="https://www.instagram.com/dinesh.genz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              sx={{
                color: "#9292A8",
                "&:hover": { color: "#D946EF", backgroundColor: "rgba(255, 255, 255, 0.05)" },
              }}
            >
              <Instagram fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              href="https://dinesh-dev1628.github.io/resume/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume Document"
              sx={{
                color: "#9292A8",
                "&:hover": { color: "#8B5CF6", backgroundColor: "rgba(255, 255, 255, 0.05)" },
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
                color: "#F5F5FA",
                p: 1,
                "&:hover": {
                  borderColor: "#38BDF8",
                  backgroundColor: "rgba(56, 189, 248, 0.1)",
                  color: "#38BDF8",
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
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
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
              color: "#676780",
            }}
          >
            &copy; {new Date().getFullYear()} DINESH. ENGINEERED FOR HIGH PERFORMANCE.
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.68rem",
              color: "#676780",
            }}
          >
            CINEMATIC DIGITAL UNIVERSE &bull; REACT 19 &bull; WEBGL
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
