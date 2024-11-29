import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box, Alert, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CaseStudyTitle from "../components/CaseStudyTitle";
import SolutionLayout from "../components/SolutionLayout";
import CaseStudyDivider from "../components/CaseStudyDivider";
import CaseStudyPersona from "../components/CaseStudyPersonas";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import LilaAnimationExample from "../components/LilaAnimationExample";

export default function CaseStudy() {
  const caseStudyOverview = [
    { title: "Role", description: "UI/UX Designer & Developer" },
    { title: "Timeline", description: "6 Weeks" },
    { title: "Date", description: "November 2024 - December 2024" },
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
      carely: <RemoveCircleIcon color="disabled" />,
      caringBridge: <RemoveCircleIcon color="disabled" />,
      helpingHands: <RemoveCircleIcon color="disabled" />,
      honor: <CheckCircleIcon color="success" />,
      lila: <CheckCircleIcon color="success" />,
    },
    {
      feature: "Empathy-Driven Conversations",
      carely: <RemoveCircleIcon color="disabled" />,
      caringBridge: <RemoveCircleIcon color="disabled" />,
      helpingHands: <RemoveCircleIcon color="disabled" />,
      honor: <RemoveCircleIcon color="disabled" />,
      lila: <CheckCircleIcon color="success" />,
    },
    {
      feature: "Specialized Prompt Suggestions",
      carely: <RemoveCircleIcon color="disabled" />,
      caringBridge: <RemoveCircleIcon color="disabled" />,
      helpingHands: <CheckCircleIcon color="success" />,
      honor: <RemoveCircleIcon color="disabled" />,
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
      carely: <RemoveCircleIcon color="disabled" />,
      caringBridge: <RemoveCircleIcon color="disabled" />,
      helpingHands: <RemoveCircleIcon color="disabled" />,
      honor: <CheckCircleIcon color="success" />,
      lila: <CheckCircleIcon color="success" />,
    },
    {
      feature: "24/7 Availability",
      carely: <RemoveCircleIcon color="disabled" />,
      caringBridge: <RemoveCircleIcon color="disabled" />,
      helpingHands: <RemoveCircleIcon color="disabled" />,
      honor: <CheckCircleIcon color="success" />,
      lila: <CheckCircleIcon color="success" />,
    },
  ];

  const navigate = useNavigate();

  return (
    <Box sx={{ background: "#f6f6f6" }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" pt={3} mb={2}>
          An AI-powered Platform Designed to Support Caregivers with Natural,
          Human-like Conversations in Healthcare.
        </Typography>
        {/* <Box
        sx={{
        //   background: "#eee",
        boxShadow:'24px 24px 64px rgba(36, 107, 253, 0.01)',
        backgroundImage: `url("https://assets.codepen.io/2392702/Frame+241072.svg")`,
        backgroundSize: "cover", // Ensures the image fills the Box
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling of the image
          height: "600px",
          width: "100%",
          borderRadius: 3,
          mb: 2,
        }}
      ></Box> */}
        <Box
          sx={{
            height: "615px",
            background: "#111111",
            width: "100%",
            p: 4,
            borderRadius: 3,
            mb: 2,
          }}
        >
          <LilaAnimationExample />
        </Box>
        <Grid container spacing={2} mb={2}>
          {caseStudyOverview.map(({ title, description }) => (
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Card
                sx={{
                  p: 4,
                  background: "#fff",

                  boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {title}
                </Typography>
                <Typography>{description}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <CaseStudyDivider /> */}
        <Card
          sx={{
            p: 4,
            background: "#fff",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: 3,
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="PROBLEM"
            description="Caregivers Struggle to Find Timely, Supportive Guidance"
          />
          <Typography mb={3}>
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
            <Typography variant="h5" fontWeight="bold">
              “How might we create a platform that empowers caregivers with
              timely, empathetic guidance tailored to their unique challenges?”
            </Typography>
          </Box>
        </Card>
        {/* <CaseStudyDivider /> */}
        <Card
          sx={{
            p: 4,
            background: "#fff",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: 3,
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="SOLUTION"
            description="Empowering Caregivers with Real-Time Support"
          />
          <SolutionLayout
            title="Instant Access to Guidance"
            bulletOne="Provides caregivers with on-demand answers to common healthcare questions, reducing wait times and helping them make informed decisions quickly."
            bulletTwo="An intuitive Prompts Page allows easy navigation of pre-built responses, giving caregivers quick access to the guidance they need, even during busy moments."
          />
          <SolutionLayout
            title="Human-Like, Personalized Interactions"
            bulletOne="Adapts responses based on caregiver input, creating a natural conversation flow that feels supportive and empathetic."
            bulletTwo="Builds rapport through tailored, empathy-driven responses that address the unique challenges caregivers face, enhancing confidence in caregiving tasks"
          />
          <SolutionLayout
            title="Resource Sharing & Collaboration"
            bulletOne="Recommends helpful articles and resources for deeper insight when needed, helping caregivers feel more confident and prepared."
            bulletTwo="Facilitates real-time collaboration by enabling caregivers to share updates with healthcare professionals, keeping all parties informed and aligned."
          />
          {/* <CaseStudyDivider /> */}
        </Card>
        <Card
          sx={{
            p: 4,
            background: "#fff",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: 3,
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="RESEARCH"
            description="Diving Deeper into the Problem"
          />
          <Typography variant="h6" mb={2} fontWeight="bold">
            User Interviews
          </Typography>
          <Typography mb={3}>
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
            <Typography variant="h5" fontWeight="bold">
              “According to recent studies, caregivers feel an increase in
              stress and burnout when unable to access timely information and
              support.”
            </Typography>
          </Box>
          <Typography mb={3}>
            This insight validated our approach of creating a conversational
            platform that’s accessible 24/7, meeting caregivers’ needs in
            real-time. While many apps provide support during office hours, Lila
            aims to be a constant companion, ready to assist whenever needed.
          </Typography>

          <Typography variant="h6" mb={2} fontWeight="bold">
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
                    p: 4,
                    background: "#fff",
                    border: "1px solid #DFE4F3",
                    boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
                    borderRadius: 3,
                    flex: 1, // Ensures all cards stretch to the same height
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography fontWeight="bold" mb={1}>
                    {title}
                  </Typography>
                  <Typography>{description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" mb={2} fontWeight="bold">
            Competitive Analysis
          </Typography>
          <Typography mb={3}>
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
                    borderTop: "1px solid #DFE4F3",
                    borderLeft: "1px solid #DFE4F3",
                    borderBottom: "1px solid #DFE4F3",
                    borderTopLeftRadius: "16px",
                  }}
                >
                  <Typography fontWeight="bold">Feature | App Name</Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #DFE4F3",
                    borderBottom: "1px solid #DFE4F3",
                    borderLeft: "1px solid #DFE4F3",
                  }}
                >
                  <Typography fontWeight="bold">Carley</Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #DFE4F3",
                    borderBottom: "1px solid #DFE4F3",
                    borderLeft: "1px solid #DFE4F3",
                  }}
                >
                  <Typography fontWeight="bold">CaringBridge</Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #DFE4F3",
                    borderBottom: "1px solid #DFE4F3",
                    borderLeft: "1px solid #DFE4F3",
                  }}
                >
                  <Typography fontWeight="bold">Helping Hands</Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #DFE4F3",
                    borderBottom: "1px solid #DFE4F3",
                    borderLeft: "1px solid #DFE4F3",
                  }}
                >
                  <Typography fontWeight="bold">Honor</Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    p: 3,
                    borderTop: "1px solid #DFE4F3",
                    borderBottom: "1px solid #DFE4F3",
                    borderLeft: "1px solid #DFE4F3",
                    borderRight: "1px solid #DFE4F3",
                    borderTopRightRadius: "16px",
                  }}
                >
                  <Typography fontWeight="bold">Lila</Typography>
                </Box>
              </Box>

              {/* Mapped content rows */}
              {competitiveAnalysis.map(
                (
                  { feature, carely, caringBridge, helpingHands, honor, lila },
                  index,
                ) => (
                  <Box sx={{ display: "flex" }} key={feature}>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #DFE4F3",
                        borderLeft: "1px solid #DFE4F3",
                        borderBottomLeftRadius:
                          index === competitiveAnalysis.length - 1 ? "16px" : 0,
                      }}
                    >
                      <Typography fontWeight="bold">{feature}</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #DFE4F3",
                        borderLeft: "1px solid #DFE4F3",
                      }}
                    >
                      <Typography>{carely}</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #DFE4F3",
                        borderLeft: "1px solid #DFE4F3",
                      }}
                    >
                      <Typography>{caringBridge}</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #DFE4F3",
                        borderLeft: "1px solid #DFE4F3",
                      }}
                    >
                      <Typography>{helpingHands}</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #DFE4F3",
                        borderLeft: "1px solid #DFE4F3",
                      }}
                    >
                      <Typography>{honor}</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "200px",
                        p: 3,
                        borderBottom: "1px solid #DFE4F3",
                        borderLeft: "1px solid #DFE4F3",
                        borderRight: "1px solid #DFE4F3",
                        borderBottomRightRadius:
                          index === competitiveAnalysis.length - 1 ? "16px" : 0,
                      }}
                    >
                      <Typography>{lila}</Typography>
                    </Box>
                  </Box>
                ),
              )}
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            p: 4,
            background: "#fff",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: 3,
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
            img="https://assets.codepen.io/2392702/John.jpg"
          />
          <CaseStudyPersona
            name="Michael, 28"
            title="Care Facility Manager"
            motivations="To streamline caregiving operations and improve communication with families of residents."
            painPoints="Difficulty managing communication with multiple family members.
