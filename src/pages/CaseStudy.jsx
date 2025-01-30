import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Box,
  Alert,
  Card,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CaseStudyTitle from "../components/CaseStudyTitle";
import SolutionLayout from "../components/SolutionLayout";
import CaseStudyDivider from "../components/CaseStudyDivider";
import CaseStudyPersona from "../components/CaseStudyPersonas";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import LilaAnimationExample from "../components/LilaAnimationExample";
import PromptViewImg from "../components/PromptViewImg";
import LilaCaseStudyPreview from "../assets/images/LilaCaseStudyPreview.svg";
import PersonalizeInteractions from "../components/PersonalizedInteractions";
import CollaborationImg from "../components/CollaborationImg";

import ProfilePage from "../assets/images/ProfilePage.svg";
import ContactPage from "../assets/images/ContactPage.svg";
import LayerIcon from "../assets/images/LayerIcon.svg";
import ToolsIcon from "../assets/images/ToolsIcon.svg";
import CalendarIcon from "../assets/images/CalendarIcon.svg";
import SiteMap from "../components/SiteMap";

export default function CaseStudy() {
  const caseStudyOverview = [
    {
      title: "Role",
      description: "UI/UX Designer & Developer",
      img: LayerIcon,
    },
    { title: "Tools", description: "Figma, React, MUI", img: ToolsIcon },
    {
      title: "Timeline",
      description: "November - December 2024",
      img: CalendarIcon,
    },
  ];

  const affinityMapping = [
    {
      title: "Accessibility",
      description:
        "Caregivers expressed frustration at not having quick, reliable access to support when they needed it most, especially during high-stress situations.",
    },
    {
      title: "Personalization",
      description:
        "Caregivers felt that generic advice wasn’t sufficient—they wanted guidance that felt relevant to their unique caregiving situations.",
    },
    {
      title: "Emotional Support",
      description:
        "Many caregivers felt isolated and emotionally drained, expressing a need for a tool that could provide not just information but also encouragement and empathy.",
    },
  ];

  const userJourneys = [
    {
      stage: "Awareness",
      linda:
        "Searches for tools to manage caregiving stress and find tailored guidance for her mother.",
      john: "Looks for tools to recommend to patients and their families for better caregiving support.",
      mike: "Seeks emotional and practical support to manage caregiving responsibilities at home.",
    },
    {
      stage: "Consideration",
      linda:
        "Reads about Lila’s empathetic, real-time assistance and specialized prompts for caregivers.",
      john: "Evaluates how Lila can complement his professional advice and streamline patient education.",
      mike: "Notices Lila’s focus on emotional support and real-time solutions for personal caregiving.",
    },
    {
      stage: "Onboarding",
      linda:
        "Completes a quick setup by entering caregiving challenges (e.g., mobility, emotional care).",
      john: "Skips detailed onboarding, opting to explore Lila’s resources and prompts for healthcare advice.",
      mike: "Shares caregiving responsibilities and selects options for emotional reassurance.",
    },
    {
      stage: "Engagement",
      linda:
        "Uses the prompts page to ask about mobility exercises and emotional support tips.",
      john: "Shares Lila’s recommended resources with patients and uses prompts for caregiving FAQs.",
      mike: "Engages with Lila to get suggestions for stress relief and safety tips for his spouse.",
    },
    {
      stage: "Loyalty",
      linda:
        "Returns regularly for daily tips and advice on improving caregiving skills.",
      john: "Uses Lila as a supplemental tool for patient education and family care coordination.",
      mike: "Builds a habit of using Lila for both practical caregiving tasks and emotional support.",
    },
  ];

  const competitiveAnalysis = [
    {
      feature: "Real-Time Assistance",
      carely: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      caringBridge: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      helpingHands: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      honor: <CheckCircleIcon color="success" />,
      lila: <CheckCircleIcon color="success" />,
    },
    {
      feature: "Empathy-Driven Conversations",
      carely: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      caringBridge: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      helpingHands: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      honor: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      lila: <CheckCircleIcon color="success" />,
    },
    {
      feature: "Specialized Prompt Suggestions",
      carely: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      caringBridge: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      helpingHands: <CheckCircleIcon color="success" />,
      honor: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      lila: <CheckCircleIcon color="success" />,
    },
    {
      feature: "Resource Recommendations",
      carely: <CheckCircleIcon color="success" />,
      caringBridge: <CheckCircleIcon color="success" />,
      helpingHands: <CheckCircleIcon color="success" />,
      honor: <CheckCircleIcon color="success" />,
      lila: <CheckCircleIcon color="success" />,
    },
    {
      feature: "Collaboration with Healthcare Providers",
      carely: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      caringBridge: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      helpingHands: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      honor: <CheckCircleIcon color="success" />,
      lila: <CheckCircleIcon color="success" />,
    },
    {
      feature: "24/7 Availability",
      carely: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      caringBridge: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      helpingHands: <RemoveCircleIcon sx={{ color: "#DB2F40" }} />,
      honor: <CheckCircleIcon color="success" />,
      lila: <CheckCircleIcon color="success" />,
    },
  ];

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "#111",
        pb: 4,
        margin: 0,
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          // pt={6}
          mb={2}
          color="#fff"
          sx={{ paddingTop: 14 }}
        >
          An AI-powered Platform Designed to Support Caregivers with Natural,
          Human-like Conversations in Healthcare.
        </Typography>
        <Box
          sx={{
            background: "#222",
            height: {
              xs: "auto", // Auto height for extra-small screens and up
              md: "600px", // Fixed height for medium screens and up (desktop)
            },
            mb: 2,
            pt: 2,
            px: 2,
            borderRadius: "16px",
            display: "flex",
            // alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <img
            src={LilaCaseStudyPreview}
            loading="lazy"
            alt="Lila Preview"
            style={{ maxWidth: "760px", width: "100%" }}
          />
        </Box>
        <Grid container spacing={2} mb={2}>
          {caseStudyOverview.map(({ title, description, img }) => (
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Card
                sx={{
                  px: 6,
                  py: 5,

                  background: "#222",

                  boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
                  borderRadius: "16px",
                }}
              >
                <Box sx={{ display: "flex", mb: 1 }}>
                  <img
                    loading="lazy"
                    src={img}
                    style={{ marginRight: "8px" }}
                  />
                  <Typography
                    sx={{ fontSize: "18px" }}
                    fontWeight="bold"
                    color="#fff"
                  >
                    {title}
                  </Typography>
                </Box>
                <Typography color="#fff">{description}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <CaseStudyDivider /> */}
        <Card
          sx={{
            p: 6,
            background: "#222",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="PROBLEM"
            description="Caregivers Struggle to Find Timely, Supportive Guidance"
          />
          <Typography mb={3} color="#fff">
            Caregivers often struggle to access timely, reliable, and tailored
            support when managing the complex needs of their patients.
            Communication gaps between caregivers and healthcare professionals
            can lead to delays in care, misunderstandings, and increased stress.{" "}
            <br />
            <br /> Many existing tools are either too clinical, difficult to
            navigate, or not designed with the caregiver's unique needs in mind,
            leaving them feeling unsupported in critical moments. This lack of
            an intuitive, conversational platform makes it harder to address
            patients concerns efficiently and confidently.
          </Typography>
          <Box sx={{ pl: 6 }}>
            <Typography variant="h6" fontWeight="bold" color="#777">
              “How might we create a platform that empowers caregivers with
              timely, empathetic guidance tailored to their unique challenges?”
            </Typography>
          </Box>
        </Card>
        {/* <CaseStudyDivider /> */}
        <Card
          sx={{
            p: 6,
            background: "#222",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="SOLUTION"
            description="Empowering Caregivers with Real-Time Support"
          />
          <Typography mb={3} color="#fff">
            Caregivers face constant challenges in providing care. This solution
            delivers intuitive, real-time tools and empathetic interactions to
            streamline their tasks, reduce stress, and foster collaboration with
            healthcare professionals.
          </Typography>
          <SolutionLayout
            title="Instant Access to Guidance"
            bulletOne="Provides caregivers with on-demand answers to common healthcare questions, reducing wait times and helping them make informed decisions quickly."
            bulletTwo="An intuitive Prompts Page allows easy navigation of pre-built responses, giving caregivers quick access to the guidance they need, even during busy moments."
            img={<PromptViewImg />}
          />
          <SolutionLayout
            title="Human-Like, Personalized Interactions"
            bulletOne="Adapts responses based on caregiver input, creating a natural conversation flow that feels supportive and empathetic."
            bulletTwo="Builds rapport through tailored, empathy-driven responses that address the unique challenges caregivers face, enhancing confidence in caregiving tasks"
            img={<PersonalizeInteractions />}
          />
          <SolutionLayout
            title="Resource Sharing & Collaboration"
            bulletOne="Recommends helpful articles and resources for deeper insight when needed, helping caregivers feel more confident and prepared."
            bulletTwo="Facilitates real-time collaboration by enabling caregivers to share updates with healthcare professionals, keeping all parties informed and aligned."
            img={<CollaborationImg />}
          />
          {/* <CaseStudyDivider /> */}
        </Card>
        <Card
          sx={{
            p: 6,
            background: "#222",
            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="RESEARCH"
            description="Diving Deeper into the Problem"
          />
          <Typography mb={3} color="#fff">
            Understanding the unique challenges faced by caregivers was crucial
            to designing an effective solution. Through user interviews,
            affinity mapping, and competitive analysis, I uncovered key insights
            that shaped the foundation of Lila, ensuring it meets caregivers’
            needs for real-time, empathetic, and personalized support.
          </Typography>

          <Box
            sx={{
              background: "#333",
              height: "400px",
              mb: 3,
              backgroundImage:
                "url('https://condens.io/img/blog/interview_analysis/analysis_hero.webp')",
              borderRadius: "16px",
              backgroundSize: "cover", // Ensures the image covers the entire container
              backgroundPosition: "center", // Centers the image
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
            }}
          ></Box>

          <Typography variant="h6" mb={2} fontWeight="bold" color="#fff">
            User Interviews
          </Typography>
          <Typography mb={3} color="#fff">
            To truly understand the challenges caregivers face, I conducted a
            series of interviews with healthcare professionals and family
            caregivers, focusing on their experiences with communication tools
            and pain points in caregiving support. <br />
            <br /> In addition, I analyzed existing tools in the healthcare and
            caregiver support space. My goal was to identify gaps where Lila
            could offer a more intuitive and empathetic approach, addressing the
            specific needs of caregivers that are often overlooked by current
            solutions.
          </Typography>
          <Box sx={{ pl: 6, mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" color="#777">
              “According to recent studies, caregivers feel an increase in
              stress and burnout when unable to access timely information and
              support.”
            </Typography>
          </Box>
          <Typography mb={4} color="#fff">
            This insight validated our approach of creating a conversational
            platform that’s accessible 24/7, meeting caregivers’ needs in
            real-time. While many apps provide support during office hours, Lila
            aims to be a constant companion, ready to assist whenever needed.
          </Typography>

          <Typography variant="h6" mb={2} fontWeight="bold" color="#fff">
            Affinity Mapping
          </Typography>
          <Grid container spacing={2} mb={3}>
            {affinityMapping.map(({ title, description }) => (
              <Grid
                size={{ xs: 12, sm: 4, md: 4 }}
                key={title}
                sx={{
                  display: "flex", // Make the grid items flex containers
                  flexDirection: "column", // Stack content vertically
                }}
              >
                <Card
                  sx={{
                    p: 6,
                    background: "#333",
                    color: "#fff",
                    boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
                    borderRadius: "16px",
                    flex: 1, // Ensures all cards stretch to the same height
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography fontWeight="bold" mb={1} color="#fff">
                    {title}
                  </Typography>
                  <Typography color="#fff">{description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" mb={2} fontWeight="bold" color="#fff">
            Competitive Analysis
          </Typography>
          <Typography mb={3} color="#fff">
            To understand how Lila can best serve caregivers, I conducted a
            competitive analysis of existing caregiving support platforms. This
            analysis revealed gaps in the current market, particularly in the
            areas of real-time assistance, empathy-driven interactions, and
            personalized guidance. By identifying where competitors fall short,
            I ensured that Lila would address unmet needs and provide a unique,
            value-driven experience tailored to caregivers.
          </Typography>

          {/* Container for Comparison Table */}
          <Box
            sx={{
              width: "100%",
              overflow: "auto",
              pb: 2,
              minHeight: "fit-content",
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f1f1f1",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "4px",
              },
            }}
          >
            {/* Content wrapper */}
            <Box
              sx={{
                minWidth: "1200px",
                // Removed maxWidth to prevent cutoff
              }}
            >
              {/* Header Row */}
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #555",
                    borderLeft: "1px solid #555",
                    borderBottom: "1px solid #555",
                    borderTopLeftRadius: "16px",
                  }}
                >
                  <Typography fontWeight="bold" color="#fff">
                    Feature | App Name
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #555",
                    borderBottom: "1px solid #555",
                    borderLeft: "1px solid #555",
                  }}
                >
                  <Typography fontWeight="bold" color="#fff">
                    Carley
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #555",
                    borderBottom: "1px solid #555",
                    borderLeft: "1px solid #555",
                  }}
                >
                  <Typography fontWeight="bold" color="#fff">
                    CaringBridge
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #555",
                    borderBottom: "1px solid #555",
                    borderLeft: "1px solid #555",
                  }}
                >
                  <Typography fontWeight="bold" color="#fff">
                    Helping Hands
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #555",
                    borderBottom: "1px solid #555",
                    borderLeft: "1px solid #555",
                  }}
                >
                  <Typography fontWeight="bold" color="#fff">
                    Honor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #555",
                    borderBottom: "1px solid #555",
                    borderLeft: "1px solid #555",
                    borderRight: "1px solid #555",
                    borderTopRightRadius: "16px",
                  }}
                >
                  <Typography fontWeight="bold" color="#fff">
                    Lila
                  </Typography>
                </Box>
              </Box>

              {/* Mapped content rows */}
              {competitiveAnalysis.map(
                (
                  { feature, carely, caringBridge, helpingHands, honor, lila },
                  index
                ) => (
                  <Box sx={{ display: "flex" }} key={feature}>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #555",
                        borderLeft: "1px solid #555",
                        borderBottomLeftRadius:
                          index === competitiveAnalysis.length - 1 ? "16px" : 0,
                      }}
                    >
                      <Typography fontWeight="bold" color="white">
                        {feature}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #555",
                        borderLeft: "1px solid #555",
                      }}
                    >
                      <Typography>{carely}</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #555",
                        borderLeft: "1px solid #555",
                      }}
                    >
                      <Typography>{caringBridge}</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #555",
                        borderLeft: "1px solid #555",
                      }}
                    >
                      <Typography>{helpingHands}</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #555",
                        borderLeft: "1px solid #555",
                      }}
                    >
                      <Typography>{honor}</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #555",
                        borderLeft: "1px solid #555",
                        borderRight: "1px solid #555",
                        borderBottomRightRadius:
                          index === competitiveAnalysis.length - 1 ? "16px" : 0,
                      }}
                    >
                      <Typography>{lila}</Typography>
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            p: 6,
            background: "#222",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          {/* <CaseStudyDivider /> */}
          <CaseStudyTitle
            title="PERSONAS"
            description="Understanding the People Behind the Need"
          />
          <CaseStudyPersona
            name="Linda, 38"
            title="Family Caregiver"
            motivations="To provide the best possible care for her elderly mother while managing her own work and personal life."
            painPoints="Limited time to research healthcare information during emergencies.
