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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <svg
                // width="16"
                width="36"
                // height="18"
                // height="60"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.817 6.15225L1.881 6.74825L5.377 8.72129L5.79901 8.96029C6.44201 9.31829 7.16701 9.50129 7.89201 9.50129C8.60701 9.50129 9.33201 9.31829 9.97401 8.96029L13.893 6.74825L14.957 6.15225C15.471 5.86825 15.783 5.33625 15.783 4.74825C15.783 4.16125 15.471 3.62925 14.957 3.34425L9.97401 0.53625C8.69001 -0.17875 7.09301 -0.17875 5.79901 0.53625L0.817 3.34425C0.303 3.62925 0 4.16125 0 4.74825C0 5.33625 0.303 5.86825 0.817 6.15225Z"
                  fill="#3777F5"
                  fill-opacity="0.9"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.817 10.1522L1.881 10.7482L5.377 12.7213L5.79901 12.9603C6.44201 13.3183 7.16701 13.5013 7.89201 13.5013C8.60701 13.5013 9.33201 13.3183 9.97401 12.9603L13.893 10.7482L14.957 10.1522C15.471 9.86825 15.783 9.33625 15.783 8.74825C15.783 8.16125 15.471 7.62925 14.957 7.34425L9.97401 4.53625C8.69001 3.82125 7.09301 3.82125 5.79901 4.53625L0.817 7.34425C0.303 7.62925 0 8.16125 0 8.74825C0 9.33625 0.303 9.86825 0.817 10.1522Z"
                  fill="#3777F5"
                  fill-opacity="0.8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.817 14.1522L1.881 14.7482L5.377 16.7213L5.79901 16.9603C6.44201 17.3183 7.16701 17.5013 7.89201 17.5013C8.60701 17.5013 9.33201 17.3183 9.97401 16.9603L13.893 14.7482L14.957 14.1522C15.471 13.8682 15.783 13.3363 15.783 12.7483C15.783 12.1612 15.471 11.6292 14.957 11.3442L9.97401 8.53625C8.69001 7.82125 7.09301 7.82125 5.79901 8.53625L0.817 11.3442C0.303 11.6292 0 12.1612 0 12.7483C0 13.3363 0.303 13.8682 0.817 14.1522Z"
                  fill="#4A84F6"
                  fill-opacity="0.7"
                />
              </svg>
              <Typography
                fontSize="18px"
                fontWeight="bold"
                ml={1.5}
                color="#333"
              >
                kevinsmith<span style={{ color: "#3B75FE" }}>.design</span>
              </Typography>
            </Box>
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
