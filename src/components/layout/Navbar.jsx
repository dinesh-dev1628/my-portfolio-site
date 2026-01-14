import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Description, Menu as MenuIcon, Close } from "@mui/icons-material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMobileOpen(false); // Close mobile menu after clicking
  };

  const handleResumeClick = () => {
    window.open("https://dinesh-dev1628.github.io/resume/", "_blank");
  };

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "transparent",
        pt: { xs: 1, sm: 2 }, // Tighter on mobile
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            borderRadius: "50px",
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            px: { xs: 2, sm: 4 },
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          {/* Logo / Name */}
          <Typography
            variant="h6"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              fontWeight: 800,
              cursor: "pointer",
              letterSpacing: -0.5,
              background: "linear-gradient(90deg, #60a5fa, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dinesh<span style={{ WebkitTextFillColor: "#fff" }}>.</span>
          </Typography>

          {/* Desktop Nav Items - Hidden on Mobile */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                sx={{
                  color: "#cbd5e1",
                  textTransform: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  px: 2,
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Resume Button - Hidden on very small screens (xs) */}
            <Button
              variant="contained"
              size="small"
              startIcon={<Description />}
              onClick={handleResumeClick}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
              }}
            >
              Resume
            </Button>

            {/* Hamburger Menu - Visible only on Mobile */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Modern Creative Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: "100%", // Full screen for creative feel
            backgroundColor: "rgba(2, 6, 23, 0.95)",
            backdropFilter: "blur(15px)",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ p: 3, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
            <Close fontSize="large" />
          </IconButton>
        </Box>
        
        <List sx={{ mt: 5 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton 
                onClick={() => scrollToSection(item.toLowerCase())}
                sx={{ textAlign: "center", py: 3 }}
              >
                <ListItemText 
                  primary={item} 
                  primaryTypographyProps={{ 
                    fontSize: "2rem", 
                    fontWeight: 700,
                    letterSpacing: 2
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
             <Button
                variant="contained"
                startIcon={<Description />}
                onClick={handleResumeClick}
                sx={{
                  borderRadius: "50px",
                  px: 4,
                  py: 1.5,
                  background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                }}
              >
                See Resume
              </Button>
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;