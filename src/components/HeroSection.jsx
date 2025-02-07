import React, { useState, useEffect } from "react";
import { Skeleton, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import HeroImg from "../assets/images/HeroImg.svg";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = HeroImg;
    img.onload = () => {
      setTimeout(() => setImageLoaded(true), 1000); // Ensures loader stays for 3 seconds
    };
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 0, md: 6 }}
      sx={{
        minHeight: "600px",
        alignItems: "center",
      }}
    >
      <Grid size={{ sm: 12, md: 5 }}>
        <Box sx={{ mt: { xs: 12, md: 0 } }}>
          <Typography variant="h2" fontWeight="bold" mb={3}>
            Hello, I'm Kevin Smith
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#777" }}>
            A UI/UX Designer & Developer with over a decade of experience
            crafting engaging digital experiences and driving business growth.
          </Typography>
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
            mt: { xs: 0, sm: 2, md: 12 },
          }}
        >
          {!imageLoaded ? (
            <Skeleton
              variant="rectangular"
              sx={{
                borderRadius: "16px",
                width: { xs: "80%", md: "80%" },
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
