const generalController = require('../controllers/generalControllers');
const router = require('express').Router();
const Enrollment = require('../database/models').enrollment;
const { enrollmentSchema } = require('../utils/validationSchemas/enrollmentSchema');
const { paramValidations, queryValidations, generalValidations } = require('../utils/validationSchemas/generalSchemas');
const { generalReqValidator } = require('../middleware/generalReqValidator');
const { checkIDMiddleware } = require('../middleware/checkIDMiddleware');

router
  .route('/')
  .get(/* #swagger.tags=['Enrollments'] */ queryValidations, generalReqValidator, generalController.getAll(Enrollment))
  .post(/* #swagger.tags=['Enrollments'] */ generalValidations, enrollmentSchema, generalReqValidator, generalController.createOne(Enrollment));
router
  .route('/:id')
  .get(/* #swagger.tags=['Enrollments'] */ paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Enrollment), generalController.getOne(Enrollment))
  .put(/* #swagger.tags=['Enrollments'] */ paramValidations, generalValidations, enrollmentSchema, checkIDMiddleware(Enrollment), generalReqValidator, generalController.updateOne(Enrollment))
  .delete(/* #swagger.tags=['Enrollments'] */ paramValidations, generalReqValidator, checkIDMiddleware(Enrollment), generalController.deleteOne(Enrollment));

module.exports = router;
