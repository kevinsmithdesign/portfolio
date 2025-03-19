import React, { useState, useRef, useEffect } from "react";
import { darken } from "@mui/material/styles";
import { Container, Box, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

// Create a separate component for the hamburger with morphing background
const HamburgerWithMorph = ({ isOpen, toggleMenu }) => {
  const buttonRef = useRef(null);
  const morphCloneRef = useRef(null);
  const topBarRef = useRef(null);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    // Create the clone element for morphing if it doesn't exist
    if (!morphCloneRef.current) {
      const clone = document.createElement("div");
      clone.style.position = "fixed";
      clone.style.background = "#3B75FE";
      clone.style.borderRadius = "50%";
      clone.style.width = "48px";
      clone.style.height = "48px";
      clone.style.zIndex = "10";
      clone.style.pointerEvents = "none";
      clone.style.transform = "scale(1)";
      clone.style.opacity = "0";
      document.body.appendChild(clone);
      morphCloneRef.current = clone;
    }

    return () => {
      // Clean up on unmount - FIXED: Add a safety check
      if (
        morphCloneRef.current &&
        document.body.contains(morphCloneRef.current)
      ) {
        try {
          document.body.removeChild(morphCloneRef.current);
        } catch (error) {
          console.log("Element already removed from DOM");
        }
        morphCloneRef.current = null;
      }
    };
  }, []);

  // Update clone position when button position changes
  useEffect(() => {
    const updateClonePosition = () => {
      if (buttonRef.current && morphCloneRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        morphCloneRef.current.style.left = `${rect.left}px`;
        morphCloneRef.current.style.top = `${rect.top}px`;
      }
    };

    // Initial position
    updateClonePosition();

    // Update on scroll and resize
    window.addEventListener("scroll", updateClonePosition);
    window.addEventListener("resize", updateClonePosition);

    return () => {
      window.removeEventListener("scroll", updateClonePosition);
      window.removeEventListener("resize", updateClonePosition);
    };
  }, []);

  // Handle animation when isOpen changes
  useEffect(() => {
    if (!morphCloneRef.current || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxDistance = Math.sqrt(
      Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2)
    );
    const scale = maxDistance / 48; // The button is 48px wide

    if (isOpen) {
      // Show the clone first
      morphCloneRef.current.style.opacity = "1";

      // Calculate the transform origin
      const originX = 24; // Half the width of the button
      const originY = 24; // Half the height of the button
      morphCloneRef.current.style.transformOrigin = `${originX}px ${originY}px`;

      // Animate expansion
      gsap.to(morphCloneRef.current, {
        scale: scale,
        borderRadius: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      // Animate bars
      if (topBarRef.current && bottomBarRef.current) {
        gsap.to(topBarRef.current, {
          rotation: 45,
          y: 5,
          duration: 0.2,
          ease: "power1.inOut",
        });

        gsap.to(bottomBarRef.current, {
          rotation: -45,
          y: -5,
          duration: 0.2,
          ease: "power1.inOut",
        });
      }
    } else if (morphCloneRef.current.style.opacity === "1") {
      // Only animate if it was previously visible
      gsap.to(morphCloneRef.current, {
        scale: 1,
        borderRadius: "50%",
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          if (morphCloneRef.current) {
            morphCloneRef.current.style.opacity = "0";
          }
        },
      });

      // Animate bars back
      if (topBarRef.current && bottomBarRef.current) {
        gsap.to(topBarRef.current, {
          rotation: 0,
          y: 0,
          duration: 0.2,
          ease: "power1.inOut",
        });

        gsap.to(bottomBarRef.current, {
          rotation: 0,
          y: 0,
          duration: 0.2,
          ease: "power1.inOut",
        });
      }
    }
  }, [isOpen]);

  return (
    <Box
      ref={buttonRef}
      sx={{
        width: "48px",
        height: "48px",
        background: "#3B75FE",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative",
        zIndex: 20,
        "&:hover": {
          backgroundColor: darken("#3B75FE", 0.1),
        },
      }}
      onClick={toggleMenu}
    >
      <Box
        sx={{
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
        }}
      >
        <Box className="bar top-bar" ref={topBarRef}></Box>
        <Box className="bar bottom-bar" ref={bottomBarRef}></Box>
      </Box>
    </Box>
  );
};

