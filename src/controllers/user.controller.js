const jwt = require('jsonwebtoken');  
const CustomAPIError = require('../errors/custom-error');
const { JWT_SECRET } = require('../config/env');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !password) {
    throw new BadRequestError('Please privide username, email and password', 400);
  }

  if (password !== confirmPassword) {
    throw new CustomAPIError('Passwords not match', 500);
  }

  // just for demo, normally provided by DB
  const id = new Date().getDate();

  const token = jwt.sign({id, username}, JWT_SECRET, {expiresIn: '1d'});

  res.status(200).json({token});
};

const dashboad = async ({user: { username }}, res) => {
  const luchyNumber = Math.floor(Math.random()*100);
  
  return res.status(200).json({
    msg: `Hello, ${username}`,
    secret: `Lucky number: ${luchyNumber}`
  });
};

module.exports = {
  login, 
  dashboad
};