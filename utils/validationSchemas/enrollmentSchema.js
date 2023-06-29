const { body } = require('express-validator');

module.exports.enrollmentSchema = [
  body('student_id')
    .exists()
    .withMessage('Field \'student_id\' must be provided')
    .isInt()
    .withMessage('Field \'student_id\' must be an integer')
    .notEmpty()
    .withMessage('Field \'student_id\' cannot be empty'),
  body('course_id')
    .exists()
    .withMessage('Field \'course_id\' must be provided')
    .isInt()
    .withMessage('Field \'course_id\' must be an integer')
    .notEmpty()
    .withMessage('Field \'course_id\' cannot be empty')
];
