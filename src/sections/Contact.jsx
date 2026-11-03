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
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";

const socialProfiles = [
  {
    name: "LinkedIn",
    handle: "/in/dineshm-dev",
    url: "https://www.linkedin.com/in/dineshm-dev/",
    icon: <LinkedIn />,
    color: "#0A66C2",
    accent: "#60A5FA",
  },
  {
    name: "GitHub",
    handle: "@dinesh-dev1628",
    url: "https://github.com/dinesh-dev1628",
    icon: <GitHub />,
    color: "#F8FAFC",
    accent: "#A78BFA",
  },
  {
    name: "Instagram",
    handle: "@dinesh.genz",
    url: "https://www.instagram.com/dinesh.genz/",
    icon: <Instagram />,
    color: "#E1306C",
    accent: "#F472B6",
  },
  {
    name: "Resume",
    handle: "Live Portfolio CV",
    url: "https://dinesh-dev1628.github.io/resume/",
    icon: <Description />,
    color: "#10B981",
    accent: "#34D399",
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
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name || "Collaborator"}`);
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
        py: { xs: 10, md: 18 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "320px", md: "700px" },
          height: { xs: "250px", md: "400px" },
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, rgba(96, 165, 250, 0.04) 50%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: { xs: "left", md: "center" } }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: "flex-start", md: "center" }}
            spacing={1.5}
            sx={{ mb: 1.5 }}
          >
            <Box sx={{ width: 24, height: 1, backgroundColor: "#60A5FA" }} />
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                color: "#60A5FA",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              05 // DIRECT FREQUENCY
            </Typography>
            <Box
              sx={{
                width: 24,
                height: 1,
                backgroundColor: "#60A5FA",
                display: { xs: "none", md: "block" },
              }}
            />
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#F8FAFC",
              maxWidth: "800px",
              mx: { md: "auto" },
            }}
          >
            Every great idea starts with a{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              connection.
            </span>
          </Typography>

          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "0.95rem", sm: "1.08rem" },
              mt: 2,
              maxWidth: "600px",
              mx: { md: "auto" },
              lineHeight: 1.7,
            }}
          >
            Whether you have a breakthrough concept, need high-throughput automation,
            or are looking for a dedicated software engineer, let’s start a conversation.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 5, md: 6 }}>
          {/* Left Column: Direct Email Beacon & Social Nodes */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={3}>
                {/* Main Email Transmission Card */}
                <Box
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    borderRadius: "24px",
                    backgroundColor: "rgba(16, 21, 34, 0.7)",
                    border: "1px solid rgba(96, 165, 250, 0.25)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "0.72rem",
                      color: "#60A5FA",
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      mb: 1.5,
                    }}
                  >
                    // DIRECT EMAIL TRANSMISSION
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      color: "#F8FAFC",
                      fontSize: { xs: "1.1rem", sm: "1.3rem" },
                      mb: 2,
                      wordBreak: "break-all",
                    }}
                  >
                    {emailAddress}
                  </Typography>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                    <Button
                      variant="contained"
                      onClick={() => (window.location.href = `mailto:${emailAddress}`)}
                      startIcon={<Email />}
                      sx={{
                        flex: 1,
                        py: 1.2,
                        borderRadius: "12px",
                        backgroundColor: "rgba(96, 165, 250, 0.16)",
                        border: "1px solid rgba(96, 165, 250, 0.4)",
                        color: "#F8FAFC",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.86rem",
                        "&:hover": {
                          backgroundColor: "rgba(96, 165, 250, 0.28)",
                        },
                      }}
                    >
                      Compose Mail
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={handleCopyEmail}
                      startIcon={copied ? <Check /> : <ContentCopy />}
                      sx={{
                        py: 1.2,
                        px: 2.2,
                        borderRadius: "12px",
                        borderColor: copied
                          ? "rgba(16, 185, 129, 0.4)"
                          : "rgba(255, 255, 255, 0.12)",
                        color: copied ? "#10B981" : "#F8FAFC",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.86rem",
                        backgroundColor: copied
                          ? "rgba(16, 185, 129, 0.08)"
                          : "transparent",
                        "&:hover": {
                          borderColor: "#60A5FA",
                          backgroundColor: "rgba(96, 165, 250, 0.08)",
                        },
                      }}
                    >
                      {copied ? "Copied" : "Copy"}
                    </Button>
                  </Stack>
                </Box>

                {/* Social Nodes Grid */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 1.5,
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
                        p: 2,
                        borderRadius: "16px",
                        backgroundColor: "rgba(16, 21, 34, 0.5)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(12px)",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: p.accent,
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                          transform: "translateY(-3px)",
                          boxShadow: `0 8px 20px -5px ${p.accent}20`,
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box sx={{ color: p.accent, display: "flex" }}>{p.icon}</Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: "0.92rem",
                              fontWeight: 700,
                              color: "#F8FAFC",
                              lineHeight: 1.2,
                            }}
                          >
                            {p.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "'Geist Mono', monospace",
                              fontSize: "0.68rem",
                              color: "#64748B",
                            }}
                          >
                            {p.handle}
                          </Typography>
                        </Box>
                      </Box>
                      <NorthEast
                        sx={{ fontSize: "0.85rem", color: "#64748B" }}
                      />
                    </Box>
                  ))}
                </Box>

                {/* Telemetry coordinate footnote */}
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "14px",
                    backgroundColor: "rgba(5, 6, 10, 0.5)",
                    border: "1px dashed rgba(255, 255, 255, 0.06)",
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.7rem",
                    color: "#64748B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>LAT 13.0827° N, LON 80.2707° E</span>
                  <span style={{ color: "#10B981" }}>ONLINE // 2026</span>
                </Box>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Column: Transmission Dispatcher Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "24px",
                  backgroundColor: "rgba(16, 21, 34, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#F8FAFC",
                    mb: 0.5,
                  }}
                >
                  Initiate Transmission
                </Typography>
                <Typography sx={{ color: "#94A3B8", fontSize: "0.88rem", mb: 3 }}>
                  Direct signal routing to Dinesh’s primary mailbox.
                </Typography>

                <Stack spacing={2.5}>
                  <TextField
                    fullWidth
                    required
                    label="Your Name or Organization"
                    variant="outlined"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    InputLabelProps={{
                      sx: { color: "#64748B", fontSize: "0.88rem" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "rgba(5, 6, 10, 0.6)",
                        borderRadius: "12px",
                        color: "#F8FAFC",
                        "& fieldset": { borderColor: "rgba(255, 255, 255, 0.08)" },
                        "&:hover fieldset": { borderColor: "rgba(96, 165, 250, 0.3)" },
                        "&.Mui-focused fieldset": { borderColor: "#60A5FA" },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Your Frequency (Email Address)"
                    variant="outlined"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    InputLabelProps={{
                      sx: { color: "#64748B", fontSize: "0.88rem" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "rgba(5, 6, 10, 0.6)",
                        borderRadius: "12px",
                        color: "#F8FAFC",
                        "& fieldset": { borderColor: "rgba(255, 255, 255, 0.08)" },
                        "&:hover fieldset": { borderColor: "rgba(96, 165, 250, 0.3)" },
                        "&.Mui-focused fieldset": { borderColor: "#60A5FA" },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={4}
                    label="Transmission Payload (Message / Project Details)"
                    variant="outlined"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    InputLabelProps={{
                      sx: { color: "#64748B", fontSize: "0.88rem" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "rgba(5, 6, 10, 0.6)",
                        borderRadius: "12px",
                        color: "#F8FAFC",
                        "& fieldset": { borderColor: "rgba(255, 255, 255, 0.08)" },
                        "&:hover fieldset": { borderColor: "rgba(96, 165, 250, 0.3)" },
                        "&.Mui-focused fieldset": { borderColor: "#60A5FA" },
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    endIcon={<Send />}
                    sx={{
                      py: 1.5,
                      borderRadius: "14px",
                      backgroundColor: "rgba(96, 165, 250, 0.18)",
                      border: "1px solid rgba(96, 165, 250, 0.4)",
                      color: "#F8FAFC",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      boxShadow: "0 0 20px rgba(96, 165, 250, 0.2)",
                      "&:hover": {
                        backgroundColor: "rgba(96, 165, 250, 0.3)",
                        borderColor: "#60A5FA",
                        boxShadow: "0 0 30px rgba(96, 165, 250, 0.35)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Dispatch Message
                  </Button>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Copy Toast feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          sx={{
            backgroundColor: "#101522",
            color: "#F8FAFC",
            border: "1px solid rgba(96, 165, 250, 0.3)",
            fontFamily: "'Space Grotesk', sans-serif",
            "& .MuiAlert-icon": { color: "#60A5FA" },
          }}
        >
          COPIED TO CLIPBOARD // {emailAddress}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
