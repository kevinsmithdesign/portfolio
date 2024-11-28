import React from "react";
import { Typography } from "@mui/material";

const CaseStudyTitle = ({ title, description }) => {
  return (
    <>
      <Typography fontWeight="bold" mb={1} sx={{ color: "#999" }}>
        {title}
      </Typography>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        {description}
      </Typography>
    </>
  );
};

export default CaseStudyTitle;