var jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers.token;
  if (typeof token !== undefined) {
    jwt.verify(token, 'secret', function (err, decoded) {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        if (decoded) {
          next();
        } else {
          res.status(500).json({
            msg: 'wrong token',
          });
        }
      }
    });
  } else {
    res.status(403).json({
      err: 'you must be logged in to post',
    });
  }
}

module.exports = verifyToken;
