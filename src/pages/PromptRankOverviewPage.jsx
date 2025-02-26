import React from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Divider,
  Card,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom"; // Import for internal routing
import Navbar from "../components/Navbar";

const PromptRankOverviewPage = () => {
  // Array of card data with route or externalLink options
  const cardButtons = [
    {
      title: "View Case Study",
      route: "/case-study", // Internal route
      externalLink: null,
    },
    {
      title: "View Roadmap",
      route: null,
      externalLink: "https://trello.com/b/tl1HuWg6/promptrank",
    },
    {
      title: "View Code",
      route: null,
      externalLink: "https://github.com/kevinsmithdesign/PromptRank", // External link
    },
    {
      title: "View Site",
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
    padding: 4,
    "&:hover": {
      border: `1px solid #3B75FE`,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#3B75FE",
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
          <Typography color="white" fontWeight="bold">
            {card.title}
          </Typography>
        </Card>
      );
    }
    // If card has an internal route
    else if (card.route) {
      return (
        <Card component={Link} to={card.route} sx={cardStyle} key={index}>
          <Typography color="white" fontWeight="bold">
            {card.title}
          </Typography>
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
    <Box sx={{ background: "#111", height: "100vh", color: "#fff" }}>
      <Navbar />

      <Container sx={{ mb: 6 }}>
        <Typography variant="h4" component="h1" mb={3}>
          Inside PromptRank: A Product Breakdown
        </Typography>
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

        {/* Dynamic card grid using the cardButtons array */}
        <Grid container spacing={1} mb={3}>
          {cardButtons.map((card, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              {renderCard(card, index)}
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" mb={1.5}>
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
        </Typography>
      </Container>
    </Box>
  );
};

export default PromptRankOverviewPage;
