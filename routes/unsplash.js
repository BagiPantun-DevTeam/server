var express = require('express');
var router = express.Router();
const axios = require('axios');
require('es6-promise').polyfill();
require('isomorphic-fetch');
const Unsplash = require('unsplash-js').default;
require('dotenv');

router.get('/', function (req, res) {
  axios.get("https://api.unsplash.com/photos/random/?collections=2385134&access_token=cedfa9e95c09e044eb8a11f8405315bab25e0cbf7f1dbef3a544589bbae68ce7")
  .then((jsonPhotoData) => {
    res.status(200)
    res.send(jsonPhotoData.data.urls.regular);
  })
  .catch((err) => {
    res.status(400)
    res.send(err);
  });
});

module.exports = router;
