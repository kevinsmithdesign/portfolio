import React from "react";
import { Stack, Typography, Tabs, Tab, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import DesignSystemTitle from "../components/DesignSystemTitle";
import Grid from "@mui/material/Grid2";

// const typographyStyles = [
//   { variant: "h1", label: "h1" },
//   { variant: "h2", label: "h2" },
//   { variant: "h3", label: "h3" },
//   { variant: "h4", label: "h4" },
//   { variant: "h5", label: "h5" },
//   { variant: "h6", label: "h6" },
//   { variant: "body1", label: "body1" },
//   { variant: "body2", label: "body2" },
// ];

const typographyVariants = [
  {
    variant: "h1",
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: 1.3, // Unitless for implementation
    lineHeightDisplay: "130%", // Percentage for user display
    label: "Heading 1",
    responsive: { "@media (min-width:600px)": { fontSize: "48px" } },
  },
  {
    variant: "h2",
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: 1.3,
    lineHeightDisplay: "130%",
    label: "Heading 2",
    responsive: { "@media (min-width:600px)": { fontSize: "40px" } },
  },
  {
    variant: "h3",
    fontSize: "28px",
    fontWeight: 600,
    lineHeight: 1.3,
    lineHeightDisplay: "130%",
    label: "Heading 3",
    responsive: { "@media (min-width:600px)": { fontSize: "36px" } },
  },
  {
    variant: "h4",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: 1.3,
    lineHeightDisplay: "130%",
    label: "Heading 4",
    responsive: { "@media (min-width:600px)": { fontSize: "32px" } },
  },
  {
    variant: "h5",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: 1.4,
    lineHeightDisplay: "140%",
    label: "Heading 5",
  },
  {
    variant: "h6",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: 1.4,
    lineHeightDisplay: "140%",
    label: "Heading 6",
  },
  {
    variant: "body1",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.5,
    lineHeightDisplay: "150%",
    label: "Body 1",
  },
  {
    variant: "body2",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
    lineHeightDisplay: "150%",
    label: "Body 2",
  },
  {
    variant: "body3",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: 1.4,
    lineHeightDisplay: "140%",
    label: "Body 3",
  },
];

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

const TypographyPage = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const codeString = `
  <Typography variant="h1" gutterBottom>
    h1. Heading
  </Typography>
  <Typography variant="h2" gutterBottom>
    h2. Heading
  </Typography>
  <Typography variant="h3" gutterBottom>
    h3. Heading
  </Typography>
  <Typography variant="h4" gutterBottom>
    h4. Heading
  </Typography>
  <Typography variant="h5" gutterBottom>
    h5. Heading
  </Typography>
  <Typography variant="h6" gutterBottom>
    h6. Heading
  </Typography>
  `;

  const bodyCopyCode = `
    <Typography variant="body1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
  `;

  return (
    <Stack>
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Typography
      </Typography>
      <Typography mb={6}>
        Typography system establishes a clear hierarchy and readability
        throughout the product by defining font styles, sizes, weights, and
        spacing. It includes guidelines for headings, body text, captions, and
        other text elements, ensuring consistency in both desktop and mobile
        layouts. The system enhances the user experience by creating a visual
        rhythm, improving legibility, and supporting the overall tone and
        personality of the brand.
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
        {/* <DesignSystemTitle
          atomicTitle="DESIGN TOKENS"
          sectionTitle="Typography"
          sectionDescription="Typography system establishes a clear hierarchy and readability throughout the product by defining font styles, sizes, weights, and spacing. It includes guidelines for headings, body text, captions, and other text elements, ensuring consistency in both desktop and mobile layouts. The system enhances the user experience by creating a visual rhythm, improving legibility, and supporting the overall tone and personality of the brand."
        /> */}
        <Box
          sx={{
            background: "#fff",
            p: 6,
            borderRadius: 3,
            position: "relative",
            mb: 4,
          }}
        >
          <Typography fontWeight="bold" variant="h4" mb={3}>
            Roboto
          </Typography>
          <Stack flexDirection="row" gap={4} mb={4}>
            <Typography fontWeight="100" variant="body1">
              Light
            </Typography>
            <Typography fontWeight="300" variant="body1">
              Regular
            </Typography>
            <Typography fontWeight="500" variant="body1">
              Medium
            </Typography>
            <Typography fontWeight="600" variant="body1">
              Semi
            </Typography>
            <Typography fontWeight="800" variant="body1">
              Bold
            </Typography>
          </Stack>

          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography>
                Roboto is a modern, versatile sans-serif typeface with clean
                geometry and natural curves. Its friendly yet professional tone
                suits digital and print, offering various weights and styles for
                flexibility. Ideal for UI/UX design, it ensures readability at
                small sizes and impact at larger scales.
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 0, md: 5 }}
              // sx={{
              //   display: {
              //     xs: "none", // Hide on extra small screens
              //     sm: "none", // Hide on small screens
              //     md: "block", // Hide on medium screens
              //     lg: "block", // Show on large screens and above
              //   },
              // }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 60,
                  display: {
                    xs: "none", // Hide on extra small screens
                    sm: "none", // Hide on small screens
                    md: "block", // Hide on medium screens
                    lg: "block", // Show on large screens and above
                  },
                }}
              >
                <img
                  src="https://assets.codepen.io/2392702/Aa.svg"
                  alt=""
                  style={{ width: "300px", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            background: "#fff",
            p: 6,
            borderRadius: 3,
            position: "relative",
            mb: 4,
          }}
        >
          <Box sx={{ display: "flex", borderBottom: "1px solid #DFE4F3" }}>
            <Box
              sx={{
                flex: 1,
                // background: "red",
                p: 3,
              }}
            >
              <Typography fontWeight="bold">Styles</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                // background: "orange",
                p: 3,
              }}
            >
              <Typography fontWeight="bold">Weight</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                //  background: "blue",
                p: 3,
              }}
            >
              <Typography fontWeight="bold">Size</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                // background: "green",
                p: 3,
              }}
            >
              <Typography fontWeight="bold">Line Height</Typography>
            </Box>
          </Box>

          {typographyVariants.map(
            ({ variant, fontSize, fontWeight, lineHeightDisplay }) => (
              <Box
                sx={{
                  display: "flex",
                  borderBottom: "1px solid #DFE4F3",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    // background: "blue",
                    p: 3,
                  }}
                >
                  <Typography variant={variant}>{variant}</Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    // background: "orange",
                    p: 3,
                  }}
                >
                  <Typography>{fontWeight}</Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    // background: "blue",
                    p: 3,
                  }}
                >
                  <Typography>{fontSize}</Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    // background: "green",
                    p: 3,
                  }}
                >
                  <Typography>{lineHeightDisplay}</Typography>
                </Box>
              </Box>
            )
          )}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h5" mb={3}>
          Typography Header
        </Typography>
        <Stack mb={4}>
          <CodeSnippet language="javascript" code={codeString} />
        </Stack>
        <Typography variant="h5" mb={3}>
          Typography Body Copy
        </Typography>
        <Stack mb={4}>
          <CodeSnippet language="javascript" code={bodyCopyCode} />
        </Stack>
      </CustomTabPanel>
    </Stack>
  );
};

export default TypographyPage;
