var jwt = require('jsonwebtoken');
var config = config = require("../../config.js");

exports.authenticate = function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.apiSecret, function(err, decoded) {      
      if (err) {
        return res.status(403).json({ success: false, message: 'Falha na autenticação do token.' });    
      } 
      else {
        // if everything is good, save the request for use in other routes
        req.decoded = decoded;
        res.set({ 'content-type': 'application/json; charset=utf-8' });    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).json({ success: false, message: 'Nenhum token fornecido.' });    

  }
};