const express = require("express");
const db = require('./db');

const app = express();
const PORT = 3005;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(PORT, function() {
  console.log(`App on port ${PORT}`);
});