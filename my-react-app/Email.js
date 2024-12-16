const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5002;

// Enable CORS to allow requests from frontend (localhost:3000)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vjsyam17@gmail.com', // Your Gmail address
    pass: 'mbvw stka ktcc fkda', // Your application-specific password
  },
});

// Endpoint to handle sending emails
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body; // Extract email details from request body

  // Validate request body
  if (!to || !subject || !text) {
    return res.status(400).json({ message: 'Missing email fields: to, subject, or text' });
  }

  // Email options
  const mailOptions = {
    from: 'vjsyam17@gmail.com',  // Sender's email
    to: to,                     // Receiver's email (from request)
    subject: subject,           // Subject (from request)
    text: text,                 // Message body (from request)
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    res.status(200).json({ message: 'Email sent successfully!', info: info.response });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Email server running on http://localhost:${port}`);
});
