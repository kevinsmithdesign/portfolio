import React from "react";
import { Box, Typography } from "@mui/material";

const DesignSystemTitle = ({
  atomicTitle,
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <Box sx={{ pt: 6, pb: 3 }}>
      <Typography mb={2} fontWeight="bold" color="#45A2FB">
        {atomicTitle}
      </Typography>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        {sectionTitle}
      </Typography>
      <Typography variant="body1">{sectionDescription}</Typography>
    </Box>
  );
};

export default DesignSystemTitle;
