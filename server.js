
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('express-error-handler'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  config = require("./config"),
  routes = require('./routes'),
  api = require('./routes/api'),
  apiUsers = require('./routes/apiUsers'),
  apiAccounts = require('./routes/apiAccounts'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';
var mongoURI = config.mongoURI;
app.set('apiSecret', config.apiSecret);

// development only
if (env === 'development') {
  app.use(errorHandler());
  app.use(bodyParser.json());
  bodyParser.urlencoded({extended: true});
}

// production only
if (env === 'production') {
}

// Mongo connection
mongoose.connect(mongoURI);
var db = mongoose.connection;
db.on('error', console.error);

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// Posts API
app.get('/api/posts', api.posts);
app.get('/api/post/:id', api.post);
app.post('/api/post', api.addPost);
app.put('/api/post/:id', api.editPost);
app.delete('/api/post/:id', api.deletePost);

// Accounts API
var apiRoutes = express.Router();
app.post('/api/signIn', apiUsers.createUser);
apiRoutes.post('/login', apiAccounts.login);
apiRoutes.use(apiAccounts.authenticate);
apiRoutes.post('/changePassword', apiAccounts.changePassword);

app.use('/api', apiRoutes);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
