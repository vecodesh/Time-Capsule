import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";  // Import CSS for HomePage

const HomePage = () => {
    return (
        <div className="container py-5">
            <h1>Welcome to Your Time Capsule</h1>
            <p>Start creating letters, set delivery dates, and explore your memories.</p>
            <div className="mt-4">
                <Link to="/write-letter" className="btn btn-primary mx-2">Write a Letter</Link>
                <Link to="/view-letters" className="btn btn-secondary mx-2">View Letters</Link>
                <Link to="/achievements" className="btn btn-success mx-2">Achievements</Link>
                <Link to="/community" className="btn btn-info mx-2">Community</Link>
            </div>
        </div>
    );
};

export default HomePage;
