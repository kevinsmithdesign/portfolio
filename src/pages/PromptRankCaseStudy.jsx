import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Box,
  Alert,
  Card,
  Stack,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CaseStudyTitle from "../components/CaseStudyTitle";
import SolutionLayout from "../components/SolutionLayout";

import CaseStudyPersona from "../components/CaseStudyPersonas";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import PromptViewImg from "../components/PromptViewImg";
import PersonalizeInteractions from "../components/PersonalizedInteractions";
import CollaborationImg from "../components/CollaborationImg";

import ProfilePage from "../assets/images/ProfilePage.svg";
import ContactPage from "../assets/images/ContactPage.svg";
import LayerIcon from "../assets/images/LayerIcon.svg";
import ToolsIcon from "../assets/images/ToolsIcon.svg";
import CalendarIcon from "../assets/images/CalendarIcon.svg";
import SiteMap from "../components/SiteMap";
import Navbar from "../components/Navbar";
import UserInterviews from "../components/UserInterviews";
import CompetitiveAnalysisTable from "../components/CompetitiveAnalysis";
import EmpathyMap from "../components/EmpathyMap";
import JourneyMap from "../components/JourneyMap";

import PromptRankBranding from "../assets/images/PromptRankBranding.svg";

export default function PromptRankCaseStudy() {
  const theme = useTheme();

  const caseStudyOverview = [
    {
      title: "Role",
      description: "UI/UX Designer & Developer",
      img: LayerIcon,
    },
    {
      title: "Tools",
      description: "Figma, React, MUI, Firebase",
      img: ToolsIcon,
    },
    {
      title: "Timeline",
      description: "January 2025 - Current",
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

  const personas = [
    {
      name: "Emily, 25",
      title: "AI Enthusiast & Content Creator",
      motivations:
        "To generate high-quality AI content efficiently and experiment with different AI tools.",
      painPoints: [
        "Struggles with trial-and-error when crafting effective prompts.",
        "Lacks clear feedback on why some prompts work better than others.",
        "Finds it difficult to compare AI model outputs effectively.",
      ],
      img: "https://images.unsplash.com/photo-1598257006408-538c27529235?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "David, 29",
      title: "Marketing Professional",
      motivations:
        "To optimize AI-generated content for marketing campaigns and improve engagement.",
      painPoints: [
        "Wastes time refining prompts to get the desired AI-generated copy.",
        "Lacks a structured way to evaluate and improve prompt effectiveness.",
        "Struggles to find high-quality, reusable prompts for consistent results.",
      ],
      img: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael, 36",
      title: "AI Engineer & Problem Solver",
      motivations:
        "To build and refine AI models while optimizing prompts for better performance.",
      painPoints: [
        "Lacks efficient ways to test prompts across multiple models.",
        "Struggles with inconsistent AI outputs, making optimization difficult.",
        "Needs a structured way to collaborate and compare prompt effectiveness.",
      ],
      img: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Box
      sx={{
        background: "#000",
        pb: 4,
        margin: 0,
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Navbar color="white" />
      </Box>
      <Container sx={{ px: { xs: "32px", md: "32px", lg: "16px" } }}>
        <Card
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            background: "#111",
            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          {/* <Box
            sx={{
              height: "420px",
              width: "100%",
              background: "#333",
              borderRadius: "12px",
              mb: 2,
            }}

          ></Box> */}
          <Typography variant="h4" fontWeight="bold" mb={2} color="#fff">
            PromptRank: The Ultimate Hub for AI Prompt Optimization & Discovery
          </Typography>
          {/* <Box mb={2}>
            <img
              src={PromptRankBranding}
              style={{ width: "100%", maxWidth: "100%" }}
              alt="PromptRank Components and Overview image"
            />
          </Box> */}
        </Card>
        {/* </Box> */}
        <Grid container spacing={2} mb={2}>
          {caseStudyOverview.map(({ title, description, img }) => (
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Card
                sx={{
                  p: { xs: 3, sm: 4, md: 6 },
                  background: "#111",
                  boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
                  borderRadius: "16px",
                  height: "100%", // This ensures all cards have the same height
                  display: "flex",
                  flexDirection: "column",
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
            p: { xs: 3, sm: 4, md: 6 },
            background: "#111",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="PROBLEM"
            description="AI Users Struggle to Craft Effective Prompts"
          />
          <Typography mb={3} color="#fff">
            Users often struggle to generate high-quality prompts that produce
            relevant, accurate, and insightful AI responses. The lack of clear
            feedback mechanisms leaves them guessing what works, leading to
            trial-and-error iterations that waste time and reduce productivity.{" "}
            <br />
            <br /> Many existing AI tools provide powerful language models but
            lack built-in guidance for optimizing prompts. Without a structured
            way to measure effectiveness, users—ranging from casual
            experimenters to professionals—face inconsistencies in output
            quality, making AI interactions unpredictable and inefficient.
          </Typography>
          <Box sx={{ pl: 6 }}>
            <Typography variant="h6" fontWeight="bold" color="#777">
              “How might we create a system that helps users craft better
              prompts by evaluating their effectiveness and providing clear,
              actionable feedback?”
            </Typography>
          </Box>
        </Card>
        {/* <Card
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
        </Card> */}
        <Card
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            background: "#111",
            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="DISCOVERY"
            description="Diving Deeper into the Problem"
          />
          <Typography mb={3} color="#fff">
            Understanding the challenges users face when crafting effective AI
            prompts was crucial to designing an impactful solution. By analyzing
            common frustrations—such as lack of feedback on prompt
            effectiveness, difficulty comparing AI models, and limited
            opportunities for collaboration—I identified key opportunities to
            create a platform that empowers users to rank, refine, and share
            prompts while fostering a learning-focused community
          </Typography>
          <Box
            sx={{
              background: "#333",
              height: "400px",

              backgroundImage:
                "url('https://condens.io/img/blog/interview_analysis/analysis_hero.webp')",
              borderRadius: "16px",
              backgroundSize: "cover", // Ensures the image covers the entire container
              backgroundPosition: "center", // Centers the image
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
            }}
          ></Box>
        </Card>
        <Card
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            background: "#111",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="USER INTERVIEWS"
            description="Uncovering Needs Through Conversation"
          />
          <Typography mb={3} color="#fff">
            To truly understand the challenges users face with AI prompting, I
            conducted interviews with AI enthusiasts, content creators, and
            professionals who frequently interact with language models. These
            discussions focused on their struggles with crafting effective
            prompts, evaluating responses, and navigating different AI tools.{" "}
            <br />
            <br /> In addition, I analyzed existing platforms for prompt sharing
            and AI learning. My goal was to identify gaps where PromptRank could
            offer a more structured and engaging approach, making prompt
            optimization more intuitive and collaborative.
          </Typography>
          <Box sx={{ pl: 6, mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" color="#777">
              “Users often feel frustrated by the trial-and-error nature of
              prompt crafting, with no clear way to gauge effectiveness or
              compare results across models.”
            </Typography>
          </Box>
          <Typography color="#fff">
            This insight validated our approach of creating a gamified,
            community-driven platform where users can rank, refine, and share
            prompts, turning AI interaction into a more transparent and
            rewarding experience.
          </Typography>
        </Card>

        <Card
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            background: "#111",
            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="KEY INSIGHTS"
            description="Discovering Insights to Shape PromptRank"
          />
          <Typography mb={3} color="#fff">
            To build a platform that truly meets user needs, I conducted
            research to uncover how people discover, use, and evaluate AI
            prompts. Through interviews and data analysis, I identified key
            challenges, including difficulty in finding high-quality prompts,
            lack of standardized evaluation, and limited ways to compare outputs
            across models.
          </Typography>
          <UserInterviews />
        </Card>

        <Card
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            background: "#111",

            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="COMPETITIVE ANALYSIS"
            description="Uncovering Insights to Outperform the Competition"
          />
          <Typography mb={3} color="#fff">
            I evaluated both direct and indirect competitors to identify feature
            gaps in prompt optimization. While most platforms offer basic prompt
            sharing, they lack structured ranking, refinement, and gamification.
            PromptRank bridges these gaps, providing a comprehensive,
            user-driven system for ranking, refining, and testing prompts—making
            it the most feature-complete platform in the space.
          </Typography>

          <CompetitiveAnalysisTable />
        </Card>

        <Card
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            background: "#111",
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
          <Typography mb={3} color="#fff">
            To design an effective solution, I identified key user groups
            struggling with AI prompting—each with unique motivations and
            challenges. From AI enthusiasts seeking efficiency to professionals
            refining AI-generated content, users face common frustrations:
            trial-and-error workflows, lack of feedback, and difficulty
            optimizing prompts.
          </Typography>

          {personas.map((persona, index) => (
            <CaseStudyPersona
              key={index}
              name={persona.name}
              title={persona.title}
              motivations={persona.motivations}
              painPoints={persona.painPoints.join("\n")}
              img={persona.img}
            />
          ))}
          {/* <CaseStudyPersona
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
          /> */}
        </Card>
        <Card
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            background: "#111",
            boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
            borderRadius: "16px",
            mb: 2,
          }}
        >
          <CaseStudyTitle
            title="EMPATHY MAP"
            description="Mapping Thoughts, Feelings, and Needs"
          />

          <Typography mb={3} color="#fff">
            Building on the personas, I mapped their thoughts, frustrations, and
            behaviors to uncover deeper insights. From trial-and-error workflows
            to the lack of clear feedback, these challenges shaped PromptRank
            into a more structured and collaborative prompt discovery
            experience.
          </Typography>
          <EmpathyMap />
        </Card>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Card
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              background: "#111",
              boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
              borderRadius: "16px",
              mb: 2,
            }}
          >
            <CaseStudyTitle
              title="USER JOURNEY MAP"
              description="Understanding the Path to Engagement"
            />

            <Typography mb={3} color="#fff">
              {/* The User Journey Map captures the experiences of different
            caregivers—family members, healthcare professionals, and care
            facility managers—highlighting their challenges and interactions
            with Lila at various stages. This map informed key design decisions
            to ensure Lila meets the unique needs of each user type, providing
            empathetic, real-time support across their caregiving journeys. */}{" "}
            </Typography>

            <JourneyMap />
          </Card>
        </Box>
        <Box sx={{ display: "none" }}>
          <Card
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              background: "#222",
              boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
              borderRadius: "16px",
              mb: 2,
            }}
          >
            <CaseStudyTitle
              title="INFORMATION ARCHITECTURE"
              description="Structuring Content for Clarity & Usability"
            />
            {/* <SiteMap /> */}
          </Card>

          {/* <CaseStudyDivider /> */}
          <Card
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              background: "#222",

              boxShadow: "24px 24px 64px rgba(36, 107, 253, 0.01)",
              borderRadius: "16px",
              // mb: 2,
            }}
          >
            <CaseStudyTitle
              title="DESIGN"
              description="From Concept to Execution"
            />
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
