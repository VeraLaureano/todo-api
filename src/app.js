require('express-async-errors');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('<h1>Home</h1>');
});

module.exports = app;