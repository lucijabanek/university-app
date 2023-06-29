const models = require('../database/models');
const { controllerErrorHandler } = require('../middleware/errorHandler');
const { getPagination } = require('../utils/getPagination');
const { getPagingData } = require('../utils/getPagingData');

exports.getProfessorsByDepartment = controllerErrorHandler(async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  let department = await models.department.findAndCountAll({
    where: { id: req.params.id },
    include: [models.professor],
    limit,
    offset
  });
  department = getPagingData(department, page, limit);
  return res.status(200).json({ data: department });
});
