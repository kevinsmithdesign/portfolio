import React, { useState } from "react";
import { Box, Paper, Typography, IconButton, Collapse } from "@mui/material";
import { ExpandMore, ChevronRight } from "@mui/icons-material";

const TreeNode = ({ data, level = 0, isLastChild = false }) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = data.children && data.children.length > 0;

  return (
    <Box
      sx={{
        position: "relative",
        ml: level * 3,
        display: "flex",
        flexDirection: "column",

        alignItems: "flex-start",
        // Vertical line from parent
        "&::before":
          level > 0
            ? {
                content: '""',
                position: "absolute",
                left: "-24px",
                top: 0,
                width: "1px",
                height: "100%",
                bgcolor: "rgba(255, 255, 255, 0.1)",

                display: isLastChild ? "none" : "block",
              }
            : {},
        // Horizontal line to node
        "&::after":
          level > 0
            ? {
                content: '""',
                position: "absolute",
                left: "-24px",
                top: "24px",
                width: "24px",
                height: "1px",
                bgcolor: "rgba(255, 255, 255, 0.1)",
              }
            : {},
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          my: 1,
          px: 2,
          py: 1,
          borderRadius: 28,
          bgcolor: level === 0 ? "#246BFD" : "#222",
          color: "#fff",
          border: "1px solid",
          borderColor: level === 0 ? "#246BFD" : "#333",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: hasChildren ? "pointer" : "default",
          minWidth: level === 0 ? "120px" : "160px",
          maxWidth: level === 0 ? "120px" : "160px",
          transition: "all 0.2s ease",
          "&:hover": hasChildren
            ? {
                bgcolor: level === 0 ? "#4481FD" : "#333",
                borderColor: level === 0 ? "#4481FD" : "#333",
              }
            : {},
        }}
        onClick={hasChildren ? () => setExpanded(!expanded) : undefined}
      >
        {hasChildren && (
          <IconButton
            size="small"
            sx={{
              color: "#fff",
              p: 0.5,
              mr: 0.5,
              opacity: 0.7,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            {expanded ? <ExpandMore /> : <ChevronRight />}
          </IconButton>
        )}
        <Typography
          variant="body2"
          sx={{
            fontWeight: level <= 1 ? 600 : 400,
            fontSize: level === 0 ? "0.9rem" : "0.8rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {data.name}
        </Typography>
      </Box>
      {hasChildren && (
        <Collapse in={expanded} sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              ml: 3,
              pb: 1,
            }}
          >
            {data.children.map((child, index) => (
              <TreeNode
                key={index}
                data={child}
                level={level + 1}
                isLastChild={index === data.children.length - 1}
              />
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

const SiteMap = () => {
  const siteStructure = {
    name: "Lila",
    children: [
      {
        name: "Chat Interface",
        children: [
          {
            name: "Chat History",
            children: [
              { name: "Pinned Chats" },
              { name: "Recent Chats" },
              { name: "All Conversations" },
            ],
          },
          {
            name: "Media Sharing",
            children: [
              { name: "Upload Images" },
              { name: "Share Videos" },
              { name: "Send Files" },
              { name: "View Shared Media" },
            ],
          },
          {
            name: "Advanced Features",
            children: [
              {
                name: "Voice Activation",
                children: [
                  { name: "Start Chat with Voice" },
                  { name: "Voice-to-Text Input" },
                ],
              },
              {
                name: "AI Suggestions",
                children: [
                  { name: "Suggested Questions" },
                  { name: "Smart Replies" },
                ],
              },
            ],
          },
          {
            name: "Contact Professionals",
            children: [
              { name: "Contact Doctors" },
              { name: "Emergency Assistance" },
              { name: "Schedule Consultations" },
            ],
          },
          {
            name: "Settings & Personalization",
            children: [
              { name: "Customize Chat Appearance" },
              { name: "Notification Settings" },
              { name: "Privacy Options" },
            ],
          },
          {
            name: "Conversation Summaries",
            children: [
              { name: "Auto-Generated Summaries" },
              { name: "Downloadable Transcripts" },
            ],
          },
        ],
      },
      {
        name: "Prompts",
        children: [
          { name: "Browse Prompts" },
          { name: "Create Custom Prompt" },
          { name: "Saved Prompts" },
          {
            name: "Categories",
            children: [
              { name: "Health" },
              { name: "Productivity" },
              { name: "Learning" },
            ],
          },
        ],
      },
      {
        name: "About",
        children: [
          { name: "Mission & Vision" },
          { name: "How It Works" },
          { name: "FAQs" },
          {
            name: "Social Proof",
            children: [
              { name: "Testimonials" },
              { name: "Case Studies" },
              { name: "Success Metrics" },
            ],
          },
          { name: "Media Mentions" },
          { name: "Team Section" },
          { name: "Timeline & Milestones" },
        ],
      },
      {
        name: "Profile",
        children: [
          { name: "User Details" },
          { name: "Account Settings" },
          { name: "Privacy Preferences" },
          {
            name: "Activity Dashboard",
            children: [
              { name: "Conversation Stats" },
              { name: "Prompts Used" },
              { name: "Goals Achieved" },
            ],
          },
          { name: "Custom Avatars & Themes" },
        ],
      },
      {
        name: "Contact",
        children: [
          { name: "Support Form" },
          { name: "Live Chat Option" },
          { name: "Social Links" },
          { name: "Feedback Form" },
        ],
      },
    ],
  };

  return (
    <Box
      sx={{
        p: 6,
        bgcolor: "#111",
        borderRadius: "16px",
        // minHeight: "100vh",
        overflowX: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          pt: 4,
        }}
      >
        <TreeNode data={siteStructure} />
      </Box>
    </Box>
  );
};

export default SiteMap;
