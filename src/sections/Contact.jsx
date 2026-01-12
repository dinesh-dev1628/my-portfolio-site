import React, { useState } from "react";
import { Box, Typography, Container, Stack, IconButton, InputBase, Button, Fade } from "@mui/material";
import { LinkedIn, GitHub, Email, Send, ChatBubbleOutline, Bolt } from "@mui/icons-material";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("message"); // 'message' or 'social'
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleSend = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API Call
    setTimeout(() => setStatus("success"), 2000);
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <Box id="contact" sx={{ py: 15, backgroundColor: "#020617", minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, alignItems: "stretch" }}>
          
          {/* 1. The Interactive Toggle Sidebar */}
          <Box sx={{ 
            width: { xs: "100%", md: "80px" }, 
            backgroundColor: "rgba(255,255,255,0.03)", 
            borderRadius: "40px", 
            display: "flex", 
            flexDirection: { xs: "row", md: "column" }, 
            alignItems: "center", 
            justifyContent: "center",
            gap: 3,
            p: 2,
            border: "1px solid rgba(255,255,255,0.08)"
          }}>
            <IconButton 
              onClick={() => setActiveTab("message")}
              sx={{ color: activeTab === "message" ? "#3b82f6" : "#475569", transition: "0.3s" }}
            >
              <ChatBubbleOutline fontSize="large" />
            </IconButton>
            <IconButton 
              onClick={() => setActiveTab("social")}
              sx={{ color: activeTab === "social" ? "#a855f7" : "#475569", transition: "0.3s" }}
            >
              <Bolt fontSize="large" />
            </IconButton>
          </Box>

          {/* 2. The Main Dynamic Content Area */}
          <Box sx={{ flex: 1, position: "relative" }}>
            {activeTab === "message" ? (
              <Fade in={activeTab === "message"}>
                <Box sx={{ 
                  p: { xs: 4, md: 6 }, 
                  borderRadius: "40px", 
                  background: "linear-gradient(145deg, rgba(15,23,42,0.6) 0%, rgba(2,6,23,1) 100%)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.1)"
                }}>
                  <Typography variant="h4" fontWeight={800} color="#fff" mb={1}>Drop a line.</Typography>
                  <Typography color="#64748b" mb={4}>I usually respond within a few hours.</Typography>
                  
                  <Stack spacing={4} component="form" onSubmit={handleSend}>
                    <Box sx={inputWrapper}>
                      <Typography variant="caption" color="#3b82f6" fontWeight={700}>YOUR NAME</Typography>
                      <InputBase placeholder="Who are you?" fullWidth sx={customInput} required />
                    </Box>

                    <Box sx={inputWrapper}>
                      <Typography variant="caption" color="#3b82f6" fontWeight={700}>YOUR EMAIL</Typography>
                      <InputBase placeholder="Where can I reply?" fullWidth sx={customInput} type="email" required />
                    </Box>

                    <Box sx={inputWrapper}>
                      <Typography variant="caption" color="#3b82f6" fontWeight={700}>MESSAGE</Typography>
                      <InputBase placeholder="Tell me about your project..." fullWidth multiline rows={3} sx={customInput} required />
                    </Box>

                    <Button 
                      type="submit"
                      disabled={status === "sending"}
                      variant="contained" 
                      sx={sendButtonStyle}
                    >
                      {status === "success" ? "Sent!" : status === "sending" ? "Transmitting..." : "Send Signal"}
                      <Send sx={{ ml: 1, fontSize: 18 }} />
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            ) : (
              <Fade in={activeTab === "social"}>
                <Box sx={{ 
                  height: "100%", 
                  display: "grid", 
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, 
                  gap: 3 
                }}>
                  <SocialCard icon={<LinkedIn />} label="LinkedIn" sub="Let's connect professionally" color="#0077b5" href="https://www.linkedin.com/in/dineshm-dev/" />
                  <SocialCard icon={<GitHub />} label="GitHub" sub="Check my repositories" color="#fff" href="https://github.com/dinesh-dev1628" />
                  <SocialCard icon={<Email />} label="Email" sub="dineshm2816@gmail.com" color="#ef4444" href="mailto:dineshm.dev1628@gmail.com" />
                  <Box sx={{ ...socialCardStyle, background: "rgba(255,255,255,0.01)", border: "1px dashed rgba(255,255,255,0.1)", justifyContent: "center" }}>
                    <Typography color="#475569">More coming soon...</Typography>
                  </Box>
                </Box>
              </Fade>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- Sub-components & Styles ---

const SocialCard = ({ icon, label, sub, color, href }) => (
  <Box component="a" href={href} target="_blank" sx={{ ...socialCardStyle, "&:hover": { borderColor: color, transform: "translateY(-5px)" } }}>
    <Box sx={{ color: color, mb: 2 }}>{React.cloneElement(icon, { sx: { fontSize: 40 } })}</Box>
    <Typography variant="h6" fontWeight={700} color="#fff">{label}</Typography>
    <Typography variant="body2" color="#64748b">{sub}</Typography>
  </Box>
);

const socialCardStyle = {
  p: 4, borderRadius: "30px", backgroundColor: "rgba(255,255,255,0.03)", 
  border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none",
  display: "flex", flexDirection: "column", transition: "0.3s ease"
};

const inputWrapper = { borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 1 };
const customInput = { color: "#fff", fontSize: "1.1rem", mt: 1, "& .MuiInputBase-input::placeholder": { color: "#334155", opacity: 1 } };
const sendButtonStyle = {
  py: 2, borderRadius: "20px", background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
  fontWeight: 800, textTransform: "none", fontSize: "1rem", boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
};

export default Contact;