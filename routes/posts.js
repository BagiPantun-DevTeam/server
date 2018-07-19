var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController');

router.post('/', function (req, res) {
  postController.addNewPost(req, res);
});

router.get('/', function (req, res) {
  postController.getAllPosts(req, res);
});

module.exports = router;
