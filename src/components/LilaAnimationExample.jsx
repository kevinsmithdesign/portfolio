// import React, { useRef, useEffect, useState } from "react";
// import { Box, Typography, Stack, Card } from "@mui/material";
// import { gsap } from "gsap";

// const TypeWriter = ({ text, onComplete }) => {
//   const [displayedWords, setDisplayedWords] = useState([]);
//   const words = useRef(text.split(" "));
//   const wordIndex = useRef(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (wordIndex.current < words.current.length) {
//       const timer = setTimeout(() => {
//         setDisplayedWords((prev) => [
//           ...prev,
//           {
//             text: words.current[wordIndex.current],
//             id: wordIndex.current,
//           },
//         ]);
//         wordIndex.current++;
//       }, 150);

//       return () => clearTimeout(timer);
//     } else if (onComplete) {
//       setTimeout(onComplete, 1000);
//     }
//   }, [displayedWords, onComplete, text]);

//   useEffect(() => {
//     if (displayedWords.length > 0) {
//       const lastWord = containerRef.current?.lastElementChild;
//       if (lastWord) {
//         gsap.fromTo(lastWord, { opacity: 0 }, { opacity: 1, duration: 0.2 });
//       }
//     }
//   }, [displayedWords.length]);

//   return (
//     <span ref={containerRef}>
//       {displayedWords.map((word, index) => (
//         <span key={word.id} style={{ opacity: 0 }}>
//           {word.text}
//           {index < displayedWords.length - 1 ? " " : ""}
//         </span>
//       ))}
//     </span>
//   );
// };

// const LilaAnimationExample = () => {
//   const [showMessage1, setShowMessage1] = useState(false);
//   const [showPlaceholderText, setShowPlaceholderText] = useState(false);
//   const message1Ref = useRef(null);
//   const message2Ref = useRef(null);
//   const userText = "How can I help my father with his mobility issues?";

//   useEffect(() => {
//     const tl = gsap.timeline();

//     // Hide second message initially
//     gsap.set(message2Ref.current, { autoAlpha: 0 });

//     // Animate first message appearance and start typing
//     tl.to(message1Ref.current, {
//       autoAlpha: 1,
//       duration: 0,
//       onComplete: () => setShowMessage1(true),
//     });

//     return () => tl.kill();
//   }, []);

//   const handleFirstMessageComplete = () => {
//     setShowPlaceholderText(true);
//   };

//   const handlePlaceholderComplete = () => {
//     gsap.to(message2Ref.current, {
//       autoAlpha: 1,
//       duration: 0.4,
//       ease: "power2.inOut",
//     });
//   };

//   return (
//     <Box sx={{ display: "flex", height: "530px" }}>
//       <Box
//         sx={{
//           background: "#222",
//           maxWidth: "300px",
//           width: "100%",
//           p: 3,
//           borderRadius: 3,
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Box sx={{ mb: 2 }}>
//           <img
//             src="https://assets.codepen.io/2392702/Group+241591.svg"
//             alt="Lila Logo"
//             style={{
//               height: "28px",
//               width: "auto",
//             }}
//           />
//         </Box>

//         <Box
//           sx={{
//             mb: 3,
//             px: 2,
//             py: 1.2,
//             background: "#333",
//             borderRadius: "8px",
//             color: "#fff",
//             fontSize: "12px",
//             border: "1px solid #555",
//           }}
//         >
//           Search
//         </Box>

//         <Typography color="white" fontWeight="bold" mb={1}>
//           Recent Conversations
//         </Typography>
//         {[
//           "How can I support my father",
//           "What are some tips for",
//           "Can you help me navigate",
//           "Advice on coordinating",
//           "Top resources for balance",
//           "Top resources for balance",
//         ].map((text, index) => (
//           <Box
//             key={index}
//             sx={{
//               px: 3,
//               py: 2,
//               background: "#333",
//               borderRadius: "8px",
//               color: "#fff",
//               mb: 0.8,
//             }}
//           >
//             <Typography sx={{ fontSize: "12px" }}>{text}</Typography>
//           </Box>
//         ))}
//       </Box>

