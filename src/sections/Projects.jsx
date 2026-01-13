import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { ArrowForward, GitHub, Launch } from "@mui/icons-material";

const projects = [
  {
    title: "AI Automation Suite",
    desc: "A full-stack automation tool using Python and FastAPI to streamline workflow tasks.",
    tech: ["Python", "Docker", "FastAPI"],
    color: "#60a5fa",
  },
  {
    title: "Modern React Dashboard",
    desc: "A clean, high-performance UI kit built with React and Material UI for data visualization.",
    tech: ["React", "MUI", "Chart.js"],
    color: "#a855f7",
  },
];

const Projects = () => {
  return (
    <Box className="project-card" id="projects" sx={{ py: 20, backgroundColor: "#020617" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: 10, borderLeft: "4px solid #3b82f6", pl: 3 }}>
          <Typography variant="overline" sx={{ color: "#94a3b8", fontWeight: 600, letterSpacing: 2 }}>
            SELECTED WORKS
          </Typography>
          <Typography variant="h3" fontWeight={800} sx={{ color: "#fff", mt: 1 }}>
            Building digital <span style={{ color: "#3b82f6" }}>solutions.</span>
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={index === 0 ? 7 : 5} key={index}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 6,
                  overflow: "hidden",
                  height: "400px",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  p: 4,
                  "&:hover": {
                    transform: "scale(0.98)",
                    borderColor: project.color,
                  },
                  "&:hover .project-content": {
                    transform: "translateY(0)",
                  },
                }}
              >
                {/* Image Placeholder / Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(180deg, transparent 0%, ${project.color}22 100%)`,
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <Box className="project-content" sx={{ position: "relative", zIndex: 2, transition: "0.4s" }}>
                  <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                    {project.tech.map((t) => (
                      <Typography
                        key={t}
                        variant="caption"
                        sx={{
                          color: project.color,
                          backgroundColor: `${project.color}15`,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          fontWeight: 700,
                        }}
                      >
                        {t}
                      </Typography>
                    ))}
                  </Box>
                  <Typography variant="h4" fontWeight={800} sx={{ color: "#fff", mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: "#cbd5e1", mb: 3, maxWidth: "400px" }}>
                    {project.desc}
                  </Typography>
                  
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      startIcon={<Launch />}
                      sx={{ color: "#fff", textTransform: "none", fontWeight: 600 }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      startIcon={<GitHub />}
                      sx={{ color: "rgba(255,255,255,0.5)", textTransform: "none" }}
                    >
                      Source
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Button
            endIcon={<ArrowForward />}
            sx={{
              color: "#fff",
              fontSize: "1.1rem",
              textTransform: "none",
              borderBottom: "2px solid #3b82f6",
              borderRadius: 0,
              pb: 0.5,
              "&:hover": { background: "transparent", color: "#3b82f6" },
            }}
          >
            See all projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;