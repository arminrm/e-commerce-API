const CustomAPIError = require("./custom-api.js")

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }
}

module.exports = {UnauthenticatedError, UnauthorizedError}