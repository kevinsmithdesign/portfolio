import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, Box } from "@mui/material";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const buttonRef = useRef(null);

  // Handle transition state
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Match the duration of the hamburger animation
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Custom ripple effect
  const createRipple = (event) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.5; // Make ripple larger

    // Get click position relative to button
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Create new ripple with unique ID
    const ripple = {
      id: String(Date.now()),
      size,
      x,
      y,
      // More prominent ripple color based on menu state
      color: isOpen
        ? "rgba(0, 0, 0, 0.35)" // When closing (darker for better visibility)
        : "rgba(255, 255, 255, 0.4)", // When opening
    };

    // Add new ripple to state
    setRipples([...ripples, ripple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((r) => r.id !== ripple.id)
      );
    }, 600);
  };

  const toggleMenu = (event) => {
    setIsTransitioning(true);
    createRipple(event);
    setIsOpen(!isOpen);
  };

  // Container animation
  const containerVariants = {
    initial: {
      height: 0,
    },
    animate: {
      height: "100vh",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      height: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.4,
      },
    },
  };

  // Hamburger button animations
  const topLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 8 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -8 },
  };

  // Stagger timing for menu items
  const staggerDelay = 0.1;

  const menuItems = ["Home", "Work", "About", "Contact"];

  // Determine button background color based on state
  const getButtonBackground = () => {
    if (isTransitioning) {
      // During transition, use a gradient to smoothly change colors
      return isOpen
        ? "rgba(255, 255, 255, 0.2)" // Transitioning to open
        : "rgba(0, 0, 0, 0.05)"; // Transitioning to closed
    }

    // Not transitioning - use solid colors
    return isOpen
      ? "rgba(0, 0, 0, 0)" // When open (transparent)
      : "rgba(255, 255, 255, 0.8)"; // When closed (subtle white background)
  };

  // Determine hamburger line color based on state
  const getLineColor = () => {
    if (isTransitioning) {
      // During transition, use a neutral color
      return isOpen ? "#ddd" : "#333";
    }

    // Not transitioning - use distinct colors
    return isOpen ? "#fff" : "#000";
  };

  return (
    <div className="App">
      {/* Custom Hamburger Menu Button with Ripple Effect */}
      <motion.div
        ref={buttonRef}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: 0,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 1100,
          padding: "10px",
          overflow: "hidden", // Contains ripple inside the button
          background: getButtonBackground(),
          transition: "background 0.3s ease",
        }}
        onClick={toggleMenu}
      >
        {/* Ripple elements */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            style={{
              position: "absolute",
              top: ripple.y - ripple.size / 2,
              left: ripple.x - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              borderRadius: "50%",
              backgroundColor: ripple.color,
              transform: "scale(0)",
              animation: "ripple 0.6s linear",
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Hamburger lines */}
        <motion.div
          variants={topLineVariants}
          transition={{ duration: 0.3 }}
          style={{
            width: "24px",
            height: "3px",
            backgroundColor: getLineColor(),
            marginBottom: "5px",
            transformOrigin: "center",
            borderRadius: "2px",
            transition: "background-color 0.3s ease",
          }}
        />
        <motion.div
          variants={middleLineVariants}
          transition={{ duration: 0.3 }}
          style={{
            width: "24px",
            height: "3px",
            backgroundColor: getLineColor(),
            marginBottom: "5px",
            transformOrigin: "center",
            borderRadius: "2px",
            transition: "background-color 0.3s ease",
          }}
        />
        <motion.div
          variants={bottomLineVariants}
          transition={{ duration: 0.3 }}
          style={{
            width: "24px",
            height: "3px",
            backgroundColor: getLineColor(),
            transformOrigin: "center",
            borderRadius: "2px",
            transition: "background-color 0.3s ease",
          }}
        />
      </motion.div>

      {/* CSS for ripple animation */}
      <style>
        {`
          @keyframes ripple {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}
      </style>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu-container"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={containerVariants}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              background: "#101010",
              zIndex: 1000,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Menu Items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              {menuItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: 0.6 + i * staggerDelay,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    transition: {
                      duration: 0.2,
                      delay: 0.2 - i * staggerDelay,
                    },
                  }}
                  style={{
                    margin: "0.5rem 0",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    color="#fff"
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      letterSpacing: "1px",
                      "&:hover": {
                        color: "#f0f0f0",
                        transform: "translateY(-5px)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
