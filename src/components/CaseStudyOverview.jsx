import React from "react";
import { Typography, Chip, Stack, Button, Box, Link } from "@mui/material";

const CaseStudyOverview = ({
  chipTitle,
  projectTitle,
  projectDescription,
  role,
  backgroundImageUrl, // Add this prop for dynamic background image
}) => {
  return (
    <Stack>
      <Typography variant="h5" fontWeight="bold">
        {projectTitle}
      </Typography>
      <Typography variant="body1" mb={1}>
        {projectDescription}
      </Typography>
      <Stack
        sx={{
          height: { xs: "auto", sm: 380 }, // Allow dynamic height on smaller screens
          minHeight: 200, // Ensure a minimum height
          maxHeight: "100%",
          backgroundImage: `url(${backgroundImageUrl})`, // Use the prop for dynamic background
          backgroundSize: "contain", // Maintain aspect ratio
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mb: 2,
          paddingTop: { xs: "10%", sm: 0 }, // Adjust padding for smaller viewports
          paddingBottom: { xs: "10%", sm: 0 },
        }}
      />

      <Typography variant="body1" mb={2}>
        {role}
      </Typography>
    </Stack>
  );
};

export default CaseStudyOverview;
