import { Box, Typography, Button, Container } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#020617",
        // Added padding for mobile to prevent content touching edges
        px: { xs: 2, sm: 0 },
      }}
    >
      {/* Background Glow Orbs - Made sizes relative to viewport for better scaling */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: { xs: "200px", md: "300px" },
          height: { xs: "200px", md: "300px" },
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: { xs: "250px", md: "350px" },
          height: { xs: "250px", md: "350px" },
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center" }}>
          {/* Status Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              px: 2,
              py: 0.8,
              borderRadius: "50px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              mb: { xs: 3, md: 4 }, // Reduced margin for mobile
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#10b981",
                boxShadow: "0 0 10px #10b981",
              }}
            />
            <Typography variant="caption" sx={{ color: "#cbd5e1", fontWeight: 500, letterSpacing: 1 }}>
              AVAILABLE FOR NEW PROJECTS
            </Typography>
          </Box>

          {/* Main Title - Responsive sizes */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" }, // Fluid typography
              fontWeight: 800,
              lineHeight: { xs: 1.2, md: 1.1 },
              mb: 3,
              color: "#fff",
              letterSpacing: { xs: -1, md: -2 },
            }}
          >
            Hi, I’m{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60a5fa, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dinesh
            </span>
          </Typography>

          {/* Subtitle - Responsive width and font */}
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem" },
              color: "#94a3b8",
              maxWidth: { xs: "100%", md: "600px" },
              mx: "auto",
              mb: 5,
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Building high-performance <span style={{ color: "#fff", fontWeight: 500 }}>Frontend</span> interfaces 
            and <span style={{ color: "#fff", fontWeight: 500 }}>Automation</span> workflows with React & Python.
          </Typography>

          {/* Buttons - Stack on mobile, Row on desktop */}
          <Box 
            sx={{ 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" }, // Key responsive change
              gap: 2, 
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="contained"
              fullWidth={{ xs: true, sm: false }} // Full width only on mobile
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                "&:hover": { transform: "translateY(-3px)", boxShadow: "0 15px 25px rgba(59, 130, 246, 0.4)" },
                transition: "all 0.3s",
              }}
            >
              View Work
            </Button>
            <Button
              variant="outlined"
              fullWidth={{ xs: true, sm: false }} // Full width only on mobile
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#fff",
                borderColor: "rgba(255,255,255,0.2)",
                "&:hover": { borderColor: "#fff", backgroundColor: "rgba(255,255,255,0.05)" },
                transition: "all 0.3s",
              }}
            >
              Let's Talk
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Scroll Down Indicator - Hidden on extra small mobile to save space */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.3)",
          display: { xs: "none", sm: "block" }, // Only show on tablets/desktop
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": { transform: "translateX(-50%) translateY(0)" },
            "40%": { transform: "translateX(-50%) translateY(-10px)" },
            "60%": { transform: "translateX(-50%) translateY(-5px)" },
          },
        }}
      >
        <ArrowDownward />
      </Box>
    </Box>
  );
};

export default Hero;