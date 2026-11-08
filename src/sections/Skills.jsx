import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import {
  Code,
  AutoAwesome,
  Storage,
  Tune,
  Public,
  Hub,
  FiberManualRecord,
  Explore,
} from "@mui/icons-material";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { solarSystems } from "../data/skills";
import SolarOrreryCanvas from "../components/3d/SolarOrreryCanvas.jsx";

const Skills = () => {
  const reduce = useReducedMotion();
  const [activeSystemIndex, setActiveSystemIndex] = useState(0);
  const [selectedPlanet, setSelectedPlanet] = useState(solarSystems[0].planets[0]);

  const currentSystem = solarSystems[activeSystemIndex];
  const activeInspectionPlanet = selectedPlanet || currentSystem.planets[0];

  const handleSystemChange = (idx) => {
    setActiveSystemIndex(idx);
    setSelectedPlanet(solarSystems[idx].planets[0]);
  };

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 7, md: 9 } }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
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
              02 // TECHNOLOGICAL GALAXY
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "clamp(2rem, 5vw, 3.8rem)" },
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#F5F5FA",
              maxWidth: "920px",
            }}
          >
            THE TECHNOLOGIES THAT{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #38BDF8, #8B5CF6, #D946EF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              POWER MY UNIVERSE.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#9292A8",
              fontSize: { xs: "0.98rem", sm: "1.1rem" },
              mt: 1.8,
              maxWidth: "680px",
              lineHeight: 1.7,
            }}
          >
            Technologies visualized as distinct planetary systems grouped by architectural domain.
            Interact with the solar orrery or select any satellite node to view live mission telemetry.
          </Typography>
        </Box>

        {/* Solar Systems Switcher Tabs */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            mb: { xs: 5, md: 6 },
          }}
        >
          {solarSystems.map((system, idx) => {
            const isActive = activeSystemIndex === idx;
            return (
              <Button
                key={system.id}
                onClick={() => handleSystemChange(idx)}
                sx={{
                  px: 3,
                  py: 1.2,
                  borderRadius: "999px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  letterSpacing: "0.02em",
                  color: isActive ? "#F5F5FA" : "#9292A8",
                  backgroundColor: isActive
                    ? "rgba(16, 16, 38, 0.9)"
                    : "rgba(255, 255, 255, 0.02)",
                  border: "1px solid",
                  borderColor: isActive ? system.starColor : "rgba(255, 255, 255, 0.08)",
                  boxShadow: isActive ? `0 0 25px ${system.starColor}40` : "none",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: system.starColor,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#F5F5FA",
                  },
                }}
                startIcon={
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: system.starColor,
                      boxShadow: `0 0 8px ${system.starColor}`,
                    }}
                  />
                }
              >
                {system.name}
              </Button>
            );
          })}
        </Box>

        {/* Dual Interactive Display: Real Canvas Orrery Map + Live HUD Telemetry Card */}
        <Grid container spacing={4} alignItems="stretch" sx={{ mb: 6 }}>
          {/* Left Column: Interactive Solar System Orrery Map */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <motion.div
              key={currentSystem.id}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: "28px",
                  backgroundColor: "rgba(16, 16, 38, 0.65)",
                  border: `1px solid ${currentSystem.starColor}35`,
                  backdropFilter: "blur(20px)",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: { xs: "360px", sm: "440px", md: "480px" },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 35px ${currentSystem.starColor}15`,
                }}
              >
                {/* Interactive HTML5 Orrery Physics Canvas */}
                <SolarOrreryCanvas
                  system={currentSystem}
                  activePlanet={activeInspectionPlanet}
                  onSelectPlanet={(p) => setSelectedPlanet(p)}
                />

                {/* System Watermark Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 20,
                    right: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pointerEvents: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "0.68rem",
                      color: "#9292A8",
                      letterSpacing: 1.5,
                    }}
                  >
                    ORRERY: {currentSystem.name.toUpperCase()}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "0.68rem",
                      color: currentSystem.starColor,
                      letterSpacing: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    CLICK OR HOVER PLANETS
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column: Live HUD Telemetry Card of Selected Planet */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                p: { xs: 3.5, sm: 4.5 },
                borderRadius: "28px",
                backgroundColor: "rgba(16, 16, 38, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow:
                  "0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.08)",
              }}
            >
              {/* Corner Ambient Glow matching inspected planet */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 220,
                  height: 220,
                  background: `radial-gradient(circle at top right, ${activeInspectionPlanet.color}25 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              <Box>
                {/* HUD Header */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: activeInspectionPlanet.color,
                        boxShadow: `0 0 12px ${activeInspectionPlanet.color}`,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.75rem",
                        color: activeInspectionPlanet.color,
                        letterSpacing: 2,
                        fontWeight: 600,
                      }}
                    >
                      PLANETARY TELEMETRY
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      px: 1.4,
                      py: 0.3,
                      borderRadius: "6px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.68rem",
                        color: "#F5F5FA",
                        fontWeight: 600,
                      }}
                    >
                      {activeInspectionPlanet.level}
                    </Typography>
                  </Box>
                </Box>

                {/* Planet Name */}
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: { xs: "2.2rem", sm: "2.6rem" },
                    fontWeight: 800,
                    color: "#F5F5FA",
                    letterSpacing: "-0.02em",
                    mb: 1,
                  }}
                >
                  {activeInspectionPlanet.name}
                </Typography>

                {/* Experience Metric */}
                <Typography
                  sx={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.82rem",
                    color: activeInspectionPlanet.color,
                    letterSpacing: 1.5,
                    fontWeight: 600,
                    mb: 2.5,
                  }}
                >
                  PRODUCTION EXPERIENCE: {activeInspectionPlanet.experience}
                </Typography>

                {/* Short Description */}
                <Typography
                  sx={{
                    fontSize: "0.98rem",
                    color: "#9292A8",
                    lineHeight: 1.8,
                    mb: 3.5,
                  }}
                >
                  {activeInspectionPlanet.description}
                </Typography>
              </Box>

              {/* Key Capabilities / Highlights */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "0.68rem",
                    color: "#9292A8",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    mb: 1.5,
                  }}
                >
                  ARCHITECTURAL CAPABILITIES:
                </Typography>
                <Stack spacing={1}>
                  {activeInspectionPlanet.highlights.map((h) => (
                    <Box
                      key={h}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        p: 1.2,
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <FiberManualRecord
                        sx={{ fontSize: "0.6rem", color: activeInspectionPlanet.color }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: "#F5F5FA",
                        }}
                      >
                        {h}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Readability & Mobile Accessible Planetary Cards Grid */}
        <Box sx={{ mt: 4 }}>
          <Typography
            sx={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.72rem",
              color: "#9292A8",
              letterSpacing: 2,
              textTransform: "uppercase",
              mb: 2.5,
            }}
          >
            // ALL SATELLITES IN {currentSystem.name.toUpperCase()} SYSTEM
          </Typography>

          <Grid container spacing={2.5}>
            {currentSystem.planets.map((planet) => {
              const isSelected = activeInspectionPlanet.name === planet.name;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={planet.name}>
                  <Box
                    onClick={() => setSelectedPlanet(planet)}
                    sx={{
                      p: 2.5,
                      borderRadius: "18px",
                      backgroundColor: isSelected
                        ? "rgba(16, 16, 38, 0.9)"
                        : "rgba(16, 16, 38, 0.45)",
                      border: "1px solid",
                      borderColor: isSelected
                        ? planet.color
                        : "rgba(255, 255, 255, 0.07)",
                      backdropFilter: "blur(14px)",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      boxShadow: isSelected
                        ? `0 10px 30px -10px ${planet.color}40, 0 0 15px ${planet.color}20`
                        : "none",
                      "&:hover": {
                        borderColor: planet.color,
                        transform: "translateY(-3px)",
                        backgroundColor: "rgba(20, 20, 48, 0.75)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: planet.color,
                          boxShadow: `0 0 10px ${planet.color}`,
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "0.68rem",
                          color: "#9292A8",
                        }}
                      >
                        {planet.experience}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        color: "#F5F5FA",
                        mb: 0.5,
                      }}
                    >
                      {planet.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "0.7rem",
                        color: planet.color,
                        letterSpacing: 1,
                        mb: 1.5,
                      }}
                    >
                      {planet.level}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.82rem",
                        color: "#9292A8",
                        lineHeight: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {planet.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
