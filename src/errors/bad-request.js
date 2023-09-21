const CustomAPIError = require('./custom-error');
const { StatusCode } = require('http-status-code');

class BadRequestError extends CustomAPIError {
  constructor (message) {
    super(message);
    this.statusCode = StatusCode.BAD_REQUEST;
  }
}
  
module.exports = BadRequestError;
