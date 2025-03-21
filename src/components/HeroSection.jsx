import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton, Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import HeroImg from "../assets/images/HeroImg.svg";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = HeroImg;
    img.onload = () => {
      setTimeout(() => setImageLoaded(true), 300);
    };
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 0, md: 6 }}
      sx={{
        alignItems: "center",
      }}
    >
      <Grid size={{ sm: 12, md: 5 }}>
        <Box sx={{ mt: { xs: 12, md: 0 } }}>
          <Typography variant="h2" fontWeight="bold" mb={3} color="#333">
            Hello, I'm <span style={{ color: "" }}>Kevin Smith</span>
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#999" }} mb={4}>
            A UI/UX Designer & Developer with over a decade of experience
            crafting engaging digital experiences and driving business growth.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/resume")}>
            View Resume
          </Button>
        </Box>
      </Grid>
      <Grid size={{ sm: 12, md: 7 }}>
        <Box
          sx={{
            width: "100%",
            height: 600, // Ensures consistent height
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 0, sm: 2, md: 0 },
          }}
        >
          {!imageLoaded ? (
            <Skeleton
              variant="rectangular"
              sx={{
                borderRadius: "10px",
                width: { xs: "80%", md: "80%" },
                background: "#F5F9FC",
                height: "80%",
              }}
              animation="wave" // Adds smooth shimmer effect
            />
          ) : (
            <img
              src={HeroImg}
              alt="Profile Page"
              style={{
                width: "100%",
                height: "100%",
                display: "block", // Prevents unwanted inline spacing
                transition: "opacity 0.5s ease-in-out",
                opacity: imageLoaded ? 1 : 0, // Smooth fade-in effect
              }}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
