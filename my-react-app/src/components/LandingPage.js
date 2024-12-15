import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for routing
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./LandingPage.css";

const LandingPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMore = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <Box className="landing-page">
      
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        className="app-bar"
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            TRAILBLAZERS
          </Typography>
          <Box>
            <Button
              color="inherit"
              sx={{ mx: 1, fontWeight: "bold" }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                mx: 1,
                fontWeight: "bold",
                borderRadius: "20px",
                textTransform: "none",
              }}
              component={Link}
              to="/signup"
            >
              Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      
      <Box className="content-container" textAlign="center">
        <Box className="glass-card">
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#000", mb: 2 }}
          >
            Time Capsule
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "light", color: "#666", mb: 3 }}
          >
            — Write to the Future —
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#444", maxWidth: "500px", margin: "0 auto" }}
          >
            Capture, cherish, and relive the moments that matter most and keep
            your memories safe with encrypted and cloud-based storage.
          </Typography>
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLearnMore}
              sx={{
                borderRadius: "20px",
                px: 4,
                py: 1,
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              {showDetails ? "Hide Details" : "Learn More"}
            </Button>
          </Box>

          
          <Collapse in={showDetails} timeout="auto" unmountOnExit>
            <Box
              mt={3}
              sx={{
                textAlign: "left",
                maxWidth: "500px",
                margin: "0 auto",
                backgroundColor: "#f9f9f9",
                borderRadius: "12px",
                p: 2,
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                TimeCapsule letters are great for…
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                ❤️ <strong>Reliving memories</strong> in vivid detail
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                📈 <strong>Acknowledging growth</strong> & achievements
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                ✅ <strong>Setting goals</strong> for the future
              </Typography>
              <Typography variant="body1">
                😌 <strong>Decluttering your mind</strong> to find some headspace
              </Typography>
            </Box>
          </Collapse>
        </Box>
      </Box>

      
      <Box className="social-icons">
        {["Facebook", "Twitter", "Instagram"].map((platform) => (
          <IconButton key={platform} aria-label={platform}>
            {platform === "Facebook" && (
              <FacebookIcon sx={{ color: "white" }} />
            )}
            {platform === "Twitter" && <TwitterIcon sx={{ color: "white" }} />}
            {platform === "Instagram" && (
              <InstagramIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default LandingPage;
