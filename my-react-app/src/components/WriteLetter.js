import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./WriteLetter.css";

const WriteLetter = () => {
  const [mood, setMood] = useState("");
  const [theme, setTheme] = useState("classic");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [errors, setErrors] = useState({});

  const handleMoodChange = (e) => setMood(e.target.value);
  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleMessageChange = (value) => setMessage(value); // Updated for Quill editor
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAttachmentChange = (e) =>
    setAttachments([...attachments, ...e.target.files]);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!mood) newErrors.mood = "Please select a mood.";
    if (!theme) newErrors.theme = "Please select a theme.";
    if (!message.trim()) newErrors.message = "Message cannot be empty.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ mood, theme, message, email, attachments });
      alert("Letter submitted successfully!");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container
      maxWidth="md"
      className="letter-container"
      sx={{
        mt: 5,
        mb: 0,
        p: 4,
        borderRadius: 4,
        boxShadow: 4,
        backgroundColor: "#f3f4f6",
        fontFamily: '"Roboto", Arial, sans-serif',
      }}
    >
      <Typography
        variant="h4"
        className="custom-title"
        gutterBottom
        textAlign="center"
        color="#fff"
        sx={{
          backgroundColor: "#1f5ba5",
          borderRadius: "8px",
          p: 2,
          fontWeight: "bold",
          fontFamily: '"Roboto", Arial, sans-serif',
        }}
      >
        Community Letters
      </Typography>
      <Box component="form" onSubmit={handleSubmit} className="form-animate">
        <FormControl fullWidth margin="normal" error={!!errors.mood}>
          <InputLabel>Select Mood</InputLabel>
          <Select value={mood} onChange={handleMoodChange} label="Select Mood">
            <MenuItem value="">Choose your mood</MenuItem>
            <MenuItem value="happy">Happy</MenuItem>
            <MenuItem value="excited">Excited</MenuItem>
            <MenuItem value="reflective">Reflective</MenuItem>
          </Select>
          {errors.mood && (
            <Typography color="error" variant="caption">
              {errors.mood}
            </Typography>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal" error={!!errors.theme}>
          <InputLabel>Select Theme</InputLabel>
          <Select value={theme} onChange={handleThemeChange} label="Select Theme">
            <MenuItem value="classic">Classic</MenuItem>
            <MenuItem value="futuristic">Futuristic</MenuItem>
            <MenuItem value="scrapbook">Scrapbook</MenuItem>
          </Select>
          {errors.theme && (
            <Typography color="error" variant="caption">
              {errors.theme}
            </Typography>
          )}
        </FormControl>

        <TextField
          label="Your Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
          error={!!errors.email}
          helperText={errors.email}
        />

        <Typography variant="body2" sx={{ mb: 1 }}>
          Write your message:
        </Typography>
        <Box
          sx={{
            minHeight: "300px",
            maxHeight: "400px",
            overflow: "auto",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <ReactQuill
            value={message}
            onChange={handleMessageChange}
            theme="snow"
            placeholder="Write your message here..."
          />
        </Box>
        {errors.message && (
          <Typography color="error" variant="caption">
            {errors.message}
          </Typography>
        )}

        <Box display="flex" alignItems="center" marginY={2}>
          <IconButton color="primary" component="label">
            <AttachFileIcon fontSize="large" />
            <input
              type="file"
              hidden
              multiple
              onChange={handleAttachmentChange}
            />
          </IconButton>
          <Typography variant="body2" marginLeft={1}>
            {attachments.length > 0
              ? `${attachments.length} file(s) attached`
              : "Attach files"}
          </Typography>
        </Box>

        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: "#3f51b5",
            color: "#fff",
            "&:hover": { backgroundColor: "#303f9f" },
            fontFamily: '"Roboto", Arial, sans-serif',
          }}
        >
          Send to Future
        </Button>
      </Box>
    </Container>
  );
};

export default WriteLetter;
