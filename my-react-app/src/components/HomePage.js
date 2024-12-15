import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import "./HomePage.css";

const HomePage= () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="banner">
        <video autoPlay loop muted playsInline>
          <source src={require('./Home.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="navbar">
          <div className="nav-links">
            <Link to="/write-letter" className="btn btn-primary mx-2">Write a Letter</Link>
            <Link to="/view-letters" className="btn btn-secondary mx-2">View Letters</Link>
            <Link to="/achievements" className="btn btn-success mx-2">Achievements</Link>
            <Link to="/community" className="btn btn-info mx-2">Community</Link>
          </div>
          <div className="search-bar">
            <TextField
              label="Search"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              fullWidth
            />
            <Button className="search-button">
              <FaSearch />
            </Button>
          </div>
        </div>
        <div className="welcome">
          <h1>Welcome to Letofo</h1>
          <p className="p">Capture, cherish, and relive the moments that matter most and keep
          your memories safe with encrypted and cloud-based storage.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
