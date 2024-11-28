import React from "react";
// import "../styles.css";
import {
  Button,
  Container,
  Typography,
  Box,
  Alert,
  Card,
  Divider,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DesignSystemTitle from "../components/DesignSystemTitle";

const DesignSystem = () => {
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

  const brandColors = [
    {
      title: "Primary",
      description: "#009CDE",
    },
    {
      title: "Secondary",
      description: "#005EB8",
    },
    {
      title: "DarkPurple",
      description: "#5646D2",
    },
    {
      title: "Purple",
      description: "#8E81E9",
    },
  ];

  const semanticColors = [
    {
      title: "Error",
      description: "#DB2F40",
    },
    {
      title: "Warning",
      description: "#FFC828",
    },
    {
      title: "Success",
      description: "#0BAA5B",
    },
    {
      title: "Info",
      description: "#009CDE",
    },
  ];

  const neutralColors = [
    {
      title: "Black",
      description: "#000000",
    },
    {
      title: "darkModeDark",
      description: "#111111",
    },
    {
      title: "darkModeMedium",
      description: "#222222",
    },
    {
      title: "darkModeLight",
      description: "#333333",
    },
    {
      title: "slateGray",
      description: "#778899",
    },
    {
      title: "blueGray",
      description: "#DFE4F3",
    },
    {
      title: "lightBlueGray",
      description: "#F2F4FB",
    },
    {
      title: "extraLightGray",
      description: "#F9FAFB",
    },
    {
      title: "disabledText",
      description: "#BDBDBD",
    },
    {
      title: "disabledBg",
      description: "#E0E0E0",
    },
  ];

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

  return (
    <>
      <Container sx={{ pb: 6 }}>
        <Grid container spacing={4} mt={8}>
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{ lineHeight: 1, fontSize: "82px" }}
            >
              Scales
            </Typography>
            <Typography
              sx={{ fontSize: "36px", mb: 2 }}
              fontWeight="bold"
              mb={1}
            >
              Design System
            </Typography>
            <Box sx={{ maxWidth: "400px", color: "#999" }}>
              <Typography variant="body1">
                A flexible framework of reusable components and guidelines for
                building consistent, scalable, and accessible user interfaces.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Box sx={{ width: "100%" }}>
              <img
                src="https://assets.codepen.io/2392702/scalesDesignSystem.svg"
                alt="Components Image"
                style={{ width: "100%" }} // Add this
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "#F4F7FF" }}>
        <Container>
          <DesignSystemTitle
            atomicTitle=""
            sectionTitle="Atomic Design Principles"
            sectionDescription=" Create consistent, reusable components by breaking down the
            interface into smaller parts. This approach helps ensure
            flexibility, scalability, and a cohesive experience from
            individual elements to full pages."
          />
          <Grid container spacing={3}>
            {atomicDesignPrinciples.map(({ icon, title, description }) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={title}
                sx={{
                  display: "flex", // Make the grid items flex containers
                  flexDirection: "column", // Stack content vertically
                }}
              >
                <Card
                  sx={{
                    p: 2,
                    background: "#fff",
                    boxShadow: "none",
                    borderRadius: "24px",
                    flex: 1, // Ensures all cards stretch to the same height
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      height: "240px",
                      background: "#45A2FB",
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
          <DesignSystemTitle
            atomicTitle="DESIGN TOKENS"
            sectionTitle="Colors"
            sectionDescription="Color system defines a palette that reflects the brand’s identity and ensures a cohesive visual experience across the entire product. It provides primary, secondary, and accent colors, along with variants for different states (hover, active, disabled) and backgrounds. By using a consistent color scheme, the system enhances accessibility, visual clarity, and emotional impact, while maintaining balance and harmony across all design elements."
          />
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Brand Colors
          </Typography>
          <Grid container spacing={3} mb={2}>
            {brandColors.map(({ title, description }) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
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
                      height: "180px",
                      background: `${description}`,
                      borderRadius: "16px 16px 16px 0px",
                      width: "100%",
                      mb: 1,
                    }}
                  ></Box>
                  <Box sx={{ px: 1, pt: 1, pb: 2 }}>
                    <Typography fontWeight="bold">{title}</Typography>
                    <Typography>{description}</Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Semantic Colors
          </Typography>
          <Grid container spacing={3} mb={2}>
            {semanticColors.map(({ title, description }) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
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
                      height: "180px",
                      background: `${description}`,
                      borderRadius: "16px 16px 16px 0px",
                      width: "100%",
                      mb: 1,
                    }}
                  ></Box>
                  <Box sx={{ px: 1, pt: 1, pb: 2 }}>
                    <Typography fontWeight="bold">{title}</Typography>
                    <Typography>{description}</Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Neutral Colors
          </Typography>
          <Grid container spacing={3} pb={6}>
            {neutralColors.map(({ title, description }) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
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
                      height: "180px",
                      background: `${description}`,
                      borderRadius: "16px 16px 16px 0px",
                      width: "100%",
                      mb: 1,
                    }}
                  ></Box>
                  <Box sx={{ px: 1, pt: 1, pb: 2 }}>
                    <Typography fontWeight="bold">{title}</Typography>
                    <Typography>{description}</Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box mb={6}>
        <Container>
          <DesignSystemTitle
            atomicTitle="DESIGN TOKENS"
            sectionTitle="Typography"
            sectionDescription="Typography system establishes a clear hierarchy and readability throughout the product by defining font styles, sizes, weights, and spacing. It includes guidelines for headings, body text, captions, and other text elements, ensuring consistency in both desktop and mobile layouts. The system enhances the user experience by creating a visual rhythm, improving legibility, and supporting the overall tone and personality of the brand."
          />
          <Box
            sx={{
              background: "#F4F7FF",
              p: 6,
              borderRadius: 3,
              position: "relative",
              mb: 4,
            }}
          >
            <Typography fontWeight="bold" variant="h5" mb={4}>
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
                  geometry and natural curves. Its friendly yet professional
                  tone suits digital and print, offering various weights and
                  styles for flexibility. Ideal for UI/UX design, it ensures
                  readability at small sizes and impact at larger scales.
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
                    top: 80,
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
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#F4F7FF" }}>
        <Container>
          <DesignSystemTitle
            atomicTitle="DESIGN TOKENS"
            sectionTitle="Spacing"
            sectionDescription="Spacing system ensures consistent layout and alignment by defining a set of standard values for padding, margin, and gaps. It creates a unified structure across the product, making designs visually appealing and easy to navigate. By maintaining consistent spacing, the system enhances readability, clarity, and overall design flow, ensuring a balanced and organized layout."
          />
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
          {/* <Typography variant="h6" fontWeight="bold" mb={1}>
            Spacing Example
          </Typography> */}
          <DesignSystemTitle
            atomicTitle="DESIGN TOKENS"
            sectionTitle="Border Radius"
            sectionDescription="Border Radius system defines the curvature of UI elements, contributing to the product's overall style and tone. It enhances the visual appeal by softening edges and adding a polished look to components such as buttons, cards, and inputs. Consistent use of border radius helps achieve a cohesive and approachable design, providing a sense of continuity and harmony across all interactions.."
          />
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
        </Container>
      </Box>
      <Box>
        <Container>
          <DesignSystemTitle
            atomicTitle="ATOMS"
            sectionTitle="Buttons"
            sectionDescription="Button system provides consistent styles and interactions for clickable elements across the interface. It defines different button types contained or outlined with clear visual states for hover, active, disabled, and focus. The system ensures buttons are accessible, visually distinct, and aligned with the brand's identity, offering flexibility in size, and shape. By standardizing button components, the design system enhances usability and provides a cohesive experience throughout the product."
          />
          {/* <Box
            sx={{
              border: "1px dashed #778899",
              p: 4,
              borderRadius: 4,
              mb: 3,
            }}
          >
            <Button variant="contained" sx={{ mr: 2 }}>
              Contained
            </Button>
            <Button variant="contained" sx={{ mr: 2 }}>
              Delete
            </Button>
            <Button variant="contained" disabled sx={{ mr: 2 }}>
              Disabled
            </Button>
            <Button variant="outlined" sx={{ mr: 2 }}>
              Outlined
            </Button>
            <Button variant="outlined" disabled sx={{ mr: 2 }}>
              Outlined
            </Button>
            <Button variant="contained" sx={{ mr: 2 }} disabled>
              Loading...
            </Button>
          </Box> */}
          <Typography variant="h6" mb={1}>
            State
          </Typography>
          <Box
            sx={{
              display: "flex",
              border: "1px dashed #778899",
            }}
          >
            <Box
              sx={{
                flex: 1,
                borderRight: "1px dashed #778899",
                p: 2,
              }}
            >
              <Typography fontWeight="bold">Variant</Typography>
            </Box>
            <Box sx={{ flex: 1, borderRight: "1px dashed #778899", p: 2 }}>
              <Typography fontWeight="bold">Default</Typography>
            </Box>
            <Box sx={{ flex: 1, borderRight: "1px dashed #778899", p: 2 }}>
              <Typography fontWeight="bold">Hovered</Typography>
            </Box>
            <Box sx={{ flex: 1, borderRight: "1px dashed #778899", p: 2 }}>
              <Typography fontWeight="bold">Focused</Typography>
            </Box>
            <Box sx={{ flex: 1, borderRight: "1px dashed #778899", p: 2 }}>
              <Typography fontWeight="bold">Delete</Typography>
            </Box>

            <Box sx={{ flex: 1, borderRight: "1px dashed #778899", p: 2 }}>
              <Typography fontWeight="bold">Disabled</Typography>
            </Box>
            <Box sx={{ flex: 1, p: 2 }}>
              <Typography fontWeight="bold">Loading</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              borderBottom: "1px dashed #778899",
            }}
          >
            <Box
              sx={{
                flex: 1,
                borderLeft: "1px dashed #778899",
                borderRight: "1px dashed #778899",
                p: 2,
              }}
            >
              <Typography fontWeight="bold">Contained</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                borderRight: "1px dashed #778899",
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#009CDE",
                  "&:hover": {
                    background: "#009CDE", // Keeps the background the same on hover
                  },
                }}
              >
                BTN TEXT
              </Button>
            </Box>
            <Box
              sx={{
                flex: 1,
                borderRight: "1px dashed #778899",
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#0085C0",
                  "&:hover": {
                    background: "#0085C0", // Keeps the background the same on hover
                  },
                }}
              >
                BTN TEXT
              </Button>
            </Box>
            <Box
              sx={{
                flex: 1,
                borderRight: "1px dashed #778899",
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#005F9E",
                  "&:hover": {
                    background: "#005F9E", // Keeps the background the same on hover
                  },
                }}
              >
                BTN TEXT
              </Button>
            </Box>

            <Box
              sx={{
                flex: 1,
                borderRight: "1px dashed #778899",
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#DB2F40",
                  "&:hover": {
                    background: "#DB2F40", // Keeps the background the same on hover
                  },
                }}
              >
                BTN TEXT
              </Button>
            </Box>
            <Box
              sx={{
                flex: 1,
                borderRight: "1px dashed #778899",
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                disabled
                variant="contained"
                sx={{
                  background: "#DB2F40",
                  "&:hover": {
                    background: "#DB2F40", // Keeps the background the same on hover
                  },
                }}
              >
                BTN TEXT
              </Button>
            </Box>
            <Box
              sx={{
                flex: 1,
                p: 2,
                borderRight: "1px dashed #778899",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                disabled
                variant="contained"
                sx={{
                  background: "#DB2F40",
                  "&:hover": {
                    background: "#DB2F40", // Keeps the background the same on hover
                  },
                }}
              >
                LOADING...
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              borderBottom: "1px dashed #778899",
              mb: 4,
            }}
          >
            <Box
              sx={{
                flex: 1,
                borderLeft: "1px dashed #778899",
                borderRight: "1px dashed #778899",
                p: 2,
              }}
            >
              <Typography fontWeight="bold">Outlined</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                borderRight: "1px dashed #778899",
                p: 2,
                display: "flex",
                alignItems: "center",
                justiftyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid #009CDE",
                  color: "#009CDE",
                  "&:hover": {
                    border: "1px solid #009CDE",
                  },
                }}
              >
                BTN TEXT
              </Button>
            </Box>
            <Box sx={{ flex: 1, borderRight: "1px dashed #778899", p: 2 }}>
              Hovered
            </Box>
            <Box sx={{ flex: 1, borderRight: "1px dashed #778899", p: 2 }}>
              Focused
            </Box>

            <Box sx={{ flex: 1, borderRight: "1px dashed #778899", p: 2 }}>
              Disabled
            </Box>
            <Box sx={{ flex: 1, borderRight: "1px dashed #778899", p: 2 }}>
              Variant
            </Box>
            <Box sx={{ flex: 1, p: 2, borderRight: "1px dashed #778899" }}>
              Loading
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DesignSystem;
