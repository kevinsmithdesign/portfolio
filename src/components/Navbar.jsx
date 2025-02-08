import React, { useState, useRef, useEffect } from "react";
import { darken } from "@mui/material/styles";
import { Container, Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { styled } from "@mui/system";

const MobileNavGroup = styled(Box)({
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  opacity: 0,
  pointerEvents: "none",
  zIndex: 30,
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  "& > *": {
    transform: "translateY(20px)",
    opacity: 0,
  },
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  cursor: "pointer",
  position: "relative",
  display: "inline-block",
  fontSize: "2rem",
  fontWeight: 500,
  background: "linear-gradient(to right, rgba(255,255,255,0.7) 50%, #FFF 50%)",
  backgroundSize: "200% 100%",
  backgroundPosition: "right",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  transition: "background-position 0.3s ease",
  "&:hover": {
    backgroundPosition: "left",
  },
});

const BackgroundOverlay = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "#3B75FE",
  opacity: 0,
  pointerEvents: "none",
  zIndex: 5,
});

const MorphingBackground = styled(Box)({
  position: "absolute",

  top: "40px",
  right: "16px",
  width: "48px",
  height: "48px",
  background: "#3B75FE",
  borderRadius: "50%",
  transformOrigin: "center",
});

const HamburgerMenu = styled(Box)({
  position: "relative",
  height: "14px",
  width: "18px",
  zIndex: 30,
  "& .bar": {
    width: "18px",
    height: "4px",
    borderRadius: "2px",
    background: "#FFF",
    position: "absolute",
    transformOrigin: "center",
  },
  "& .top-bar": {
    top: 0,
  },
  "& .bottom-bar": {
    bottom: 0,
  },
});

const Navbar = () => {
  const location = useLocation();
  const isWhitelabelRoute = location.pathname.startsWith("/whitelabel");

  // Menu state and refs
  const [isOpen, setIsOpen] = useState(false);
  const mobNavRef = useRef(null);
  const topBarRef = useRef(null);
  const bottomBarRef = useRef(null);
  const navItemsRef = useRef([]);
  const morphRef = useRef(null);
  const bgRef = useRef(null);

  const menuItems = [
    { path: "/", label: "Portfolio" },
    { path: "/resume", label: "Resume" },
  ];

  const toggleMenu = () => {
    const tl = gsap.timeline();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxDistance = Math.sqrt(
      Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2)
    );
    const scale = maxDistance / 40;

    if (isOpen) {
      // Close animation
      tl.to(navItemsRef.current, {
        opacity: 0,
        duration: 0.15,
        stagger: 0.02,
        ease: "power1.in",
      })
        .to(
          bgRef.current,
          {
            opacity: 0,
            duration: 0.3,
          },
          "-=0.1"
        )
        .to(
          morphRef.current,
          {
            scale: 1,
            x: 0,
            y: 0,
            borderRadius: "50%",
            duration: 0.35,
            ease: "power2.inOut",
          },
          "-=0.3"
        )
        .to(
          topBarRef.current,
          {
            rotation: 0,
            y: 0,
            duration: 0.2,
            ease: "power1.inOut",
          },
          "-=0.2"
        )
        .to(
          bottomBarRef.current,
          {
            rotation: 0,
            y: 0,
            duration: 0.2,
            ease: "power1.inOut",
          },
          "-=0.2"
        );
    } else {
      // Open animation
      tl.to(
        morphRef.current,
        {
          scale: scale,
          borderRadius: 0,
          x: -windowWidth / 2 + 40,
          y: -windowHeight / 2 + 40,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      )
        .to(
          bgRef.current,
          {
            opacity: 1,
            duration: 0.3,
          },
          0
        )
        .to(
          mobNavRef.current,
          {
            opacity: 1,
            duration: 0.1,
            pointerEvents: "all",
          },
          "-=0.2"
        )
        .to(
          navItemsRef.current,
          {
            opacity: 1,
            duration: 0.2,
            stagger: 0.02,
            ease: "power1.out",
          },
          "-=0.1"
        )
        .to(
          topBarRef.current,
          {
            rotation: 45,
            y: 5,
            duration: 0.2,
            ease: "power1.inOut",
          },
          0
        )
        .to(
          bottomBarRef.current,
          {
            rotation: -45,
            y: -5,
            duration: 0.2,
            ease: "power1.inOut",
          },
          0
        );
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape" && isOpen) {
        toggleMenu();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen]);

  return (
    <Box>
      <Container sx={{ position: "relative", pb: 4, pt: 6 }}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography variant="h6">Kevin Smith Design</Typography>
          </Box>
          <Box>
            {!isWhitelabelRoute && (
              <>
                <BackgroundOverlay ref={bgRef} />
                <MorphingBackground ref={morphRef} />
                <MobileNavGroup ref={mobNavRef}>
                  {menuItems.map((item, index) => (
                    <StyledLink
                      key={item.path}
                      to={item.path}
                      ref={(el) => (navItemsRef.current[index] = el)}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </StyledLink>
                  ))}
                </MobileNavGroup>

                <Box
                  sx={{
                    mt: 2,
                    width: "48px",
                    height: "48px",
                    background: "#3B75FE",
                    borderRadius: "50%",
                    position: "absolute",
                    right: "16px",
                    top: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: darken("#3B75FE", 0.1),
                    },
                  }}
                  onClick={toggleMenu}
                >
                  <HamburgerMenu>
                    <Box className="bar top-bar" ref={topBarRef}></Box>
                    <Box className="bar bottom-bar" ref={bottomBarRef}></Box>
                  </HamburgerMenu>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
