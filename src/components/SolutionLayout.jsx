import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const SolutionLayout = ({ title, bulletOne, bulletTwo, img }) => {
  return (
    <Grid container spacing={6} mt={4}>
      <Grid
        size={{ xs: 12, sm: 5, md: 5 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={3} color="#fff">
          {title}
        </Typography>
        <Typography mb={3} color="#fff">
          • {bulletOne}
        </Typography>
        <Typography color="#fff">• {bulletTwo}</Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 7, md: 7 }}>
        {/* <Box
          sx={{
            height: "400px",
            width: "100%",
            background: "#333",
            borderRadius: "16px",
          }}
        >
          <img src={PromptsPreview} alt="img" style={{ maxWidth: "500px" }} />
        </Box> */}
        {img}
      </Grid>
    </Grid>
  );
};

export default SolutionLayout;
