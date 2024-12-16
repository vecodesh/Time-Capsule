import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./ViewLetter.css";

const ViewLetter = () => {
  const [letters, setLetters] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();
  const email = location.state?.email; // Retrieve email from location state

  // Function to fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      if (!email) {
        setError("No email provided. Please return to the home page and try again.");
        return;
      }
      try {
        const { data } = await axios.get("http://localhost:5001/messages", {
          params: { email }, // Pass the email as a query parameter
        });
        setLetters(data.data); // Access the 'data' field in the response
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError("Failed to load messages. Please try again later.");
      }
    };

    fetchMessages();
  }, [email]);

  // Function to trigger the send-email API
  const handleSendEmails = async () => {
    if (letters.length === 0) {
      alert("No letters to send.");
      return;
    }
  
    // Loop through all the letters and send emails
    for (let letter of letters) {
      const emailDetails = {
        to: letter.email,        // Recipient email
        subject: letter.mood,    // Subject of the email
        text: letter.message,    // Message body (HTML content from letter)
      };
  
      try {
        await axios.post("http://localhost:5002/send-email", emailDetails);
        console.log(`Email sent to: ${emailDetails.to}`);
        alert(`Email sent to: ${emailDetails.to}`);
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email to: " + emailDetails.to);
      }
    }
  };
  
  return (
    <div className="view-letters">
      <h1>View Letters</h1>

      {/* Send Emails Button */}
      <button
        onClick={handleSendEmails}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Send Emails
      </button>

      {/* Display Error Message */}
      {error ? (
        <p>{error}</p>
      ) : letters.length > 0 ? (
        // Display the list of letters
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
