import React from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Divider,
  Stack,
  Card,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom"; // Import for internal routing
import Navbar from "../components/Navbar";
import CodeIcon from "../assets/images/CodeIcon.svg";
import MapIcon from "../assets/images/MapIcon.svg";
import WebSiteIcon from "../assets/images/WebSiteIcon.svg";
import CaseStudyIcon from "../assets/images/CaseStudyIcon.svg";

const PromptRankOverviewPage = () => {
  const theme = useTheme();
  // Array of card data with route or externalLink options
  const cardButtons = [
    {
      img: CaseStudyIcon,
      alt: "Case Study Icon",
      title: "Case Study",
      route: "/promptrank-casestudy", // Internal route
      description: "UX Research & Insight",
      externalLink: null,
      // disabled: true, // Disabling the case study button
    },
    {
      img: MapIcon,
      alt: "Map Icon",
      title: "Roadmap",
      route: null,
      description: "On-going updates",
      externalLink: "https://trello.com/b/tl1HuWg6/promptrank",
    },
    {
      img: CodeIcon,
      alt: "Code Icon",
      title: "Code",
      description: "React and Firebase",
      route: null,
      externalLink: "https://github.com/kevinsmithdesign/PromptRank", // External link
    },
    {
      img: WebSiteIcon,
      alt: "Website Icon",
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
        background: "#000",
        height: "100vh",
        color: "#fff",
        overflow: "auto",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Navbar color="#fff" />
      </Box>

      <Container
        sx={{ mb: 6, mt: 3, px: { xs: "32px", md: "32px", lg: "16px" } }}
      >
        {/* <Stack flexDirection="row">
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
        </Stack> */}
        <Grid container mb={2}>
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="h4" component="h1">
              Inside PromptRank: A Product Breakdown
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <Button
              sx={{
                width: { xs: "100%", sm: "auto" },
                mt: { xs: 2, md: 0 },
              }}
              variant="contained"
              component="a"
              href="https://promptrank.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </Button>
          </Grid>
        </Grid>

        <Typography mb={3} color="#999">
          PromptRank.io is a personal project designed to showcase my full UI/UX
          design and development process—from initial concept to deployment. In
          a competitive job market, I wanted to highlight not just my design
          skills but also my ability to architect and build a fully functional
          product. This project demonstrates my expertise in User Experience
          Design, UI Development, and Modern Web Technologies.
        </Typography>

        {cardButtons.map(
          (
            { title, description, route, externalLink, disabled, img, alt },
            index
          ) => (
            // <Grid container key={index}>
            //   <Grid size={{ xs: 12 }}>
            <Card
              key={index}
              sx={{ p: 5, borderRadius: 4, background: "#111", mb: 1 }}
            >
              <Grid container key={index}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: "48px",
                        height: "48px",
                        background: theme.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        marginRight: 2,
                      }}
                    >
                      <img src={img} alt={alt} />
                    </Box>
                    <Box>
                      <Typography color="white" variant="h6" mb={0.5}>
                        {title}
                      </Typography>
                      <Typography color="#999">{description}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "flex-start", md: "flex-end" },
                      mt: { xs: 2, md: 0 },
                      height: "100%",
                      alignItems: "center",
                    }}
                  >
                    {externalLink ? (
                      <Button
                        variant="contained"
                        component="a"
                        href={externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View {title}
                      </Button>
                    ) : (
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
                          width: { xs: "100%", sm: "auto" },
                        }}
                      >
                        View Case Study
                      </Button>
                    )}
                  </Box>
                </Grid>
              </Grid>

              {/* <Box sx={{ display: "flex" }}>
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
              </Box> */}
            </Card>
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
