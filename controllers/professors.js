const models = require('../database/models');
const { controllerErrorHandler } = require('../middleware/errorHandler');
const { getPagination } = require('../utils/getPagination');
const { getPagingData } = require('../utils/getPagingData');

exports.getProfessorCourses = controllerErrorHandler(async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  let courses = await models.professor.findAndCountAll({
    include: [models.course],
    where: { id: req.params.id },
    limit,
    offset
  });
  courses = getPagingData(courses, page, limit);
  return res.status(200).json({ data: courses });
});
