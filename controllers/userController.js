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
        }, function (response) {
          if (err) {
            res
              .status(400)
              .send(err);
          } else {
            res
              .status(200);
          }
        });
      }
    });
  }
}
