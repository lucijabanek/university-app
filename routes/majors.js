const controller = require('../controllers/majors');
const generalController = require('../controllers/generalControllers');
const router = require('express').Router();
const Major = require('../database/models').major;
const { majorSchema } = require('../utils/validationSchemas/majorSchema');
const { paramValidations, queryValidations, generalValidations } = require('../utils/validationSchemas/generalSchemas');
const { generalReqValidator } = require('../middleware/generalReqValidator');
const { checkIDMiddleware } = require('../middleware/checkIDMiddleware');

router
  .route('/')
  .get(/* #swagger.tags=['Major'] */ queryValidations, generalReqValidator, generalController.getAll(Major))
  .post(/* #swagger.tags=['Major'] */ generalValidations, majorSchema, generalReqValidator, generalController.createOne(Major));
router
  .route('/:id')
  .get(/* #swagger.tags=['Major'] */ paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Major), generalController.getOne(Major))
  .put(/* #swagger.tags=['Major'] */ paramValidations, generalValidations, majorSchema, generalReqValidator, checkIDMiddleware(Major), generalController.updateOne(Major))
  .delete(/* #swagger.tags=['Major'] */ paramValidations, generalReqValidator, checkIDMiddleware(Major), generalController.deleteOne(Major));
router.get(/* #swagger.tags=['Major'] */ '/:id/students', paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Major), controller.getStudentsOnMajor);
router.get(/* #swagger.tags=['Major'] */ '/:id/courses', paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Major), controller.getCoursesByMajor);

module.exports = router;
