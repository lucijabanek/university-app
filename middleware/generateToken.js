const jwt = require('jsonwebtoken');

module.exports.generateToken = (user) => {
  const payload = {
    id: user.id,
    role: user.role_id
  };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: process.env.JWT_EXPIRATION_IN_HOURS });
};
