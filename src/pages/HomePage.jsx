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
  const [imageOpacity, setImageOpacity] = useState({});

  const portfolioProjects = [
    {
      title: "Prompt Rank",
      description:
        "Explore, rank, and share AI prompts while discovering powerful AI tools. Prompt Rank helps users refine AI interactions, learn prompt engineering techniques, and enhance their workflow with curated resources.",
      btnText: "Site Overview",
      route: "/promptrank-overview",
      img: PromptRank,
    },
    {
      title: "White Label Design System",
      description:
        "A flexible framework of reusable components and guidelines for building consistent, scalable, and accessible user interfaces, with support for multiple themes.",
      btnText: "View Design System",
      externalLink: "https://whitelabeldesignsystem.netlify.app/",
      img: DesignSystemImg,
    },
    {
      title: "UI Design Collection",
      description:
        "A showcase of thoughtfully crafted user interfaces, featuring real-world projects and fictional designs that highlight diverse capabilities and creative problem-solving.",
      btnText: "View UI Designs",
      externalLink: "https://dribbble.com/kevinsmithdesign",
      img: UICollectionImg,
    },
    {
      title: "Front End Development",
      description:
        "A collection of interactive, performance-optimized web applications and components, built with clean code, modern frameworks, and a focus on usability and scalability.",
      btnText: "View Code",
      externalLink: "https://github.com/kevinsmithdesign",
      img: FrontEndSoftwareImg,
    },
  ];

  // Preload all images immediately
  useEffect(() => {
    // Initialize all images with 0 opacity
    const initialOpacity = {};
    portfolioProjects.forEach((_, index) => {
      initialOpacity[index] = 0;
    });
    setImageOpacity(initialOpacity);

    // Preload images
    portfolioProjects.forEach(({ img }, index) => {
      const image = new Image();
      image.src = img;
      image.onload = () => {
        // Fade in each image as it loads
        setImageOpacity((prev) => ({
          ...prev,
          [index]: 1,
        }));
      };
    });
  }, []);

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
      <Navbar color="#333" />

      <Container
        sx={{
          mb: { xs: 12, md: 6 },
          px: { xs: "32px", md: "32px", lg: "16px" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "48px", lg: "64px" },
              lineHeight: { xs: "40px", md: "56px", lg: "72px" },
              fontWeight: 700,
              color: "#333",
              my: { xs: 6, md: 8, lg: 12 },
            }}
          >
            <span style={{ color: theme.palette.primary.main }}>
              I'm kevin smith,
            </span>{" "}
            a designer & developer crafting engaging digital experiences and
            driving business growth.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 10 }}>
          {portfolioProjects.map(
            (
              { title, description, btnText, route, externalLink, img },
              index
            ) => (
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
                      borderRadius: "10px",
                      backgroundColor: "#fff",
                      minHeight: "100%",
                    }}
                  >
                    <img
                      src={img}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                        objectFit: "cover",
                        transition: "opacity 1.2s ease-in-out",
                        opacity:
                          imageOpacity[index] !== undefined
                            ? imageOpacity[index]
                            : 0,
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
            )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
