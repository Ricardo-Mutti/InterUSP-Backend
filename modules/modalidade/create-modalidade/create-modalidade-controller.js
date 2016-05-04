module.exports = function(schema) {
  var Modalidade = schema.modalidade;
  var autenticacao = require('../../autenticacao/autenticacao-controller.js');
  return {
    post: function(req, res) {
      autenticacao.authenticate(req, res, function(){
        var modalidade = new Modalidade(req.body);
        modalidade.save(function(err) {
          if (err) throw err;
          return res.json({success: true, message: "Modalidade criada"});
        });
      });
    }
  }
}
