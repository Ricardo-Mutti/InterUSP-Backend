module.exports = function (schema, bcrypt, jwt, config){

  var Account = schema.account;
  return {
    post: function (req, res) {
      var login = req.body.login;

      // Procura usuario no banco
      var query = {login: login};

      Account.findOne( query, function(err, account) {

        if (err) throw err;

        if (!account) {
          // account nao encontrado
          return res.json({success: false, message: 'Falha na autenticação. Conta não encontrada.'});

        } 
        else if (account) {
          // compara passwords (com criptografia)
          bcrypt.compare(req.body.password, account.password, function(err, match) {
            if(!match){
              // passwords nao batem
              return res.json({success: false, message: 'Falha na autenticação. Senha incorreta.'});
            }
            else{
              // account e password batem
              // cria token
              var token = jwt.sign(account.toObject(), config.apiSecret, {
                expiresIn: 1440*60 // expires in 24 hours
              });

              return res.json({
                success : true,
                message : 'sucesso no login.',
                token : token
              });
            }
          });
        }
      });
    }
  }
}