Inconsistent information between caregivers and family members, leading to misunderstandings.
Lack of real-time assistance tools that support staff while reassuring families."
            img="https://assets.codepen.io/2392702/unsplash_7YVZYZeITc8.png"
          />
        </Card>
        {/* <CaseStudyDivider /> */}
        <Card
          sx={{
            p: 4,
            background: "#fff",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: 3,
            mb: 2,
          }}
        >
          <CaseStudyTitle title="USER JOURNEY MAP" description="Title" />
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
                    borderTop: "1px solid #DFE4F3",
                    borderLeft: "1px solid #DFE4F3",
                    borderBottom: "1px solid #DFE4F3",
                    borderTopLeftRadius: "16px",
                  }}
                >
                  <Typography fontWeight="bold">Stage</Typography>
                </Box>
                <Box
                  sx={{
                    flex: {
                      xs: "0 0 250px",
                      md: 1,
                    },
                    p: 3,
                    borderTop: "1px solid #DFE4F3",
                    borderBottom: "1px solid #DFE4F3",
                    borderLeft: "1px solid #DFE4F3",
                  }}
                >
                  <Typography fontWeight="bold">
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
                    borderTop: "1px solid #DFE4F3",
                    borderBottom: "1px solid #DFE4F3",
                    borderLeft: "1px solid #DFE4F3",
                  }}
                >
                  <Typography fontWeight="bold">
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
                    borderTop: "1px solid #DFE4F3",
                    borderBottom: "1px solid #DFE4F3",
                    borderLeft: "1px solid #DFE4F3",
                    borderRight: "1px solid #DFE4F3",
                    borderTopRightRadius: "16px",
                  }}
                >
                  <Typography fontWeight="bold">
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
                      borderBottom: "1px solid #DFE4F3",
                      borderLeft: "1px solid #DFE4F3",
                      borderBottomLeftRadius:
                        index === userJourneys.length - 1 ? "16px" : 0,
                    }}
                  >
                    <Typography>{journey.stage}</Typography>
                  </Box>
                  <Box
                    sx={{
                      flex: {
                        xs: "0 0 250px",
                        md: 1,
                      },
                      p: 3,
                      borderBottom: "1px solid #DFE4F3",
                      borderLeft: "1px solid #DFE4F3",
                    }}
                  >
                    <Typography>{journey.linda}</Typography>
                  </Box>
                  <Box
                    sx={{
                      flex: {
                        xs: "0 0 250px",
                        md: 1,
                      },
                      p: 3,
                      borderBottom: "1px solid #DFE4F3",
                      borderLeft: "1px solid #DFE4F3",
                    }}
                  >
                    <Typography>{journey.john}</Typography>
                  </Box>
                  <Box
                    sx={{
                      flex: {
                        xs: "0 0 250px",
                        md: 1,
                      },
                      p: 3,
                      borderBottom: "1px solid #DFE4F3",
                      borderLeft: "1px solid #DFE4F3",
                      borderRight: "1px solid #DFE4F3",
                      borderBottomRightRadius:
                        index === userJourneys.length - 1 ? "16px" : 0,
                    }}
                  >
                    <Typography>{journey.mike}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Card>

        {/* <CaseStudyDivider /> */}
        <CaseStudyTitle
          title="DESIGN"
          description="Crafting an Intuitive and Empathetic Experience"
        />
      </Container>
    </Box>
  );
}
