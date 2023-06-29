const controller = require('../controllers/exams');
const generalController = require('../controllers/generalControllers');
const router = require('express').Router();
const Exam = require('../database/models').exam;
const { examSchema } = require('../utils/validationSchemas/examSchema');
const { paramValidations, queryValidations, generalValidations } = require('../utils/validationSchemas/generalSchemas');
const { generalReqValidator } = require('../middleware/generalReqValidator');
const { checkIDMiddleware } = require('../middleware/checkIDMiddleware');

router
  .route('/')
  .get(/* #swagger.tags=['Exam'] */ queryValidations, generalReqValidator, generalController.getAll(Exam))
  .post(/* #swagger.tags=['Exam'] */ generalValidations, examSchema, generalReqValidator, generalController.createOne(Exam));
router
  .route('/:id')
  .get(/* #swagger.tags=['Exam'] */ paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Exam), generalController.getOne(Exam))
  .put(/* #swagger.tags=['Exam'] */ paramValidations, generalValidations, examSchema, generalReqValidator, checkIDMiddleware(Exam), generalController.updateOne(Exam))
  .delete(/* #swagger.tags=['Exam'] */ paramValidations, generalReqValidator, checkIDMiddleware(Exam), generalController.deleteOne(Exam));
router.get(/* #swagger.tags=['Exam'] */ '/:id/results', paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Exam), controller.getExamResults);

module.exports = router;
