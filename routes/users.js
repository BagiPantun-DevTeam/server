var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.post('/', function (req, res, next) {
  userController.addNewUser(req, res);
});

module.exports = router;