//       <Box
//         sx={{
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           position: "relative",
//         }}
//       >
//         <Box
//           sx={{
//             flex: 1,
//             p: 8,
//             overflowY: "auto",
//           }}
//         >
//           {/* Bot Message */}
//           <Stack
//             flexDirection="row"
//             mb={2}
//             ref={message1Ref}
//             sx={{ opacity: 0, width: "100%", justifyContent: "flex-start" }}
//           >
//             <Stack mr={2}>
//               <Stack
//                 sx={{
//                   height: "30px",
//                   width: "30px",
//                   borderRadius: "100%",
//                   background: "#1A56DB",
//                 }}
//               />
//             </Stack>
//             <Stack sx={{ maxWidth: "70%" }}>
//               <Card
//                 sx={{
//                   boxShadow: "none",
//                   background: "#1A56DB",
//                   borderRadius: "6px 10px 10px 10px",
//                   padding: "12px",
//                   color: "white",
//                 }}
//               >
//                 <Typography variant="body2">
//                   {showMessage1 && (
//                     <TypeWriter
//                       text="Hi! I'm Lila, your caregiving companion. How can I support you today? Whether it's managing care plans, navigating emotional challenges, or finding trusted resources, I'm here to help."
//                       onComplete={handleFirstMessageComplete}
//                     />
//                   )}
//                 </Typography>
//               </Card>
//             </Stack>
//           </Stack>

//           {/* User Message */}
//           <Stack
//             flexDirection="row"
//             mb={2}
//             ref={message2Ref}
//             sx={{ opacity: 0, width: "100%", justifyContent: "flex-end" }}
//           >
//             <Stack sx={{ maxWidth: "70%" }}>
//               <Card
//                 sx={{
//                   boxShadow: "none",
//                   background: "#DFE4F3",
//                   borderRadius: "10px 6px 10px 10px",
//                   padding: "16px",
//                   color: "#111",
//                 }}
//               >
//                 <Typography variant="body2">{userText}</Typography>
//               </Card>
//             </Stack>
//             <Stack ml={2}>
//               <Stack
//                 sx={{
//                   height: "30px",
//                   width: "30px",
//                   borderRadius: "100%",
//                   background: "#DFE4F3",
//                 }}
//               />
//             </Stack>
//           </Stack>
//         </Box>
//         <Box
//           sx={{
//             background: "#333",
//             fontSize: "12px",
//             height: "40px",
//             lineHeight: "40px",
//             borderRadius: "8px",
//             marginX: 8,
//             px: 2,
//             color: "#fff",
//             border: "1px solid #555",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               fontSize: "12px",
//             }}
//           >
//             {!showPlaceholderText ? (
//               <span>Enter Message</span>
//             ) : (
//               <TypeWriter
//                 text={userText}
//                 onComplete={handlePlaceholderComplete}
//               />
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default LilaAnimationExample;

import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Stack, Card } from "@mui/material";
import { gsap } from "gsap";

