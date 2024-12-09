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

const DesignSystemOverviewPage = () => {
  const muiTheme = useMuiTheme();
  const { themeName, setThemeName } = useTheme();

  return (
    <Box sx={{ maxWidth: "1120px" }}>
      <Grid container spacing={3}>
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" fontWeight="bold" mb={3}>
            White Label Design System
          </Typography>
          <Typography>
            A flexible framework of reusable components and guidelines for
            building consistent, scalable, and accessible user interfaces, with
            support for multiple themes.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              //   height: "400px",
              //   py: 6,
              width: "100%",
              //   background: muiTheme.palette.primary.main,
              //   background: "#fff",
              borderRadius: "24px",
              my: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Typography variant="h4" color="#fff">
              {themeName}
            </Typography> */}
            <Box>
              <Stack
                spacing={1}
                sx={{
                  p: 2,
                  border: "1px dashed #ddd",
                  background: "#fff",
                  borderRadius: 3,
                  mr: 2,
                  mb: 2,
                }}
              >
                <Alert severity="success">This is a success Alert.</Alert>
                <Alert severity="info">This is an info Alert.</Alert>
                <Alert severity="warning">This is a warning Alert.</Alert>
                <Alert severity="error">This is an error Alert.</Alert>
              </Stack>
              {/* <Stack sx={{ alignItems: "flex-end" }}>
                <Typography variant="h1" fontWeight="bold" sx={{ mr: 3 }}>
                  Aa
                </Typography>
              </Stack> */}
            </Box>
            <Box>
              <Stack
                spacing={1}
                sx={{
                  p: 2,
                  border: "1px dashed #ddd",
                  background: "#fff",
                  borderRadius: 3,
                  mr: 2,
                  mb: 2,
                }}
              >
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="contained" disabled>
                  Disabled
                </Button>
                <Button variant="contained" color="error">
                  Error
                </Button>
              </Stack>
              <Stack
                sx={{
                  p: 2,
                  background: "#fff",
                  border: "1px dashed #ddd",
                  borderRadius: 3,
                  mr: 2,
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel
                    required
                    control={<Checkbox />}
                    label="Required"
                  />
                  <FormControlLabel
                    disabled
                    control={<Checkbox />}
                    label="Disabled"
                  />
                </FormGroup>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DesignSystemOverviewPage;
