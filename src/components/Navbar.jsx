import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SiteMenu from "./SiteMenu";

const Navbar = () => {
  return (
    <Box>
      <Box>
        <Container>
          <Box sx={{ display: "flex", alignItems: "center", height: "120px" }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                color="#222"
                component={Link}
                to="/"
                style={{ textDecoration: "none" }}
                fontWeight="bold"
                variant="h5"
              >
                kevin<span style={{ color: "#999" }}>smith.</span>
              </Typography>
            </Box>
            <Box>
              <SiteMenu />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
