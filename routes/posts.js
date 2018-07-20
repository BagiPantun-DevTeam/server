var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.addNewPost);

router.get('/',postController.getAllPosts);

router.get('/userpost', postController.getSpecificPost)
// router.get('/:userId', postController.getPostByUserId);

module.exports = router;
