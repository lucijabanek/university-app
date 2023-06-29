const { body } = require('express-validator');

module.exports.studentSchema = [
  body('name')
    .exists()
    .withMessage('Field \'name\' must be provided')
    .isString()
    .withMessage('Field \'name\' must be a string')
    .notEmpty()
    .withMessage('Field \'name\' cannot be an empty string'),
  body('email')
    .trim()
    .exists()
    .withMessage('Field \'email\' must be provided')
    .isEmail()
    .withMessage('Field \'email\' must be an email'),
  body('address')
    .optional({ nullable: true })
    .isString()
    .withMessage('Field \'address\' must be a string')
    .notEmpty()
    .withMessage('Field \'address\' cannot be an empty string'),
  body('phone')
    .optional({ nullable: true })
    .isMobilePhone()
    .withMessage('Field \'phone\' must be a mobile phone number')
    .notEmpty()
    .withMessage('Field \'phone\' cannot be empty'),
  body('major_id')
    .exists()
    .withMessage('Field \'major_id\' must be provided')
    .isInt()
    .withMessage('Field \'major_id\' must be an integer')
    .notEmpty()
    .withMessage('Field \'major_id\' cannot be empty')
];
