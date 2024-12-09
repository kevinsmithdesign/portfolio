import React from "react";
import { Card, Stack, Box, Typography } from "@mui/material";

const UsageCard = () => {
  return (
    <Card sx={{ p: 4, boxShadow: "none", borderRadius: 3, mb: 3 }}>
      <Stack flexDirection="row">
        <Stack>
          <Box
            sx={{
              height: "260px",
              width: "260px",
              background: "#f6f6fa",
              borderRadius: 3,
              mr: 3,
            }}
          ></Box>
        </Stack>
        <Stack sx={{ pl: 1, pt: 3 }}>
          <Typography variant="h4" mb={2}>
            Primary Button (Contained)
          </Typography>
          <Typography variant="h6" mb={2}>
            When to user
          </Typography>
          <Typography variant="body1">
            • For the most important action on a page, like "Submit," "Save," or
            "Send." <br /> • Use when you want to draw the user's attention to
            the main call to action. <br /> • Often used in forms, dialog boxes,
            or places where the user is completing a primary task.
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default UsageCard;
