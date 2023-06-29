const ApiError = require('./ApiError');

module.exports.controllerErrorHandler = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

module.exports.apiErrorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }

  return res.status(500).json('Something went wrong!');
};
