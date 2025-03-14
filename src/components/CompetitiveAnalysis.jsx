import React, { useState } from "react";
// MUI components
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";

// MUI icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

import CheckIcon from "../assets/images/CheckIcon.svg";
import CloseIcon from "../assets/images/CloseIcon.svg";

// TabPanel component for tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`competitor-tabpanel-${index}`}
      aria-labelledby={`competitor-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const CompetitiveAnalysis = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Direct competitors data
  const directCompetitors = [
    {
      name: "PromptRank",
      description: "Comprehensive prompt engineering platform",
      features: {
        "Prompt Sharing": true,
        "Prompt Ranking": true,
        "Multi-Model Testing": true,
        Gamification: true,
        "Prompt Refinement": true,
        Monetization: false,
      },
    },
    {
      name: "FlowGPT",
      description: "Community-focused prompt sharing",
      features: {
        "Prompt Sharing": true,
        "Prompt Ranking": true,
        "Multi-Model Testing": false,
        Gamification: false,
        "Prompt Refinement": true,
        Monetization: false,
      },
    },
    {
      name: "PromptBase",
      description: "Marketplace for buying and selling prompts",
      features: {
        "Prompt Sharing": true,
        "Prompt Ranking": false,
        "Multi-Model Testing": false,
        Gamification: false,
        "Prompt Refinement": false,
        Monetization: true,
      },
    },
  ];

  // Indirect competitors data
  const indirectCompetitors = [
    {
      name: "OpenAI Playground",
      description: "Official OpenAI testing environment",
      features: {
        "Prompt Sharing": false,
        "Prompt Ranking": false,
        "Multi-Model Testing": true,
        Gamification: false,
        "Prompt Refinement": false,
        Monetization: false,
      },
    },
    {
      name: "LMSYS Chatbot Arena",
      description: "Model comparison platform",
      features: {
        "Prompt Sharing": false,
        "Prompt Ranking": false,
        "Multi-Model Testing": true,
        Gamification: false,
        "Prompt Refinement": false,
        Monetization: false,
      },
    },
    {
      name: "Hugging Face Spaces",
      description: "AI demo deployment platform",
      features: {
        "Prompt Sharing": true,
        "Prompt Ranking": false,
        "Multi-Model Testing": true,
        Gamification: false,
        "Prompt Refinement": false,
        Monetization: false,
      },
    },
  ];

  const featuresOrder = [
    "Prompt Sharing",
    "Prompt Ranking",
    "Multi-Model Testing",
    "Gamification",
    "Prompt Refinement",
    "Monetization",
  ];

  // Calculate feature score
  const calculateFeatureScore = (features) => {
    return Object.values(features).filter(Boolean).length;
  };

  // Render competitor cards
  const renderCompetitorCards = (competitors) => {
    return (
      <Grid container spacing={2}>
        {competitors.map((competitor, index) => {
          const featureScore = calculateFeatureScore(competitor.features);
          const scorePercentage = (featureScore / featuresOrder.length) * 100;

          return (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  p: 5,
                  //   background: "#111",
                  //   boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
                  //   borderRadius: "16px",
                  background: "#111",
                  border: "1px solid #222",
                  boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.005)",
                  borderRadius: "16px",
                  mb: 2,
                  color: "#fff",
                }}
              >
                <Typography variant="h6" mb={1}>
                  {competitor.name}
                </Typography>

                {/* <Typography variant="body2" mb={2}>
                  {competitor.description}
                </Typography> */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" color="#fff">
                    Feature Coverage
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {featureScore}/{featuresOrder.length}
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={scorePercentage}
                  sx={{ mb: 2, height: 6, borderRadius: 1 }}
                />
                <List disablePadding>
                  {featuresOrder.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} disableGutters>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {competitor.features[feature] ? (
                          //   <CheckCircleIcon color="success" />
                          <img
                            src={CheckIcon}
                            alt="Check"
                            width="24"
                            height="24"
                          />
                        ) : (
                          //   <CancelIcon color="error" />
                          <img
                            src={CloseIcon}
                            alt="Check"
                            width="24"
                            height="24"
                          />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          color: "#fff",
                          variant: "body2",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  // Component for Key Takeaways
  const KeyTakeaways = ({ isDirectCompetitors }) => {
    const takeaways = isDirectCompetitors
      ? [
          {
            // icon: <LooksOneIcon />,
            text: (
              <Typography variant="body2">
                <strong>PromptRank</strong> offers the most comprehensive
                feature set (5/6)
              </Typography>
            ),
          },
          {
            // icon: <LooksTwoIcon />,
            text: (
              <Typography variant="body2">
                <strong>PromptBase</strong> is the only platform with
                monetization capabilities
              </Typography>
            ),
          },
          {
            // icon: <Looks3Icon />,
            text: (
              <Typography variant="body2">
                All direct competitors support <strong>Prompt Sharing</strong>,
                making it a baseline feature
              </Typography>
            ),
          },
        ]
      : [
          {
            icon: <LooksOneIcon />,
            text: (
              <Typography variant="body2">
                All indirect competitors offer{" "}
                <strong>Multi-Model Testing</strong>
              </Typography>
            ),
          },
          {
            icon: <LooksTwoIcon />,
            text: (
              <Typography variant="body2">
                <strong>Hugging Face Spaces</strong> has the most features (2/6)
                among indirect competitors
              </Typography>
            ),
          },
          {
            icon: <Looks3Icon />,
            text: (
              <Typography variant="body2">
                Indirect competitors focus on{" "}
                <strong>model capabilities</strong> rather than community
                features
              </Typography>
            ),
          },
        ];

    return (
      <Card
        sx={{
          p: 5,

          background: "#111",
          border: "1px solid #222",
          boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.005)",
          borderRadius: "16px",

          color: "#fff",
        }}
      >
        <Typography variant="h6" mb={2}>
          Key Takeaways
        </Typography>

        {takeaways.map((takeaway, index) => (
          <Box sx={{ display: "flex", mb: 1.5, alignItems: "center" }}>
            <Box>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  background: theme.palette.primary.main,
                  borderRadius: "50%",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {index + 1}
              </Box>
            </Box>
            <Box>
              <Typography>{takeaway.text}</Typography>
            </Box>
          </Box>
        ))}
      </Card>
    );
  };

  return (
    <>
      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{
            "& .MuiTab-root": {
              color: "#999", // Light gray for non-selected tabs
              padding: "24px 12px",

              "&.Mui-selected": {
                color: "#fff", // White for selected tab
                fontWeight: "bold",
              },
            },
          }}
        >
          <Tab label="Direct Competitors" id="tab-0" />
          <Tab label="Indirect Competitors" id="tab-1" />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <TabPanel value={tabValue} index={0}>
        {renderCompetitorCards(directCompetitors)}
        <KeyTakeaways isDirectCompetitors={true} />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        {renderCompetitorCards(indirectCompetitors)}
        <KeyTakeaways isDirectCompetitors={false} />
      </TabPanel>
    </>
  );
};

export default CompetitiveAnalysis;
