import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import ThemeThree from "../themes/ThemeThree";
import ThemeOne from "../themes/ThemeOne";
import ThemeTwo from "../themes/ThemeTwo";
import ThemeFour from "../themes/ThemeFour";

const ThemeContext = createContext();

export const ThemeProviderDesignSystem = ({ children }) => {
  const [themeName, setThemeName] = useState("Theme One");

  const theme = useMemo(() => {
    switch (themeName) {
      case "Theme One":
        return ThemeOne;
      case "Theme Two":
        return ThemeTwo;
      case "Theme Three":
        return ThemeThree;
      default:
        return ThemeFour;
    }
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, theme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
