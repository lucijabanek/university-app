const models = require('../database/models');
const { controllerErrorHandler } = require('../middleware/errorHandler');
const { getPagination } = require('../utils/getPagination');
const { getPagingData } = require('../utils/getPagingData');

exports.getExamResults = controllerErrorHandler(async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  let results = await models.exam.findAndCountAll({
    include: [models.result],
    where: { id: req.params.id },
    limit,
    offset
  });
  results = getPagingData(results, page, limit);
  return res.status(200).json({ data: results });
});
