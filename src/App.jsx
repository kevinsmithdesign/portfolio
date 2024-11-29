import { Button, Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CaseStudy from "./pages/CaseStudy";
import DesignSystem from "./pages/DesignSystem";
import UiDesign from "./pages/UiDesign";
import Animation from "./pages/Animation";
import FrontEndCode from "./pages/FrontEndCode";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ResumePage from "./pages/ResumePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/designsystem" element={<DesignSystem />} />
        <Route path="/uidesign" element={<UiDesign />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/code" element={<FrontEndCode />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
