import React, { useEffect, FC } from "react";
import { gsap } from "gsap";
import { Card, Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { MenuContainer, InnerContainer, Bar } from "./Navbar.styles";

const DesignSystemHamburgerBtn = ({ menuOpen, setMenuOpen, hamburgerRef }) => {
  const MenuContainer = styled(Box)(({ theme }) => ({
    width: "2.25rem",
    height: "2.25rem",
    // borderRadius: theme.customBorderRadius.circle,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: "black",
  }));

  const InnerContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
  });

  const Bar = styled(Box)(({ theme }) => ({
    height: "0.1875rem",
    width: "1.25rem",
    // backgroundColor: theme.palette.common.white,
    background: "white",
    marginBottom: "0.1875rem", // one off
    // borderRadius: theme.customBorderRadius.small,
    borderRadius: "2px",
    "&:last-child": {
      marginBottom: 0,
    },
  }));

  useEffect(() => {
    const tl = gsap.timeline();

    if (menuOpen) {
      tl.to(".bar-one", { y: 6, rotation: 45, duration: 0.3 })
        .to(".bar-two", { opacity: 0, duration: 0 }, "-=0.3")
        .to(".bar-three", { y: -6, rotation: -45, duration: 0.3 }, "-=0.3");
    } else {
      tl.to(".bar-one", { y: 0, rotation: 0, duration: 0.3 })
        .to(".bar-two", { opacity: 1, duration: 0 }, "-=0.3")
        .to(".bar-three", { y: 0, rotation: 0, duration: 0.3 }, "-=0.3");
    }
  }, [menuOpen]);

  const handleHamburgerMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <MenuContainer ref={hamburgerRef} onClick={handleHamburgerMenu}>
      <InnerContainer>
        <Bar className="bar-one" />
        <Bar className="bar-two" />
        <Bar className="bar-three" />
      </InnerContainer>
    </MenuContainer>
  );
};

export default DesignSystemHamburgerBtn;
