// import React from "react";
// import { Button, Container, Typography, Box, Divider } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import HeroSection from "../components/HeroSection";

// const HomePage = () => {
//   const portfolioProjects = [
//     {
//       title: "Lila Case Study",
//       description:
//         "Lila is an AI-powered platform that supports caregivers with natural, human-like conversations, revolutionizing communication in healthcare.",
//       btnText: "View Case Study",
//       route: "/casestudy",
//       img: "https://assets.codepen.io/2392702/Group+241568.svg",
//     },
//     {
//       title: "White Label Design System",
//       description:
//         "A flexible framework of reusable components and guidelines for building consistent, scalable, and accessible user interfaces, with support for multiple themes.",
//       btnText: "View Design System",
//       // route: "/designsystem",
//       route: "/whitelabel",
//       // externalLink: "/whitelabel", // Add this

//       // externalLink: "https://55c5pt.csb.app/",
//       img: "https://assets.codepen.io/2392702/Desktop+-+114+%281%29.svg",
//     },
//     {
//       title: "UI Design Collection",
//       description:
//         "A showcase of thoughtfully crafted user interfaces, featuring real-world projects and fictional designs that highlight diverse capabilities and creative problem-solving.",
//       btnText: "View UI Designs",
//       externalLink: "https://dribbble.com/kevinsmithdesign",
//       img: "https://assets.codepen.io/2392702/Group+1.jpg",
//     },
//     // {
//     //   title: "Animations Collection",
//     //   description:
//     //     "A curated selection of UI animations showcasing smooth interactions, micro-interactions, and engaging motion design that enhance user experiences.",
//     //   btnText: "View Animations",
//     //   route: "/animation",
//     //   img: "https://assets.codepen.io/2392702/Group+241568.svg",
//     // },
//     {
//       title: "Front End Development",
//       description:
//         "A collection of interactive, performance-optimized web applications and components, built with clean code, modern frameworks, and a focus on usability and scalability.",
//       btnText: "View Code",
//       // route: "/code",
//       externalLink: "https://github.com/kevinsmithdesign",
//       img: "https://assets.codepen.io/2392702/Desktop+-+6.svg",
//     },
//   ];

//   return (
//     <Container sx={{ mb: 6 }}>
//       <HeroSection />
//       <Grid container spacing={{ xs: 2, md: 6 }}>
//         {portfolioProjects.map(
//           (
//             { title, description, btnText, route, externalLink, img },
//             index
//           ) => (
//             <React.Fragment key={index}>
//               <Grid size={{ xs: 12, md: 6 }}>
//                 <img
//                   loading="lazy"
//                   src={img}
//                   alt={title}
//                   style={{ width: "100%" }}
//                 />
//               </Grid>
//               <Grid
//                 size={{ xs: 12, md: 6 }}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   flexDirection: "column",
//                 }}
//               >
//                 <Typography variant="h4" fontWeight="bold" mb={2}>
//                   {title}
//                 </Typography>
//                 <Typography mb={3} sx={{ fontSize: "18px" }}>
//                   {description}
//                 </Typography>
//                 <Box>
//                   <Button
//                     variant="contained"
//                     sx={{ mb: 2 }}
//                     onClick={() => {
//                       if (externalLink) {
//                         window.open(
//                           externalLink,
//                           "_blank",
//                           "noopener,noreferrer"
//                         );
//                       } else {
//                         window.location.pathname = route;
//                       }
//                     }}
//                   >
//                     {btnText}
//                   </Button>
//                 </Box>
//               </Grid>
//             </React.Fragment>
//           )
//         )}
//       </Grid>
//     </Container>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import { Button, Container, Typography, Box, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import HeroSection from "../components/HeroSection";

const ProjectImage = ({ img, title }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Box position="relative">
      {loading && !error && (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height={300}
          sx={{ bgcolor: "grey.200" }}
        />
      )}
      <img
        loading="lazy"
        src={img}
        alt={title}
        style={{
          width: "100%",
          display: loading ? "none" : "block",
        }}
        onLoad={() => setLoading(false)}
        onError={(e) => {
          console.error("Image failed to load:", img);
          setError(true);
          setLoading(false);
        }}
      />
    </Box>
  );
};

const ProjectContent = ({
  title,
  description,
  btnText,
  route,
  externalLink,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        {title}
      </Typography>
      <Typography mb={3} sx={{ fontSize: "18px" }}>
        {description}
      </Typography>
      <Box>
        <Button
          variant="contained"
          sx={{ mb: 2 }}
          onClick={() => {
            if (externalLink) {
              window.open(externalLink, "_blank", "noopener,noreferrer");
            } else {
              window.location.pathname = route;
            }
          }}
        >
          {btnText}
        </Button>
      </Box>
    </Box>
  );
};

const HomePage = () => {
  const portfolioProjects = [
    {
      title: "Lila Case Study",
      description:
        "Lila is an AI-powered platform that supports caregivers with natural, human-like conversations, revolutionizing communication in healthcare.",
      btnText: "View Case Study",
      route: "/casestudy",
      img: "https://assets.codepen.io/2392702/Group+241568.svg",
    },
    {
      title: "White Label Design System",
      description:
        "A flexible framework of reusable components and guidelines for building consistent, scalable, and accessible user interfaces, with support for multiple themes.",
      btnText: "View Design System",
      route: "/whitelabel",
      img: "https://assets.codepen.io/2392702/Desktop+-+114+%281%29.svg",
    },
    {
      title: "UI Design Collection",
      description:
        "A showcase of thoughtfully crafted user interfaces, featuring real-world projects and fictional designs that highlight diverse capabilities and creative problem-solving.",
      btnText: "View UI Designs",
      externalLink: "https://dribbble.com/kevinsmithdesign",
      img: "https://assets.codepen.io/2392702/Group+1.jpg",
    },
    {
      title: "Front End Development",
      description:
        "A collection of interactive, performance-optimized web applications and components, built with clean code, modern frameworks, and a focus on usability and scalability.",
      btnText: "View Code",
      externalLink: "https://github.com/kevinsmithdesign",
      img: "https://assets.codepen.io/2392702/Desktop+-+6.svg",
    },
  ];

  return (
    <Container sx={{ mb: 6 }}>
      <HeroSection />
      <Grid container spacing={{ xs: 2, md: 6 }}>
        {portfolioProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ProjectImage img={project.img} title={project.title} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ProjectContent {...project} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
