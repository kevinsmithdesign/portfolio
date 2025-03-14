import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Tabs,
  Tab,
  useTheme,
} from "@mui/material";

// Journey data remains the same
const journeyData = [
  {
    persona: "Emily",
    role: "AI Enthusiast & Content Creator",
    goal: "Learn how to write better AI prompts & improve AI-generated content quality.",
    stages: ["Awareness", "Consideration", "Acquisition", "Retention"],
    rows: [
      {
        name: "Steps",
        color: "#E6D9F2",
        data: [
          "Googles 'how to get better AI results.' Reads Reddit/Discord discussions on AI prompting.",
          "Tries different prompts manually. Compares AI-generated responses.",
          "Creates a PromptRank account. Saves favorite prompts. Begins ranking prompts.",
          "Engages in community discussions. Shares refined prompts & feedback. Tries PromptRank challenges.",
        ],
      },
      {
        name: "Thinking",
        color: "#D0E8FF",
        data: [
          "What makes a good AI prompt?",
          "How do I compare AI-generated results?",
          "How do I improve my ranking?",
          "How do I keep optimizing prompts?",
        ],
      },
      {
        name: "Doing",
        color: "#E6D9F2",
        data: [
          "Googles AI prompt ideas",
          "Tests different AI responses",
          "Saves favorite prompts",
          "Shares refined prompts & feedback",
        ],
      },
      {
        name: "Feelings",
        color: "#DFF7C3",
        data: ["🙂", "🤔", "😃", "🚀"],
      },
      {
        name: "Pain Points",
        color: "#FFCACA",
        data: [
          "Overwhelmed by too many suggestions. Unsure what makes a good prompt.",
          "Trial-and-error is frustrating. No way to easily compare different prompts.",
          "Not sure how PromptRank ranking works. Wants structured learning resources.",
          "Lacks motivation to keep optimizing prompts. Needs incentives (badges, recognition).",
        ],
      },
      {
        name: "Opportunities",
        color: "#D0E8FF",
        data: [
          "Provide a beginner-friendly onboarding guide. Create 'Prompt Templates' for different AI tools.",
          "Introduce an AI-generated feedback feature to suggest prompt improvements.",
          "Gamify the ranking system with levels & badges. Offer saved prompt libraries for easy access.",
          "Develop AI Challenges where users refine AI outputs together.",
        ],
      },
    ],
  },
  {
    persona: "David",
    role: "Marketing Professional",
    goal: "Optimize AI-generated content for marketing campaigns & improve engagement.",
    stages: ["Awareness", "Consideration", "Acquisition", "Retention"],
    rows: [
      {
        name: "Steps",
        color: "#E6D9F2",
        data: [
          "Reads blog posts on AI copywriting. Watches YouTube tutorials about ChatGPT for marketing.",
          "Experiments with AI-generated ad copy. Tweaks wording manually to improve tone.",
          "Searches PromptRank for marketing-specific prompts. Saves best-performing prompts.",
          "Creates branded prompt templates. Shares insights on optimizing AI-generated content.",
        ],
      },
      {
        name: "Challenges",
        color: "#FFCACA",
        data: [
          "AI copy often sounds robotic. Needs better AI-generated brand consistency.",
          "Trial-and-error is time-consuming. No structured way to A/B test AI copy.",
          "Needs high-quality prompts for branding. Unsure how to fine-tune AI responses.",
          "Wants a collaborative way to share best-performing AI content with team members.",
        ],
      },
      {
        name: "Opportunities",
        color: "#D0E8FF",
        data: [
          "Offer Marketing-Specific Prompt Libraries. Provide a Brand Voice Calibration Tool.",
          "Introduce an A/B Testing Feature to compare AI-generated content.",
          "Allow users to save and organize prompts into campaigns.",
          "Create a team-sharing feature to standardize AI-generated brand content.",
        ],
      },
      {
        name: "Feelings",
        color: "#DFF7C3",
        data: ["🧐", "📊", "💼", "🚀"],
      },
    ],
  },
  {
    persona: "Michael",
    role: "AI Engineer & Problem Solver",
    goal: "Optimize AI prompts for performance & test them across multiple models.",
    stages: ["Awareness", "Consideration", "Acquisition", "Retention"],
    rows: [
      {
        name: "Steps",
        color: "#E6D9F2",
        data: [
          "Reads AI research papers & dev blogs. Watches OpenAI and Anthropic model comparisons.",
          "Compares ChatGPT, Claude, and Gemini outputs for the same prompt. Tests structured vs. creative prompt phrasing.",
          "Uses PromptRank's AI model comparison feature. Saves optimized prompts. Engages in technical discussions.",
          "Develops & shares best practices for AI prompt engineering. Contributes structured AI benchmarks.",
        ],
      },
      {
        name: "Challenges",
        color: "#FFCACA",
        data: [
          "No standard way to compare AI models side-by-side. Struggles with inconsistent responses.",
          "Needs a testing framework for prompts. Hard to track how small prompt changes affect performance.",
          "Wants collaborative tools for AI benchmarking. Needs more data-driven prompt evaluations.",
          "Lacks long-term tracking of prompt effectiveness across AI updates.",
        ],
      },
      {
        name: "Opportunities",
        color: "#D0E8FF",
        data: [
          "Create a Side-by-Side Model Comparison Tool. Offer a Prompt Benchmarking Dashboard.",
          "Implement Prompt Version Control to track refinements.",
          "Develop Team-Based Testing Environments for AI engineers.",
          "Build an AI Model Update Tracker to measure impact on old prompts.",
        ],
      },
      {
        name: "Feelings",
        color: "#DFF7C3",
        data: ["🔍", "🧪", "💻", "📈"],
      },
    ],
  },
];

