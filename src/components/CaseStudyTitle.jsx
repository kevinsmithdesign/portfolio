import React from "react";
import { Typography } from "@mui/material";

const CaseStudyTitle = ({ title, description }) => {
  return (
    <>
      <Typography fontWeight="bold" mb={1} sx={{ color: "#4E88FF" }}>
        {title}
      </Typography>
      <Typography variant="h5" fontWeight="bold" mb={2} color="#fff">
        {description}
      </Typography>
    </>
  );
};

export default CaseStudyTitle;
