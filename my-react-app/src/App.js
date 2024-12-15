import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HomePage from "./components/HomePage";
import WriteLetter from "./components/WriteLetter";
import Achievements from "./components/Achievements";
import "./App.css"; 

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/write-letter" element={<WriteLetter />} />
              <Route path="/achievements" element={<Achievements />} />
          </Routes>
      </Router>
  );
};

export default App;
