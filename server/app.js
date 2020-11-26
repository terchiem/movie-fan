const express = require('express');
const cors = require('cors');
const db = require('./db');

const omdbRoutes = require('./routes/omdbRoutes');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const PORT = 3005;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(express.json());

app.use('/', movieRoutes);
app.use('/omdb', omdbRoutes);

// General error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err.stack);

  return res.json({
    success: false,
    status: err.status,
    message: err.message
  });
});

app.listen(PORT, function() {
  console.log(`App on port ${PORT}`);
});