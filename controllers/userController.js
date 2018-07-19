const mongoose = require('mongoose');
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

class UserController {
  static signUp(req, res) {
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

  static signIn(req,res){
    let password = req.body.password
    user.findOne({username : req.body.username},(err,data)=>{
      if(data === null){
        res
        .status(401)
        .json({
          msg: "wrong email"
        })
      }else{
        let hash = data.password
        bcrypt.compare(password,hash,(err,result)=>{
          if(true){
            jwt.sign({
              email : data.email,
              username : data.username
            },"secret",(err,token)=>{
              if(err){
                res
                .status(500)
                .json({
                  msg: "internal server error"
                })
              }else{
                res
                .status(200)
                .json(token);
              }
            })
          }else{
            res
            .status(401)
            .json({
              msg: "wrong password"
            })
          }
        })
      }
    })
    
  }
}

module.exports = UserController;
