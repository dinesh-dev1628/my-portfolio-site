import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Stack,
  TextField,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Email,
  LinkedIn,
  GitHub,
  Instagram,
  ContentCopy,
  NorthEast,
  Send,
  Check,
  Description,
  ChatBubbleOutline,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "../components/common/MagneticButton.jsx";

const socialProfiles = [
  {
    name: "LinkedIn",
    handle: "/in/dineshm-dev",
    url: "https://www.linkedin.com/in/dineshm-dev/",
    icon: <LinkedIn />,
    color: "#38BDF8",
    badge: "PROFESSIONAL NETWORK",
  },
  {
    name: "GitHub",
    handle: "@dinesh-dev1628",
    url: "https://github.com/dinesh-dev1628",
    icon: <GitHub />,
    color: "#8B5CF6",
    badge: "CODE REPOSITORIES",
  },
  {
    name: "Instagram",
    handle: "@dinesh.genz",
    url: "https://www.instagram.com/dinesh.genz/",
    icon: <Instagram />,
    color: "#D946EF",
    badge: "CREATIVE & LIFE",
  },
  {
    name: "Resume CV",
    handle: "Live Portfolio CV",
    url: "https://dinesh-dev1628.github.io/resume/",
    icon: <Description />,
    color: "#2DD4BF",
    badge: "OFFICIAL CREDENTIALS",
  },
];

