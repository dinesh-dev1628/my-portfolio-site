import { Box, Typography, Container, Grid } from "@mui/material";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#020617",
        py: 15,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="flex-start">
          {/* Left Side: Large Stylized Title */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "sticky", top: "100px" }}>
              <Typography
                variant="h2"
                fontWeight={900}
                sx={{
                  color: "rgba(255, 255, 255, 0.05)", // Ghost text effect
                  lineHeight: 0.8,
                  fontSize: "6rem",
                  position: "absolute",
                  top: -40,
                  left: -10,
                  zIndex: 0,
                  userSelect: "none",
                }}
              >
                01
              </Typography>
              <Typography
                variant="h3"
                fontWeight={800}
                sx={{
                  color: "#fff",
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ color: "#3b82f6" }}>About</span>
                <span>Myself</span>
              </Typography>
              <Box
                sx={{
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                  mt: 2,
                }}
              />
            </Box>
          </Grid>

          {/* Right Side: Clean Narrative Text */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                pl: { md: 6, xs: 0 },
                borderLeftWidth: { xs: 0, md: "1px" },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#f8fafc",
                  mb: 3,
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                I bridge the gap between complex backend logic and 
                intuitive frontend experiences.
              </Typography>

              <Typography
                sx={{
                  color: "#94a3b8",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                My journey started with a passion for clean UI, which led me to master{" "}
                <b style={{ color: "#fff" }}>React</b> and modern JavaScript. 
                As I grew, I realized the power of efficiency, leading me into the world 
                of <b style={{ color: "#fff" }}>Python</b> automation.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;