import { Box, Typography, Grid, Container, Chip } from "@mui/material";
import {
  Code,
  Language,
  DataObject,
  GitHub,
  Storage,
  BugReport,
  ApiOutlined,
} from "@mui/icons-material";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Language sx={{ fontSize: 30 }} />,
    color: "#3b82f6",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Next.js"],
  },
  {
    title: "Backend & Automation",
    icon: <BugReport sx={{ fontSize: 30 }} />,
    color: "#10b981",
    skills: ["Python", "FastAPI", "REST APIs", "Playwright", "Docker"],
  },
  {
    title: "Tools & Versioning",
    icon: <GitHub sx={{ fontSize: 30 }} />,
    color: "#a855f7",
    skills: ["Git", "GitHub", "SQL", "Postman", "Linux"],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 15,
        backgroundColor: "#020617",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center everything
      }}
    >
      <Container maxWidth="md">
        {/* Centered Heading */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="overline"
            sx={{ color: "#3b82f6", fontWeight: 800, letterSpacing: 3 }}
          >
            MY STACK
          </Typography>
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ color: "#fff", mt: 1, letterSpacing: -1 }}
          >
            Technologies I use.
          </Typography>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          {skillCategories.map((cat, index) => (
            <Grid item xs={12} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center the category content
                  textAlign: "center",
                }}
              >
                {/* Category Icon & Title */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 3,
                    color: cat.color,
                  }}
                >
                  {cat.icon}
                  <Typography variant="h5" fontWeight={700} sx={{ color: "#f8fafc" }}>
                    {cat.title}
                  </Typography>
                </Box>

                {/* Centered Pill Grid */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 2,
                    maxWidth: "700px",
                  }}
                >
                  {cat.skills.map((skill) => (
                    <Box
                      key={skill}
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: "12px",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "#cbd5e1",
                        fontSize: "1rem",
                        fontWeight: 500,
                        transition: "all 0.3s ease",
                        cursor: "default",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.07)",
                          borderColor: cat.color,
                          color: "#fff",
                          transform: "scale(1.05)",
                          boxShadow: `0 0 20px ${cat.color}33`, // Added subtle glow
                        },
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>

                {/* Divider Line (except for last item) */}
                {index !== skillCategories.length - 1 && (
                  <Box
                    sx={{
                      width: "50px",
                      height: "2px",
                      background: "rgba(255, 255, 255, 0.1)",
                      mt: 6,
                    }}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;