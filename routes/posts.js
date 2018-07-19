var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController');

router.post('/', function (req, res) {
  postController.addNewPost(req, res);
});

router.get('/', function (req, res) {
  postController.getAllPosts(req, res);
});

router.get('/:userId', function (req, res) {
  postController.getPostByUserId(req, res);
});

module.exports = router;
