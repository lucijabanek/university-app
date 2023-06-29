const { body } = require('express-validator');

module.exports.majorSchema = [
  body('name')
    .exists()
    .withMessage('Field \'name\' must be provided')
    .isString()
    .withMessage('Field \'name\' must be a string')
    .notEmpty()
    .withMessage('Field \'name\' cannot be an empty string')
];
