const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');
const { UnauthenticatedError } = require('../errors');

const authenticationMiddleware = async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith('Bearer '))
    throw new UnauthenticatedError('No token provided');

  const token = auth.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route');
  }
}; 

module.exports = { authenticationMiddleware };