const TypeWriter = ({ text, onComplete }) => {
  const [displayedWords, setDisplayedWords] = useState([]);
  const words = useRef(text.split(" "));
  const wordIndex = useRef(0);
  const containerRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    wordIndex.current = 0;
    setDisplayedWords([]);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    if (!isComplete && wordIndex.current < words.current.length) {
      const timer = setTimeout(() => {
        setDisplayedWords((prev) => [
          ...prev,
          {
            text: words.current[wordIndex.current],
            id: wordIndex.current,
          },
        ]);
        wordIndex.current++;

        if (wordIndex.current === words.current.length) {
          setIsComplete(true);
          if (onComplete) {
            setTimeout(onComplete, 500);
          }
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [displayedWords, onComplete, isComplete, text]);

  return (
    <span ref={containerRef}>
      {displayedWords.map((word, index) => (
        <span key={word.id}>
          {word.text}
          {index < displayedWords.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
};

const SkeletonLoader = () => (
  <Stack spacing={1} width="100%">
    <Box
      sx={{
        height: "12px",
        width: "90%",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "4px",
        animation: "pulse 1.5s infinite",
      }}
    />
    <Box
      sx={{
        height: "12px",
        width: "75%",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "4px",
        animation: "pulse 1.5s infinite",
        animationDelay: "0.2s",
      }}
    />
    <Box
      sx={{
        height: "12px",
        width: "60%",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "4px",
        animation: "pulse 1.5s infinite",
        animationDelay: "0.4s",
      }}
    />
    <style>
      {`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}
    </style>
  </Stack>
);

const MessageCard = ({ title, content, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: 0.2 * index + 1.5,
      }
    );
  }, [index]);

  return (
    <Box ref={cardRef} sx={{ mb: 3, opacity: 0 }}>
      <Typography
        sx={{
          color: "white",
          fontWeight: "500",
          fontSize: "16px",
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          p: 3,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

const BotResponse = () => {
  const [showCards, setShowCards] = useState(false);
  const [showConclusion, setShowConclusion] = useState(false);
  const sections = [
    {
      title: "Simple Exercises",
      content:
        "Gentle stretches, such as ankle rotations and seated leg lifts, can help improve circulation and strength.",
    },
    {
      title: "Assistive Devices",
      content:
        "Have you considered a rollator walker or grab bars for better stability?",
    },
    {
      title: "Home Modifications",
      content:
        "Adding non-slip mats or railings to high-risk areas can help reduce falls.",
    },
  ];

  const handleIntroComplete = () => {
    setShowCards(true);
    setTimeout(() => setShowConclusion(true), 2500);
  };

  return (
    <Box>
      <Typography
        sx={{
          color: "white",
          fontSize: "14px",
          mb: 3,
          lineHeight: 1.5,
        }}
      >
        <TypeWriter
          text="Supporting your father's mobility is a great way to improve his quality of life. Here are a few tailored suggestions:"
          onComplete={handleIntroComplete}
        />
      </Typography>

      {showCards &&
        sections.map((section, index) => (
          <MessageCard
            key={index}
            title={section.title}
            content={section.content}
            index={index}
          />
        ))}

      {showConclusion && (
        <Typography
          sx={{
            color: "white",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          <TypeWriter text="Would you like me to guide you through any of these in detail, or provide videos for the exercises?" />
        </Typography>
      )}
    </Box>
  );
};

const LilaAnimationExample = () => {
  const [showMessage1, setShowMessage1] = useState(false);
  const [showPlaceholderText, setShowPlaceholderText] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);
  const message3Ref = useRef(null);

  const userText = "How can I help my father with his mobility issues?";

  useEffect(() => {
    gsap.set([message2Ref.current, message3Ref.current], { autoAlpha: 0 });
    gsap.to(message1Ref.current, {
      autoAlpha: 1,
      duration: 0,
      onComplete: () => setShowMessage1(true),
    });
  }, []);

  const handleFirstMessageComplete = () => {
    if (!animationComplete) {
      setShowPlaceholderText(true);
    }
  };

  const handlePlaceholderComplete = () => {
    if (!animationComplete) {
      gsap.to(message2Ref.current, {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setTimeout(() => {
            gsap.to(message3Ref.current, {
              autoAlpha: 1,
              duration: 0.4,
              ease: "power2.inOut",
              onComplete: () => {
                setShowLoading(true);
                setTimeout(() => {
                  setShowLoading(false);
                  setShowMessage3(true);
                  setAnimationComplete(true);
                }, 2000);
              },
            });
          }, 1000);
        },
      });
    }
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

          <Stack
            flexDirection="row"
            mb={2}
            ref={message3Ref}
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
            <Stack sx={{ maxWidth: "80%" }}>
              <Card
                sx={{
                  boxShadow: "none",
                  background: "#1A56DB",
                  borderRadius: "6px 10px 10px 10px",
                  padding: "16px",
                }}
              >
                {showLoading ? (
                  <SkeletonLoader />
                ) : showMessage3 ? (
                  <BotResponse />
                ) : null}
              </Card>
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
