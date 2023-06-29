const controller = require('../controllers/students');
const generalController = require('../controllers/generalControllers');
const router = require('express').Router();
const Student = require('../database/models').student;
const { studentSchema } = require('../utils/validationSchemas/studentSchema');
const { paramValidations, queryValidations, generalValidations } = require('../utils/validationSchemas/generalSchemas');
const { generalReqValidator } = require('../middleware/generalReqValidator');
const { authMiddleware } = require('../middleware/authMiddleware');
const { checkIDMiddleware } = require('../middleware/checkIDMiddleware');

router
  .route('/')
  .get(/* #swagger.tags=['Student'] */ queryValidations, generalReqValidator, generalController.getAll(Student))
  .post(/* #swagger.tags=['Student'] */ generalValidations, studentSchema, generalReqValidator, generalController.createOne(Student));
router
  .route('/:id')
  .get(/* #swagger.tags=['Student'] */ paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Student), generalController.getOne(Student))
  .put(/* #swagger.tags=['Student'] */ paramValidations, generalValidations, studentSchema, generalReqValidator, checkIDMiddleware(Student), generalController.updateOne(Student))
  .delete(/* #swagger.tags=['Student'] */ paramValidations, generalReqValidator, checkIDMiddleware(Student), generalController.deleteOne(Student));
router.get(/* #swagger.tags=['Student'] */ '/:id/enrollments', paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Student), controller.getStudentEnrollments);
router.get(/* #swagger.tags=['Student'] */ '/me/results', authMiddleware, queryValidations, generalReqValidator, checkIDMiddleware(Student), controller.getStudentResults);

module.exports = router;
