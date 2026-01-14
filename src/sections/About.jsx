import React from "react";
import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import MyProfilePic from "../components/asset/IMG-20240604-WA0002.jpg";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "80vh",
        backgroundColor: "#020617",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          
          {/* LEFT: MINIMALIST IMAGE COMPONENT */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Box sx={{ position: "relative", width: "fit-content", mx: "auto" }}>
                {/* Massive Accent Border */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 15,
                    left: 15,
                    right: -15,
                    bottom: -15,
                    border: "1px solid #3b82f6",
                    borderRadius: "16px",
                    zIndex: 0,
                  }}
                />

                {/* Compact Image Container */}
                <Box
                  sx={{
                    width: { xs: "260px", md: "320px" },
                    height: { xs: "320px", md: "400px" },
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 2,
                    boxShadow: "20px 20px 60px rgba(0,0,0,0.5)",
                  }}
                >
                  <Box
                    component="img"
                    src={MyProfilePic}
                    alt="Dinesh"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "grayscale(30%) contrast(1.1)",
                      transition: "transform 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        filter: "grayscale(0%)",
                      },
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* RIGHT: MASSIVE TYPOGRAPHY */}
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: "#3b82f6", fontWeight: 700, letterSpacing: 3 }}
                >
                  About Me !
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    lineHeight: 1,
                    mt: 1,
                  }}
                >
                  Software <br />
                  <span style={{ color: "rgba(255,255,255,0.1)" }}>Developer.</span>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    color: "#94a3b8",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    maxWidth: "500px",
                    borderLeft: "2px solid #3b82f6",
                    pl: 3,
                  }}
                >
                  I’m a software engineer focused on crafting performant frontend interfaces with React & Next.js, 
                  and robust automation solutions using Python and Playwright. I turn ideas into reliable, 
                  production-ready systems.
                </Typography>
              </motion.div>

              {/* Minimalist Stats */}
              <Stack direction="row" spacing={5} sx={{ pt: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ color: "#fff", fontWeight: 800 }}>99%</Typography>
                  <Typography variant="caption" sx={{ color: "#64748b" }}>PRECISION</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ color: "#fff", fontWeight: 800 }}>FAST</Typography>
                  <Typography variant="caption" sx={{ color: "#64748b" }}>DELIVERY</Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;