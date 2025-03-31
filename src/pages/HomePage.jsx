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
import { motion, AnimatePresence } from "framer-motion";

// Create animated versions of MUI components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionContainer = motion(Container);
const MotionGrid = motion(Grid);

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);

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

  // Image loading effect
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

  // Counter animation effect
  useEffect(() => {
    // Target value is 100
    const targetValue = 100;
    const duration = 3000; // 3 seconds
    const stepTime = 30; // Update every 30ms
    const totalSteps = duration / stepTime;
    const increment = targetValue / totalSteps;

    let currentStep = 0;

    const counterInterval = setInterval(() => {
      currentStep++;

      // Use different easing for different parts of the animation
      let progress;
      if (currentStep / totalSteps < 0.7) {
        // Slow start, fast middle
        progress = Math.pow(currentStep / totalSteps, 1.5);
      } else {
        // Slow end
        progress = 1 - Math.pow(1 - currentStep / totalSteps, 3);
      }

      const nextValue = Math.min(
        Math.floor(targetValue * progress),
        targetValue
      );
      setCounter(nextValue);

      if (currentStep >= totalSteps) {
        clearInterval(counterInterval);
        // Give a small delay before removing the loader
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            setContentVisible(true);
          }, 200);
        }, 500);
      }
    }, stepTime);

    return () => clearInterval(counterInterval);
  }, []);

  // Handle click based on whether it's a route or external link
  const handleButtonClick = (route, externalLink) => {
    if (externalLink) {
      window.open(externalLink, "_blank", "noopener,noreferrer");
    } else if (route) {
      navigate(route);
    }
  };

  // Animation variants for content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <MotionBox
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#111",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MotionTypography
              component="div"
              sx={{
                fontSize: { xs: "60px", md: "120px", lg: "160px" },
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1,
              }}
            >
              {counter}%
            </MotionTypography>
            <Box
              sx={{
                width: "200px",
                height: "2px",
                backgroundColor: "#333",
                position: "relative",
                mt: 2,
              }}
            >
              <MotionBox
                initial={{ width: "0%" }}
                animate={{ width: `${counter}%` }}
                transition={{ ease: "easeOut" }}
                sx={{
                  height: "100%",
                  backgroundColor: "#fff",
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
              />
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>

      <Navbar color="#333" />

      {contentVisible && (
        <MotionContainer
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          sx={{
            mb: { xs: 12, md: 6 },
            px: { xs: "32px", md: "32px", lg: "16px" },
          }}
        >
          <MotionBox variants={itemVariants}>
            <MotionTypography
              variants={itemVariants}
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
            </MotionTypography>
          </MotionBox>

          <MotionGrid container spacing={{ xs: 2, md: 10 }}>
            {portfolioProjects.map(
              (
                { title, description, btnText, route, externalLink, img },
                index
              ) => (
                <React.Fragment key={index}>
                  <MotionGrid size={{ xs: 12, md: 6 }} variants={itemVariants}>
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
                            background: "#eaeaea",
                          }}
                        />
                      )}

                      {/* Image is always in the DOM but hidden until the timer completes */}
                      <motion.img
                        src={img}
                        alt={title}
                        initial={{ scale: 1.1 }}
                        animate={{
                          scale: 1,
                          transition: {
                            duration: 1.2,
                            ease: [0.25, 0.1, 0.25, 1.0],
                          },
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                          objectFit: "cover",
                          transition: "opacity 0.3s ease-in-out",
                          opacity: allImagesLoaded ? 1 : 0,
                          visibility: allImagesLoaded ? "visible" : "hidden",
                        }}
                      />
                    </Box>
                  </MotionGrid>

                  <MotionGrid
                    size={{ xs: 12, md: 6 }}
                    variants={itemVariants}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <MotionTypography
                      variant="h4"
                      color="#333"
                      fontWeight="bold"
                      mb={2}
                      variants={itemVariants}
                    >
                      {title}
                    </MotionTypography>
                    <MotionTypography
                      mb={3}
                      sx={{ fontSize: "18px" }}
                      color="#444"
                      variants={itemVariants}
                    >
                      {description}
                    </MotionTypography>
                    <MotionBox variants={itemVariants}>
                      <Button
                        variant="contained"
                        sx={{ mb: 2 }}
                        onClick={() => handleButtonClick(route, externalLink)}
                        component={motion.button}
                      >
                        {btnText}
                      </Button>
                    </MotionBox>
                  </MotionGrid>
                </React.Fragment>
              )
            )}
          </MotionGrid>
        </MotionContainer>
      )}
    </>
  );
};

export default HomePage;
