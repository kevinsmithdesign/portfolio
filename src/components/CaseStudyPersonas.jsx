// import React from "react";
// import { Typography, Box } from "@mui/material";
// import Grid from "@mui/material/Grid2";

// const CaseStudyPersona = ({ name, title, motivations, painPoints, img }) => {
//   return (
//     <Grid container spacing={4} mt={4}>
//       <Grid size={{ xs: 12, sm: 4, md: 4 }}>
//       <Box
//   sx={{
//     height: "440px",
//     width: "100%",
//     borderRadius: 3,
//     backgroundImage: `url("https://assets.codepen.io/2392702/unsplash_7YVZYZeITc8.jpg")`,
//     backgroundSize: "cover", // Ensures the image fills the Box
//     backgroundPosition: "center", // Centers the image
//     backgroundRepeat: "no-repeat", // Prevents tiling of the image
//   }}
// ></Box>
//       </Grid>
//       <Grid
//         size={{ xs: 12, sm: 8, md: 8 }}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold" mb={1}>
//           {name}
//         </Typography>
//         <Typography mb={3}>{title}</Typography>
//         <Typography variant="h6" fontWeight="bold" mb={1}>
//           Motivations
//         </Typography>
//         <Typography mb={3}>{motivations}</Typography>
//         <Typography variant="h6" fontWeight="bold" mb={1}>
//           Pain Points
//         </Typography>
//         <Typography>{painPoints}</Typography>
//       </Grid>
//     </Grid>
//   );
// };

// export default CaseStudyPersona;

import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const CaseStudyPersona = ({ name, title, motivations, painPoints, img }) => {
  return (
    <Grid container spacing={4} mt={4}>
      <Grid size={{ xs: 12, sm: 4, md: 4 }}>
        <Box
          sx={{
            height: "440px",
            width: "100%",
            borderRadius: 3,
            backgroundImage: `url(${img})`, // Dynamically use the passed img prop
            backgroundSize: "cover", // Ensures the image fills the Box
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents tiling of the image
          }}
        ></Box>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 8, md: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={1}>
          {name}
        </Typography>
        <Typography mb={3}>{title}</Typography>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Motivations
        </Typography>
        <Typography mb={3}>{motivations}</Typography>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Pain Points
        </Typography>
        <Typography>{painPoints}</Typography>
      </Grid>
    </Grid>
  );
};

export default CaseStudyPersona;
