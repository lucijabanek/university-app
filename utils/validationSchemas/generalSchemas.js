const { body, param, query } = require('express-validator');

module.exports.paramValidations = [
  param('id')
    .isInt()
    .withMessage(':id must be an integer')
];
module.exports.queryValidations = [
  query('include')
    .optional(true)
    .not()
    .isInt()
    .withMessage('?include= cannot be an integer')
    .not()
    .isEmpty()
    .withMessage('Include query cannot be empty'),
  query('page')
    .optional(true)
    .isInt({ min: 0 })
    .withMessage('Value after page= must be a positive integer')
    .not()
    .isEmpty()
    .withMessage('page= query cannot be empty'),
  query('size')
    .optional(true)
    .isInt({ min: 1 })
    .withMessage('Value after size= must be an integer more than or equal to 1')
    .not()
    .isEmpty()
    .withMessage('size= query cannot be empty')
];
module.exports.generalValidations = [
  body('id')
    .not()
    .exists()
    .withMessage('Cannot set property of \'id\''),
  body('created_at')
    .not()
    .exists()
    .withMessage('Cannot set property of \'created_at\''),
  body('updated_at')
    .not()
    .exists()
    .withMessage('Cannot set property of \'updated_at\'')
];
