import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const SolutionLayout = ({ title, bulletOne, bulletTwo }) => {
  return (
    <Grid container spacing={4} mt={3}>
      <Grid
        size={{ xs: 12, sm: 5, md: 5 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          {title}
        </Typography>
        <Typography mb={3}>• {bulletOne}</Typography>
        <Typography>• {bulletTwo}</Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 7, md: 7 }}>
        <Box
          sx={{
            height: "360px",
            width: "100%",
            background: "#eee",
            borderRadius: 3,
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default SolutionLayout;
