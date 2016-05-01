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
  schema.modalidade = require(__dirname + '/models/modalidade.js')(db.mongoose);
  schema.onibus = require(__dirname + '/models/onibus.js')(db.mongoose);
  schema.tracking = require(__dirname + '/models/tracking.js')(db.mongoose);

  //Modulo User
  var user = {};
  user.controllers = {};
  user.controllers.signIn = require(__dirname + '/modules/user/sign-in/sign-in-controller.js')(schema, app.bcrypt);
  user.controllers.login = require(__dirname + '/modules/user/login/login-controller.js')(schema, app.bcrypt, app.jwt, app.config);

  //Modulo Jogo
  var jogo = {};
  jogo.controllers = {};
  jogo.controllers.jogo = require(__dirname + '/modules/jogo/jogo-controller.js')(schema);

  //Modulo Faculdade
  var faculdade = {};
  faculdade.controllers = {};
  faculdade.controllers.faculdades = require(__dirname + '/modules/faculdade/faculdade-controller.js')(schema, db.mongoose);

  // Modulo Local
  var local = {};
  local.controllers = {};
  local.controllers.locais = require(__dirname + '/modules/local/locais-controller.js')(schema);

  //Modulo Modalidade
  var modalidade = {};
  modalidade.controllers = {};
  modalidade.controllers.createModalidade = require(__dirname + '/modules/modalidade/create-modalidade/create-modalidade-controller.js')(schema);
  modalidade.controllers.getModalidades = require(__dirname + '/modules/modalidade/get-modalidades/get-modalidades-controller.js')(schema);
  modalidade.controllers.updateModalidade = require(__dirname + '/modules/modalidade/update-modalidade/update-modalidade-controller.js')(schema);

  // Modulo Onibus
  var onibus = {};
  onibus.controllers = {};
  onibus.controllers.onibus = require(__dirname + '/modules/onibus/onibus-controller.js')(schema);

  // Modulo Tracking
  var tracking = {};
  tracking.controllers = {};
  tracking.controllers.tracking = require(__dirname + '/modules/tracking/tracking-controller.js')(schema, db.mongoose);


  //Rotas
  var routes = {};
  routes.routes = require(__dirname + '/routes/router.js')(app.express, routes);
  routes.v1 = {};
  routes.v1.user = require(__dirname + '/routes/v1/user.js')(user);
  routes.v1.local = require(__dirname + '/routes/v1/local.js')(local);
  routes.v1.jogo = require(__dirname + '/routes/v1/jogo.js')(jogo);
  routes.v1.faculdade = require(__dirname + '/routes/v1/faculdade.js')(faculdade);
  routes.v1.modalidade = require(__dirname + '/routes/v1/modalidade.js')(modalidade);
  routes.v1.onibus = require(__dirname + '/routes/v1/onibus.js')(onibus);
  routes.v1.tracking = require(__dirname + '/routes/v1/tracking.js')(tracking);
  

  return {
    app: app,
    router: routes.routes
  }

}
