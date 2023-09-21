require('express-async-errors');
const express = require('express');
const app = express();
const userRouter = require('./routes/user.route');

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('<h1>Home</h1>');
});
app.use('/api/v1/user', userRouter);

module.exports = app;  