import React from "react";
import "./Achievements.css";
import awardImage from "./award.png";

const Achievements = () => {
    const achievements = [
        { id: 1, title: "First Letter Written", description: "You wrote your first letter to the community!" },
        { id: 2, title: "Future Thinker", description: "A visionary who thinks ahead of time." },
        { id: 3, title: "Five Letters Club", description: "You’ve written 5 letters to the community!" },
        { id: 4, title: "Global Contributor", description: "You contributed letters from across the globe." },
        { id: 5, title: "Top Writer", description: "You’ve been the most consistent writer!" },
        { id: 6, title: "Creative Genius", description: "You achieved creative brilliance with your letters." }
    ];

    return (
        <div className="achievements-container">
            {/* Trophy Section */}
            <div className="trophy-section">
                <img src={awardImage} alt="Award Trophy" className="trophy-img" />
            </div>

            {/* Achievements Section */}
            <div className="achievements-content">
                <h2 className="achievements-header">Your Achievements</h2>
                {achievements.map((item) => (
                    <div key={item.id} className="achievement-item">
                        <div className="number-box">{item.id}</div>
                        <div className="achievement-text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
