const mongoose = require('mongoose');
const post = require('../models/post');

class PostController {
  static addNewPost(req, res) {
    post.create({
      content: req.body.content,
      imageSource: req.body.imageSource,
      userId: req.body.userId,
    })
    .then((response) => {
      res
        .status(200)
        .send(response);
    })
    .catch((err) => {
      res
        .status(400)
        .send(err);
    });
  }

  static getAllPosts(req, res) {
    post.find()
    .then((response) => {
      res
        .status(200)
        .send(response);
    })
    .catch((err) => {
      res
        .status(400)
        .send(err);
    });
  }
}

module.exports = PostController;
