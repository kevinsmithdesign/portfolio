import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Stack, Typography, Button, Divider } from "@mui/material";
import { useState } from "react";
import { ThemeProviderDesignSystem, useTheme } from "../themes/ThemeContext";

import DesignSystemOverviewPage from "./DesignSystemOverviewPage";
import ColorPage from "./ColorsPage";
import TypographyPage from "./TypographyPage";
import SpacingPage from "./SpacingPage";
import BorderPage from "./BorderPage";
import ButtonPage from "./ButtonPage";
import AlertPage from "./AlertPage";
import GridPage from "./GridPage";
import ChipPage from "./ChipPage";
import TextFieldPage from "./TextFieldPage";
import ControlsPage from "./ControlsPage";
import DesignPrinciplesPage from "./DesignPrinciplesPage";
import DesignSystemHamburgerBtn from "../components/DesignSystemHamburgerBtn";
import SiteMenu from "../components/SiteMenu";

const links = [
  // { to: "/logos", title: "Logos" },
  { to: "/whitelabel", title: "Overview" },
  { to: "/whitelabel/design-principles", title: "Design Principles" },

  //   { to: "/fonts", title: "Fonts" },
  //   { to: "/icons", title: "Icons" },
  // { to: "/imagery", title: "Imagery" },
];

// Components
const moleculesLink = [
  { to: "/whitelabel/colors", title: "Colors" },
  { to: "/whitelabel/typography", title: "Typography" },
  { to: "/whitelabel/spacing", title: "Spacing" },
  { to: "/whitelabel/border", title: "Border" },
  { to: "/whitelabel/grid", title: "Grid" },
];

const componentsLink = [
  { to: "/whitelabel/button", title: "Button" },
  { to: "/whitelabel/chip", title: "Chip" },
  { to: "/whitelabel/text-field", title: "TextField" },
  { to: "/whitelabel/controls", title: "Controls" },
  { to: "/whitelabel/alert", title: "Alert" },
];

