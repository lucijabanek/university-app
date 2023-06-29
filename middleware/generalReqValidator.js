const { validationResult } = require('express-validator');
const ApiError = require('./ApiError');

module.exports.generalReqValidator = (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return next(ApiError.badRequest({ message: result.array() }));
  }
  return next();
};
