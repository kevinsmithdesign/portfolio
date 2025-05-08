// src/theme/theme.js
import { createTheme, darken } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3B75FE", // Default primary color
    },
    secondary: {
      main: "#dc004e", // Default secondary color
    },
  },
  typography: {
    // fontFamily: "Inter, sans-serif", // Default font family
    fontFamily: "Neue Haas Grotesk Display Pro",
    h1: {
      fontSize: "clamp(36px, 5vw, 48px)", // Responsive scaling
      fontWeight: 600, // Semibold
      lineHeight: "1.3", // Improved readability
    },
    h2: {
      fontSize: "clamp(32px, 4.5vw, 40px)",
      fontWeight: 600,
      lineHeight: "1.3",
    },
    h3: {
      fontSize: "clamp(28px, 4vw, 36px)",
      fontWeight: 600,
      lineHeight: "1.3",
    },
    h4: {
      fontSize: "clamp(24px, 3.5vw, 32px)",
      fontWeight: 600,
      lineHeight: "1.3",
    },
    h5: {
      fontSize: "24px", // Static value for smaller headings
      fontWeight: 600,
      lineHeight: "1.4",
    },
    h6: {
      fontSize: "20px",
      fontWeight: 700, // Bold for small heading emphasis
      lineHeight: "1.4",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 500, // Regular weight for body text
      lineHeight: "1.5", // Comfortable spacing
    },
    body2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "1.5",
    },
    body3: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "1.4", // Slightly tighter for small text
    },

    button: {
      textTransform: "none", // Prevent all caps on buttons
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded corners for buttons
          padding: "12px 24px", // Default padding
          fontSize: "1rem", // Default font size
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        containedPrimary: {
          backgroundColor: "#3B75FE",
          color: "#fff",

          "&:hover": {
            backgroundColor: darken("#3B75FE", 0.1), // Darkens by 10%
          },
        },
        containedSecondary: {
          backgroundColor: "#dc004e",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#9a0036",
          },
        },
      },
    },
  },
});

theme.typography.body3 = {
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "1.4",
};

export default theme;