Difficulty finding emotional support and reassurance during stressful caregiving situations.
Frustration with generic advice that doesn't address specific caregiving challenges."
            img="https://assets.codepen.io/2392702/unsplash_7YVZYZeITc8.jpg"
          />
          <CaseStudyPersona
            name="John, 41"
            title="Healthcare Professional"
            motivations="To support families with clear, accessible information that complements medical care."
            painPoints="Limited time to address every question from caregivers individually.
Challenges in finding resources that are easy for families to understand and use.
Frustration with existing tools that don’t provide a human-like, empathetic response for caregivers.
"
            img="https://assets.codepen.io/2392702/Group+241290_1.jpg"
          />
          <CaseStudyPersona
            name="Michael, 28"
            title="Care Facility Manager"
            motivations="To streamline caregiving operations and improve communication with families of residents."
            painPoints="Difficulty managing communication with multiple family members.
Inconsistent information between caregivers and family members, leading to misunderstandings.
Lack of real-time assistance tools that support staff while reassuring families."
            img="https://assets.codepen.io/2392702/Group+241290.jpg"
          />
        </Card>
        {/* <CaseStudyDivider /> */}
        <Card
          sx={{
            p: 6,
            background: "#222",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="USER JOURNEY MAP"
            description="Understanding the Caregiver Ecosystem
"
          />

          <Typography mb={3} color="#fff">
            The User Journey Map captures the experiences of different
            caregivers—family members, healthcare professionals, and care
            facility managers—highlighting their challenges and interactions
            with Lila at various stages. This map informed key design decisions
            to ensure Lila meets the unique needs of each user type, providing
            empathetic, real-time support across their caregiving journeys.
          </Typography>
          <Box
            sx={{
              width: "100%",
              overflow: "auto",
              pb: 2,
              minHeight: "fit-content",
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f1f1f1",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "4px",
              },
            }}
          >
            {/* Content wrapper - now using width instead of minWidth */}
            <Box
              sx={{
                width: {
                  xs: "1000px", // Minimum width for mobile scrolling
                  md: "100%", // Full width on desktop
                },
              }}
            >
              {/* Header Row */}
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    flex: {
                      xs: "0 0 250px", // Fixed width on mobile
                      md: 1, // Flex grow on desktop
                    },
                    p: 3,
                    borderTop: "1px solid #555",
                    borderLeft: "1px solid #555",
                    borderBottom: "1px solid #555",
                    borderTopLeftRadius: "16px",
                  }}
                >
                  <Typography fontWeight="bold" color="#fff">
                    Stage
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: {
                      xs: "0 0 250px",
                      md: 1,
                    },
                    p: 3,
                    borderTop: "1px solid #555",
                    borderBottom: "1px solid #555",
                    borderLeft: "1px solid #555",
                  }}
                >
                  <Typography fontWeight="bold" color="#fff">
                    Linda (Family Caregiver)
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: {
                      xs: "0 0 250px",
                      md: 1,
                    },
                    p: 3,
                    borderTop: "1px solid #555",
                    borderBottom: "1px solid #555",
                    borderLeft: "1px solid #555",
                  }}
                >
                  <Typography fontWeight="bold" color="#fff">
                    John (Healthcare Professional)
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: {
                      xs: "0 0 250px",
                      md: 1,
                    },
                    p: 3,
                    borderTop: "1px solid #555",
                    borderBottom: "1px solid #555",
                    borderLeft: "1px solid #555",
                    borderRight: "1px solid #555",
                    borderTopRightRadius: "16px",
                  }}
                >
                  <Typography fontWeight="bold" color="#fff">
                    Mike (Care Facility Manager)
                  </Typography>
                </Box>
              </Box>

              {/* Mapped content rows */}
              {userJourneys.map((journey, index) => (
                <Box sx={{ display: "flex" }} key={journey.stage}>
                  <Box
                    sx={{
                      flex: {
                        xs: "0 0 250px",
                        md: 1,
                      },
                      p: 3,
                      borderBottom: "1px solid #555",
                      borderLeft: "1px solid #555",
                      borderBottomLeftRadius:
                        index === userJourneys.length - 1 ? "16px" : 0,
                    }}
                  >
                    <Typography color="#fff" fontWeight="bold">
                      {journey.stage}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      flex: {
                        xs: "0 0 250px",
                        md: 1,
                      },
                      p: 3,
                      borderBottom: "1px solid #555",
                      borderLeft: "1px solid #555",
                    }}
                  >
                    <Typography color="#fff">{journey.linda}</Typography>
                  </Box>
                  <Box
                    sx={{
                      flex: {
                        xs: "0 0 250px",
                        md: 1,
                      },
                      p: 3,
                      borderBottom: "1px solid #555",
                      borderLeft: "1px solid #555",
                    }}
                  >
                    <Typography color="#fff">{journey.john}</Typography>
                  </Box>
                  <Box
                    sx={{
                      flex: {
                        xs: "0 0 250px",
                        md: 1,
                      },
                      p: 3,
                      borderBottom: "1px solid #555",
                      borderLeft: "1px solid #555",
                      borderRight: "1px solid #555",
                      borderBottomRightRadius:
                        index === userJourneys.length - 1 ? "16px" : 0,
                    }}
                  >
                    <Typography color="#fff">{journey.mike}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Card>

        <Card
          sx={{
            p: 6,
            background: "#222",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="INFORMATION ARCHITECTURE"
            description="Designing a Clear Path to Personalized Care"
          />
          <SiteMap />
        </Card>

        {/* <CaseStudyDivider /> */}
        <Card
          sx={{
            p: 6,
            background: "#222",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            // mb: 2,
          }}
        >
          <CaseStudyTitle
            title="DESIGN"
            description="Crafting an Intuitive and Empathetic Experience"
          />
          <Typography mb={6} color="#fff">
            The design process focused on creating a user-friendly interface
            that balances functionality with empathy. By prioritizing
            accessibility, simplicity, and personalization, the design ensures
            that caregivers feel supported and confident at every step of their
            journey.
          </Typography>
          <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
            Log In & Sign Up Page
          </Typography>
          <Typography mt={1} mb={3} color="#fff">
            The Login & Sign Up Page introduces Lila as a personalized
            caregiving companion, highlighting key benefits while providing
            users with a seamless way to access its features. Visitors are
            encouraged to sign up to unlock expert-backed prompts, emotional
            support, and caregiving solutions, or preview Lila’s conversational
            interface to experience its value before creating an account.
          </Typography>
          <Box sx={{ mb: 6 }}>
            <img
              src="https://assets.codepen.io/2392702/Group+241592_1.svg"
              alt="log in screen"
              style={{ width: "100%" }}
            />
          </Box>
          <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
            Chat Page
          </Typography>
          <Typography mt={1} mb={3} color="#fff">
            The Chat Page was designed to provide caregivers with instant,
            personalized guidance in a conversational format. With features like
            tailored responses, recent chats, and pinned resources, it ensures
            caregivers can access the support they need quickly and
            effortlessly.
          </Typography>

          <Box mb={6}>
            <img
              src="https://assets.codepen.io/2392702/Group+241568.svg"
              alt="log in screen"
              style={{ width: "100%" }}
            />
          </Box>
          <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
            About Page
          </Typography>
          <Typography mt={1} mb={3} color="#fff">
            The About Page introduces Lila’s mission to support caregivers
            through empathetic and personalized solutions. By highlighting its
            core values, features, and the impact it aims to create, the page
            fosters trust and reinforces Lila’s dedication to empowering
            caregiving journeys.
          </Typography>
          <Box mb={6}>
            {/* <img
              src={ProfilePage}
              alt="Profile Page"
              style={{ width: "100%" }}
            /> */}
            Redesigning...
          </Box>

          <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
            Prompt Page
          </Typography>
          <Typography mt={1} mb={3} color="#fff">
            The Prompts Page organizes pre-built responses into easy-to-navigate
            categories, allowing caregivers to find practical solutions quickly.
            By prioritizing efficiency and personalization, it empowers
            caregivers to address challenges with confidence and ease.
          </Typography>
          <Box mb={6}>
            <img
              src="https://assets.codepen.io/2392702/Group+241576.svg"
              alt="log in screen"
              // style={{ height: "1050px" }}
              style={{ width: "100%" }}
            />
          </Box>
          <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
            Profile Page
          </Typography>
          <Typography mt={1} mb={3} color="#fff">
            Description coming soon
          </Typography>
          <Box mb={6}>
            <img
              src={ProfilePage}
              alt="Profile Page"
              style={{ width: "100%" }}
            />
          </Box>
          <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
            Contact Page
          </Typography>
          <Typography mt={1} mb={3} color="#fff">
            Description coming soon
          </Typography>
          <Box mb={6}>
            <img
              src={ContactPage}
              alt="Profile Page"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              background: "#111",
              p: 4,

              margin: 0,
              borderRadius: 4,
            }}
          >
            <Typography color="white" variant="h5" mb={2}>
              Coded Prototype coming soon...
            </Typography>
            <Stack flexDirection="row" gap={2}>
              <Button
                variant="contained"
                disabled
                sx={{
                  backgroundColor: "#444", // Darker background for dark mode contrast
                  color: "#aaa", // Lighter text color for readability
                  "&.Mui-disabled": {
                    backgroundColor: "#555", // Slightly lighter background for disabled state
                    color: "#777", // Subtle text color for disabled state
                  },
                }}
              >
                View Code
              </Button>
              <Button
                variant="contained"
                disabled
                sx={{
                  backgroundColor: "#444", // Darker background for dark mode contrast
                  color: "#aaa", // Lighter text color for readability
                  "&.Mui-disabled": {
                    backgroundColor: "#555", // Slightly lighter background for disabled state
                    color: "#777", // Subtle text color for disabled state
                  },
                }}
              >
                View Prototype
              </Button>
            </Stack>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
