const controller = require('../controllers/departments');
const generalController = require('../controllers/generalControllers');
const router = require('express').Router();
const Department = require('../database/models').department;
const { departmentSchema } = require('../utils/validationSchemas/departmentSchema');
const { paramValidations, queryValidations, generalValidations } = require('../utils/validationSchemas/generalSchemas');
const { generalReqValidator } = require('../middleware/generalReqValidator');
const { checkIDMiddleware } = require('../middleware/checkIDMiddleware');

router
  .route('/')
  .get(/* #swagger.tags=['Department'] */ queryValidations, generalReqValidator, generalController.getAll(Department))
  .post(/* #swagger.tags=['Department'] */ generalValidations, departmentSchema, generalReqValidator, generalController.createOne(Department));
router
  .route('/:id')
  .get(/* #swagger.tags=['Department'] */ paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Department), generalController.getOne(Department))
  .put(/* #swagger.tags=['Department'] */ paramValidations, generalValidations, departmentSchema, generalReqValidator, checkIDMiddleware(Department), generalController.updateOne(Department))
  .delete(/* #swagger.tags=['Department'] */ paramValidations, generalReqValidator, checkIDMiddleware(Department), generalController.deleteOne(Department));
router.get(/* #swagger.tags=['Department'] */ '/:id/professors', paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Department), controller.getProfessorsByDepartment);

module.exports = router;