const WhiteLabelContent = () => {
  const { themeName, setThemeName, theme } = useTheme();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleThemeChange = (theme) => {
    setThemeName(theme);
    setToggle(false);
  };

  return (
    <>
      <Stack sx={{ backgroundColor: theme.palette.primary.main }}>
        <Stack
          flexDirection="row"
          sx={{ maxWidth: "1430px", padding: "16px 24px" }}
        >
          <Stack sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: "24px",
                color: theme.palette.primary.contrastText,
              }}
            >
              {themeName}
            </Typography>
          </Stack>
          <Stack>
            <Button
              sx={{
                background: theme.palette.primary.contrastText,
                "&:hover": {
                  background: theme.palette.primary.contrastText,
                },
              }}
              onClick={toggleHamburgerMenu}
            >
              Change Theme
            </Button>
          </Stack>
          <Stack
            sx={{
              //   display: { xs: "flex", md: "none" },
              justifyContent: "center",

              ml: 2,
            }}
          >
            {/* <DesignSystemHamburgerBtn
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              // hamburgerRef={hamburgerRef}
            /> */}
            <SiteMenu />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        flexDirection="row"
        sx={{
          maxWidth: "1410px",
          background: "red",
          position: "relative",
        }}
      >
        {toggle && (
          <Stack
            sx={{
              position: "absolute",
              top: 10,
              right: 55,
              zIndex: "1000",
              background: "#fff",
              padding: "16px",
              borderRadius: "8px",
              width: "160px",
            }}
          >
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme One")}
            >
              Theme One
            </Typography>
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme Two")}
            >
              Theme Two
            </Typography>
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme Three")}
            >
              Theme Three
            </Typography>
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme Four")}
            >
              Theme Four
            </Typography>
          </Stack>
        )}
        {menuOpen && (
          <Stack>
            <Stack
              sx={{
                position: "absolute",
                top: 10,
                right: 0,
                zIndex: "1000",
                background: "#fff",
                padding: "16px",
                borderRadius: "8px",
                width: "200px",
                border: "1px solid #eee",
              }}
            >
              <Stack onClick={() => navigate("/")} sx={{ p: 1 }}>
                Portfolio
              </Stack>
              <Stack onClick={() => navigate("/resume")} sx={{ p: 1 }}>
                Resume
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>

      <Stack flexDirection="column" sx={{ height: "100%", flex: 1 }}>
        {/* <Stack
          flexDirection="row"
          sx={{
            backgroundColor: theme.palette.primary.main,
            padding: "16px 24px",
          }}
        >
          <Stack sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: "24px",
                color: theme.palette.primary.contrastText,
              }}
            >
              {themeName}
            </Typography>
          </Stack>
          <Stack>
            <Button
              sx={{
                background: theme.palette.primary.contrastText,
                "&:hover": {
                  background: theme.palette.primary.contrastText,
                },
              }}
              onClick={toggleHamburgerMenu}
            >
              Change Theme
            </Button>
          </Stack>
          <Stack
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              background: "red",
            }}
          >
            <DesignSystemHamburgerBtn
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              // hamburgerRef={hamburgerRef}
            />
          </Stack>
        </Stack> */}
        {/* {toggle && (
          <Stack
            sx={{
              position: "absolute",
              top: 64,
              right: 24,
              zIndex: "1000",
              background: "#fff",
              padding: "16px",
              borderRadius: "8px",
              width: "160px",
            }}
          >
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme One")}
            >
              Theme One
            </Typography>
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme Two")}
            >
              Theme Two
            </Typography>
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme Three")}
            >
              Theme Three
            </Typography>
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme Four")}
            >
              Theme Four
            </Typography>
          </Stack>
        )} */}

        <Stack
          flexDirection="row"
          sx={{ flex: 1, borderRight: "1px solid #eee" }}
        >
          <Stack sx={{ width: "260px", display: { xs: "none", md: "flex" } }}>
            <Stack mt={8}>
              <Stack sx={{ padding: "0 0 8px 24px" }}>
                <Typography fontWeight="bold">Getting Started</Typography>
              </Stack>

              {links.map(({ to, title }, index) => (
                <Link
                  key={index}
                  style={{
                    textDecoration: "none",
                    color: "#222",
                    borderBottom: "1px solid #eee",
                    padding: "16px 24px",
                  }}
                  to={to}
                >
                  <Typography>{title}</Typography>
                </Link>
              ))}
            </Stack>
            <Stack mb={2}>
              <Stack sx={{ padding: "16px 0 8px 24px" }}>
                <Typography fontWeight="bold">Foundation</Typography>
              </Stack>
              {moleculesLink.map(({ to, title }, index) => (
                <Link
                  key={index}
                  style={{
                    textDecoration: "none",
                    color: "#222",
                    borderBottom: "1px solid #eee",
                    padding: "16px 24px",
                  }}
                  to={to}
                >
                  <Typography>{title}</Typography>
                </Link>
              ))}
            </Stack>
            <Stack mb={2}>
              <Stack sx={{ padding: "16px 0 8px 24px" }}>
                <Typography fontWeight="bold">Components</Typography>
              </Stack>
              {componentsLink.map(({ to, title }, index) => (
                <Link
                  key={index}
                  style={{
                    textDecoration: "none",
                    color: "#222",
                    borderBottom: "1px solid #eee",
                    padding: "16px 24px",
                  }}
                  to={to}
                >
                  <Typography>{title}</Typography>
                </Link>
              ))}
            </Stack>
          </Stack>
          <Stack
            sx={{
              flex: 1,
              background: "#f6f6fa",
              padding: "32px 48px",
              overflowY: "auto",
            }}
          >
            <Routes>
              <Route path="/" element={<DesignSystemOverviewPage />} />
              <Route
                path="/design-principles"
                element={<DesignPrinciplesPage />}
              />
              <Route path="/colors" element={<ColorPage />} />
              <Route path="/typography" element={<TypographyPage />} />
              <Route path="/spacing" element={<SpacingPage />} />
              <Route path="/border" element={<BorderPage />} />

              <Route path="/button" element={<ButtonPage />} />
              <Route path="/chip" element={<ChipPage />} />
              <Route path="/text-field" element={<TextFieldPage />} />
              <Route path="/controls" element={<ControlsPage />} />

              <Route path="/alert" element={<AlertPage />} />
              <Route path="/grid" element={<GridPage />} />
            </Routes>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

// Main component that provides the theme context
const WhiteLabelPage = () => {
  return (
    <ThemeProviderDesignSystem>
      <WhiteLabelContent />
    </ThemeProviderDesignSystem>
  );
};

export default WhiteLabelPage;
