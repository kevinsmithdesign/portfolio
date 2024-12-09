import React from "react";
import { Stack, Typography, Tabs, Tab, Box, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import Grid from "@mui/material/Grid2";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const spacing = [
  { size: "8px", pm: "m={1} or p={1}" },
  { size: "16px", pm: "m={2} or p={2}" },
  { size: "24px", pm: "m={3} or p={3}" },
  { size: "32px", pm: "m={4} or p={4}" },
  { size: "40px", pm: "m={5} or p={5}" },
  { size: "48px", pm: "m={6} or p={6}" },
  { size: "64px", pm: "m={8} or p={8}" },
  { size: "96px", pm: "m={12} or p={12}" },
];

const SpacingPage = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Spacing
      </Typography>
      <Typography mb={6}>
        Spacing system ensures consistent layout and alignment by defining a set
        of standard values for padding, margin, and gaps. It creates a unified
        structure across the product, making designs visually appealing and easy
        to navigate. By maintaining consistent spacing, the system enhances
        readability, clarity, and overall design flow, ensuring a balanced and
        organized layout.
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ mb: 3, borderBottom: "1px solid #ddd" }}
      >
        <Tab label="Design" {...a11yProps(0)} />
        <Tab label="Code" {...a11yProps(1)} />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {spacing.map(({ size, pm }) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={size}
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
                    height: "180px",
                    // background: `${description}`,
                    background: "#eee",
                    borderRadius: "16px 16px 16px 0px",
                    width: "100%",
                    mb: 1,
                  }}
                ></Box>
                <Box sx={{ px: 1, pt: 1, pb: 2 }}>
                  <Typography fontWeight="bold">{size}</Typography>
                  <Typography>{pm}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Code
      </CustomTabPanel>
    </Stack>
  );
};

export default SpacingPage;
