import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./ViewLetter.css";

const ViewLetter = () => {
  const [letters, setLetters] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();
  const email = location.state?.email; // Retrieve email from location state

  useEffect(() => {
    const fetchMessages = async () => {
      if (!email) {
        setError("No email provided. Please return to the home page and try again.");
        return;
      }
      try {
        const response = await axios.get("http://localhost:5001/messages", {
          params: { email }, // Pass the email as a query parameter
        });
        setLetters(response.data.data); // Access the 'data' field in the response
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError("Failed to load messages. Please try again later.");
      }
    };

    fetchMessages();
  }, [email]);

  return (
    <div className="view-letters">
      <h1>View Letters</h1>
      {error ? (
        <p>{error}</p>
      ) : letters.length > 0 ? (
        letters.map((letter, index) => (
          <div className="letter" key={index}>
            <h2>{letter.mood}</h2>
            <p dangerouslySetInnerHTML={{ __html: letter.message }}></p>
            <p>Date: {new Date(letter.date).toLocaleString()}</p>
            {letter.attachments && letter.attachments.length > 0 ? (
              <p>Attachments: {letter.attachments.join(", ")}</p>
            ) : (
              <p>Attachments: None</p>
            )}
          </div>
        ))
      ) : (
        <p>No letters available.</p>
      )}
    </div>
  );
};

export default ViewLetter;
