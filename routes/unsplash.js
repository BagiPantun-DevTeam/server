var express = require('express');
var router = express.Router();
const Unsplash = require('unsplash-js').default;
const dotenv = require('dotenv');

const unsplash = new Unsplash({
  applicationId: process.env.APP_ACCESS_KEY,
  secret: process.env.APP_SECRET,
  callbackUrl: process.env.CALLBACK_URL,
});

router.get('/', function (req, res) {
  unsplash.photos.getRandomPhoto({ collections: [2385134] })
  .then((photoData) => {
    res
      .send(photoData)
      .status(200);
  })
  .catch((err) => {
    res
      .send(err)
      .status(400);
  })
  // .then(json => {
  //
  // });
});

module.exports = router;
