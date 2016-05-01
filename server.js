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
  //
  app.jwt = require('jsonwebtoken');
  //
  app.config = require('./config');

  //Db
  var db = {};
  db.mongo = require('mongodb').MongoClient;
  db.mongoose = require('mongoose');
  db.mongoose.connect(app.config.mongoURI);
  db.mongoose.connection.on('error', console.error);

  //Schema
  var schema = {};
  schema.account = require(__dirname + '/models/account.js')(db.mongoose);
  schema.local = require(__dirname + '/models/local.js')(db.mongoose);
  schema.jogo = require(__dirname + '/models/jogo.js')(db.mongoose);
  schema.faculdade = require(__dirname + '/models/faculdade.js')(db.mongoose);


  //Modulo User
  var user = {};
  user.controllers = {};
  user.controllers.signIn = require(__dirname + '/modules/user/sign-in/sign-in-controller.js')(schema, app.bcrypt);
  user.controllers.login = require(__dirname + '/modules/user/login/login-controller.js')(schema, app.bcrypt, app.jwt, app.config);

  // Modulo Local
  var local = {};
  local.controllers = {};
  local.controllers.locais = require(__dirname + '/modules/local/locais-controller.js')(schema);


  //Modulo Jogo
  var jogo = {};
  jogo.controllers = {};
  jogo.controllers.getJogos = require(__dirname + '/modules/jogo/get-jogos/get-jogos-controller.js')(schema);
  jogo.controllers.updateJogo = require(__dirname + '/modules/jogo/update-jogo/update-jogo-controller.js')(schema);
  jogo.controllers.createJogo = require(__dirname + '/modules/jogo/create-jogo/create-jogo-controller.js')(schema);

  //Modulo User
  var faculdade = {};
  faculdade.controllers = {};
  faculdade.controllers.getAll = require(__dirname + '/modules/faculdade/get-all/get-all-controller.js')(schema);

  //Rotas
  var routes = {};
  routes.routes = require(__dirname + '/routes/router.js')(app.express, routes);
  routes.v1 = {};
  routes.v1.user = require(__dirname + '/routes/v1/user.js')(user);
  routes.v1.local = require(__dirname + '/routes/v1/local.js')(local);
  routes.v1.jogo = require(__dirname + '/routes/v1/jogo.js')(jogo);
  routes.v1.faculdade = require(__dirname + '/routes/v1/faculdade.js')(faculdade);


  return {
    app: app,
    router: routes.routes
  }

}
