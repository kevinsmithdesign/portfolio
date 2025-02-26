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
      // Clean up on unmount
      if (morphCloneRef.current) {
        document.body.removeChild(morphCloneRef.current);
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
    if (!morphCloneRef.current) return;

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
    } else if (morphCloneRef.current.style.opacity === "1") {
      // Only animate if it was previously visible
      gsap.to(morphCloneRef.current, {
        scale: 1,
        borderRadius: "50%",
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          morphCloneRef.current.style.opacity = "0";
        },
      });

      // Animate bars back
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

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const mobNavRef = useRef(null);
  const navItemsRef = useRef([]);
  const bgRef = useRef(null);

  const menuItems = [
    { path: "/", label: "Portfolio" },
    { path: "/resume", label: "Resume" },
  ];

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
    <>
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
            <Typography variant="h6" fontWeight="bold">
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
            onClick={toggleMenu}
          >
            {item.label}
          </StyledLink>
        ))}
      </MobileNavGroup>
    </>
  );
};

export default Navbar;

{
  /*  Animated Nav with broke scroll. Will fix this in the future */
}
// import React, { useState, useRef, useEffect } from "react";
// import { darken } from "@mui/material/styles";
// import { Container, Box, Typography } from "@mui/material";
// import { Link, useLocation } from "react-router-dom";
// import gsap from "gsap";
// import { styled } from "@mui/system";

// const MobileNavGroup = styled(Box)({
//   position: "fixed",
//   left: "50%",
//   top: "50%",
//   transform: "translate(-50%, -50%)",
//   textAlign: "center",
//   opacity: 0,
//   pointerEvents: "none",
//   zIndex: 30,
//   display: "flex",
//   flexDirection: "column",
//   gap: "2rem",
//   "& > *": {
//     transform: "translateY(20px)",
//     opacity: 0,
//   },
// });

// const StyledLink = styled(Link)({
//   textDecoration: "none",
//   cursor: "pointer",
//   position: "relative",
//   display: "inline-block",
//   fontSize: "2rem",
//   fontWeight: 500,
//   background: "linear-gradient(to right, rgba(255,255,255,0.7) 50%, #FFF 50%)",
//   backgroundSize: "200% 100%",
//   backgroundPosition: "right",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   backgroundClip: "text",
//   transition: "background-position 0.3s ease",
//   "&:hover": {
//     backgroundPosition: "left",
//   },
// });

// const BackgroundOverlay = styled(Box)({
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   height: "100vh",
//   background: "#3B75FE",
//   opacity: 0,
//   pointerEvents: "none",
//   zIndex: 5,
// });

// const HamburgerMenu = styled(Box)({
//   position: "relative",
//   height: "14px",
//   width: "18px",
//   zIndex: 30,
//   "& .bar": {
//     width: "18px",
//     height: "4px",
//     borderRadius: "2px",
//     background: "#FFF",
//     position: "absolute",
//     transformOrigin: "center",
//   },
//   "& .top-bar": {
//     top: 0,
//   },
//   "& .bottom-bar": {
//     bottom: 0,
//   },
// });

// const Navbar = () => {
//   const location = useLocation();
//   const isWhitelabelRoute = location.pathname.startsWith("/whitelabel");

//   // Menu state and refs
//   const [isOpen, setIsOpen] = useState(false);
//   const mobNavRef = useRef(null);
//   const topBarRef = useRef(null);
//   const bottomBarRef = useRef(null);
//   const navItemsRef = useRef([]);
//   const bgRef = useRef(null);
//   const hamburgerRef = useRef(null);
//   const morphRef = useRef(null);

//   const menuItems = [
//     { path: "/", label: "Portfolio" },
//     { path: "/resume", label: "Resume" },
//   ];

//   // Function to position the morphing circle at the hamburger button
//   const syncMorphPosition = () => {
//     if (hamburgerRef.current && morphRef.current) {
//       const rect = hamburgerRef.current.getBoundingClientRect();

//       // Set the morphing background to match the hamburger button position
//       morphRef.current.style.top = `${rect.top}px`;
//       morphRef.current.style.right = `${window.innerWidth - rect.right}px`;
//       morphRef.current.style.width = `${rect.width}px`;
//       morphRef.current.style.height = `${rect.height}px`;
//     }
//   };

//   // Initialize and keep morphing background in sync with hamburger
//   useEffect(() => {
//     // Initial sync
//     syncMorphPosition();

//     // Update on scroll and resize
//     window.addEventListener("scroll", syncMorphPosition);
//     window.addEventListener("resize", syncMorphPosition);

//     return () => {
//       window.removeEventListener("scroll", syncMorphPosition);
//       window.removeEventListener("resize", syncMorphPosition);
//     };
//   }, []);

