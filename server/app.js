const express = require("express");
const db = require('./db');

const movieRoutes = require('./routes/movieRoutes');

const app = express();
const PORT = 3005;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/', movieRoutes);

// General error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err.stack);

  return res.json({
    status: err.status,
    message: err.message
  });
});

app.listen(PORT, function() {
  console.log(`App on port ${PORT}`);
});