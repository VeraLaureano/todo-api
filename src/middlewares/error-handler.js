const CustomAPIError = require('../errors/custom-error');
const errorHandlerMiddleware = (err, _req, res) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res.status(500).send('Something went wrong try again later');
};

module.exports = errorHandlerMiddleware;