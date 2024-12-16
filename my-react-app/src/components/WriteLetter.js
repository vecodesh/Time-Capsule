import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./WriteLetter.css"; // Your provided CSS

const WriteLetter = () => {
  const [mood, setMood] = useState("");
  const [theme, setTheme] = useState("snow");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Date picker state
  const [errors, setErrors] = useState({});

  const handleMoodChange = (e) => setMood(e.target.value);
  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleMessageChange = (value) => setMessage(value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAttachmentChange = (e) =>
    setAttachments([...attachments, ...e.target.files]);
  const handleDateChange = (date) => setSelectedDate(date);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!mood) newErrors.mood = "Please select a mood.";
    if (!message.trim()) newErrors.message = "Message cannot be empty.";
    if (!email) newErrors.email = "Email is required.";
    else if (!isValidEmail(email)) newErrors.email = "Invalid email address.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Letter submitted successfully!");
      console.log({ mood, theme, message, email, selectedDate, attachments });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  // Format the selected date and time for display
  const formattedDateTime = selectedDate.toLocaleString();

  return (
    <div className="community-container">
      <form className="community-form" onSubmit={handleSubmit}>
        <h2 className="header">Write Your Letter</h2>
  
        <div className="form-group">
          <label htmlFor="mood">Select Mood</label>
          <select id="mood" value={mood} onChange={handleMoodChange}>
            <option value="">-- Choose your mood --</option>
            <option value="happy">Happy</option>
            <option value="excited">Excited</option>
            <option value="reflective">Reflective</option>
          </select>
          {errors.mood && <p className="error">{errors.mood}</p>}
        </div>
  
        <div className="form-group">
          <label htmlFor="theme">Select Theme</label>
          <select id="theme" value={theme} onChange={handleThemeChange}>
            <option value="snow">Classic</option>
            <option value="bubble">Futuristic</option>
          </select>
        </div>
  
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
  
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <ReactQuill
            id="message"
            value={message}
            onChange={handleMessageChange}
            theme={theme}
            placeholder="Write your message here..."
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
  
        <div className="form-group">
          <label htmlFor="date">Select Date and Time</label>
          <DatePicker
            id="date"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15} // Time intervals in minutes
            className="react-datepicker__input-container"
          />
        </div>

        
        <div className="form-group">
          <label>Selected Date and Time:</label>
          <p>{formattedDateTime}</p>
        </div>
  
        <div className="form-group">
          <label htmlFor="attachments">Attach Files</label>
          <input
            type="file"
            id="attachments"
            multiple
            onChange={handleAttachmentChange}
          />
          {attachments.length > 0 && (
            <p>{attachments.length} file(s) selected</p>
          )}
        </div>
  
        <button type="submit">Send Letter</button>
      </form>
    </div>
  );
};

export default WriteLetter;
