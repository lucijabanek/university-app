const { body } = require('express-validator');

module.exports.courseSchema = [
  body('name')
    .exists()
    .withMessage('Field \'name\' must be provided')
    .isString()
    .withMessage('Field \'name\' must be a string')
    .notEmpty()
    .withMessage('Field \'name\' cannot be an empty string'),
  body('credit_hours')
    .exists()
    .withMessage('Field \'credit_hours\' must be provided')
    .isInt({ min: 1 })
    .withMessage('Field \'credit_hours\' must be an integer greater than or equal to 1')
    .notEmpty()
    .withMessage('Field \'credit_hours\' cannot be an empty'),
  body('professor_id')
    .exists()
    .withMessage('Field \'professor_id\' must be provided')
    .isInt()
    .withMessage('Field \'professor_id\' must be an integer')
    .notEmpty()
    .withMessage('Field \'professor_id\' cannot be empty'),
  body('major_id')
    .exists()
    .withMessage('Field \'major_id\' must be provided')
    .isInt()
    .withMessage('Field \'major_id\' must be an integer')
    .notEmpty()
    .withMessage('Field \'major_id\' cannot be empty')
];