//   const toggleMenu = () => {
//     // Ensure morphing element is properly positioned
//     syncMorphPosition();

//     const tl = gsap.timeline();
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;

//     const maxDistance = Math.sqrt(
//       Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2)
//     );
//     const scale = maxDistance / 40;

//     if (isOpen) {
//       // Close animation - exactly like original
//       tl.to(navItemsRef.current, {
//         opacity: 0,
//         duration: 0.15,
//         stagger: 0.02,
//         ease: "power1.in",
//       })
//         .to(
//           bgRef.current,
//           {
//             opacity: 0,
//             duration: 0.3,
//           },
//           "-=0.1"
//         )
//         .to(
//           morphRef.current,
//           {
//             scale: 1,
//             x: 0,
//             y: 0,
//             borderRadius: "50%",
//             duration: 0.35,
//             ease: "power2.inOut",
//           },
//           "-=0.3"
//         )
//         .to(
//           topBarRef.current,
//           {
//             rotation: 0,
//             y: 0,
//             duration: 0.2,
//             ease: "power1.inOut",
//           },
//           "-=0.2"
//         )
//         .to(
//           bottomBarRef.current,
//           {
//             rotation: 0,
//             y: 0,
//             duration: 0.2,
//             ease: "power1.inOut",
//           },
//           "-=0.2"
//         );
//     } else {
//       // Open animation - exactly like original
//       tl.to(
//         morphRef.current,
//         {
//           scale: scale,
//           borderRadius: 0,
//           x: -windowWidth / 2 + 40,
//           y: -windowHeight / 2 + 40,
//           duration: 0.4,
//           ease: "power2.inOut",
//         },
//         0
//       )
//         .to(
//           bgRef.current,
//           {
//             opacity: 1,
//             duration: 0.3,
//           },
//           0
//         )
//         .to(
//           mobNavRef.current,
//           {
//             opacity: 1,
//             duration: 0.1,
//             pointerEvents: "all",
//           },
//           "-=0.2"
//         )
//         .to(
//           navItemsRef.current,
//           {
//             opacity: 1,
//             duration: 0.2,
//             stagger: 0.02,
//             ease: "power1.out",
//           },
//           "-=0.1"
//         )
//         .to(
//           topBarRef.current,
//           {
//             rotation: 45,
//             y: 5,
//             duration: 0.2,
//             ease: "power1.inOut",
//           },
//           0
//         )
//         .to(
//           bottomBarRef.current,
//           {
//             rotation: -45,
//             y: -5,
//             duration: 0.2,
//             ease: "power1.inOut",
//           },
//           0
//         );
//     }
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === "Escape" && isOpen) {
//         toggleMenu();
//       }
//     };

//     document.addEventListener("keydown", handleKeyPress);
//     return () => {
//       document.removeEventListener("keydown", handleKeyPress);
//     };
//   }, [isOpen]);

//   return (
//     <>
//       <Box
//         sx={{
//           height: "100px",
//           width: "100%",
//           overflow: "hidden",
//           borderBottom: "none",
//           padding: 0,
//           boxSizing: "border-box",
//         }}
//       >
//         <Container
//           sx={{
//             height: "100%",
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <Box sx={{ flexGrow: 1 }}>
//             <Typography variant="h6" fontWeight="bold">
//               Kevin Smith Design
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               width: "100px",
//               height: "100px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-end",
//             }}
//           >
//             <Box
//               ref={hamburgerRef}
//               sx={{
//                 width: "48px",
//                 height: "48px",
//                 background: "#3B75FE",
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 cursor: "pointer",
//                 "&:hover": {
//                   backgroundColor: darken("#3B75FE", 0.1),
//                 },
//               }}
//               onClick={toggleMenu}
//             >
//               <HamburgerMenu>
//                 <Box className="bar top-bar" ref={topBarRef}></Box>
//                 <Box className="bar bottom-bar" ref={bottomBarRef}></Box>
//               </HamburgerMenu>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//       <BackgroundOverlay ref={bgRef} />
//       {/* Morphing background positioned with styles, not a styled component */}
//       <Box
//         ref={morphRef}
//         sx={{
//           position: "fixed",
//           background: "#3B75FE",
//           borderRadius: "50%",
//           transformOrigin: "center",
//           zIndex: 10,
//           pointerEvents: "none",
//         }}
//       />
//       <MobileNavGroup ref={mobNavRef}>
//         {menuItems.map((item, index) => (
//           <StyledLink
//             key={item.path}
//             to={item.path}
//             ref={(el) => (navItemsRef.current[index] = el)}
//             onClick={toggleMenu}
//           >
//             {item.label}
//           </StyledLink>
//         ))}
//       </MobileNavGroup>
//     </>
//   );
// };

// export default Navbar;
