const models = require('../database/models');
const { controllerErrorHandler } = require('../middleware/errorHandler');
const { getPagination } = require('../utils/getPagination');
const { getPagingData } = require('../utils/getPagingData');

exports.getStudentEnrollments = controllerErrorHandler(async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  let enrollments = await models.enrollment.findAndCountAll({
    include: [models.course],
    where: { student_id: req.params.id },
    limit,
    offset,
    order: [['course_id', 'asc']]
  });
  enrollments = getPagingData(enrollments, page, limit);
  return res.status(200).json({ data: enrollments });
});

exports.getStudentResults = controllerErrorHandler(async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  let results = await models.result.findAndCountAll({
    include: [models.exam],
    where: { student_id: req.params.id },
    limit,
    offset
  });
  results = getPagingData(results, page, limit);
  return res.status(200).json({ data: results });
});
