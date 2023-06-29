const { body } = require('express-validator');

module.exports.examSchema = [
  body('name')
    .exists()
    .withMessage('Field \'name\' must be provided')
    .isString()
    .withMessage('Field \'name\' must be a string')
    .notEmpty()
    .withMessage('Field \'name\' cannot be an empty string'),
  body('date_time')
    .optional({ nullable: true })
    .isDate()
    .withMessage('Field \'date_time\' must be a date in format YYYY-MM-DDThh:mm:ss.000+Z')
    .notEmpty()
    .withMessage('Field \'date_time\' cannot be empty'),
  body('course_id')
    .exists()
    .withMessage('Field \'course_id\' must be provided')
    .isInt()
    .withMessage('Field \'course_id\' must be an integer')
    .notEmpty()
    .withMessage('Field \'course_id\' cannot be empty')
];
