import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80; // Adjusted for the floating navbar gap
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "transparent", // Background starts transparent
        pt: 2, // Gives it a "floating" look
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            borderRadius: "50px", // Capsule shape
            backgroundColor: "rgba(15, 23, 42, 0.8)", // Dark slate with transparency
            backdropFilter: "blur(12px)", // Glassmorphism
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

          {/* Desktop Nav Items */}
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

          {/* Mobile "Let's Talk" Button or Icon */}
          <Button
            variant="contained"
            size="small"
            onClick={() => scrollToSection("contact")}
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 600,
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              "&:hover": {
                opacity: 0.9,
                transform: "translateY(-1px)",
              },
              transition: "all 0.2s",
            }}
          >
            Hire Me
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;