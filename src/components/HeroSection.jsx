// import React from "react";
// import { Container, Typography, Stack, Grid, Card } from "@mui/material";
// import Grid from "@mui/material/Grid2";

// const HeroSection = () => {
//   return (
//     <>
//       <Grid container spacing={4} mt={4}>
//         <Grid
//           size={{ xs: 12, sm: 5, md: 5 }}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="h6" fontWeight="bold" mb={3}>
//             {title}
//           </Typography>
//           <Typography mb={3}>• {bulletOne}</Typography>
//           <Typography>• {bulletTwo}</Typography>
//         </Grid>
//         <Grid size={{ xs: 12, sm: 7, md: 7 }}>
//           <Box
//             sx={{
//               height: "360px",
//               width: "100%",
//               background: "#eee",
//               borderRadius: 3,
//             }}
//           ></Box>
//         </Grid>
//       </Grid>

//       <Stack mt={8}>
//         <Typography variant="h2" fontWeight="bold" mb={2}>
//           Hello, I'm Kevin Smith
//         </Typography>
//         <Typography variant="h6" mb={4}>
//           A UI/UX Designer & Developer with over a decade of experience crafting
//           engaging digital experiences and driving business growth.
//         </Typography>
//       </Stack>

//       <Stack mb={8}>
//         <Typography fontWeight="bold" mb={1}>
//           A FEW STATS ABOUT ME
//         </Typography>
//         <Typography variant="body1">
//           • Designed and developed 20+ products and websites.
//         </Typography>
//         <Typography variant="body1">
//           • Created 50+ prototypes for various industries.
//         </Typography>
//         <Typography variant="body1">
//           • Specialized in building scalable design systems and reusable
//           components.
//         </Typography>
//       </Stack>
//     </>
//   );
// };

// export default HeroSection;

import React, { useState } from "react";
import { Skeleton, Typography, Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import HeroImg from "../assets/images/HeroImg.svg";

const HeroSection = () => {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        minHeight: "600px",
        alignItems: "center",
      }}
    >
      <Grid size={{ sm: 12, md: 5 }}>
        <Typography variant="h2" fontWeight="bold" mb={3}>
          Hello, I'm Kevin Smith
        </Typography>
        <Typography sx={{ fontSize: "20px", color: "#777" }}>
          A UI/UX Designer & Developer with over a decade of experience crafting
          engaging digital experiences and driving business growth.
        </Typography>
      </Grid>
      <Grid size={{ sm: 12, md: 7 }}>
        <img
          src={HeroImg}
          alt="Profile Page"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
