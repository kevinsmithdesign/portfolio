import React from "react";
import { Stack, Typography, Tabs, Tab, Box, Button, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import Grid from "@mui/material/Grid2";
import UsageCard from "../components/UsageCard";

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

const ChipPage = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Chip
      </Typography>
      <Typography mb={6}>Description</Typography>
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
        <Box
          sx={{
            background: "#fff",
            p: 6,
            borderRadius: 3,
            position: "relative",
            mb: 4,
          }}
        >
          {/* <Stack flexDirection="row" gap={3}>
            <Button variant="contained">Primary</Button>
            <Button variant="outlined">Secondary</Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
          </Stack> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap", // Allows wrapping for smaller screens if necessary
              gap: 1, // Adds spacing between rows if wrapped
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip label="primary" color="primary" />
              <Chip label="primary" color="primary" variant="outlined" />
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip label="info" color="info" />
              <Chip label="info" color="info" variant="outlined" />
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip label="success" color="success" />
              <Chip label="success" color="success" variant="outlined" />
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip label="warning" color="warning" />
              <Chip label="warning" color="warning" variant="outlined" />
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip label="error" color="error" />
              <Chip label="error" color="error" variant="outlined" />
            </Box>
          </Box>
        </Box>
        <UsageCard />
        <UsageCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Code
      </CustomTabPanel>
    </Stack>
  );
};

export default ChipPage;
