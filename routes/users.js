var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const Middleware = require('../middleware/token');
const tokenMiddleware = Middleware.verifyToken;
const tumblrController = require("../controllers/tumblrController")

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.post('/quotes', tumblrController.postQuote);
router.post('/text',tumblrController.postText);
router.post('/image', tumblrController.postPicture);

// router.post('/signin')

module.exports = router;
