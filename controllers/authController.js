const User = require('../database/models').user;
const ApiError = require('../middleware/ApiError');
const { controllerErrorHandler } = require('../middleware/errorHandler');
const { generateToken } = require('../middleware/generateToken');

exports.signIn = controllerErrorHandler(async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    throw ApiError.notFound('User does not exist');
  }
  if (req.body.password !== user.password) {
    throw ApiError.badRequest('Password Incorrect');
  }
  const token = generateToken(user);

  //   res.cookie('token', token, { httpOnly: true });
  return res.status(200).json({ token });
});
