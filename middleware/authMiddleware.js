const jwt = require('jsonwebtoken');
const ApiError = require('./ApiError');

module.exports.authMiddleware = (req, res, next) => {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
    throw ApiError.Unauthorized('No token provided');
  }
  const token = req.headers.authorization.split(' ')[1];
  console.log('tok' + token);
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = payload;
    return next();
  } catch (err) {
    throw ApiError.Unauthorized('Unauthorized access');
  }
};
