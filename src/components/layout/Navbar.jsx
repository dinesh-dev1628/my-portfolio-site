import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Button,
  Typography,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close,
  NorthEast,
  GitHub,
  LinkedIn,
  Instagram,
  Email,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "home", label: "HOME", sector: "ORBITAL CORE" },
  { id: "about", label: "ABOUT", sector: "ORIGIN & BIO" },
  { id: "skills", label: "SKILLS", sector: "TECH ARSENAL" },
  { id: "projects", label: "PROJECTS", sector: "SPACE MISSIONS" },
  { id: "experience", label: "EXPERIENCE", sector: "CHRONOLOGY" },
  { id: "contact", label: "CONNECT", sector: "NEXUS CHANNELS" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      setScrolled(window.scrollY > 30);

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = id === "home" ? 0 : -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const handleResumeClick = () => {
    window.open("https://dinesh-dev1628.github.io/resume/", "_blank");
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          py: { xs: 1.5, md: 2.5 },
          transition: "padding 0.35s ease",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: { xs: 2.2, md: 3 },
              py: 1,
              borderRadius: "999px",
              backgroundColor: scrolled
                ? "rgba(10, 10, 24, 0.85)"
                : "rgba(5, 5, 16, 0.4)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid",
              borderColor: scrolled
                ? "rgba(139, 92, 246, 0.25)"
                : "rgba(255, 255, 255, 0.08)",
              boxShadow: scrolled
                ? "0 10px 35px -5px rgba(0, 0, 0, 0.7), 0 0 20px rgba(56, 189, 248, 0.1)"
                : "0 4px 20px rgba(0, 0, 0, 0.3)",
              transition: "all 0.35s ease",
            }}
          >
            {/* Brand Logo / Celestial Telemetry */}
            <Box
              onClick={() => scrollTo("home")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.4,
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              {/* Pulsing Core Beacon */}
              <Box
                sx={{
                  position: "relative",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#38BDF8",
                  boxShadow: "0 0 10px #38BDF8, 0 0 20px #8B5CF6",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: -4,
                    borderRadius: "50%",
                    border: "1px solid rgba(56, 189, 248, 0.5)",
                    animation: "pulse-glow 2.5s ease-in-out infinite",
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    letterSpacing: "0.08em",
                    color: "#F5F5FA",
                    lineHeight: 1.1,
                  }}
                >
                  DINESH
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.62rem",
                    color: "#9292A8",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  DIGITAL UNIVERSE
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              component="nav"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.8,
              }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    sx={{
                      position: "relative",
                      px: 2,
                      py: 0.8,
                      borderRadius: "999px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      color: isActive ? "#F5F5FA" : "#9292A8",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        color: "#F5F5FA",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                      },
                    }}
                  >
                    {link.label}

                    {/* Active Animated Glowing Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: "25%",
                          right: "25%",
                          height: 2,
                          borderRadius: 2,
                          background:
                            "linear-gradient(90deg, #38BDF8, #8B5CF6, #D946EF)",
                          boxShadow: "0 0 10px #38BDF8",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Button>
                );
              })}
            </Box>

            {/* Right Side: Resume Button & Hamburger */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={handleResumeClick}
                endIcon={<NorthEast sx={{ fontSize: "0.85rem !important" }} />}
                sx={{
                  display: { xs: "none", sm: "flex" },
                  px: 2.2,
                  py: 0.7,
                  borderRadius: "999px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  color: "#38BDF8",
                  borderColor: "rgba(56, 189, 248, 0.35)",
                  backgroundColor: "rgba(56, 189, 248, 0.05)",
                  backdropFilter: "blur(8px)",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#38BDF8",
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    boxShadow: "0 0 16px rgba(56, 189, 248, 0.3)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                RESUME
              </Button>

              {/* Modern Mobile Hamburger Menu Toggle Button */}
              <IconButton
                aria-label="open mobile navigation"
                onClick={() => setMobileOpen(true)}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "#38BDF8",
                  backgroundColor: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  borderRadius: "14px",
                  p: 1.1,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: "rgba(56, 189, 248, 0.2)",
                    borderColor: "#38BDF8",
                    boxShadow: "0 0 16px rgba(56, 189, 248, 0.4)",
                  },
                }}
              >
                <MenuIcon sx={{ fontSize: "1.35rem" }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Modern Interactive Mobile Celestial Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "86%", sm: "360px" },
            maxWidth: "380px",
            backgroundColor: "rgba(7, 7, 24, 0.95)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            borderLeft: "1px solid rgba(56, 189, 248, 0.25)",
            boxShadow: "-15px 0 50px rgba(0, 0, 0, 0.9)",
            p: { xs: 2.8, sm: 3.5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          },
        }}
      >
        {/* Ambient Top Nebula Glow in Drawer */}
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            top: "-10%",
            right: "-15%",
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1 }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pb: 2.5,
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              mb: 3,
            }}
          >
            <Box>
              <Stack direction="row" alignItems="center" spacing={1.2}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#10B981",
                    boxShadow: "0 0 10px #10B981",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "#F5F5FA",
                    letterSpacing: "0.06em",
                  }}
                >
                  DINESH // UNIVERSE
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.62rem",
                  color: "#38BDF8",
                  letterSpacing: 1.5,
                  mt: 0.4,
                  pl: 2.2,
                }}
              >
                TELEMETRY READY
              </Typography>
            </Box>

            <IconButton
              onClick={() => setMobileOpen(false)}
              aria-label="close mobile menu"
              sx={{
                color: "#9292A8",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                p: 0.8,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#F5F5FA",
                  borderColor: "#38BDF8",
                  backgroundColor: "rgba(56, 189, 248, 0.15)",
                },
              }}
            >
              <Close sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>

          {/* Links List with Staggered Cosmic Items */}
          <List sx={{ p: 0 }}>
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <ListItem key={link.id} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => scrollTo(link.id)}
                    sx={{
                      py: 1.4,
                      px: 2,
                      borderRadius: "16px",
                      backgroundColor: isActive
                        ? "rgba(56, 189, 248, 0.12)"
                        : "rgba(255, 255, 255, 0.02)",
                      border: "1px solid",
                      borderColor: isActive
                        ? "rgba(56, 189, 248, 0.45)"
                        : "rgba(255, 255, 255, 0.05)",
                      boxShadow: isActive ? "0 0 20px rgba(56, 189, 248, 0.15)" : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "rgba(56, 189, 248, 0.08)",
                        borderColor: "rgba(56, 189, 248, 0.3)",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
                      <Typography
                        sx={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.72rem",
                          color: isActive ? "#38BDF8" : "#64748B",
                          fontWeight: 700,
                          width: "22px",
                        }}
                      >
                        0{idx + 1}
                      </Typography>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            color: isActive ? "#FFFFFF" : "#CBD5E1",
                            letterSpacing: "0.02em",
                            lineHeight: 1.2,
                          }}
                        >
                          {link.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "0.62rem",
                            color: isActive ? "#38BDF8" : "#9292A8",
                            letterSpacing: 1,
                            mt: 0.2,
                          }}
                        >
                          {link.sector}
                        </Typography>
                      </Box>
                    </Box>

                    {isActive && (
                      <Box
                        sx={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          backgroundColor: "#38BDF8",
                          boxShadow: "0 0 10px #38BDF8",
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          {/* Platform Quick Access Dock */}
          <Box sx={{ mt: 3, pt: 2.5, borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.65rem",
                color: "#8B5CF6",
                letterSpacing: 1.5,
                fontWeight: 700,
                mb: 1.5,
                textTransform: "uppercase",
              }}
            >
              ORBITAL CHANNELS:
            </Typography>
            <Stack direction="row" spacing={1.2}>
              <Tooltip title="GitHub" arrow>
                <IconButton
                  href="https://github.com/dinesh-dev1628"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 1.2,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#8B5CF6",
                    "&:hover": {
                      borderColor: "#8B5CF6",
                      backgroundColor: "rgba(139, 92, 246, 0.15)",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <GitHub sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="LinkedIn" arrow>
                <IconButton
                  href="https://www.linkedin.com/in/dineshm-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 1.2,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#38BDF8",
                    "&:hover": {
                      borderColor: "#38BDF8",
                      backgroundColor: "rgba(56, 189, 248, 0.15)",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <LinkedIn sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Instagram" arrow>
                <IconButton
                  href="https://www.instagram.com/dinesh.genz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 1.2,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#D946EF",
                    "&:hover": {
                      borderColor: "#D946EF",
                      backgroundColor: "rgba(217, 70, 239, 0.15)",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <Instagram sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Email" arrow>
                <IconButton
                  href="mailto:dineshm2816@gmail.com"
                  sx={{
                    p: 1.2,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#2DD4BF",
                    "&:hover": {
                      borderColor: "#2DD4BF",
                      backgroundColor: "rgba(45, 212, 191, 0.15)",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <Email sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
        </Box>

        {/* Drawer Footer CTA */}
        <Box sx={{ pt: 2.5, borderTop: "1px solid rgba(255, 255, 255, 0.08)", position: "relative", zIndex: 1 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleResumeClick}
            endIcon={<NorthEast sx={{ fontSize: 16 }} />}
            sx={{
              py: 1.5,
              borderRadius: "14px",
              background: "linear-gradient(90deg, #1976D2, #38BDF8)",
              color: "#FFFFFF",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.92rem",
              boxShadow: "0 0 25px rgba(56, 189, 248, 0.3)",
              "&:hover": {
                background: "linear-gradient(90deg, #1565C0, #0284C7)",
                boxShadow: "0 0 35px rgba(56, 189, 248, 0.5)",
              },
            }}
          >
            VIEW RESUME CV
          </Button>
          <Typography
            sx={{
              textAlign: "center",
              mt: 1.8,
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.62rem",
              color: "#9292A8",
              letterSpacing: 1.2,
            }}
          >
            SECTOR 0x7E // COSMIC EDITION
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