// Create a NavigationManager component that handles navigation
const NavigationManager = ({ children }) => {
  const navigate = useNavigate();

  // Create a global navigation function that can delay navigation
  React.useEffect(() => {
    // Add our custom navigation method to window
    window.delayedNavigate = (to, delay = 0) => {
      setTimeout(() => {
        navigate(to);
      }, delay);
    };

    return () => {
      // Clean up
      window.delayedNavigate = null;
    };
  }, [navigate]);

  return children;
};

const Navbar = ({ color }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const mobNavRef = useRef(null);
  const navItemsRef = useRef([]);
  const bgRef = useRef(null);
  const isNavigatingRef = useRef(false);

  const menuItems = [
    { path: "/", label: "Portfolio" },
    { path: "/resume", label: "Resume" },
  ];

  // Set up page-change listener
  useEffect(() => {
    // Reset navigation state when page changes
    isNavigatingRef.current = false;

    // If menu was open, make sure it's visually closed
    // (in case navigation interrupted animation)
    if (isOpen) {
      setIsOpen(false);

      if (bgRef.current) {
        bgRef.current.style.opacity = 0;
      }
      if (mobNavRef.current) {
        mobNavRef.current.style.opacity = 0;
        mobNavRef.current.style.pointerEvents = "none";
      }
      if (navItemsRef.current.length > 0) {
        navItemsRef.current.forEach((item) => {
          if (item) {
            item.style.opacity = 0;
          }
        });
      }
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    const tl = gsap.timeline();

    if (isOpen) {
      // Close animation for nav items and background
      tl.to(navItemsRef.current, {
        opacity: 0,
        duration: 0.15,
        stagger: 0.02,
        ease: "power1.in",
      }).to(
        bgRef.current,
        {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            // Change pointer events after animation completes
            if (mobNavRef.current) {
              mobNavRef.current.style.pointerEvents = "none";
            }
          },
        },
        "-=0.1"
      );
    } else {
      // Open animation for nav items and background
      tl.to(
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
            onStart: () => {
              // Enable pointer events when animation starts
              if (mobNavRef.current) {
                mobNavRef.current.style.pointerEvents = "all";
              }
            },
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
        );
    }

    setIsOpen(!isOpen);
  };

  const handleNavClick = (e, path) => {
    e.preventDefault(); // Prevent default Link behavior

    // If already navigating, do nothing
    if (isNavigatingRef.current) return;

    // If clicking the current page, just toggle the menu
    if (path === location.pathname) {
      toggleMenu();
      return;
    }

    // Set navigating flag
    isNavigatingRef.current = true;

    // First, run the closing animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Navigate after animation completes
        window.delayedNavigate(path);
      },
    });

    // Run close animation
    tl.to(navItemsRef.current, {
      opacity: 0,
      duration: 0.15,
      stagger: 0.02,
      ease: "power1.in",
    }).to(
      bgRef.current,
      {
        opacity: 0,
        duration: 0.3,
      },
      "-=0.1"
    );

    // Update state
    setIsOpen(false);
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
    <NavigationManager>
      <Box
        sx={{
          height: "100px",
          width: "100%",
          overflow: "hidden",
          borderBottom: "none",
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <Container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="600" color={color}>
              Kevin Smith Design
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <HamburgerWithMorph isOpen={isOpen} toggleMenu={toggleMenu} />
          </Box>
        </Container>
      </Box>
      <BackgroundOverlay ref={bgRef} />
      <MobileNavGroup ref={mobNavRef}>
        {menuItems.map((item, index) => (
          <StyledLink
            key={item.path}
            to={item.path}
            ref={(el) => (navItemsRef.current[index] = el)}
            onClick={(e) => handleNavClick(e, item.path)}
          >
            {item.label}
          </StyledLink>
        ))}
      </MobileNavGroup>
    </NavigationManager>
  );
};

export default Navbar;
