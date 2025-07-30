const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json());

// ✅ POST route to save passwords with timestamp
app.post('/submit-password', (req, res) => {
  const password = req.body.password;
  if (!password) return res.status(400).json({ message: "No password sent" });

  const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
  const line = `[${timestamp}] ${password}\n`;

  fs.appendFileSync('names.txt', line);
  res.json({ message: "Password stored with timestamp!" });
});

// ✅ GET route to read passwords
app.get('/get-passwords', (req, res) => {
  const filePath = path.join(__dirname, 'names.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file.');
    res.send(data);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
