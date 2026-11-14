import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Stack,
  Snackbar,
  Alert,
  Tooltip,
} from "@mui/material";
import {
  Email,
  LinkedIn,
  GitHub,
  Instagram,
  ContentCopy,
  NorthEast,
  Check,
  Description,
  ChatBubbleOutline,
  Schedule,
  Terminal,
  Launch,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "../components/common/MagneticButton.jsx";

const platforms = [
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "/in/dineshm-dev",
    url: "https://www.linkedin.com/in/dineshm-dev/",
    icon: <LinkedIn sx={{ fontSize: 28 }} />,
    color: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.4)",
    tag: "PROFESSIONAL NETWORK",
    description:
      "Connect for software engineering roles, technical collaboration, and industry networking.",
    metric: "Fastest response via InMail",
  },
  {
    id: "github",
    name: "GitHub",
    handle: "@dinesh-dev1628",
    url: "https://github.com/dinesh-dev1628",
    icon: <GitHub sx={{ fontSize: 28 }} />,
    color: "#8B5CF6",
    glow: "rgba(139, 92, 246, 0.4)",
    tag: "CODE ARTIFACTS",
    description:
      "Inspect production repositories, automation scripts, APIs, and open-source explorations.",
    metric: "Active commits & public repos",
  },
  {
    id: "resume",
    name: "Resume / CV",
    handle: "Live Interactive Credentials",
    url: "https://dinesh-dev1628.github.io/resume/",
    icon: <Description sx={{ fontSize: 28 }} />,
    color: "#2DD4BF",
    glow: "rgba(45, 212, 191, 0.4)",
    tag: "VERIFIED CREDENTIALS",
    description:
      "Review end-to-end technical trajectory, core production skills, and verified milestones.",
    metric: "Updated for 2026",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@dinesh.genz",
    url: "https://www.instagram.com/dinesh.genz/",
    icon: <Instagram sx={{ fontSize: 28 }} />,
    color: "#D946EF",
    glow: "rgba(217, 70, 239, 0.4)",
    tag: "CREATIVE & LIFESTYLE",
    description:
      "Behind the code: developer journey, creative side projects, and continuous learning.",
    metric: "Personal dispatch & updates",
  },
];

