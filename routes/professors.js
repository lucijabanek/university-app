const controller = require('../controllers/professors');
const generalController = require('../controllers/generalControllers');
const router = require('express').Router();
const Professor = require('../database/models').professor;
const { professorSchema } = require('../utils/validationSchemas/professorSchema');
const { paramValidations, queryValidations, generalValidations } = require('../utils/validationSchemas/generalSchemas');
const { generalReqValidator } = require('../middleware/generalReqValidator');
const { checkIDMiddleware } = require('../middleware/checkIDMiddleware');

router
  .route('/')
  .get(/* #swagger.tags=['Professor'] */ queryValidations, generalReqValidator, generalController.getAll(Professor))
  .post(/* #swagger.tags=['Professor'] */ generalValidations, professorSchema, generalReqValidator, generalController.createOne(Professor));
router
  .route('/:id')
  .get(/* #swagger.tags=['Professor'] */ paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Professor), generalController.getOne(Professor))
  .put(/* #swagger.tags=['Professor'] */ paramValidations, generalValidations, professorSchema, generalReqValidator, checkIDMiddleware(Professor), generalController.updateOne(Professor))
  .delete(/* #swagger.tags=['Professor'] */ paramValidations, generalReqValidator, checkIDMiddleware(Professor), generalController.deleteOne(Professor));
router.get(/* #swagger.tags=['Professor'] */ '/:id/courses', paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Professor), controller.getProfessorCourses);

module.exports = router;
