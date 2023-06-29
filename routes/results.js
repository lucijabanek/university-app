const generalController = require('../controllers/generalControllers');
const router = require('express').Router();
const Result = require('../database/models').result;
const { resultSchema } = require('../utils/validationSchemas/resultSchema');
const { paramValidations, queryValidations, generalValidations } = require('../utils/validationSchemas/generalSchemas');
const { generalReqValidator } = require('../middleware/generalReqValidator');
const { checkIDMiddleware } = require('../middleware/checkIDMiddleware');

router
  .route('/')
  .get(/* #swagger.tags=['Result'] */ queryValidations, generalReqValidator, generalController.getAll(Result))
  .post(/* #swagger.tags=['Result'] */ generalValidations, resultSchema, generalReqValidator, generalController.createOne(Result));
router
  .route('/:id')
  .get(/* #swagger.tags=['Result'] */ paramValidations, queryValidations, generalReqValidator, checkIDMiddleware(Result), generalController.getOne(Result))
  .put(/* #swagger.tags=['Result'] */ paramValidations, generalValidations, resultSchema, generalReqValidator, checkIDMiddleware(Result), generalController.updateOne(Result))
  .delete(/* #swagger.tags=['Result'] */ paramValidations, generalReqValidator, checkIDMiddleware(Result), generalController.deleteOne(Result));

module.exports = router;
