// import { Button, Container, Typography, Box } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import React from "react";
// // import "./App.css";
// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
// } from "react-router-dom";
// import CaseStudy from "./pages/CaseStudy";
// import DesignSystem from "./pages/DesignSystem";
// import UiDesign from "./pages/UiDesign";
// import Animation from "./pages/Animation";
// import FrontEndCode from "./pages/FrontEndCode";
// import HomePage from "./pages/HomePage";
// import Navbar from "./components/Navbar";
// import ResumePage from "./pages/ResumePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import WhiteLabelPage from "./pages/WhiteLabelPage";
// import PromptRankOverviewPage from "./pages/PromptRankOverviewPage";

// function App() {
//   return (
//     <Router>
//       <Box
//         sx={{
//           width: "100%",
//           margin: 0,
//           padding: 0,
//           overflow: "hidden",
//         }}
//       >
//         {/* <Navbar /> */}

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/casestudy" element={<CaseStudy />} />
//           <Route path="/designsystem" element={<DesignSystem />} />
//           <Route path="/whitelabel/*" element={<WhiteLabelPage />} />
//           <Route
//             path="/promptrank-overview"
//             element={<PromptRankOverviewPage />}
//           />

//           <Route path="/uidesign" element={<UiDesign />} />
//           <Route path="/animation" element={<Animation />} />
//           <Route path="/code" element={<FrontEndCode />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/resume" element={<ResumePage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>
//       </Box>
//     </Router>
//   );
// }

// export default App;

import { Button, Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CaseStudy from "./pages/CaseStudy";
import DesignSystem from "./pages/DesignSystem";
import UiDesign from "./pages/UiDesign";
import Animation from "./pages/Animation";
import FrontEndCode from "./pages/FrontEndCode";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WhiteLabelPage from "./pages/WhiteLabelPage";
import PromptRankOverviewPage from "./pages/PromptRankOverviewPage";
import PromptRankCaseStudy from "./pages/PromptRankCaseStudy";

// Wrapper to force components to remount when routes change
const KeyedRoute = ({ Component }) => {
  const location = useLocation();
  return <Component key={location.pathname} />;
};

function App() {
  return (
    <Router>
      <Box
        sx={{
          width: "100%",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      >
        <Routes>
          <Route path="/" element={<KeyedRoute Component={HomePage} />} />
          <Route
            path="/casestudy"
            element={<KeyedRoute Component={CaseStudy} />}
          />
          <Route
            path="/designsystem"
            element={<KeyedRoute Component={DesignSystem} />}
          />
          <Route
            path="/whitelabel/*"
            element={<KeyedRoute Component={WhiteLabelPage} />}
          />
          <Route
            path="/promptrank-overview"
            element={<KeyedRoute Component={PromptRankOverviewPage} />}
          />
          <Route
            path="/promptrank-casestudy"
            element={<KeyedRoute Component={PromptRankCaseStudy} />}
          />
          <Route
            path="/uidesign"
            element={<KeyedRoute Component={UiDesign} />}
          />
          <Route
            path="/animation"
            element={<KeyedRoute Component={Animation} />}
          />
          <Route
            path="/code"
            element={<KeyedRoute Component={FrontEndCode} />}
          />
          <Route path="/about" element={<KeyedRoute Component={AboutPage} />} />
          <Route
            path="/resume"
            element={<KeyedRoute Component={ResumePage} />}
          />
          <Route
            path="/contact"
            element={<KeyedRoute Component={ContactPage} />}
          />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
