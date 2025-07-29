// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/submit-password', (req, res) => {
  const password = req.body.password;
  if (!password) return res.status(400).json({ message: "No password sent" });

  fs.appendFileSync('names.txt', password + '\n');
  res.json({ message: "Password stored" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.post('/submit-password', (req, res) => {
  const password = req.body.password;
  if (!password) return res.status(400).json({ message: "No password sent" });

  const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
  const line = `[${timestamp}] ${password}\n`;

  fs.appendFileSync('names.txt', line);
  res.json({ message: "Password stored with timestamp!" });
});
