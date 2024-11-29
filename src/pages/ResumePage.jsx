import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  Collapse,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ResumePage = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default the first card as open

  const jobInfo = [
    {
      logo: "https://assets.codepen.io/2392702/BradoLogo.svg",
      companyName: "Brado",
      jobTitle: "UI/UX Designer & Developer",
      date: "2024-Present",
      url: "https://brado.net",
      domain: "Brado.net",
      content:
        "Brado is a Marketing and (LLM) Large Language Model Platform company that focuses on insight-driven and AI-powered conversational engagement platforms helping users navigate the healthcare landscape. Below are some of the projects I’m currently working on:",
      achievements: [
        "Collaborated with insight team to gather data and insights, developing low and high fidelity prototypes for user testing. Achieved 90% success rate in user understanding through iterative refinement based on user feedback.",
        "Designed and developed customizable white-label solutions, enabling users to create unique themes for AI chatbots that generate human-like text in response, resulting in a 32% increase in user engagement.",
        "Established design standards and reusable components within a design system, improving UI consistency and scalability across projects while reducing design-developer handoff errors by 40%.",
        "Facilitated cross-functional collaboration, bridging design and development teams. Aligned stakeholders and translated design concepts into actionable tasks, resulting in a 15% improvement in project delivery time and enhanced team cohesion.",
        "Developed dynamic conversational flows for AI chatbots, enhancing engagement and boosting user retention.",
        "Utilized Figma, MUI, React, and Storybook to design, develop, and iterate on prototypes and UI components, streamlining the development process and ensuring consistency across platforms.",
      ],
    },
    {
      logo: "https://assets.codepen.io/2392702/NewFoldDigital.svg",
      companyName: "NewFold Digital",
      jobTitle: "UX Developer",
      date: "Sep 2018 - Dec 2023",
      url: "https://newfold.com/",
      domain: "Newfold.com",
      content:
        "NewFold Digital specializes in creating digital solutions that enhance user experiences. As a UX Developer, my role focused on improving design systems and creating intuitive interfaces.",
      achievements: [
        "Redesigned core website components, reducing bounce rates by 25% and improving user engagement.",
        "Developed responsive and accessible UI designs, ensuring compliance with WCAG standards.",
        "Collaborated with cross-functional teams to implement A/B testing, leading to a 15% increase in conversion rates.",
        "Streamlined the design-to-development handoff process using tools like Figma and Zeplin, improving project timelines by 20%.",
      ],
    },
    {
      logo: "https://assets.codepen.io/2392702/FanReactLogo_1.svg",
      companyName: "FanReact",
      jobTitle: "Front-End Developer",
      date: "Apr 2017 - Jul 2018",
      url: "https://www.glassdoor.com/Reviews/FanReact-Reviews-E1604563.htm",
      domain: "FanReact",
      content:
        "FanReact is a social platform that connects fans to their favorite teams and communities. My role as a Front-End Developer involved creating interactive features and improving performance.",
      achievements: [
        "Implemented new front-end features using React, increasing site traffic by 18%.",
        "Optimized application performance, reducing load times by 30%.",
        "Designed and developed reusable components, improving scalability and maintainability.",
        "Worked closely with designers to ensure pixel-perfect UI implementation.",
      ],
    },
    {
      logo: "https://assets.codepen.io/2392702/klogo.svg",
      companyName: "Kevin Smith Design",
      date: "Jun 2010 - Jun 2020",
      jobTitle: "UI/UX Designer & Developer",
      content:
        "Kevin Smith Design is a creative agency focusing on innovation and custom solutions. My role emphasized creating unique, user-centered designs and front-end development.",
      achievements: [
        "Designed and developed fully responsive websites for clients, enhancing their online presence.",
        "Created custom animations using Greensock and CSS, resulting in more engaging user experiences.",
        "Developed prototypes in Figma for client approval, reducing feedback loops by 25%.",
        "Collaborated with developers to ensure seamless integration of design assets into production.",
      ],
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        backgroundColor: "#f6f6f6",
        py: 4,
      }}
    >
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          EXPERIENCE
        </Typography>
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid size={{ xs: 12, md: 8 }}>
            {jobInfo.map((job, index) => (
              <Card
                key={index}
                sx={{
                  p: 3,
                  border: "1px solid #eee",
                  borderRadius: 3,
                  boxShadow: "none",
                  mb: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* Logo */}
                  <Box
                    sx={{
                      backgroundImage: `url(${job.logo})`,
                      height: "60px",
                      width: "60px",
                      mr: 2,
                      borderRadius: 1,
                      backgroundSize: "cover",
                    }}
                  ></Box>
                  {/* Company and Job Title */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{ fontSize: "20px", fontWeight: "bold" }}
                      mt={1}
                      mb={0}
                    >
                      {job.companyName}
                    </Typography>
                    <Typography>{job.jobTitle}</Typography>
                    <Typography variant="body3">{job.date}</Typography>
                  </Box>
                  {/* Arrow Icon */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      onClick={() => handleToggle(index)}
                      sx={{
                        transform:
                          openIndex === index
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Box>
                </Box>
                {/* Collapsible Content */}
                <Collapse in={openIndex === index}>
                  <Box sx={{ mt: 3 }}>
                    {/* <Typography>{job.content}</Typography> */}
                    <Typography variant="body1" fontWeight="bold" mb={1}>
                      Company Overview
                    </Typography>
                    <Typography mb={4}>{job.content}</Typography>
                    <Typography variant="body1" fontWeight="bold" mb={1}>
                      Impact Highlights
                    </Typography>
                    <Box mb={3}>
                      <ul>
                        {job.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </Box>
                    <Typography variant="body1" fontWeight="bold" mb={1}>
                      Website
                    </Typography>
                    <a href={job.url} target="_blank">
                      {job.domain}
                    </a>
                  </Box>
                </Collapse>
              </Card>
            ))}
          </Grid>

          {/* Right Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Card
                sx={{
                  p: 3,
                  border: "1px solid #eee",
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                <Typography variant="body1" fontWeight="bold" mb={2}>
                  DESIGN SKILLS
                </Typography>
                <Typography>
                  Design thinking, information architecture, user flows, wire-
                  framing, low-fidelity & high-fidelity prototypes, visual
                  design, interactive design, design systems, usability testing,
                  A/B testing, rapid prototyping
                </Typography>
              </Card>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Card
                sx={{
                  p: 3,
                  border: "1px solid #eee",
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                <Typography variant="body1" fontWeight="bold" mb={2}>
                  DESIGN SOFTWARE
                </Typography>
                <Typography>
                  Figma, Sketch, XD, Illustrator, Photoshop, InDesign, Invision,
                  Miro, Principle, Balsamiq, Framer, Marvel Webflow, Zeplin
                </Typography>
              </Card>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Card
                sx={{
                  p: 3,
                  border: "1px solid #eee",
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                <Typography variant="body1" fontWeight="bold" mb={2}>
                  DEVELOPER SKILLS
                </Typography>
                <Typography>
                  Responsive design, web accessibility, performance
                  optimization, single-page applications, ajax, restful APIs,
                  component architecture, debugging, testing
                </Typography>
              </Card>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Card
                sx={{
                  p: 3,
                  border: "1px solid #eee",
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                <Typography variant="body1" fontWeight="bold" mb={2}>
                  LANGUAGES & TOOLS
                </Typography>
                <Typography>
                  Html, css, scss, javascript, typescript, react, react query,
                  angular, vue, jquery, mui, tailwind css, bootstrap, greensock,
                  git, github, yarn, npm, express, node.js, mongodb, webpack,
                  jest, python, django, firebase
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResumePage;