const Contact = () => {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const emailAddress = "dineshm2816@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setSnackbarOpen(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] },
    },
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
      {/* Background: Radiant Planetary Atmosphere & Cosmic Nebula Glows */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: "-25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "600px", sm: "900px", md: "1250px" },
          height: { xs: "350px", sm: "520px", md: "700px" },
          borderRadius: "50% 50% 0 0",
          background:
            "radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.25) 0%, rgba(56, 189, 248, 0.15) 35%, rgba(217, 70, 239, 0.08) 60%, transparent 80%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Horizon Arc Line with Cyan Starlight Glow */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: "-6%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "130vw", md: "110vw" },
          height: { xs: "180px", md: "260px" },
          borderRadius: "50% 50% 0 0",
          borderTop: "1.5px solid rgba(56, 189, 248, 0.4)",
          boxShadow: "0 -12px 35px rgba(56, 189, 248, 0.25)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: "center", maxWidth: "900px", mx: "auto" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Header Badge */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1.5}
              sx={{ mb: 2 }}
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
                05 // CONNECT ACROSS THE GALAXY
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

            {/* Main Headline */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "clamp(2.2rem, 5vw, 4.2rem)" },
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#F5F5FA",
                mb: 2.5,
              }}
            >
              LET'S BUILD SOMETHING{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #38BDF8 0%, #8B5CF6 50%, #D946EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                EXTRAORDINARY.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#CBD5E1",
                fontSize: { xs: "1.02rem", sm: "1.18rem" },
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.75,
                mb: 4,
              }}
            >
              Have a high-impact engineering challenge, a workflow to automate, or an exciting
              full-stack opportunity? Let's connect on any of my channels below.
            </Typography>

            {/* Live Status Pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2.5,
                py: 0.85,
                borderRadius: "999px",
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.15)",
                mb: 5,
              }}
            >
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
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "0.72rem",
                  color: "#6EE7B7",
                  letterSpacing: 1.2,
                  fontWeight: 700,
                }}
              >
                OPEN FOR PRODUCTION SOFTWARE & AUTOMATION ROLES
              </Typography>
            </Box>

            {/* Primary Action Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2.5}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: { xs: 6, md: 8 } }}
            >
              <MagneticButton>
                <Button
                  variant="contained"
                  onClick={() => {
                    window.location.href = `mailto:${emailAddress}?subject=Engineering%20Inquiry%20via%20Portfolio`;
                  }}
                  startIcon={<ChatBubbleOutline />}
                  sx={{
                    px: 4,
                    py: 1.6,
                    borderRadius: "14px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "0.03em",
                    background: "linear-gradient(90deg, #1976D2, #38BDF8)",
                    color: "#FFFFFF",
                    boxShadow: "0 0 30px rgba(56, 189, 248, 0.4)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #1565C0, #0284C7)",
                      boxShadow: "0 0 45px rgba(56, 189, 248, 0.6)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  START A CONVERSATION
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  variant="outlined"
                  href="https://dinesh-dev1628.github.io/resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Description />}
                  sx={{
                    px: 3.5,
                    py: 1.6,
                    borderRadius: "14px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "0.03em",
                    color: "#F5F5FA",
                    borderColor: "rgba(139, 92, 246, 0.45)",
                    backgroundColor: "rgba(139, 92, 246, 0.08)",
                    backdropFilter: "blur(14px)",
                    "&:hover": {
                      borderColor: "#8B5CF6",
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.35)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  VIEW RESUME CV
                </Button>
              </MagneticButton>
            </Stack>
          </motion.div>
        </Box>

        {/* FEATURED DIRECT EMAIL SHOWCASE CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Box
            sx={{
              p: { xs: 3.5, sm: 4.5 },
              mb: 5,
              borderRadius: "28px",
              backgroundColor: "rgba(16, 16, 38, 0.7)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 20px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient Corner Radial Flare */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 320,
                height: 320,
                background: "radial-gradient(circle at top right, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <Grid container spacing={3} alignItems="center" justifyContent="space-between">
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
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
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "0.72rem",
                      color: "#38BDF8",
                      letterSpacing: 2,
                      fontWeight: 700,
                    }}
                  >
                    PRIMARY DIRECT CHANNEL
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: { xs: "1.5rem", sm: "1.9rem" },
                    fontWeight: 800,
                    color: "#F5F5FA",
                    mb: 1,
                  }}
                >
                  Direct Email Dispatch
                </Typography>

                <Typography sx={{ color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 520 }}>
                  Have a specific inquiry or opportunity? Copy my address with one click or launch your email client immediately.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "18px",
                    backgroundColor: "rgba(5, 5, 16, 0.75)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "rgba(56, 189, 248, 0.15)",
                        color: "#38BDF8",
                        flexShrink: 0,
                      }}
                    >
                      <Email sx={{ fontSize: 24 }} />
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: { xs: "0.85rem", sm: "0.98rem" },
                          color: "#F5F5FA",
                          fontWeight: 700,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {emailAddress}
                      </Typography>
                      <Typography sx={{ fontSize: "0.72rem", color: "#9292A8" }}>
                        Click to copy or compose
                      </Typography>
                    </Box>
                  </Box>

                  <Stack direction="row" spacing={1}>
                    <Tooltip title="Copy Email Address" arrow>
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
                          borderColor: copied ? "#10B981" : "rgba(255, 255, 255, 0.2)",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          px: 2,
                          py: 0.9,
                          "&:hover": {
                            borderColor: "#38BDF8",
                            backgroundColor: "rgba(56, 189, 248, 0.15)",
                          },
                        }}
                      >
                        {copied ? "COPIED" : "COPY"}
                      </Button>
                    </Tooltip>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* 4 PLATFORMS INTERACTIVE COSMIC GRID */}
        <Grid container spacing={3}>
          {platforms.map((p, idx) => (
            <Grid key={p.id} size={{ xs: 12, sm: 6 }}>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                style={{ height: "100%" }}
              >
                <Box
                  component="a"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    p: { xs: 3.5, sm: 4 },
                    borderRadius: "24px",
                    backgroundColor: "rgba(16, 16, 38, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(18px)",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      borderColor: p.color,
                      backgroundColor: "rgba(22, 22, 52, 0.8)",
                      boxShadow: `0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 30px ${p.glow}`,
                      transform: "translateY(-4px)",
                      "& .platform-arrow": {
                        transform: "translate(3px, -3px)",
                        color: p.color,
                      },
                    },
                  }}
                >
                  {/* Subtle Top Ambient Glow Accent */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                      opacity: 0.6,
                    }}
                  />

                  <Box>
                    {/* Top Row: Icon + Platform Tag + Arrow */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: "16px",
                          display: "grid",
                          placeItems: "center",
                          backgroundColor: `${p.color}15`,
                          border: `1px solid ${p.color}40`,
                          color: p.color,
                          boxShadow: `0 0 20px ${p.color}20`,
                        }}
                      >
                        {p.icon}
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.4,
                            borderRadius: "999px",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Geist Mono', monospace",
                              fontSize: "0.68rem",
                              color: "#CBD5E1",
                              fontWeight: 700,
                              letterSpacing: 1,
                            }}
                          >
                            {p.tag}
                          </Typography>
                        </Box>
                        <NorthEast
                          className="platform-arrow"
                          sx={{
                            fontSize: "1.1rem",
                            color: "#9292A8",
                            transition: "all 0.25s ease",
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Platform Title & Handle */}
                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.35rem",
                        color: "#F5F5FA",
                        mb: 0.5,
                      }}
                    >
                      {p.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.78rem",
                        color: p.color,
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        mb: 1.8,
                      }}
                    >
                      {p.handle}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.92rem",
                        color: "#CBD5E1",
                        lineHeight: 1.65,
                      }}
                    >
                      {p.description}
                    </Typography>
                  </Box>

                  {/* Bottom Metric & Link Action */}
                  <Box
                    sx={{
                      pt: 2.5,
                      mt: 3,
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.72rem",
                        color: "#9292A8",
                      }}
                    >
                      {p.metric}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: p.color,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      Open {p.name} <NorthEast sx={{ fontSize: "0.82rem" }} />
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* BOTTOM TELEMETRY BAR: Response SLA & Timezone */}
        <Box
          sx={{
            mt: 6,
            p: 2.5,
            borderRadius: "18px",
            backgroundColor: "rgba(16, 16, 38, 0.45)",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Schedule sx={{ color: "#38BDF8", fontSize: 20 }} />
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                color: "#CBD5E1",
                letterSpacing: 1,
              }}
            >
              RESPONSE SLA: &lt; 24 HOURS // TIME ZONE: INDIAN STANDARD TIME (UTC+5:30)
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Terminal sx={{ color: "#8B5CF6", fontSize: 20 }} />
            <Typography
              sx={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                color: "#94A3B8",
                letterSpacing: 1,
              }}
            >
              LOCATION: CHENNAI, INDIA // GLOBAL REMOTE READY
            </Typography>
          </Stack>
        </Box>
      </Container>

      {/* Copy Notification Toast */}
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
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
          }}
        >
          Email address copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
