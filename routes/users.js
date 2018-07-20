var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const Middleware = require('../middleware/token');
const tokenMiddleware = Middleware.verifyToken;
<<<<<<< HEAD
const tumblrController = require("../controllers/tumblrController")

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.post('/quotes',tokenMiddleware, tumblrController.postQuote);
router.post('/text',tokenMiddleware,tumblrController.postText);
router.post('/image',tokenMiddleware,tumblrController.postPicture);
=======

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
>>>>>>> 2967702e83858f3f706c040ef0143b33cea25489

// router.post('/signin')

router.get('/:id', function (req, res, next) {
  userController.getUserById(req, res);
});

module.exports = router;
