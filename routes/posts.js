var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController');

router.post('/', function (req, res) {
  postController.addNewPost(req, res);
});

module.exports = router;
