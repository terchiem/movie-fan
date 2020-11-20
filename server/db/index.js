const mongoose = require('mongoose');

require("dotenv").config();

const DB_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(process.env.DB_URL, DB_CONFIG)
  .catch(e => {
      console.error('Connection error', e.message)
  });

const db = mongoose.connection;

module.exports = db;