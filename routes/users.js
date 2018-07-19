var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const Middleware = require('../middleware/token');
const tokenMiddleware = Middleware.verifyToken;

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);

// router.post('/signin')

module.exports = router;
