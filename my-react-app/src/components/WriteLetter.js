import React, { useState } from "react";
import "./WriteLetter.css";  // Import CSS for WriteLetter

const WriteLetter = () => {
    const [mood, setMood] = useState("");
    const [theme, setTheme] = useState("classic");
    const [attachments, setAttachments] = useState([]);

    const handleMoodChange = (e) => setMood(e.target.value);
    const handleThemeChange = (e) => setTheme(e.target.value);
    const handleAttachmentChange = (e) => setAttachments([...attachments, ...e.target.files]);

    return (
        <div className="container py-5">
            <h2>Write a Letter</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="mood" className="form-label">Select Mood</label>
                    <select id="mood" className="form-select" value={mood} onChange={handleMoodChange}>
                        <option value="">Choose your mood</option>
                        <option value="happy">Happy</option>
                        <option value="excited">Excited</option>
                        <option value="reflective">Reflective</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="theme" className="form-label">Select Theme</label>
                    <select id="theme" className="form-select" value={theme} onChange={handleThemeChange}>
                        <option value="classic">Classic</option>
                        <option value="futuristic">Futuristic</option>
                        <option value="scrapbook">Scrapbook</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="attachments" className="form-label">Add Attachments</label>
                    <input type="file" id="attachments" className="form-control" multiple onChange={handleAttachmentChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit Letter</button>
            </form>
        </div>
    );
};

export default WriteLetter;
