import React from "react";
import { Container, Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({ color }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        borderBottom: "none",
        boxSizing: "border-box",
      }}
    >
      <Container
        sx={{
          height: "100px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            <Typography fontSize="32px" fontWeight={700} color={color}>
              kevinsmith
              <span style={{ color: theme.palette.primary.main }}>.</span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          {/* <HamburgerMenu /> */}
        </Box>
        <Box></Box>
      </Container>
    </Box>
  );
};

export default Navbar;
