// import React, { useState, useEffect } from "react";
// import { Button, Container, Typography, Box, Skeleton } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import HeroSection from "../components/HeroSection";
// import UICollectionImg from "../assets/images/UICollectionImg.jpg";
// import FrontEndSoftwareImg from "../assets/images/FrontEndSoftwareImg.svg";
// import PromptRank from "../assets/images/PromptRank.svg";
// import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation
// import Navbar from "../components/Navbar";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const location = useLocation(); // Get current location
//   const [allImagesLoaded, setAllImagesLoaded] = useState(false);
//   const [imageLoadStatus, setImageLoadStatus] = useState({});

//   const portfolioProjects = [
//     // {
//     //   title: "Lila Case Study",
//     //   description:
//     //     "Lila is an AI-powered platform that supports caregivers with natural, human-like conversations, revolutionizing communication in healthcare.",
//     //   btnText: "View Case Study",
//     //   route: "/casestudy",
//     //   img: "https://assets.codepen.io/2392702/Group+241568.svg",
//     // },
//     // {
//     //   title: "White Label Design System",
//     //   description:
//     //     "A flexible framework of reusable components and guidelines for building consistent, scalable, and accessible user interfaces, with support for multiple themes.",
//     //   btnText: "View Design System",
//     //   // route: "/designsystem",
//     //   route: "/whitelabel",
//     //   // externalLink: "/whitelabel", // Add this

//     //   // externalLink: "https://55c5pt.csb.app/",
//     //   img: "https://assets.codepen.io/2392702/Desktop+-+114+%281%29.svg",
//     // },
//     {
//       title: "Prompt Rank",
//       description:
//         "Explore, rank, and share AI prompts while discovering powerful AI tools. Prompt Rank helps users refine AI interactions, learn prompt engineering techniques, and enhance their workflow with curated resources.",
//       // btnText: "View Site",
//       // externalLink: "https://promptrank.io",
//       externalLink: null,
//       btnText: "Site Overview",
//       route: "/promptrank-overview",
//       img: PromptRank,
//     },
//     {
//       title: "UI Design Collection",
//       description:
//         "A showcase of thoughtfully crafted user interfaces, featuring real-world projects and fictional designs that highlight diverse capabilities and creative problem-solving.",
//       btnText: "View UI Designs",
//       // route: "/",
//       externalLink: "https://dribbble.com/kevinsmithdesign",
//       img: UICollectionImg,
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
//       externalLink: "https://github.com/kevinsmithdesign",
//       img: FrontEndSoftwareImg,
//     },
//   ];

//   // Reset image loading state when navigating back to this page
//   useEffect(() => {
//     // Reset states when the component mounts or when the path changes to '/'
//     if (location.pathname === "/") {
//       setAllImagesLoaded(false);
//       setImageLoadStatus({});

//       // Start the image loading process
//       portfolioProjects.forEach(({ img }, index) => {
//         const image = new Image();
//         image.src = img;
//         image.onload = () => {
//           setImageLoadStatus((prev) => ({ ...prev, [index]: true }));
//         };
//       });

//       // Set timeout to delay the appearance of all images
//       const timer = setTimeout(() => {
//         setAllImagesLoaded(true);
//       }, 300);

//       return () => clearTimeout(timer);
//     }
//   }, [location.pathname]); // Depend on location.pathname

//   // Handle click based on whether it's a route or external link
//   const handleButtonClick = (route, externalLink) => {
//     if (externalLink) {
//       // For external links, open in a new tab
//       window.open(externalLink, "_blank", "noopener,noreferrer");
//     } else if (route) {
//       // For internal routes, use the router's navigate
//       navigate(route);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Container sx={{ mb: 6 }}>
//         <Box sx={{ mb: 4 }}>
//           <HeroSection />
//         </Box>
//         <Grid container spacing={{ xs: 2, md: 8 }}>
//           {portfolioProjects.map(
//             (
//               { title, description, btnText, route, externalLink, img },
//               index
//             ) => {
//               return (
//                 <React.Fragment key={index}>
//                   <Grid size={{ xs: 12, md: 6 }}>
//                     <Box
//                       sx={{
//                         width: "100%",
//                         overflow: "hidden",
//                         position: "relative",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       {/* Keep Skeleton visible until the timer is done */}
//                       {!allImagesLoaded && (
//                         <Skeleton
//                           variant="rectangular"
//                           width="100%"
//                           height="100%"
//                           animation="wave"
//                           sx={{
//                             position: "absolute",
//                             top: 0,
//                             left: 0,
//                             borderRadius: "16px",
//                             background: "#F5F9FC",
//                           }}
//                         />
//                       )}

