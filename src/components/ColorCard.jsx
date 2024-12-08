import React, { useState } from "react";
import { Typography, IconButton, Tooltip, Card, Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ColorCard = ({
  title,
  backgroundColor,
  hex,
  copyValue,
  copySuccess,
  setCopySuccess,
  handleCopy,
}) => {
  //   const [copySuccess, setCopySuccess] = useState(false);

  //   const handleCopy = async (colorCode) => {
  //         try {
  //           await navigator.clipboard.writeText(colorCode);
  //           setCopySuccess(true);
  //           setTimeout(() => setCopySuccess(false), 2000);
  //         } catch (err) {
  //           console.error("Failed to copy!", err);
  //         }
  //       };
  //   }

  return (
    <Card
      sx={{
        p: 2,
        background: "#fff",
        boxShadow: "none",
        borderRadius: "24px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "200px",
          background: backgroundColor,
          borderRadius: "16px 16px 16px 0px",
          width: "100%",
          mb: 1,
          position: "relative",
        }}
      >
        <Tooltip title={copySuccess ? "Copied!" : "Copy to clipboard"} arrow>
          <IconButton
            onClick={() => handleCopy(copyValue)}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              zIndex: 1,
              color: "#fff",
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ px: 1, pt: 1, pb: 2 }}>
        <Typography variant="h6" fontWeight="bold" mb={0.5}>
          {title}
        </Typography>
        <Typography>{hex}</Typography>
      </Box>
    </Card>
  );
};

export default ColorCard;
