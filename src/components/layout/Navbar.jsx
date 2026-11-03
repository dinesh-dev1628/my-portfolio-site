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
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll position & active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      setScrolled(window.scrollY > 40);

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
          transition: "padding 0.3s ease",
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
                ? "rgba(10, 13, 22, 0.82)"
                : "rgba(10, 13, 22, 0.5)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid",
              borderColor: scrolled
                ? "rgba(96, 165, 250, 0.18)"
                : "rgba(255, 255, 255, 0.08)",
              boxShadow: scrolled
                ? "0 10px 35px -5px rgba(0, 0, 0, 0.6), 0 0 15px rgba(96, 165, 250, 0.08)"
                : "0 6px 20px rgba(0, 0, 0, 0.3)",
              transition: "all 0.35s ease",
            }}
          >
            {/* Logo / Personal Brand */}
            <Box
              onClick={() => scrollTo("home")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#60A5FA",
                  boxShadow: "0 0 10px #60A5FA",
                  animation: "pulse-glow 3s infinite ease-in-out",
                }}
              />
              <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    letterSpacing: "-0.02em",
                    color: "#F8FAFC",
                  }}
                >
                  DINESH
                </span>
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#60A5FA",
                    letterSpacing: "0.08em",
                  }}
                >
                  // CYBERSPACE
                </span>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.8,
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                p: 0.4,
                borderRadius: "999px",
                border: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Box
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    sx={{
                      position: "relative",
                      px: 2,
                      py: 0.7,
                      borderRadius: "999px",
                      cursor: "pointer",
                      userSelect: "none",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: 999,
                          backgroundColor: "rgba(96, 165, 250, 0.12)",
                          border: "1px solid rgba(96, 165, 250, 0.35)",
                          boxShadow: "0 0 12px rgba(96, 165, 250, 0.2)",
                        }}
                      />
                    )}
                    <span
                      style={{
                        position: "relative",
                        zIndex: 1,
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.86rem",
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? "#F8FAFC" : "#94A3B8",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {item.label}
                    </span>
                  </Box>
                );
              })}
            </Box>

            {/* Actions: Resume CTA & Mobile Menu Button */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={handleResumeClick}
                endIcon={<NorthEast sx={{ fontSize: "0.95rem !important" }} />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  px: 2.2,
                  py: 0.65,
                  borderRadius: "999px",
                  borderColor: "rgba(255, 255, 255, 0.14)",
                  color: "#F8FAFC",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.02em",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  "&:hover": {
                    borderColor: "#60A5FA",
                    backgroundColor: "rgba(96, 165, 250, 0.08)",
                    boxShadow: "0 0 15px rgba(96, 165, 250, 0.25)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                Resume
              </Button>

              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{
                  display: { md: "none" },
                  color: "#F8FAFC",
                  p: 0.8,
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" },
                }}
                aria-label="Open navigation menu"
              >
                <MenuIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Sleek Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "85%", sm: "400px" },
            maxWidth: "100%",
            backgroundColor: "rgba(5, 6, 10, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <Box>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pb: 3,
              borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#60A5FA",
                }}
              />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#F8FAFC",
                }}
              >
                CYBERSPACE // NAV
              </span>
            </Box>
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{ color: "#94A3B8" }}
              aria-label="Close navigation menu"
            >
              <Close fontSize="small" />
            </IconButton>
          </Box>

          {/* Links list */}
          <List sx={{ mt: 3, p: 0 }}>
            {navLinks.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => scrollTo(item.id)}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderRadius: "12px",
                      backgroundColor: isActive
                        ? "rgba(96, 165, 250, 0.08)"
                        : "transparent",
                      border: "1px solid",
                      borderColor: isActive
                        ? "rgba(96, 165, 250, 0.3)"
                        : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <span
                        style={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.75rem",
                          color: isActive ? "#60A5FA" : "#64748B",
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "1.15rem",
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? "#F8FAFC" : "#94A3B8",
                        }}
                      />
                    </Box>
                    {isActive && (
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#60A5FA",
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* Drawer Footer Actions */}
        <Box sx={{ pt: 3, borderTop: "1px solid rgba(255, 255, 255, 0.07)" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleResumeClick}
            endIcon={<NorthEast />}
            sx={{
              py: 1.4,
              borderRadius: "14px",
              backgroundColor: "rgba(96, 165, 250, 0.15)",
              color: "#F8FAFC",
              border: "1px solid rgba(96, 165, 250, 0.4)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              "&:hover": {
                backgroundColor: "rgba(96, 165, 250, 0.25)",
              },
            }}
          >
            View Full Resume
          </Button>

          <Typography
            sx={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.7rem",
              color: "#475569",
              textAlign: "center",
              mt: 2,
              letterSpacing: 1.5,
            }}
          >
            ENGINEERED FOR DEEP SPACE // 2026
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
