import React from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Divider,
  Stack,
  Card,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom"; // Import for internal routing
import Navbar from "../components/Navbar";

const PromptRankOverviewPage = () => {
  // Array of card data with route or externalLink options
  const cardButtons = [
    {
      title: "Case Study",
      route: "/promptrank-case-study", // Internal route
      description: "UX Research & Insight",
      externalLink: null,
      disabled: true, // Disabling the case study button
    },
    {
      title: "Roadmap",
      route: null,
      description: "On-going updates",
      externalLink: "https://trello.com/b/tl1HuWg6/promptrank",
    },
    {
      title: "Code",
      description: "React and Firebase",
      route: null,
      externalLink: "https://github.com/kevinsmithdesign/PromptRank", // External link
    },
    {
      title: "Site",
      description: "promptrank.io",
      route: null,
      externalLink: "https://promptrank.io", // External link
    },
  ];

  // Card style object for reuse
  const cardStyle = {
    height: "100%",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    flexDirection: "column",
    background: "#222",
    cursor: "pointer",
    position: "relative",
    border: `1px solid #222`,
    overflow: "hidden",
    padding: 3,
    "&:hover": {
      // border: `1px solid #3B75FE`,
      border: `1px solid #333`,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backgroundColor: "#3B75FE",
      opacity: 0,
      transition: "opacity 0.3s ease",
      zIndex: 0,
    },
    "&:hover::before": {
      opacity: 0.2,
    },
    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  };

  // Function to render the appropriate card based on route or externalLink
  const renderCard = (card, index) => {
    // If card has an external link
    if (card.externalLink) {
      return (
        <Card
          component="a"
          href={card.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={cardStyle}
          key={index}
        >
          {/* <Typography color="white" fontWeight="bold">
            {card.title}
          </Typography> */}
          <Box
            sx={{
              width: "100%",
              height: "200px",
              background: "#222",
              borderRadius: "8px",
              mb: 3,
            }}
          ></Box>
          <Button variant="contained" fullWidth>
            {card.title}
          </Button>
        </Card>
      );
    }
    // If card has an internal route
    else if (card.route) {
      return (
        <Card component={Link} to={card.route} sx={cardStyle} key={index}>
          {/* <Typography color="white" fontWeight="bold">
            {card.title}
          </Typography> */}
          <Box
            sx={{
              width: "100%",
              height: "200px",
              background: "#222",
              borderRadius: "8px",
              mb: 3,
            }}
          ></Box>
          <Button variant="contained" fullWidth>
            {card.title}
          </Button>
        </Card>
      );
    }
    // Fallback if neither is provided
    return (
      <Card sx={cardStyle} key={index}>
        <Typography color="white" fontWeight="bold">
          {card.title}
        </Typography>
      </Card>
    );
  };

  return (
    <Box
      sx={{
        background: "#111",
        height: "100vh",
        color: "#fff",
        overflow: "auto",
      }}
    >
      <Navbar />

      <Container sx={{ mb: 6, mt: 3 }}>
        <Stack flexDirection="row">
          <Stack flexGrow={1}>
            <Typography variant="h4" component="h1" mb={3}>
              Inside PromptRank: A Product Breakdown
            </Typography>
          </Stack>
          <Stack>
            <Button
              variant="contained"
              component="a"
              href="https://promptrank.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </Button>
          </Stack>
        </Stack>
        <Typography variant="h6" mb={1.5}>
          Overview
        </Typography>
        <Typography mb={3}>
          PromptRank.io is a personal project designed to showcase my full UI/UX
          design and development process—from initial concept to deployment. In
          a competitive job market, I wanted to highlight not just my design
          skills but also my ability to architect and build a fully functional
          product. This project demonstrates my expertise in User Experience
          design, UI development, and modern web technologies.
        </Typography>

        {cardButtons.map(
          ({ title, description, route, externalLink, disabled }, index) => (
            <Grid container key={index}>
              <Grid size={{ xs: 12 }}>
                <Card sx={{ p: 5, borderRadius: 4, background: "#222", mb: 1 }}>
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography color="white" variant="h6" mb={0.5}>
                        {title}
                      </Typography>
                      <Typography color="white">{description}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {route && (
                        <Box sx={{ position: "relative" }}>
                          <Button
                            variant="contained"
                            component={Link}
                            to={disabled ? undefined : route}
                            disabled={disabled}
                            sx={{
                              "&.Mui-disabled": {
                                backgroundColor: "#444",
                                color: "#777",
                                opacity: 0.7,
                              },
                            }}
                          >
                            View Details
                          </Button>
                          {disabled && (
                            <Typography
                              sx={{
                                position: "absolute",
                                top: "100%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: "12px",
                                color: "#aaa",
                                mt: 1,
                                whiteSpace: "nowrap",
                              }}
                            >
                              Currently Updating
                            </Typography>
                          )}
                        </Box>
                      )}
                      {externalLink && (
                        <Button
                          variant="contained"
                          component="a"
                          href={externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit {title}
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          )
        )}

        {/* <Typography variant="h6" mb={1.5}>
          Project Highlights
        </Typography>
        <Typography mb={3}>
          End-to-End Design & Development – Conceptualized, designed, and built
          the entire product from scratch. User-Centric Approach – Focused on
          usability, accessibility, and performance. Scalable Architecture –
          Leveraged modern front-end frameworks and Firebase for real-time data
          handling.
        </Typography>
        <Typography variant="h6" mb={1.5}>
          Current Features
        </Typography>
        <Typography mb={3}>
          • Feature One • Feature Two • Feature Three
        </Typography>
        <Typography variant="h6" mb={1.5}>
          Tech Stack
        </Typography>
        <Typography>
          🛠 Design: Figma ⚛️ Frontend: React, MUI (Material-UI) 🔗 Data
          Fetching: React Query 🔥 Backend & Auth: Firebase
        </Typography> */}
      </Container>
    </Box>
  );
};

export default PromptRankOverviewPage;
