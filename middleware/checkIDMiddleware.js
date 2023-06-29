const ApiError = require('./ApiError');
const { controllerErrorHandler } = require('./errorHandler');

exports.checkIDMiddleware = (Model) => {
  return controllerErrorHandler(async (req, res, next) => {
    const oneData = await Model.findByPk(req.params.id);
    if (!oneData) {
      throw ApiError.notFound(`No data found for ID ${req.params.id}`);
    }
    next();
  });
};
