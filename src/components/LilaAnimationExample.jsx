import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Stack, Card } from "@mui/material";
import { gsap } from "gsap";

const TypeWriter = ({ text, onComplete }) => {
  const [displayedWords, setDisplayedWords] = useState([]);
  const words = useRef(text.split(" "));
  const wordIndex = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (wordIndex.current < words.current.length) {
      const timer = setTimeout(() => {
        setDisplayedWords((prev) => [
          ...prev,
          {
            text: words.current[wordIndex.current],
            id: wordIndex.current,
          },
        ]);
        wordIndex.current++;
      }, 150);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      setTimeout(onComplete, 1000);
    }
  }, [displayedWords, onComplete, text]);

  useEffect(() => {
    if (displayedWords.length > 0) {
      const lastWord = containerRef.current?.lastElementChild;
      if (lastWord) {
        gsap.fromTo(lastWord, { opacity: 0 }, { opacity: 1, duration: 0.2 });
      }
    }
  }, [displayedWords.length]);

  return (
    <span ref={containerRef}>
      {displayedWords.map((word, index) => (
        <span key={word.id} style={{ opacity: 0 }}>
          {word.text}
          {index < displayedWords.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
};

const LilaAnimationExample = () => {
  const [showMessage1, setShowMessage1] = useState(false);
  const [showPlaceholderText, setShowPlaceholderText] = useState(false);
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);
  const userText = "How can I help my father with his mobility issues?";

  useEffect(() => {
    const tl = gsap.timeline();

    // Hide second message initially
    gsap.set(message2Ref.current, { autoAlpha: 0 });

    // Animate first message appearance and start typing
    tl.to(message1Ref.current, {
      autoAlpha: 1,
      duration: 0,
      onComplete: () => setShowMessage1(true),
    });

    return () => tl.kill();
  }, []);

  const handleFirstMessageComplete = () => {
    setShowPlaceholderText(true);
  };

  const handlePlaceholderComplete = () => {
    gsap.to(message2Ref.current, {
      autoAlpha: 1,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <Box sx={{ display: "flex", height: "530px" }}>
      <Box
        sx={{
          background: "#222",
          maxWidth: "300px",
          width: "100%",
          p: 3,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img
            src="https://assets.codepen.io/2392702/Group+241591.svg"
            alt="Lila Logo"
            style={{
              height: "28px",
              width: "auto",
            }}
          />
        </Box>

        <Box
          sx={{
            mb: 3,
            px: 2,
            py: 1.2,
            background: "#333",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "12px",
            border: "1px solid #555",
          }}
        >
          Search
        </Box>

        <Typography color="white" fontWeight="bold" mb={1}>
          Recent Conversations
        </Typography>
        {[
          "How can I support my father",
          "What are some tips for",
          "Can you help me navigate",
          "Advice on coordinating",
          "Top resources for balance",
          "Top resources for balance",
        ].map((text, index) => (
          <Box
            key={index}
            sx={{
              px: 3,
              py: 2,
              background: "#333",
              borderRadius: "8px",
              color: "#fff",
              mb: 0.8,
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>{text}</Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: 8,
            overflowY: "auto",
          }}
        >
          {/* Bot Message */}
          <Stack
            flexDirection="row"
            mb={2}
            ref={message1Ref}
            sx={{ opacity: 0, width: "100%", justifyContent: "flex-start" }}
          >
            <Stack mr={2}>
              <Stack
                sx={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "100%",
                  background: "#1A56DB",
                }}
              />
            </Stack>
            <Stack sx={{ maxWidth: "70%" }}>
              <Card
                sx={{
                  boxShadow: "none",
                  background: "#1A56DB",
                  borderRadius: "6px 10px 10px 10px",
                  padding: "12px",
                  color: "white",
                }}
              >
                <Typography variant="body2">
                  {showMessage1 && (
                    <TypeWriter
                      text="Hi! I'm Lila, your caregiving companion. How can I support you today? Whether it's managing care plans, navigating emotional challenges, or finding trusted resources, I'm here to help."
                      onComplete={handleFirstMessageComplete}
                    />
                  )}
                </Typography>
              </Card>
            </Stack>
          </Stack>

          {/* User Message */}
          <Stack
            flexDirection="row"
            mb={2}
            ref={message2Ref}
            sx={{ opacity: 0, width: "100%", justifyContent: "flex-end" }}
          >
            <Stack sx={{ maxWidth: "70%" }}>
              <Card
                sx={{
                  boxShadow: "none",
                  background: "#DFE4F3",
                  borderRadius: "10px 6px 10px 10px",
                  padding: "16px",
                  color: "#111",
                }}
              >
                <Typography variant="body2">{userText}</Typography>
              </Card>
            </Stack>
            <Stack ml={2}>
              <Stack
                sx={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "100%",
                  background: "#DFE4F3",
                }}
              />
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            background: "#333",
            fontSize: "12px",
            height: "40px",
            lineHeight: "40px",
            borderRadius: "8px",
            marginX: 8,
            px: 2,
            color: "#fff",
            border: "1px solid #555",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
            }}
          >
            {!showPlaceholderText ? (
              <span>Enter Message</span>
            ) : (
              <TypeWriter
                text={userText}
                onComplete={handlePlaceholderComplete}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LilaAnimationExample;
