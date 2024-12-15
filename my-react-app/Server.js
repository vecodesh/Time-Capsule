const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Path to the JSON file
const filePath = path.join(__dirname, 'User.json');
console.log('File Path:', filePath); // Log file path for debugging

// POST route to add a new user
app.post('/Users', (req, res) => {
  const newUser = req.body;
  console.log('New user data:', newUser); // Log incoming data for debugging

  // Read existing file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code === 'ENOENT') {
      // If file doesn't exist, create it
      console.log('File does not exist. Creating a new file...');
      return fs.writeFile(filePath, JSON.stringify([newUser], null, 2), (writeErr) => {
        if (writeErr) {
          console.error('Error creating file:', writeErr);
          return res.status(500).json({ message: 'Error creating file', error: writeErr });
        }
        console.log('File created and user added:', newUser);
        res.json({ message: 'User added successfully', user: newUser });
      });
    } else if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ message: 'Error reading file', error: err });
    }

    let users;
    try {
      users = JSON.parse(data || '[]'); // Parse the existing data
      console.log('Existing users:', users);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return res.status(500).json({ message: 'Error parsing JSON', error: parseError });
    }

    // Add the new user
    users.push(newUser);
    console.log('Updated users:', users);

    // Write updated data back to file
    fs.writeFile(filePath, JSON.stringify(users, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
        return res.status(500).json({ message: 'Error writing file', error: writeErr });
      }
      console.log('File updated with new user:', newUser);
      res.json({ message: 'User added successfully', user: newUser });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
