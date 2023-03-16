const CustomError = require('../errors/error');
const jwt = require('jsonwebtoken');

const authenticateUser = (token) => {
    
  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
  
  try {
    const userInfo = jwt.verify(token, process.env.JWT_SECRET);
    return userInfo
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
  
};

module.exports = {
  authenticateUser
};