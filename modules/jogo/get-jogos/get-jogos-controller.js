module.exports = function (schema){

  var Jogo = schema.jogo;

  return {
    get: function(req, res) {

          Jogo.find(function(err, dbJogos) {
            if (err) throw err;

            if (dbJogos) {
              return res.json({success: true, message: "Jogos!", resposta: dbJogos});
            }
          });
    }
  }
}
