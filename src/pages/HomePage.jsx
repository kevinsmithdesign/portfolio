import React from "react";
import { Button, Container, Typography, Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  const portfolioProjects = [
    {
      title: "Lila Case Study",
      description:
        "Lila is an AI-powered platform that supports caregivers with natural, human-like conversations, revolutionizing communication in healthcare.",
      btnText: "View Case Study",
      route: "/casestudy",
    },
    {
      title: "Scales Design System",
      description:
        "A flexible framework of reusable components and guidelines for building consistent, scalable, and accessible user interfaces.",
      btnText: "View Design System",
      route: "/designsystem",
    },
    {
      title: "UI Design Collection",
      description:
        "A showcase of thoughtfully crafted user interfaces, featuring real-world projects and fictional designs that highlight diverse capabilities and creative problem-solving.",
      btnText: "View UI Designs",
      route: "/uidesign",
    },
    {
      title: "Animations Collection",
      description:
        "A curated selection of UI animations showcasing smooth interactions, micro-interactions, and engaging motion design that enhance user experiences.",
      btnText: "View Animations",
      route: "/animation",
    },
    {
      title: "Front End Development",
      description:
        "A collection of interactive, performance-optimized web applications and components, built with clean code, modern frameworks, and a focus on usability and scalability.",
      btnText: "View Code",
      route: "/code",
    },
  ];

  return (
    <Container sx={{ mb: 6 }}>
      <HeroSection />

      <Grid container spacing={{ xs: 2, md: 4 }}>
        {portfolioProjects.map(
          ({ index, title, description, btnText, route }) => (
            <>
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "300px",
                    background: "#eee",
                    borderRadius: 3,
                  }}
                ></Box>
              </Grid>
              <Grid
                key={index}
                size={{ xs: 12, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {title}
                </Typography>
                <Typography mb={3}>{description}</Typography>
                <Box>
                  <Button
                    variant="contained"
                    sx={{ mb: 2 }}
                    onClick={() => (window.location.pathname = route)}
                  >
                    {btnText}
                  </Button>
                </Box>
              </Grid>
            </>
          ),
        )}
      </Grid>
    </Container>
  );
};

export default HomePage;
