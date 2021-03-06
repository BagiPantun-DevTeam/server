var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const Middleware = require('../middleware/token');
const tokenMiddleware = Middleware.verifyToken;
const tumblrController = require('../controllers/tumblrController');

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.get('/:id', function (req, res, next) {
  userController.getUserById(req, res);
});

// router.post('/quotes',tokenMiddleware, tumblrController.postQuote);
// router.post('/text',tokenMiddleware,tumblrController.postText);
// router.post('/image',tokenMiddleware,tumblrController.postPicture);

module.exports = router;