const Contact = () => {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const emailAddress = "dineshm2816@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setSnackbarOpen(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry from ${formData.name || "Collaborator"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 12, md: 20 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background: Large Glowing Celestial Planet & Galaxy Horizon */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: "-25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "500px", sm: "750px", md: "1100px" },
          height: { xs: "320px", sm: "480px", md: "650px" },
          borderRadius: "50% 50% 0 0",
          background:
            "radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.28) 0%, rgba(56, 189, 248, 0.15) 35%, rgba(217, 70, 239, 0.08) 60%, transparent 85%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Planet Horizon Arc Line */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "120vw", md: "100vw" },
          height: { xs: "180px", md: "260px" },
          borderRadius: "50% 50% 0 0",
          borderTop: "1.5px solid rgba(56, 189, 248, 0.45)",
          boxShadow: "0 -10px 30px rgba(56, 189, 248, 0.3)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: "center", maxWidth: "900px", mx: "auto" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1.5}
            sx={{ mb: 1.5 }}
          >
            <Box
              sx={{
                width: 24,
                height: 2,
                backgroundColor: "#38BDF8",
                boxShadow: "0 0 10px #38BDF8",
              }}
            />
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                color: "#38BDF8",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              05 // ESTABLISH CONNECTION
            </Typography>
            <Box
              sx={{
                width: 24,
                height: 2,
                backgroundColor: "#38BDF8",
                boxShadow: "0 0 10px #38BDF8",
              }}
            />
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3.4rem", md: "4.2rem" },
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#F5F5FA",
              mb: 2.5,
            }}
          >
            LET'S CREATE SOMETHING{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #38BDF8 0%, #8B5CF6 50%, #D946EF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              OUT OF THIS WORLD.
            </span>
          </Typography>

          <Typography
            sx={{
              color: "#9292A8",
              fontSize: { xs: "1.05rem", sm: "1.2rem" },
              maxWidth: "720px",
              mx: "auto",
              lineHeight: 1.7,
              mb: 5,
            }}
          >
            Have an interesting idea, a challenging problem, or an opportunity?
            Let's connect and build something extraordinary.
          </Typography>

          {/* Three Primary Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2.5}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 8 }}
          >
            {/* LET'S TALK Button */}
            <MagneticButton>
              <Button
                variant="contained"
                onClick={() => {
                  window.location.href = `mailto:${emailAddress}?subject=Project%20Inquiry%20via%20Universe%20Portfolio`;
                }}
                startIcon={<ChatBubbleOutline />}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: "14px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.04em",
                  color: "#FFFFFF",
                  backgroundColor: "#8B5CF6",
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.45)",
                  "&:hover": {
                    backgroundColor: "#7C3AED",
                    boxShadow: "0 0 45px rgba(139, 92, 246, 0.65)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                LET'S TALK
              </Button>
            </MagneticButton>

            {/* CONNECT ON LINKEDIN Button */}
            <MagneticButton>
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/dineshm-dev/"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LinkedIn />}
                sx={{
                  px: 3.5,
                  py: 1.6,
                  borderRadius: "14px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.04em",
                  color: "#F5F5FA",
                  borderColor: "rgba(56, 189, 248, 0.4)",
                  backgroundColor: "rgba(56, 189, 248, 0.05)",
                  backdropFilter: "blur(12px)",
                  "&:hover": {
                    borderColor: "#38BDF8",
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    boxShadow: "0 0 25px rgba(56, 189, 248, 0.35)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                CONNECT ON LINKEDIN
              </Button>
            </MagneticButton>

            {/* VIEW GITHUB Button */}
            <MagneticButton>
              <Button
                variant="outlined"
                href="https://github.com/dinesh-dev1628"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHub />}
                sx={{
                  px: 3.5,
                  py: 1.6,
                  borderRadius: "14px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.04em",
                  color: "#F5F5FA",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(12px)",
                  "&:hover": {
                    borderColor: "#F5F5FA",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                VIEW GITHUB
              </Button>
            </MagneticButton>
          </Stack>
        </Box>

        {/* Split Grid: Transmission Form Left | Social Profiles & Direct Email Right */}
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="stretch">
          {/* Left Column: Direct Message Transmission Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              style={{ height: "100%" }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "24px",
                  backgroundColor: "rgba(16, 16, 38, 0.65)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(18px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.35rem",
                      color: "#F5F5FA",
                      mb: 1,
                    }}
                  >
                    Direct Transmission
                  </Typography>
                  <Typography sx={{ color: "#9292A8", fontSize: "0.88rem", mb: 3 }}>
                    Send an instantaneous transmission directly to my personal terminal.
                  </Typography>

                  <Stack spacing={2.5}>
                    <TextField
                      fullWidth
                      label="Your Name or Designation"
                      variant="outlined"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#F5F5FA",
                          backgroundColor: "rgba(5, 5, 16, 0.5)",
                          borderRadius: "12px",
                          "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                          "&:hover fieldset": { borderColor: "#38BDF8" },
                          "&.Mui-focused fieldset": { borderColor: "#38BDF8" },
                        },
                        "& .MuiInputLabel-root": { color: "#9292A8" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#38BDF8" },
                      }}
                    />

                    <TextField
                      fullWidth
                      type="email"
                      label="Your Frequency / Email"
                      variant="outlined"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#F5F5FA",
                          backgroundColor: "rgba(5, 5, 16, 0.5)",
                          borderRadius: "12px",
                          "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                          "&:hover fieldset": { borderColor: "#38BDF8" },
                          "&.Mui-focused fieldset": { borderColor: "#38BDF8" },
                        },
                        "& .MuiInputLabel-root": { color: "#9292A8" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#38BDF8" },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Message / Mission Brief"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#F5F5FA",
                          backgroundColor: "rgba(5, 5, 16, 0.5)",
                          borderRadius: "12px",
                          "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                          "&:hover fieldset": { borderColor: "#38BDF8" },
                          "&.Mui-focused fieldset": { borderColor: "#38BDF8" },
                        },
                        "& .MuiInputLabel-root": { color: "#9292A8" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#38BDF8" },
                      }}
                    />
                  </Stack>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  endIcon={<Send />}
                  sx={{
                    mt: 3,
                    py: 1.5,
                    borderRadius: "12px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    backgroundColor: "rgba(56, 189, 248, 0.2)",
                    border: "1px solid rgba(56, 189, 248, 0.45)",
                    color: "#F5F5FA",
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(56, 189, 248, 0.35)",
                      borderColor: "#38BDF8",
                      boxShadow: "0 0 30px rgba(56, 189, 248, 0.35)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  TRANSMIT MESSAGE
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column: Copy Email Box & Social Profiles Matrix */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ height: "100%" }}
            >
              <Stack spacing={3} sx={{ height: "100%", justifyContent: "space-between" }}>
                {/* One-Click Copy Email Card */}
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "22px",
                    backgroundColor: "rgba(16, 16, 38, 0.65)",
                    border: "1px solid rgba(139, 92, 246, 0.25)",
                    backdropFilter: "blur(18px)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "0.68rem",
                      color: "#8B5CF6",
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      mb: 1,
                    }}
                  >
                    // DIRECT EMAIL DISPATCH
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                      p: 2,
                      borderRadius: "14px",
                      backgroundColor: "rgba(5, 5, 16, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
                      <Email sx={{ color: "#38BDF8" }} />
                      <Typography
                        sx={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                          color: "#F5F5FA",
                          fontWeight: 600,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {emailAddress}
                      </Typography>
                    </Box>

                    <Button
                      onClick={handleCopyEmail}
                      variant="outlined"
                      size="small"
                      startIcon={copied ? <Check sx={{ color: "#10B981" }} /> : <ContentCopy />}
                      sx={{
                        borderRadius: "10px",
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.75rem",
                        color: copied ? "#10B981" : "#F5F5FA",
                        borderColor: copied ? "#10B981" : "rgba(255, 255, 255, 0.15)",
                        flexShrink: 0,
                      }}
                    >
                      {copied ? "COPIED" : "COPY"}
                    </Button>
                  </Box>
                </Box>

                {/* Social Profiles Grid */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 2,
                  }}
                >
                  {socialProfiles.map((p) => (
                    <Box
                      key={p.name}
                      component="a"
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        p: 2.5,
                        borderRadius: "18px",
                        backgroundColor: "rgba(16, 16, 38, 0.5)",
                        border: "1px solid rgba(255, 255, 255, 0.07)",
                        backdropFilter: "blur(14px)",
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: p.color,
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          boxShadow: `0 10px 25px -10px ${p.color}35`,
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 1.2,
                        }}
                      >
                        <Box sx={{ color: p.color, display: "flex" }}>{p.icon}</Box>
                        <NorthEast sx={{ fontSize: "0.95rem", color: "#9292A8" }} />
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "#F5F5FA",
                        }}
                      >
                        {p.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.72rem",
                          color: "#9292A8",
                          mt: 0.3,
                        }}
                      >
                        {p.handle}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Copy Notification Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          sx={{
            backgroundColor: "rgba(10, 10, 24, 0.95)",
            color: "#F5F5FA",
            border: "1px solid #10B981",
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.82rem",
            backdropFilter: "blur(16px)",
          }}
        >
          Email address successfully copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
