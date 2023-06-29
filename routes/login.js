const controller = require('../controllers/authController');
const router = require('express').Router();

router.post(/* #swagger.tags=['Login'] */ '/', controller.signIn);

module.exports = router;
