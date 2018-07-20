const mongoose = require('mongoose');
const post = require('../models/post');
const user = require('../models/user')
var jwt = require('jsonwebtoken');
class PostController {
  static addNewPost(req, res) {
    let token = req.headers.token;
    jwt.verify(token,"secret",(err,decoded)=>{
      user.find({username: decoded.username},(err,currentUser)=>{
        // console.log('hahaha ', currentUser)
        let id = currentUser[0].id;
        post.create({
          content: req.body.content,
          imageSource: req.body.imageSource,
          owner: mongoose.Types.ObjectId(id),
        })
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res
            .status(400)
            .send(err);
        });
        
      })
    })
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

  static getPostByUserfunction (req, res) {
  postController.addNewPost(req, res);
}Id(req, res) {
    post.find({
      owner: req.params.userId,
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


  static getSpecificPost(req,res){
    let uniquePostArr = []
    let token = req.headers.token;
    jwt.verify(token, "secret", (err,decoded)=>{
      if(err){
        console.log(err)
      }else{
        let username = decoded.username
          post.find({})
          .populate("owner")
          .exec((err,data)=>{
            if(err){
              res.status(500).json(err)
            }else{
              for(let z = 0; z < data.length ; z ++){
                let currentUser = data[z]
                if(currentUser.owner != null  && currentUser.owner.username ===username){
                  // console.log("woof")
                  // console.log(currentUser)
                  uniquePostArr.push(currentUser.imageSource)
                }
              }
              console.log(uniquePostArr)
              res.json(uniquePostArr);
            }
          })


      }
    })
  }
}

module.exports = PostController;
