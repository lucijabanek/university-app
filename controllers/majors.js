const models = require('../database/models');
const { controllerErrorHandler } = require('../middleware/errorHandler');
const { getPagination } = require('../utils/getPagination');
const { getPagingData } = require('../utils/getPagingData');

exports.getStudentsOnMajor = controllerErrorHandler(async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  let students = await models.major.findAndCountAll({
    where: { id: req.params.id },
    include: [models.student],
    limit,
    offset
  });
  students = getPagingData(students, page, limit);
  return res.status(200).json({ data: students });
});

exports.getCoursesByMajor = controllerErrorHandler(async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  let courses = await models.major.findAndCountAll({
    where: { id: req.params.id },
    include: [models.course],
    limit,
    offset
  });
  courses = getPagingData(courses, page, limit);
  return res.status(200).json({ data: courses });
});
