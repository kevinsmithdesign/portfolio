import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import SiteMenu from "./SiteMenu";

const Navbar = () => {
  const location = useLocation();
  const isWhitelabelRoute = location.pathname.startsWith("/whitelabel");

  return (
    <Box>
      <Box>
        <Container>
          {/* <Box sx={{ display: "flex", alignItems: "center" }}>
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
            <Box> */}
          {!isWhitelabelRoute && <SiteMenu />}

          {/* </Box> */}
          {/* </Box> */}
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
