const { body } = require('express-validator');

module.exports.resultSchema = [
  body('exam_id')
    .exists()
    .withMessage('Field \'exam_id\' must be provided')
    .isInt()
    .withMessage('Field \'exam_id\' must be an integer')
    .notEmpty()
    .withMessage('Field \'exam_id\' cannot be empty'),
  body('student_id')
    .exists()
    .withMessage('Field \'student_id\' must be provided')
    .isInt()
    .withMessage('Field \'student_id\' must be an integer')
    .notEmpty()
    .withMessage('Field \'student_id\' cannot be empty'),
  body('grade')
    .optional({ nullable: true })
    .isInt({ min: 1, max: 5 })
    .withMessage('Field \'grade\' must be an integer and between min: 1 and max: 5')
    .notEmpty()
    .withMessage('Field \'grade\' cannot be empty')
];
