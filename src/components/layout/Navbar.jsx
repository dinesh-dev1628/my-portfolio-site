import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Close, NorthEast } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
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
                    letterSpacing: 2,
                    color: "#9292A8",
                    lineHeight: 1,
                  }}
                >
                  DIGITAL UNIVERSE
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                p: 0.5,
                borderRadius: "999px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Box
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    sx={{
                      position: "relative",
                      px: 2.2,
                      py: 0.8,
                      borderRadius: "999px",
                      cursor: "pointer",
                      userSelect: "none",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-glow"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "999px",
                          backgroundColor: "rgba(139, 92, 246, 0.16)",
                          border: "1px solid rgba(56, 189, 248, 0.4)",
                          boxShadow: "0 0 16px rgba(56, 189, 248, 0.25)",
                        }}
                      />
                    )}
                    <Typography
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.75rem",
                        fontWeight: isActive ? 600 : 500,
                        letterSpacing: 1.5,
                        color: isActive ? "#F5F5FA" : "#9292A8",
                        transition: "color 0.2s ease",
                        "&:hover": {
                          color: "#F5F5FA",
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            {/* Right Action: CV / Live Terminal Link */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Button
                variant="outlined"
                onClick={handleResumeClick}
                endIcon={<NorthEast sx={{ fontSize: "0.95rem !important" }} />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  py: 0.8,
                  px: 2.2,
                  borderRadius: "999px",
                  fontSize: "0.78rem",
                  fontFamily: "'Geist Mono', monospace",
                  fontWeight: 600,
                  letterSpacing: 1,
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

              {/* Mobile Hamburger Menu Toggle */}
              <IconButton
                aria-label="open mobile navigation"
                onClick={() => setMobileOpen(true)}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "#F5F5FA",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  p: 1,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <MenuIcon sx={{ fontSize: "1.25rem" }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Mobile Celestial Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "82%",
            maxWidth: "340px",
            backgroundColor: "rgba(5, 5, 16, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderLeft: "1px solid rgba(139, 92, 246, 0.25)",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <Box>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pb: 3,
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#38BDF8",
                  boxShadow: "0 0 10px #38BDF8",
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
                NAVIGATION
              </Typography>
            </Box>

            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                color: "#9292A8",
                "&:hover": { color: "#F5F5FA" },
              }}
            >
              <Close />
            </IconButton>
          </Box>

          {/* Links List */}
          <List sx={{ p: 0 }}>
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <ListItem key={link.id} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => scrollTo(link.id)}
                    sx={{
                      py: 1.6,
                      px: 2,
                      borderRadius: "14px",
                      backgroundColor: isActive
                        ? "rgba(139, 92, 246, 0.15)"
                        : "transparent",
                      border: "1px solid",
                      borderColor: isActive
                        ? "rgba(56, 189, 248, 0.35)"
                        : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.7rem",
                        color: isActive ? "#38BDF8" : "#676780",
                        width: "28px",
                      }}
                    >
                      0{idx + 1}
                    </Typography>
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: isActive ? "#F5F5FA" : "#9292A8",
                        letterSpacing: "0.04em",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* Drawer Footer CTA */}
        <Box sx={{ pt: 3, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleResumeClick}
            endIcon={<NorthEast />}
            sx={{
              py: 1.4,
              borderRadius: "12px",
              backgroundColor: "rgba(56, 189, 248, 0.15)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              color: "#F5F5FA",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              "&:hover": {
                backgroundColor: "rgba(56, 189, 248, 0.25)",
              },
            }}
          >
            VIEW RESUME
          </Button>
          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.65rem",
              color: "#9292A8",
              letterSpacing: 1,
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