//                       {/* Image is always in the DOM but hidden until the timer completes */}
//                       <img
//                         src={img}
//                         alt={title}
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           borderRadius: "16px",
//                           objectFit: "cover",
//                           transition: "opacity 0.3s ease-in-out",
//                           opacity: allImagesLoaded ? 1 : 0, // Fade in all images at once
//                           visibility: allImagesLoaded ? "visible" : "hidden",
//                         }}
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid
//                     size={{ xs: 12, md: 6 }}
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       flexDirection: "column",
//                     }}
//                   >
//                     <Typography variant="h4" fontWeight="bold" mb={2}>
//                       {title}
//                     </Typography>
//                     <Typography mb={3} sx={{ fontSize: "18px" }}>
//                       {description}
//                     </Typography>
//                     <Box>
//                       <Button
//                         variant="contained"
//                         sx={{ mb: 2 }}
//                         onClick={() => handleButtonClick(route, externalLink)}
//                       >
//                         {btnText}
//                       </Button>
//                     </Box>
//                   </Grid>
//                 </React.Fragment>
//               );
//             }
//           )}
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Skeleton,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import HeroSection from "../components/HeroSection";
import UICollectionImg from "../assets/images/UICollectionImg.jpg";
import FrontEndSoftwareImg from "../assets/images/FrontEndSoftwareImg.svg";
import PromptRank from "../assets/images/PromptRank.svg";
import DesignSystemImg from "../assets/images/DesignSystemImg.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState({});

  const portfolioProjects = [
    // {
    //   title: "Lila Case Study",
    //   description:
    //     "Lila is an AI-powered platform that supports caregivers with natural, human-like conversations, revolutionizing communication in healthcare.",
    //   btnText: "View Case Study",
    //   route: "/casestudy",
    //   img: "https://assets.codepen.io/2392702/Group+241568.svg",
    // },

    {
      title: "Prompt Rank",
      description:
        "Explore, rank, and share AI prompts while discovering powerful AI tools. Prompt Rank helps users refine AI interactions, learn prompt engineering techniques, and enhance their workflow with curated resources.",
      // btnText: "View Site",
      // externalLink: "https://promptrank.io",
      btnText: "Site Overview",
      route: "/promptrank-overview",
      img: PromptRank,
    },
    {
      title: "White Label Design System",
      description:
        "A flexible framework of reusable components and guidelines for building consistent, scalable, and accessible user interfaces, with support for multiple themes.",
      btnText: "View Design System",
      // route: "/designsystem",
      // route: "/whitelabel",
      // externalLink: "/whitelabel", // Add this

      externalLink: "https://whitelabeldesignsystem.netlify.app/",
      // img: "https://assets.codepen.io/2392702/Desktop+-+114+%281%29.svg",
      img: DesignSystemImg,
    },
    {
      title: "UI Design Collection",
      description:
        "A showcase of thoughtfully crafted user interfaces, featuring real-world projects and fictional designs that highlight diverse capabilities and creative problem-solving.",
      btnText: "View UI Designs",
      // route: "/",
      externalLink: "https://dribbble.com/kevinsmithdesign",
      img: UICollectionImg,
    },
    // {
    //   title: "Animations Collection",
    //   description:
    //     "A curated selection of UI animations showcasing smooth interactions, micro-interactions, and engaging motion design that enhance user experiences.",
    //   btnText: "View Animations",
    //   route: "/animation",
    //   img: "https://assets.codepen.io/2392702/Group+241568.svg",
    // },
    {
      title: "Front End Development",
      description:
        "A collection of interactive, performance-optimized web applications and components, built with clean code, modern frameworks, and a focus on usability and scalability.",
      btnText: "View Code",
      externalLink: "https://github.com/kevinsmithdesign",
      img: FrontEndSoftwareImg,
    },
  ];

  // Simple image loading effect
  useEffect(() => {
    // Reset all states
    setAllImagesLoaded(false);
    setImageLoadStatus({});

    // Preload images
    portfolioProjects.forEach(({ img }, index) => {
      const image = new Image();
      image.src = img;
      image.onload = () => {
        setImageLoadStatus((prev) => ({ ...prev, [index]: true }));
      };
    });

    // Set timeout for image loading
    const timer = setTimeout(() => {
      setAllImagesLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []); // Only run once on mount - router handles remounting

  // Handle click based on whether it's a route or external link
  const handleButtonClick = (route, externalLink) => {
    if (externalLink) {
      window.open(externalLink, "_blank", "noopener,noreferrer");
    } else if (route) {
      navigate(route);
    }
  };

  return (
    <>
      <Navbar />
      <Container sx={{ mb: 6 }}>
        <Box sx={{ mb: 4 }}>
          <HeroSection />
          <Typography
            sx={{
              // fontSize: "64px",
              // lineHeight: "72px",
              fontSize: "72px",
              lineHeight: "82px",
              fontWeight: 700,
              color: "#333",
              mt: 12,
              mb: 14,
            }}
          >
            <span style={{ color: theme.palette.primary.main }}>
              I'm kevin smith,
            </span>{" "}
            a designer crafting engaging digital experiences and driving
            business growth.
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 8 }}>
          {portfolioProjects.map(
            (
              { title, description, btnText, route, externalLink, img },
              index
            ) => {
              return (
                <React.Fragment key={index}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        width: "100%",
                        overflow: "hidden",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* Keep Skeleton visible until the timer is done */}
                      {!allImagesLoaded && (
                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height="100%"
                          animation="wave"
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "10px",
                            background: "#F5F9FC",
                          }}
                        />
                      )}

                      {/* Image is always in the DOM but hidden until the timer completes */}
                      <img
                        src={img}
                        alt={title}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                          objectFit: "cover",
                          transition: "opacity 0.3s ease-in-out",
                          opacity: allImagesLoaded ? 1 : 0, // Fade in all images at once
                          visibility: allImagesLoaded ? "visible" : "hidden",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 6 }}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="#333"
                      fontWeight="bold"
                      mb={2}
                    >
                      {title}
                    </Typography>
                    <Typography mb={3} sx={{ fontSize: "18px" }} color="#444">
                      {description}
                    </Typography>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{ mb: 2 }}
                        onClick={() => handleButtonClick(route, externalLink)}
                      >
                        {btnText}
                      </Button>
                    </Box>
                  </Grid>
                </React.Fragment>
              );
            }
          )}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
