module.exports = function(){
  var app = {};
  //http://expressjs.com/
  app.express     = require('express');
  //https://nodejs.org/api/path.html
  app.path      = require('path');
  //https://nodejs.org/api/http.html#http_http
  app.http      = require('http');
  //https://github.com/expressjs/morgan
  app.morgan          = require('morgan');
  //Esse é o que deixa eu usar req.body https://github.com/expressjs/body-parser
  app.bodyParser      = require('body-parser');
  //https://github.com/expressjs/method-override
  app.methodOverride  = require('method-override');
  //
  app.bcrypt = require('bcryptjs');

  //Db
  var db = {};
  db.mongo = require('mongodb').MongoClient;
  db.mongoURI = 'mongodb://localhost:27017/interusp';
  db.mongoose = require('mongoose');
  db.mongoose.connect(db.mongoURI);
  db.mongoose.connection.on('error', console.error);

  //Schema
  var schema = {};
  schema.account = require(__dirname + '/models/account.js')(db.mongoose);

  //Modulo User
  var user = {};
  user.controllers = {};
  user.controllers.signIn = require(__dirname + '/modules/user/sign-in/sign-in-controller.js')(schema, app.bcrypt);

  //Rotas
  var routes = {};
  routes.routes = require(__dirname + '/routes/router.js')(app.express, routes);
  routes.v1 = {};
  routes.v1.user = require(__dirname + '/routes/v1/user.js')(user);

  return {
    app: app,
    router: routes.routes
  }

}