// import React, { useCallback } from "react";
// import { Typography, Box } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const ButtonWrapper = styled(motion.button)(({ theme }) => ({
//   position: "relative",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   padding: "0px 28px 0px 6px",
//   borderRadius: "999px",
//   border: "none",
//   // backgroundColor: "#ddd",
//   background: "#eee",
//   overflow: "hidden",
//   cursor: "pointer",
//   outline: "none",
//   height: "60px",
// }));

// const Fill = styled(motion.div)(({ theme }) => ({
//   position: "absolute",
//   top: "50%",
//   left: 8,
//   height: 40,
//   width: 40,
//   transform: "translateY(-50%)",
//   borderRadius: "999px",
//   backgroundColor: theme.palette.primary.main,
//   zIndex: 0,
// }));

// const IconWrapper = styled(Box)(() => ({
//   width: 40,
//   height: 40,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   position: "relative",
//   zIndex: 1,
// }));

// const Text = styled(motion.span)(() => ({
//   marginLeft: 12,
//   fontWeight: 600,
//   fontSize: "1rem",
//   zIndex: 1,
// }));

// const AnimatedButton = ({ text, onClick }) => {
//   // Use useCallback to ensure consistent function reference
//   const handleClick = useCallback(
//     (e) => {
//       // Prevent default browser behavior
//       e.preventDefault();

//       // Add a small timeout to ensure the event fires after animations
//       setTimeout(() => {
//         if (onClick && typeof onClick === "function") {
//           onClick(e);
//         }
//       }, 10);
//     },
//     [onClick]
//   );

//   return (
//     <ButtonWrapper
//       initial="rest"
//       whileHover="hover"
//       animate="rest"
//       onClick={handleClick}
//       // Add these props to ensure proper event handling
//       role="button"
//       tabIndex={0}
//     >
//       {/* Expanding fill starts behind icon */}
//       <Fill
//         variants={{
//           rest: { width: 40 },
//           hover: {
//             width: "calc(100% - 16px)",
//             transition: { duration: 0.4, ease: "easeInOut" },
//           },
//         }}
//       />

//       <IconWrapper>
//         <motion.div
//           variants={{
//             rest: { color: "#fff" },
//             hover: { color: "#fff" },
//           }}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             width: "100%",
//             height: "100%",
//           }}
//         >
//           <ArrowForwardIcon
//             sx={{ fontSize: 20, position: "relative", left: "3px" }}
//           />
//         </motion.div>
//       </IconWrapper>

//       <Text
//         variants={{
//           rest: { color: "#000" },
//           hover: { color: "#fff" },
//         }}
//       >
//         {text}
//       </Text>
//     </ButtonWrapper>
//   );
// };

// export default AnimatedButton;

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
        hover: {},
      }}
    >
      <motion.div
        variants={{
          rest: { width: 40 },
          hover: {
            width: "calc(100% - 16px)",
            transition: { duration: 0.4, ease: "easeInOut" },
          },
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: 8,
          height: 40,
          transform: "translateY(-50%)",
          borderRadius: "999px",
          backgroundColor: theme.palette.primary.main, // Use a direct color value
          zIndex: 0,
        }}
      />

      <IconWrapper>
        <ArrowForwardIcon
          sx={{ fontSize: 20, position: "relative", left: "3px" }}
        />
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
