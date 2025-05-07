import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Skeleton,
  useTheme,
  Stack,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid2";
import HeroSection from "../components/HeroSection";
import UICollectionImg from "../assets/images/UICollectionImg.jpg";
import FrontEndSoftwareImg from "../assets/images/FrontEndSoftwareImg.svg";
import PromptRank from "../assets/images/PromptRank.svg";
import DesignSystemImg from "../assets/images/DesignSystemImg.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import UiUxIcon from "../icons/UiUxIcon";
import LayerIcon from "../icons/LayersIcon";
import PaletteIcon from "../icons/PaletteIcon";
import PartyIcon from "../icons/PartyIcon";
import GitIcon from "../icons/GitIcon";
import LightningIcon from "../icons/LightningIcon";

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [imagesLoaded, setImagesLoaded] = useState({});

  const myExpertise = [
    {
      icon: <UiUxIcon />,
      title: "UI/UX Design",
      description:
        "Creating user-centered experiences through research and testing that solve real problems and drive engagement.",
    },
    {
      icon: <PaletteIcon />,
      title: "Visual Design",
      description:
        "Crafting distinctive visual identities that communicate values and create meaningful connections with your audience.",
    },
    {
      icon: <LayerIcon />,
      title: "Design Systems",
      description:
        "Building scalable, consistent frameworks with reusable components that streamline development and ensure brand coherence.",
    },
    {
      icon: <PartyIcon />,
      title: "Motion & Animation",
      description:
        "Adding life to interfaces through purposeful motion design that guides attention, provides feedback, and creates memorable interactions.",
    },
    {
      icon: <GitIcon />,
      title: "Front-End Development",
      description:
        "Transforming designs into responsive, accessible code with modern frameworks that deliver exceptional cross-device experiences.",
    },
    {
      icon: <LightningIcon />,
      title: "Bridge the Gap",
      description:
        "Connecting design vision with technical implementation through effective communication and optimized workflows.",
    },
  ];

  const myProcess = [
    {
      number: "01",
      title: "Discover & Research",
      description:
        "Understanding your business goals and audience needs through targeted research to identify key opportunities.",
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "Developing a focused roadmap with key features and user flows to ensure we solve the right problems.",
    },
    {
      number: "03",
      title: "Design & Prototyping",
      description:
        "Creating intuitive, visual solutions and refining through iterative prototyping and testing.",
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description:
        "Ensuring functionality, performance, and user experience through comprehensive testing and refinement.",
    },
    {
      number: "05",
      title: "Development & Implementation",
      description:
        "Building responsive, accessible experiences with clean code that performs across all devices.",
    },
    {
      number: "06",
      title: "Launch & Optimization",
      description:
        "Deploying solutions and continuously improving based on performance data and user feedback.",
    },
  ];

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

  // Initialize the loading state for all images
  useEffect(() => {
    // Set all images as loading initially
    const initialLoadState = {};
    portfolioProjects.forEach((_, index) => {
      initialLoadState[index] = false;
    });
    setImagesLoaded(initialLoadState);

    // Preload images
    portfolioProjects.forEach(({ img }, index) => {
      const image = new Image();
      image.src = img;
      image.onload = () => {
        // Mark image as loaded when it completes loading
        setImagesLoaded((prev) => ({
          ...prev,
          [index]: true,
        }));
      };

      // Handle image load errors
      image.onerror = () => {
        console.error(`Failed to load image: ${img}`);
        // Still mark as "loaded" to remove skeleton
        setImagesLoaded((prev) => ({
          ...prev,
          [index]: true,
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

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
  };

  return (
    <>
      <Navbar color="#010410" />

      <Box
        sx={{
          background: "#fafafa",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Box sx={{ mb: "100px" }}>
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "48px", lg: "88px" },
                lineHeight: { xs: "40px", md: "56px", lg: "94px" },
                fontWeight: 700,
                color: "#010410",
                mb: 3,
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>
                I'm kevin smith,
              </span>
              {"  "}
              a product <br /> designer & developer
            </Typography>

            <Typography
              variant="h4"
              sx={{ color: "#777", lineHeight: "", fontWeight: 500 }}
              mb={6}
            >
              Designing engaging digital experiences and driving business growth
              by bridging the gap between design and development.
            </Typography>

            <Stack flexDirection="row" gap={2}>
              <Button
                variant="contained"
                sx={{ p: "18px 32px", borderRadius: "10px" }}
              >
                View my Work
              </Button>
              <Button
                variant="outlined"
                sx={{ p: "18px 32px", borderRadius: "10px" }}
              >
                Get in Touch
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          background: "",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Stack mb={4} sx={{ textAlign: "center" }}>
            <Typography variant="h1" mb={1} sx={{ color: "#010410" }}>
              Explore my Expertise
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: 500, color: "#777" }}
            >
              I design and build seamless digital experiences by blending design
              thinking with development precision.
            </Typography>
          </Stack>

          <Grid container spacing={1}>
            {myExpertise.map(({ icon, title, description }) => (
              <Grid size={{ xs: 12, md: 6, md: 4 }}>
                <Card
                  sx={{
                    p: 4,
                    boxShadow: "none",
                    borderRadius: "16px",
                    background: "#fafafa",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: theme.palette.primary.main,
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography
                    variant="h6"
                    mb={1}
                    fontWeight="600"
                    sx={{ color: "#010410" }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2" color="#777">
                    {description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          background: "#fafafa",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Stack sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h1" sx={{ color: "#010410" }}>
              My Process
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: 500, color: "#777" }}
            >
              From concept to execution, here's how I bring ideas to life.
            </Typography>
          </Stack>

          <Grid container spacing={1}>
            {myProcess.map(({ number, title, description }) => (
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    p: 4,
                    boxShadow: "none",
                    borderRadius: "16px",
                    background: "",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h4"
                    mb={2}
                    sx={{ color: theme.palette.primary.main }}
                    fontWeight={700}
                  >
                    {number}
                  </Typography>
                  {/* </Box> */}
                  <Typography
                    variant="h6"
                    mb={1}
                    fontWeight="600"
                    sx={{ color: "#010410" }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2">{description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ background: "", mb: 18 }}>
        <Container>
          <Stack my={8} sx={{ textAlign: "center" }}>
            <Typography variant="h1" xs={{ color: "#010410" }}>
              Recent Work
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: 500, color: "#777" }}
            >
              Lorem ispum dolor hair you know some longer text
            </Typography>
          </Stack>

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
                        backgroundColor: imagesLoaded[index]
                          ? "transparent"
                          : "#f5f5f5",
                        minHeight: "300px", // Set minimum height for skeleton
                      }}
                    >
                      {!imagesLoaded[index] ? (
                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height="100%"
                          animation="wave"
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: "10px",
                          }}
                        />
                      ) : null}
                      <img
                        src={img}
                        alt={title}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                          objectFit: "cover",
                          transition: "opacity 0.8s ease-in-out",
                          opacity: imagesLoaded[index] ? 1 : 0,
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
                      color="#010410"
                      fontWeight={600}
                      mb={2}
                    >
                      {title}
                    </Typography>
                    <Typography mb={3} sx={{ fontSize: "18px" }} color="#777">
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
      </Box>
      <footer>
        <Box sx={{ background: "#010410" }}>
          <Container sx={{ py: 10 }}>
            <Typography color="white" fontWeight="bold">
              Connect
            </Typography>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default HomePage;
