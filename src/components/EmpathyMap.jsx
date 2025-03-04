import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  useTheme,
  Tabs,
  Tab,
  Box,
} from "@mui/material";

const personas = [
  {
    name: "Emily (AI Enthusiast & Content Creator)",
    say: [
      "I want better AI responses, but I don't know how to write the best prompts.",
      "I see people getting amazing AI outputs—how do they do that?",
      "I wish there was a way to compare different prompts and AI models.",
    ],
    think: [
      "It takes too much trial and error to get useful AI results.",
      "There should be a place to save and rank prompts I actually like.",
      "I wish AI-generated content was more consistent.",
    ],
    feel: [
      "Frustrated – Can't get consistent high-quality AI outputs.",
      "Motivated – Wants to level up AI prompting skills.",
      "Excited – Loves experimenting with AI tools but lacks structure.",
    ],
    do: [
      "Googles or checks Reddit/Discord for AI prompt ideas.",
      "Uses trial-and-error to refine AI-generated content.",
      "Saves useful prompts manually (notes, docs, screenshots).",
    ],
  },
  {
    name: "David (Marketing Professional)",
    say: [
      "I need AI-generated content that aligns with my brand voice.",
      "I spend too much time tweaking AI copy—can't it just work?",
      "Which AI model produces the best marketing content?",
    ],
    think: [
      "AI-generated text is often too generic or robotic.",
      "I need high-quality prompts that work every time.",
      "I wish I could fine-tune AI output without wasting time.",
    ],
    feel: [
      "Frustrated – AI-generated content often needs heavy editing.",
      "Goal-Oriented – Wants AI to boost productivity.",
      "Creative – Sees AI as a tool, not a replacement.",
    ],
    do: [
      "Tests multiple prompts to refine marketing copy.",
      "Saves and reuses top-performing AI-generated text.",
      "Compares AI-generated content across different tools.",
    ],
  },
  {
    name: "Michael (AI Engineer & Problem Solver)",
    say: [
      "AI models behave unpredictably—how do I get reliable results?",
      "I need a structured way to test prompts across multiple models.",
      "How do I optimize a prompt for a specific task?",
    ],
    think: [
      "There's no standard way to compare AI model responses.",
      "Prompt quality varies too much—I need a testing framework.",
      "How do I collect real-world performance data?",
    ],
    feel: [
      "Frustrated – AI model updates break existing prompts.",
      "Curious – Wants to understand AI reasoning & fine-tuning.",
      "Data-Driven – Needs metrics & benchmarks.",
    ],
    do: [
      "Runs structured A/B tests on different prompts.",
      "Analyzes prompt efficiency based on AI model responses.",
      "Engages in community discussions to refine AI performance.",
    ],
  },
];

const EmpathyMap = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const renderPersonaContent = (persona) => {
    return (
      <Grid container spacing={2} mb={2}>
        {Object.entries(persona).map(
          ([key, values]) =>
            key !== "name" && (
              <Grid item xs={12} sm={6} md={6} key={key}>
                <Card
                  sx={{
                    p: 3,
                    border: `1px solid ${theme.palette.primary.main}`,
                    background: "#1876D233",
                    color: "#fff",
                    boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
                    borderRadius: "16px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                    {key.toUpperCase()}
                  </Typography>
                  <div style={{ flexGrow: 1 }}>
                    {values.map((text, idx) => (
                      <Typography key={idx} variant="body2" sx={{ mb: 1 }}>
                        • {text}
                      </Typography>
                    ))}
                  </div>
                </Card>
              </Grid>
            )
        )}
      </Grid>
    );
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label="persona tabs"
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          //   sx={{
          //     "& .MuiTab-root": {
          //       minWidth: "unset",
          //       padding: "6px 12px", // Reducing padding
          //       fontSize: "0.875rem", // Slightly smaller font size
          //     },
          //   }}
          sx={{
            "& .MuiTab-root": {
              padding: "24px 12px",
              color: "#999", // Light gray for non-selected tabs
              "&.Mui-selected": {
                color: "#fff", // White for selected tab
                fontWeight: "bold",
              },
            },
          }}
        >
          {personas.map((persona, index) => (
            <Tab key={index} label={persona.name.split(" ")[0]} />
          ))}
        </Tabs>
      </Box>

      {personas.map((persona, index) => (
        <div
          key={index}
          style={{ display: currentTab === index ? "block" : "none" }}
        >
          <Typography variant="h5" sx={{ mb: 2, color: "#fff" }}>
            {persona.name}
          </Typography>
          {renderPersonaContent(persona)}
        </div>
      ))}
    </>
  );
};

export default EmpathyMap;
