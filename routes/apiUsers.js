var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var userSchema = require('../models/user');
var accountSchema = require('../models/account');
var apiAccounts = require('./apiAccounts');


var User = userSchema.User;
var Account = accountSchema.Account;

exports.createUser = function (req, res) {
  var user = new User(req.body);

  var query = {$or: [ {email : user.email}, {account : user.account}]};

  User.findOne(query, function(err, dbUser) {
    if (err) throw err;

    if (dbUser){
      console.dir(dbUser);
      if(dbUser.email == user.email){
        // Email bate com algum usuario da base
        return res.json({success: false, message: 'Email já cadastrado.'});
      }
      else if(dbUser.account = user.account){
        // account ou email batem com algum usuario da base
        return res.json({success:false, message:'Usuário já cadastrado.'});
      }
    }
    // email e usuario disponiveis
    else{
      user.save(function (err) {
        if (err) return handleError(err);
        // chama signIn para criar account
        var account = new Account(req.body);
        account.userID = user._id;
        apiAccounts.singIn(account, res);
      });
    }
  });
};
