import React, { useState, useEffect, useRef } from "react";
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

import AnimatedBtn from "../components/AnimatedBtn";

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Create refs for sections
  const recentWorkRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to Recent Work section
  const scrollToRecentWork = () => {
    recentWorkRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Function to scroll to Contact section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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

  const websiteStats = [
    {
      statNum: "10+",
      experienceTitle: "Years of Experience",
      description: "Combining Design Expertise and Development Skill.",
    },
    {
      statNum: "8+",
      experienceTitle: "Products Launched",
      description:
        "From Initial Minimum Viable Products to Fully-Scaled Production Platforms.",
    },
    {
      statNum: "4+",
      experienceTitle: "Design Systems Built",
      description: "With Tokens, Guidelines, and Code Integration.",
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
          // minHeight: "100vh",
          minHeight: { xs: "60vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Box sx={{ mb: "60px" }}>
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "64px", md: "72px", lg: "96px" },
                lineHeight: { xs: "40px", sm: "72px", md: "80px", lg: "102px" },
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
              sx={{
                color: "#777",
                lineHeight: "",
                fontWeight: 500,
                fontSize: { xs: "18px", sm: "24px", md: "32px", lg: "32px" },
              }}
              mb={6}
            >
              Designing engaging digital experiences and driving business growth
              by bridging the gap between design and development.
            </Typography>

            <Stack flexDirection="row" gap={2}>
              <AnimatedBtn text="View my Work" onClick={scrollToRecentWork} />
              {/* <Button
                variant="contained"
                sx={{ p: "18px 32px", borderRadius: "10px" }}
                onClick={scrollToRecentWork}
              >
                View my Work
              </Button>
              <Button
                variant="outlined"
                sx={{ p: "18px 32px", borderRadius: "10px" }}
                onClick={scrollToContact}
              >
                Get in Touch
              </Button> */}
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
          <Stack mb={4} mt={{ xs: 8, md: 0 }} sx={{ textAlign: "center" }}>
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

          <Grid container spacing={1} mb={{ xs: 8, md: 0 }}>
            {myExpertise.map(({ icon, title, description }) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <Card
                  sx={{
                    p: 5,
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
                      mb: 3,
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
                  <Typography variant="body2">{description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
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
        <Container sx={{ mb: "60px" }}>
          {/* Testing idea */}

          <Grid
            container
            spacing={10}
            mb={{ xs: 8, md: 1, display: "flex", alignItems: "center" }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack>
                {/* <Typography variant="h1" sx={{ fontSize: "64px" }}>
                  Experiences with Passion, Precision, and Purpose.
                </Typography> */}

                <Typography variant="h1" sx={{ fontSize: "64px" }}>
                  Discover, Design, Develop, Deploy.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  px: 5,
                  py: 6,
                  boxShadow: "none",
                  borderRadius: "16px",
                  background: "#fafafa",
                }}
              >
                <Typography mt={1} variant="h6" mb={4} fontWeight={500}>
                  Transforming ideas into impactful solutions: leveraging
                  strategic design thinking and technical expertise to create
                  intuitive digital experiences that drive engagement and
                  deliver measurable results.
                </Typography>

                <Button variant="contained" onClick={scrollToContact}>
                  Let's Talk
                </Button>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={1} mb={{ xs: 8, md: 0 }}>
            {websiteStats.map(({ statNum, experienceTitle, description }) => (
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    p: 5,
                    boxShadow: "none",
                    borderRadius: "16px",
                    background: "#fafafa",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Typography variant="h1" sx={{ fontSize: "96px" }}>
                    {statNum}
                  </Typography>
                  <Typography variant="h4" mb={1}>
                    {experienceTitle}
                  </Typography>
                  <Typography>{description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Testing idea ends */}
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
          <Stack mt={{ xs: 8, md: 0 }} sx={{ textAlign: "center", mb: 4 }}>
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

          <Grid container spacing={1} mb={{ xs: 8, md: 0 }}>
            {myProcess.map(({ number, title, description }) => (
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    p: 5,
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

      {/* Add the ref to the Recent Work section */}
      <Box
        ref={recentWorkRef}
        sx={{
          background: "",
          mb: 18,
          scrollMarginTop: "80px", // Add some margin to account for any fixed headers
        }}
      >
        <Container>
          <Stack my={8} sx={{ textAlign: "center" }}>
            <Typography variant="h1" xs={{ color: "#010410" }}>
              Recent Work
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: 500, color: "#777" }}
            >
              Innovative digital solutions that blend design excellence with
              development expertise.
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
      <Box
        ref={contactRef}
        sx={{
          background: "#010410",
          scrollMarginTop: "80px",
        }}
      >
        <Container sx={{ py: 10 }}>
          <Typography variant="h1" color="white" fontWeight={600} mb={4}>
            Get in Touch
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" color="white" mb={1}>
                Let's work together
              </Typography>
              <Typography color="white" opacity={0.7} mb={4}>
                I'm always open to discussing new projects, creative ideas, or{" "}
                <br />
                opportunities to be part of your vision or team.
              </Typography>

              <Stack>
                <Typography fontWeight={600} color="white">
                  Email
                </Typography>

                <Typography color="white">info@kevinsmithdesign.com</Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              {/* <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <Box>
                  <Typography color="white" mb={1}>
                    Name
                  </Typography>
                  <input
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "8px",
                      color: "white",
                    }}
                    placeholder="Your name"
                  />
                </Box>

                <Box>
                  <Typography color="white" mb={1}>
                    Email
                  </Typography>
                  <input
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "8px",
                      color: "white",
                    }}
                    placeholder="Your email"
                  />
                </Box>

                <Box>
                  <Typography color="white" mb={1}>
                    Message
                  </Typography>
                  <textarea
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "8px",
                      color: "white",
                      minHeight: "120px",
                      fontFamily: "inherit",
                    }}
                    placeholder="What can I help you with?"
                  />
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    alignSelf: "flex-start",
                    p: "12px 24px",
                    borderRadius: "8px",
                    mt: 2,
                  }}
                >
                  Send Message
                </Button>
              </Box> */}
            </Grid>
          </Grid>

          <Box
            sx={{ mt: 8, pt: 4, borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Typography color="white" opacity={0.6} textAlign="">
              © {new Date().getFullYear()} Kevin Smith Design. All rights
              reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
