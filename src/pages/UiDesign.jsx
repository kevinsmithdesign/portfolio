import React from "react";
import { Button, Container, Typography, Box, Alert, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CaseStudyOverview from "../components/CaseStudyOverview";

const UiDesign = () => {
  const uiDesign = [
    {
      chipTitle: "UI DESIGN",
      projectTitle: "Sprint View",
      projectDescription: "Agile Software Development Platform",
      role: "An agile project management tool designed for seamless collaboration and streamlined workflows.",
      backgroundImageUrl: "https://assets.codepen.io/2392702/Group+240751.jpg",
    },
    {
      chipTitle: "UI DESIGN",
      projectTitle: "Credit Flow",
      projectDescription:
        "Personalized Financial Insights and Credit Management Application",
      role: "A financial health app offering personalized credit insights and tools for smarter financial management.",
      backgroundImageUrl: "https://assets.codepen.io/2392702/Desktop+-+7_3.svg",
    },
    {
      chipTitle: "UI DESGIN",
      projectTitle: "GroceMate",
      projectDescription: "Smart Grocery Shopping Assistant Application",
      role: "An app designed to simplify grocery shopping with organized lists and easy-to-use features.",
      backgroundImageUrl: "https://assets.codepen.io/2392702/Desktop+-+5.svg",
    },
    {
      chipTitle: "RECENT PROJECT",
      projectTitle: "Doggie Match",
      projectDescription: "Dog Adoption and Matching Platform",
      role: "A user-friendly app that connects people with adoptable dogs, making it easy to find the perfect furry companion.",
      backgroundImageUrl: "https://assets.codepen.io/2392702/Desktop+-+8.svg",
    },
    {
      chipTitle: "JUNE 2022",
      projectTitle: "Madison Group",
      projectDescription: "Real Estate Search and Listings Platform",
      role: "A comprehensive app for browsing properties, comparing listings, and finding your next home with ease.",
      backgroundImageUrl: "https://assets.codepen.io/2392702/Frame+3_1.svg",
    },
    {
      chipTitle: "RECENT PROJECT",
      projectTitle: "Foodie",
      projectDescription: "Fast and Reliable Food Delivery Service",
      role: "A convenient app that brings your favorite meals to your doorstep with just a few taps.",
      backgroundImageUrl: "https://assets.codepen.io/2392702/Desktop+-+1.svg",
    },
  ];

  return (
    <Container>
      {/* <Grid container spacing={6}>
        {uiDesign.map((caseStudy, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <CaseStudyOverview
              chipTitle={caseStudy.chipTitle}
              projectTitle={caseStudy.projectTitle}
              projectDescription={caseStudy.projectDescription}
              role={caseStudy.role}
              backgroundImageUrl={caseStudy.backgroundImageUrl}
            />
          </Grid>
        ))}
      </Grid> */}
      <Grid container spacing={2}>
        {uiDesign.map((caseStudy, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <CaseStudyOverview
              // chipTitle={caseStudy.chipTitle}
              // projectTitle={caseStudy.projectTitle}
              // projectDescription={caseStudy.projectDescription}
              // role={caseStudy.role}
              backgroundImageUrl={caseStudy.backgroundImageUrl}
            />
          </Grid>
        ))}
      </Grid>

      {/* <Grid container spacing={{ xs: 2, md: 4 }}>
        {uiDesign.map(
          ({
            index,
            title,
            description,
            btnText,
            route,
            role,
            projectTitle,
            projectDescription,
            backgroundImageUrl,
          }) => (
            <>
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: 400,
                    backgroundImage: `url(${backgroundImageUrl})`, // Use the prop for dynamic background
                    backgroundSize: "contain", // Change from 'cover' to 'contain'
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    mb: 2,
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
                <Typography variant="h5" fontWeight="bold" mb={2}>
                  {projectTitle}
                </Typography>
                <Typography sx={{ fontSize: "20px" }} mb={3}>
                  {role}
                </Typography>

      
              </Grid>
            </>
          )
        )}
      </Grid> */}
    </Container>
  );
};

export default UiDesign;
