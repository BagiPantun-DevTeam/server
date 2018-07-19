const mongoose = require('mongoose');
const user = require('../models/user');
const bcrypt = require('bcryptjs');

class UserController {
  static addNewUser(req, res) {
    bcrypt.hash(req.body.password, 8, function (err, hash) {
      if (err) {
        res
          .status(400)
          .send(err);
      } else {
        user.create({
          username: req.body.username,
          email: req.body.email,
          password: hash,
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
    });
  }

  static getUserById(req, res) {
    user.findById(req.params.id, function (err, userData) {
      if (err) {
        res
          .status(400)
          .send(err);
      } else {
        res
          .status(200)
          .send(userData);
      }
    });
  }
}

module.exports = UserController;
