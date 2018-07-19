const OAuth = require("oauth");
var apiKey = "kczAIlqJdOf8EnPjMvegH0HZgbH3pg8mp3LrstnZMyoBcjYHnK"
var blog = "hacktiv8poem.tumblr.com"
var userToken = "2stGBwLgWccc1ETWKlmPuZysQqhU4MLDpSPhjKWKRUg6RcVyjn"
var userSecret = "MivojbLirqBOH7b5XSMYlrumtUAwRliR3AwV4FUndSRM7pkMa8"
  var oauth = new OAuth.OAuth(
        'https://www.tumblr.com/oauth/request_token'  ,
        'https://www.tumblr.com/oauth/access_token',
        'kczAIlqJdOf8EnPjMvegH0HZgbH3pg8mp3LrstnZMyoBcjYHnK',
        'uKGc8yQN7jbeuoZjLnsBHdwOPVKpyomIpBqxhDPfguXLyHkpaq',
        '1.0A',
        null,
        'HMAC-SHA1'
      );

class Controller {

static retriveBlogPostAmount(req,res){
      oauth.get(
        `https://api.tumblr.com/v2/blog/${blog}/info?api_key=${apiKey}`,
        userToken, //test user token
        userSecret, //test user secret            
        function (e, data, result){
        if(e){
            res.send("you did something")
            // res.json(e)
        }else{
            // res.send("correct")
            res.json(JSON.parse(data))
        }
        }); 
    }


static retrieveAllPost(req,res){
        oauth.get(`https://api.tumblr.com/v2/blog/${blog}/posts/text?api_key=${apiKey}`,
        userToken,
        userSecret,
        (err,data,result)=>{
            if(err){
                res.json(err)
            }else{
                res.json(JSON.parse(data))
            }
          }
        )
        // https://api.tumblr.com/v2/blog/citriccomics.tumblr.com/posts/text?api_key={key}
}

static postText(req,res){
    let terserah = req.body.text
    console.log(terserah)
    oauth.post(`https://api.tumblr.com/v2/blog/${blog}/post`,
    userToken,
    userSecret,
    {type : "text",
     body : terserah 
    },
    (err,data,result)=>{
        if(err){
            console.log(err)
            res.json(err)
            // res.send("you did something wront")
        }else{
            // res.send("you actually did it")
            res.json(JSON.parse(data))
        }
      }
    )
}

static postPicture(req,res){
    let caption = req.body.caption;
    let source = req.body.source;
    oauth.post(`https://api.tumblr.com/v2/blog/${blog}/post`,
    userToken,
    userSecret,
    {type : "photo",
     caption : caption,
     source : source
    },
    (err,data,result)=>{
        if(err){
            console.log(err)
            res.json(err)
            // res.send("you did something wront")
        }else{
            // res.send("you actually did it")
            res.json(JSON.parse(data))
        }
      }
    )
}

static postQuote(req,res){
    let quote = req.body.quote;
    oauth.post(`https://api.tumblr.com/v2/blog/${blog}/post`,
    userToken,
    userSecret,
    {type : "quote",
     quote: quote
    },
    (err,data,result)=>{
        if(err){
            console.log(err)
            res.json(err)
            // res.send("you did something wront")
        }else{
            // res.send("you actually did it")
            res.json(JSON.parse(data))
        }
      }
    )
}

    // "hacktiv8quotes.tumblr.com"
    // api.tumblr.com/v2/blog/{blog-identifier}/posts[/type]?api_key={key
    // api.tumblr.com/v2/blog/{blog-identifier}/info?api_key={key}

}


module.exports = Controller