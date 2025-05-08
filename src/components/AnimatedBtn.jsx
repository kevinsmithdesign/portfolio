import React, { useCallback, memo } from "react";
import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Single motion component as the parent with hardware acceleration
const ButtonWrapper = styled(motion.button)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0px 28px 0px 6px",
  borderRadius: "999px",
  border: "none",
  background: "#eee",
  overflow: "hidden",
  cursor: "pointer",
  outline: "none",
  height: "60px",
  // Add hardware acceleration
  transform: "translateZ(0)",
  willChange: "transform",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0px 4px 12px rgba(59, 117, 254, 0.25)",
  },
  "&:active": {
    transform: "translateZ(0) scale(0.98)",
  },
}));

const IconWrapper = styled(Box)(() => ({
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: 1,
  color: "#fff",
}));

// Memoize the component to prevent unnecessary re-renders
const AnimatedButton = memo(({ text, onClick }) => {
  const theme = useTheme();

  // Use useCallback to ensure consistent function reference
  const handleClick = useCallback(
    (e) => {
      // Prevent default browser behavior
      e.preventDefault();

      // Call onClick directly without setTimeout
      if (onClick && typeof onClick === "function") {
        onClick(e);
      }
    },
    [onClick]
  );

  return (
    <ButtonWrapper
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      variants={{
        rest: {},
        hover: {
          background: "#3B75FE",
          transition: { duration: 0.3, ease: "easeInOut" },
        },
      }}
    >
      <motion.div
        variants={{
          rest: { width: 40, x: 0 },
          hover: {
            width: "calc(100% - 16px)",
            transition: {
              width: { duration: 0.4, ease: "easeInOut" },
            },
          },
        }}
        style={{
          position: "absolute",
          // top: "50%",
          left: 8,
          height: 40,
          transform: "translateY(-50%)",
          borderRadius: "999px",
          backgroundColor: theme.palette.primary.main,
          zIndex: 0,
        }}
      />

      <IconWrapper>
        <motion.div
          variants={{
            rest: { x: 0 },
            hover: {
              x: 3,
              transition: {
                duration: 0.2,
                ease: "easeOut",
                delay: 0.1,
              },
            },
          }}
        >
          <ArrowForwardIcon
            sx={{ fontSize: 20, position: "relative", left: 2 }}
          />
        </motion.div>
      </IconWrapper>

      <motion.span
        variants={{
          rest: { color: "#000" },
          hover: { color: "#fff" },
        }}
        style={{
          marginLeft: 12,
          fontWeight: 600,
          fontSize: "1rem",
          zIndex: 1,
        }}
      >
        {text}
      </motion.span>
    </ButtonWrapper>
  );
});

// Ensure display name for React DevTools
AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
