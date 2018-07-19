var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/', function (req, res, next) {
  usersRouter.addNewUser(req, res);
});

module.exports = router;
