import React, { useState } from "react";
import { Box, Typography, Container, Stack, IconButton, Fade } from "@mui/material";
import { LinkedIn, GitHub, Email, Instagram, Bolt, Language } from "@mui/icons-material";

const Contact = () => {
  // Keeping the sidebar toggle logic for style, but focusing on the social view
  const [activeTab, setActiveTab] = useState("social"); 

  return (
    <Box id="contact" sx={{ py: 15, backgroundColor: "#020617", minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, alignItems: "stretch" }}>
          
          {/* 1. Sidebar Style Element (Keeping for design consistency) */}
          <Box sx={{ 
            width: { xs: "100%", md: "80px" }, 
            backgroundColor: "rgba(255,255,255,0.03)", 
            borderRadius: "40px", 
            display: "flex", 
            flexDirection: { xs: "row", md: "column" }, 
            alignItems: "center", 
            justifyContent: "center",
            gap: 3, p: 2, border: "1px solid rgba(255,255,255,0.08)"
          }}>
            <IconButton sx={{ color: "#3b82f6" }}>
              <Bolt fontSize="large" />
            </IconButton>
          </Box>

          {/* 2. The Social Grid */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" fontWeight={800} color="#fff" letterSpacing={-1}>
                Let's <span style={{ color: "#3b82f6" }}>Connect.</span>
              </Typography>
              <Typography color="#64748b">Find me on these platforms or drop an email.</Typography>
            </Box>

            <Box sx={{ 
              display: "grid", 
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" }, 
              gap: 3 
            }}>
              <SocialCard 
                icon={<LinkedIn />} 
                label="LinkedIn" 
                sub="Professional Network" 
                color="#0077b5" 
                href="https://www.linkedin.com/in/dineshm-dev/" 
              />
              <SocialCard 
                icon={<GitHub />} 
                label="GitHub" 
                sub="Code Repositories" 
                color="#fff" 
                href="https://github.com/dinesh-dev1628" 
              />
              <SocialCard 
                icon={<Instagram />} 
                label="Instagram" 
                sub="Creative Feed" 
                color="#E1306C" 
                href="https://www.instagram.com/dinesh.genz/" // Replace with your link
              />
              <SocialCard 
                icon={<Email />} 
                label="Email" 
                sub="dineshm2816@gmail.com" 
                color="#ef4444" 
                href="mailto:dineshm2816@gmail.com" 
              />
              
              {/* Optional: Personal Portfolio/Other link placeholder */}
              <Box sx={{ ...socialCardStyle, border: "1px dashed rgba(255,255,255,0.1)", justifyContent: "center", opacity: 0.5 }}>
                <Typography color="#475569" textAlign="center">More links soon...</Typography>
              </Box>
            </Box>

            {/* Footer Tag */}
            <Box sx={{ mt: 6, opacity: 0.6 }}>
                <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "#cbd5e1" }}>
                  © 2026 Dinesh. Built with React & Passion.
                </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- Sub-components & Styles ---

const SocialCard = ({ icon, label, sub, color, href }) => (
  <Box 
    component="a" 
    href={href} 
    target="_blank" 
    sx={{ 
      ...socialCardStyle, 
      "&:hover": { 
        borderColor: color, 
        transform: "translateY(-8px)",
        boxShadow: `0 10px 30px ${color}15`
      } 
    }}
  >
    <Box sx={{ color: color, mb: 2, display: "flex", alignItems: "center", gap: 2 }}>
      {React.cloneElement(icon, { sx: { fontSize: 35 } })}
      <Typography variant="h6" fontWeight={700} color="#fff">{label}</Typography>
    </Box>
    <Typography variant="body2" color="#64748b">{sub}</Typography>
  </Box>
);

const socialCardStyle = {
  p: 3, 
  borderRadius: "24px", 
  backgroundColor: "rgba(255,255,255,0.02)", 
  border: "1px solid rgba(255,255,255,0.05)", 
  textDecoration: "none",
  display: "flex", 
  flexDirection: "column", 
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
};

export default Contact;