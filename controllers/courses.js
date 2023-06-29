const models = require('../database/models');
const { controllerErrorHandler } = require('../middleware/errorHandler');
const { getPagination } = require('../utils/getPagination');
const { getPagingData } = require('../utils/getPagingData');

exports.getCourseEnrollments = controllerErrorHandler(async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  let enrollments = await models.enrollment.findAndCountAll({
    where: { course_id: req.params.id },
    include: [models.student],
    limit,
    offset,
    order: [['student_id', 'asc']]
  });
  enrollments = getPagingData(enrollments, page, limit);
  return res.status(200).json({ data: enrollments });
});

exports.getCourseProfessors = controllerErrorHandler(async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  let professors = await models.course.findAndCountAll({
    include: [models.professor],
    where: { id: req.params.id },
    limit,
    offset
  });
  professors = getPagingData(professors, page, limit);
  return res.status(200).json({ data: professors });
});

exports.getCourseExams = controllerErrorHandler(async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  let exams = await models.course.findAndCountAll({
    include: [models.exam],
    where: { id: req.params.id },
    limit,
    offset
  });
  exams = getPagingData(exams, page, limit);
  return res.status(200).json({ data: exams });
});
