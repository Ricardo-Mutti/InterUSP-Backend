module.exports = function (schema, bcrypt){

  var Account = schema.account;
  const saltRounds = 4;

  return {
    post: function(req, res){
      var account = new Account(req.body);
      // encrypta senha
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(account.password, salt, function(err, hash) {
          account.password = hash;

          account.save(function (err) {
            if (err) return handleError(err);

            return res.json({success: true, message: 'Usuário cadastrado com sucesso!'});
          })
        });
      });
    }
  }

}