const JourneyMap = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  // Calculate column width based on the number of stages
  const getColumnWidth = (stagesLength) => {
    return 10 / stagesLength; // 10 because we're using a 12-column grid with 2 for labels
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        sx={{
          mb: 2,
          width: "100%",
          "& .MuiTab-root": {
            color: "#999", // Light gray for non-selected tabs
            padding: "24px 12px",

            "&.Mui-selected": {
              color: "#fff", // White for selected tab
              fontWeight: "bold",
            },
          },
        }}
        value={selectedTab}
        onChange={(e, newValue) => setSelectedTab(newValue)}
      >
        {journeyData.map((persona, index) => (
          <Tab key={index} label={persona.persona} />
        ))}
      </Tabs>
      {journeyData.map(
        (personaData, index) =>
          selectedTab === index && (
            <Box key={index} sx={{ width: "100%" }}>
              <Grid container spacing={2} mb={3}>
                <Grid item xs={12}>
                  <Typography variant="h5" fontWeight="bold" color="white">
                    {personaData.persona} – {personaData.role}
                  </Typography>
                  <Typography variant="subtitle1" color="white" sx={{ mt: 1 }}>
                    Goal: {personaData.goal}
                  </Typography>
                </Grid>
              </Grid>

              {/* Header Row with Stages */}
              <Grid container spacing={1} mb={1} sx={{ width: "100%" }}>
                <Grid item xs={2}>
                  <Paper
                    elevation={2}
                    sx={{
                      bgcolor: "grey.800",
                      color: "white",
                      p: 2,
                      borderRadius: 2,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      Stages
                    </Typography>
                  </Paper>
                </Grid>
                {personaData.stages.map((stage, idx) => (
                  <Grid
                    item
                    xs={getColumnWidth(personaData.stages.length)}
                    key={idx}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        bgcolor: "grey.600",
                        color: "white",
                        p: 2,
                        borderRadius: 2,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight="bold">
                        {stage}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* Content Rows */}
              {personaData.rows.map((row, idx) => (
                <Grid
                  container
                  spacing={1}
                  mb={1}
                  key={idx}
                  sx={{ width: "100%" }}
                >
                  <Grid item xs={2}>
                    <Paper
                      elevation={1}
                      sx={{
                        bgcolor: row.color,
                        p: 2,
                        borderRadius: 2,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight="bold">
                        {row.name}
                      </Typography>
                    </Paper>
                  </Grid>
                  {row.data.map((item, stageIdx) => (
                    <Grid
                      item
                      xs={getColumnWidth(personaData.stages.length)}
                      key={stageIdx}
                    >
                      <Card
                        elevation={1}
                        sx={{
                          bgcolor: row.color,
                          borderRadius: 2,
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            row.name === "Feelings" ? "center" : "flex-start",
                          overflow: "auto",
                          minHeight: row.name === "Feelings" ? "100px" : "auto",
                        }}
                      >
                        <CardContent sx={{ width: "100%" }}>
                          <Typography
                            variant={row.name === "Feelings" ? "h3" : "body2"}
                            align={row.name === "Feelings" ? "center" : "left"}
                            sx={{ width: "100%" }}
                          >
                            {item}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ))}

              {index === journeyData.length - 1 && (
                <Box
                  mt={4}
                  p={2}
                  sx={{
                    bgcolor: "grey.100",
                    borderRadius: 2,
                    width: "100%",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Key Takeaways
                  </Typography>
                  <Typography variant="body2" component="div">
                    <ul>
                      <li>
                        <strong>Clear Distinctions Between Personas</strong> –
                        Each journey has unique friction points and tailored
                        solutions based on role.
                      </li>
                      <li>
                        <strong>Focused on User Experience & Growth</strong> –
                        Rather than just motivation, this maps actual user
                        interaction with PromptRank over time.
                      </li>
                      <li>
                        <strong>Identifies Feature Gaps</strong> – Highlights
                        potential improvements like AI Challenges, A/B testing,
                        Prompt Benchmarking, and Team Collaboration Tools.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              )}
            </Box>
          )
      )}
    </Box>
  );
};

export default JourneyMap;
