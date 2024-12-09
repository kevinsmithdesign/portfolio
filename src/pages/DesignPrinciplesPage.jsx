import React from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Alert,
  Card,
  Divider,
  Stack,
  Chip,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useTheme } from "../themes/ThemeContext";
import Grid from "@mui/material/Grid2";

const atomicDesignPrinciples = [
  {
    icon: "https://assets.codepen.io/2392702/DesignToken.svg",
    title: "Design Tokens",
    description:
      "Tokens define core styles like colors and spacing, ensuring consistency across all components.",
  },
  {
    icon: "https://assets.codepen.io/2392702/Atoms.svg",
    title: "Atoms",
    description:
      "Atoms are the smallest UI elements, like buttons or icons, styled with tokens.",
  },
  {
    icon: "https://assets.codepen.io/2392702/Molecules.svg",
    title: "Molecules",
    description:
      "Molecules combine atoms, like an input field with a label, creating reusable patterns.",
  },
  {
    icon: "https://assets.codepen.io/2392702/Organisms.svg",
    title: "Organisms",
    description:
      "Organisms are complex UI sections made from atoms and molecules, like a navbar or card.",
  },
  {
    icon: "https://assets.codepen.io/2392702/Templates.svg",
    title: "Templates",
    description:
      "Templates define the layout of pages, showing how components fit together.",
  },
  {
    icon: "https://assets.codepen.io/2392702/Pages.svg",
    title: "Pages",
    description:
      "Pages bring templates to life with real content, delivering the final experience to users.",
  },
];

const DesignPrinciplesPage = () => {
  const muiTheme = useMuiTheme();
  const { themeName, setThemeName } = useTheme();

  return (
    <Box sx={{ maxWidth: "1120px" }}>
      <Typography variant="h4" mb={2} fontWeight="bold">
        Atomic Design Principles
      </Typography>
      <Typography mb={4}>
        Create consistent, reusable components by breaking down the interface
        into smaller parts. This approach helps ensure flexibility, scalability,
        and a cohesive experience from individual elements to full pages.
      </Typography>
      <Grid container spacing={3}>
        {atomicDesignPrinciples.map(({ icon, title, description }) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={title}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
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
                  background: muiTheme.palette.primary.main,
                  borderRadius: "16px 16px 16px 0px",
                  width: "100%",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <img src={icon} alt="" style={{ width: "60px" }} />
                </Box>
              </Box>
              <Box sx={{ px: 1, pt: 1, pb: 2 }}>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {title}
                </Typography>
                <Typography>{description}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DesignPrinciplesPage;
