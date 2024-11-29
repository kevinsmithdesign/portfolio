// import React from "react";
// import { Box, Typography, Stack, Card } from "@mui/material";

// const LilaAnimationExample = () => {
//   return (
//     <>
//       <Box sx={{ display: "flex" }}>
//         <Box
//           sx={{
//             background: "#222",
//             maxWidth: "300px",
//             width: "100%",
//             p: 3,
//             borderRadius: 3,
//           }}
//         >
//           <Box sx={{ mb: 2 }}>
//             <img
//               src="https://assets.codepen.io/2392702/Group+241591.svg"
//               alt="Lila Logo"
//               style={{
//                 height: "36px",
//                 width: "auto",
//               }}
//             />
//           </Box>

//           <Box
//             sx={{
//               mb: 3,
//               px: 3,
//               py: 1.5,
//               background: "#333",
//               borderRadius: "8px",
//               color: "#fff",
//             }}
//           >
//             Search
//           </Box>

//           <Typography color="white" fontWeight="bold" mb={1}>
//             Recent Conversations
//           </Typography>
//           <Box
//             sx={{
//               px: 3,
//               py: 2,
//               background: "#333",
//               borderRadius: "8px",
//               color: "#fff",
//               mb: 0.8,
//             }}
//           >
//             <Typography sx={{ fontSize: "12px" }}>
//               How can I support my father
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               px: 3,
//               py: 2,
//               background: "#333",
//               borderRadius: "8px",
//               color: "#fff",
//               mb: 0.8,
//             }}
//           >
//             <Typography sx={{ fontSize: "12px" }}>
//               What are some tips for
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               px: 3,
//               py: 2,
//               background: "#333",
//               borderRadius: "8px",
//               color: "#fff",
//               mb: 0.8,
//             }}
//           >
//             <Typography sx={{ fontSize: "12px" }}>
//               Can you help me navigate
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               px: 3,
//               py: 2,
//               background: "#333",
//               borderRadius: "8px",
//               color: "#fff",
//               mb: 0.8,
//             }}
//           >
//             <Typography sx={{ fontSize: "12px" }}>
//               Advice on coordinating
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               px: 3,
//               py: 2,
//               background: "#333",
//               borderRadius: "8px",
//               color: "#fff",
//               mb: 0.8,
//             }}
//           >
//             <Typography sx={{ fontSize: "12px" }}>
//               Top resources for balance
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               px: 3,
//               py: 2,
//               background: "#333",
//               borderRadius: "8px",
//               color: "#fff",
//               mb: 0.8,
//             }}
//           >
//             <Typography sx={{ fontSize: "12px" }}>
//               Top resources for balance
//             </Typography>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             // background: "orange",
//             p: 8,
//             height: "548px", // Fixed height
//             flex: 1,
//             position: "relative",
//             overflow: "hidden", // Hide overflow on parent
//           }}
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               padding: 8,
//               overflowY: "auto", // Enable vertical scrolling
//             }}
//           >
//             <Stack flexDirection="row" mb={2}>
//               <Stack mr={2}>
//                 <Stack
//                   sx={{
//                     height: "40px",
//                     width: "40px",
//                     borderRadius: "100%",
//                     background: "#1A56DB",
//                   }}
//                 />
//               </Stack>
//               <Stack>
//                 <Card
//                   sx={{
//                     boxShadow: "none",
//                     background: "#1A56DB",
//                     borderRadius: "0 16px 16px 16px",
//                     padding: "16px",
//                     color: "white",
//                   }}
//                 >
//                   <Typography variant="body1">
//                     Hi! I'm Lila, your caregiving companion. How can I support
//                     you today? Whether it's managing care plans, navigating
//                     emotional challenges, or finding trusted resources, I'm here
//                     to help.
//                   </Typography>
//                 </Card>
//               </Stack>
//             </Stack>
//             {/* Bubble One Ends */}
//             <Stack flexDirection="row" mb={2}>
//               <Stack>
//                 <Card
//                   sx={{
//                     boxShadow: "none",
//                     background: "#DFE4F3",
//                     borderRadius: "16px 0px 16px 16px",
//                     padding: "16px",
//                     color: "#111",
//                   }}
//                 >
//                   <Typography variant="body1">
//                     How can I help my father with his mobility issues?
//                   </Typography>
//                 </Card>
//               </Stack>
//               <Stack ml={2}>
//                 <Stack
//                   sx={{
//                     height: "40px",
//                     width: "40px",
//                     borderRadius: "100%",
//                     background: "#DFE4F3",
//                   }}
//                 />
//               </Stack>
//             </Stack>
//             {/* Bubble Two Ends */}
//             <Stack flexDirection="row" mb={2}>
//               <Stack mr={2}>
//                 <Stack
//                   sx={{
//                     height: "40px",
//                     width: "40px",
//                     borderRadius: "100%",
//                     background: "#1A56DB",
//                   }}
//                 />
//               </Stack>
//               <Stack>
//                 <Card
//                   sx={{
//                     boxShadow: "none",
//                     background: "#1A56DB",
//                     borderRadius: "0 16px 16px 16px",
//                     padding: "16px",
//                     color: "white",
//                   }}
//                 >
//                   <Typography variant="body1" mb={1}>
//                     Supporting your father's mobility is a great way to improve
//                     his quality of life. Here are a few suggestions:
//                   </Typography>
//                   <Box
//                     sx={{
//                       p: 2,
//                       border: "1px solid white",
//                       borderRadius: 2,
//                       mb: 1,
//                     }}
//                   >
//                     <Typography variant="body1" fontWeight="bold" mb={0.5}>
//                       Simple Exercises
//                     </Typography>
//                     <Typography>
//                       Gentle stretches, such as ankle rotations and seated leg
//                       lifts, can help improve circulation and strength.
//                     </Typography>
//                   </Box>
//                   <Box
//                     sx={{
//                       p: 2,
//                       border: "1px solid white",
//                       borderRadius: 2,
//                       mb: 1,
//                     }}
//                   >
//                     <Typography sx={{ fontWeight: "bold", mb: 0.5 }}>
//                       Assistive Devices
//                     </Typography>{" "}
//                     Have you considered a rollator walker or grab bars for
//                     better stability?{" "}
//                   </Box>
//                   <Box
//                     sx={{
//                       p: 2,
//                       border: "1px solid white",
//                       borderRadius: 2,
//                       mb: 1,
//                     }}
//                   >
//                     <Typography fontWeight="bold" mb={0.5}>
//                       Home Modifications
//                     </Typography>{" "}
//                     Adding non-slip mats or railings to high-risk areas can help
//                     reduce falls.{" "}
//                   </Box>
//                   <Typography>
//                     Would you like me to guide you through any of these in
//                     detail, or provide videos for the exercises?
//                   </Typography>
//                 </Card>
//               </Stack>
//             </Stack>
//             {/*  Bubble Three Ends */}
//             <Stack flexDirection="row" mb={2}>
//               <Stack>
//                 <Card
//                   sx={{
//                     boxShadow: "none",
//                     background: "#DFE4F3",
//                     borderRadius: "16px 0px 16px 16px",
//                     padding: "16px",
//                     color: "#111",
//                   }}
//                 >
//                   <Typography variant="body1">
//                     That sounds helpful. Can you recommend some specific
//                     exercises or resources I can look into?
//                   </Typography>
//                 </Card>
//               </Stack>
//               <Stack ml={2}>
//                 <Stack
//                   sx={{
//                     height: "40px",
//                     width: "40px",
//                     borderRadius: "100%",
//                     background: "#DFE4F3",
//                   }}
//                 />
//               </Stack>
//             </Stack>
//             {/* */}
//             <Stack flexDirection="row" mb={2}>
//               <Stack mr={2}>
//                 <Stack
//                   sx={{
//                     height: "40px",
//                     width: "40px",
//                     borderRadius: "100%",
//                     background: "#1A56DB",
//                   }}
//                 />
//               </Stack>
//               <Stack>
//                 <Card
//                   sx={{
//                     boxShadow: "none",
//                     background: "#1A56DB",
//                     borderRadius: "0 16px 16px 16px",
//                     padding: "16px",
//                     color: "white",
//                   }}
//                 >
//                   <Typography variant="body1" mb={1}>
//                     Absolutely! Here’s a starting point:
//                   </Typography>
//                   <Typography fontWeight="bold" mb={0.5}>
//                     Exercises
//                   </Typography>
//                   <Box
//                     sx={{
//                       p: 2,
//                       border: "1px solid white",
//                       borderRadius: 2,
//                       mb: 1,
//                     }}
//                   >
//                     <Typography variant="body1" fontWeight="bold" mb={0.5}>
//                       Seated Marching:
//                     </Typography>
//                     <Typography>
//                       Helps with leg strength and circulation. Sit in a sturdy
//                       chair and lift one knee at a time as if marching.
//                     </Typography>
//                   </Box>
//                   <Box
//                     sx={{
//                       p: 2,
//                       border: "1px solid white",
//                       borderRadius: 2,
//                       mb: 1,
//                     }}
//                   >
//                     <Typography sx={{ fontWeight: "bold", mb: 0.5 }}>
//                       Heel-to-Toe Walk
//                     </Typography>{" "}
//                     Improves balance. Walk in a straight line, placing one foot
//                     directly in front of the other.{" "}
//                   </Box>
//                   <Typography
//                     fontWeight="bold"
//                     mb={0.5}
//                     sx={{ textDecoration: "underlined" }}
//                   >
//                     Resources
//                   </Typography>
//                   <Typography>Safe Exercise for Seniors Guide (PDF)</Typography>
//                   <Typography>
//                     A video tutorial: 5 Exercises for Seniors to Boost Mobility.
//                   </Typography>
//                 </Card>
//               </Stack>
//             </Stack>
//           </Box>
//         </Box>
//       </Box>
//     </>
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
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);

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
    const userMessage = message2Ref.current;
    gsap.timeline().to(userMessage, {
      autoAlpha: 1,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          background: "#222",
          maxWidth: "300px",
          width: "100%",
          p: 3,
          borderRadius: 3,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img
            src="https://assets.codepen.io/2392702/Group+241591.svg"
            alt="Lila Logo"
            style={{
              height: "36px",
              width: "auto",
            }}
          />
        </Box>

        <Box
          sx={{
            mb: 3,
            px: 3,
            py: 1.5,
            background: "#333",
            borderRadius: "8px",
            color: "#fff",
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
          p: 8,
          height: "548px",
          flex: 1,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 8,
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
                  height: "40px",
                  width: "40px",
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
                  borderRadius: "0 16px 16px 16px",
                  padding: "16px",
                  color: "white",
                }}
              >
                <Typography variant="body1">
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
                  borderRadius: "16px 0px 16px 16px",
                  padding: "16px",
                  color: "#111",
                }}
              >
                <Typography variant="body1">
                  How can I help my father with his mobility issues?
                </Typography>
              </Card>
            </Stack>
            <Stack ml={2}>
              <Stack
                sx={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "100%",
                  background: "#DFE4F3",
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default LilaAnimationExample;
