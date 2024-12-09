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

const borderRadius = [
  { size: "2px", pm: "small" },
  { size: "4px", pm: "mediumSmall" },
  { size: "6px", pm: "medium" },
  { size: "8px", pm: "mediumLarge" },
  { size: "16px", pm: "large" },
  { size: "20px", pm: "extraLarge" },
  { size: "24px", pm: "xxl" },
  { size: "60px", pm: "round" },
  { size: "50%", pm: "circle" },
];

const BorderPage = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Border
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
        <Grid container spacing={3} pb={6}>
          {borderRadius.map(({ size, pm }) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
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
                    height: "240px",
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

export default BorderPage;
