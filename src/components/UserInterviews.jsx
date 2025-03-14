import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useTheme } from "@mui/material/styles";

// Sample data from the original component
const interviewData = [
  {
    question: "How do you currently discover and save prompts for AI tools?",
    data: [
      { id: 0, value: 40, label: "Google & Reddit", color: "#4E88FF" },
      { id: 1, value: 35, label: "Discord & Twitter", color: "#34A853" },
      { id: 2, value: 25, label: "Trial & Error", color: "#FBBC05" },
    ],
  },
  {
    question:
      "What challenges do you face when finding high-quality AI prompts?",
    data: [
      { id: 0, value: 50, label: "Prompts too generic", color: "#4E88FF" },
      {
        id: 1,
        value: 30,
        label: "Hard to find tailored prompts",
        color: "#34A853",
      },
      {
        id: 2,
        value: 20,
        label: "Difficult to compare prompts",
        color: "#FBBC05",
      },
    ],
  },
  {
    question: "How often do you experiment with AI-generated content?",
    data: [
      { id: 0, value: 45, label: "Daily", color: "#4E88FF" },
      { id: 1, value: 35, label: "Few times a week", color: "#34A853" },
      { id: 2, value: 20, label: "Occasionally", color: "#FBBC05" },
    ],
  },
  {
    question: "Would you be interested in ranking and reviewing prompts?",
    data: [
      {
        id: 0,
        value: 60,
        label: "Yes, helps find better prompts",
        color: "#4E88FF",
      },
      { id: 1, value: 25, label: "Unsure", color: "#34A853" },
      { id: 2, value: 15, label: "Prefer to consume only", color: "#FBBC05" },
    ],
  },
  {
    question: "What AI tools do you use most often?",
    data: [
      { id: 0, value: 50, label: "ChatGPT, Claude, Gemini", color: "#4E88FF" },
      {
        id: 1,
        value: 30,
        label: "Image AI (Midjourney, DALL·E)",
        color: "#34A853",
      },
      {
        id: 2,
        value: 20,
        label: "Automation AI (Zapier, Notion AI)",
        color: "#FBBC05",
      },
    ],
  },
  {
    question: "Would gamification (badges, leaderboards) increase engagement?",
    data: [
      {
        id: 0,
        value: 55,
        label: "Yes, if meaningful rewards",
        color: "#4285F4",
      },
      {
        id: 1,
        value: 30,
        label: "Prefer a functional experience",
        color: "#34A853",
      },
      { id: 2, value: 15, label: "Indifferent", color: "#FBBC05" },
    ],
  },
];

const UserInterviews = () => {
  const theme = useTheme();

  // Custom legend renderer
  const customLegend = (chartId, data) => {
    return (
      <Box
        sx={{
          //   position: "absolute",
          //   top: "50%",
          //   left: 220, // Fixed starting position
          //   transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                backgroundColor: item.color,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: 13,
                fontWeight: 500,
                color: "#fff",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  // Ensure no strokes between segments
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Remove strokes */
      .MuiPieChart-root path {
        stroke: none !important;
        stroke-width: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        {interviewData.map((item, index) => (
          <Grid size={{ xs: 12, lg: 6 }} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "visible",
                p: 3,
                background: "#333",
                boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
                borderRadius: "16px",
                mb: 2,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  align="left"
                  sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
                >
                  {item.question}
                </Typography>

                <Grid
                  container
                  spacing={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid size={{ xs: 12, md: 6 }}>
                    <PieChart
                      series={[
                        {
                          arcLabel: (item) => `${item.value}%`,
                          //   arcLabelMinAngle: 45,
                          data: item.data.map((entry) => ({
                            id: entry.id,
                            value: entry.value,
                            label: entry.label,
                            color: entry.color,
                          })),
                          innerRadius: 40,
                          outerRadius: 90,
                          paddingAngle: 3,
                          cornerRadius: 4,
                          startAngle: -90,
                          endAngle: 270,
                          cx: 90,
                          cy: 130,
                        },
                      ]}
                      //   width={400}
                      height={260}
                      // Just completely disable tooltips
                      tooltip={{ trigger: "none" }}
                      slotProps={{
                        legend: {
                          hidden: true,
                        },
                      }}
                      sx={{
                        // Target the specific class for arc labels
                        // [`& .${pieArcLabelClasses.root}`]: {
                        //   fill: "white",
                        //   fontWeight: "bold",
                        // },
                        // Ensure no stroke on paths
                        "& path": {
                          stroke: "none",
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    {customLegend(`chart-${index}`, item.data)}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Global styles for label styling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .${pieArcLabelClasses.root} {
            fill: white !important;
            color: white !important;
            font-weight: bold !important;
          }
        `,
        }}
      />
    </Box>
  );
};

export default UserInterviews;
