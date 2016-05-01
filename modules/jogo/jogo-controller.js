module.exports = function(schema) {

  var Jogo = schema.jogo;

  return {
    post: function(req, res) {
      var jogo = new Jogo(req.body);
      jogo.save(function(err) {
        if (err) throw err;
        return res.json({success: true, message: "Jogo criado!"});
      });
    },    
    get: function(req, res) {

          Jogo.find(function(err, dbJogos) {
            if (err) throw err;

            if (dbJogos) {
              return res.json({success: true, message: "Jogos!", resposta: dbJogos});
            }
          });
    },
    put: function(req, res) {

      var query = {
        "_id": req.body._id
      }

      var update = req.body;

      Jogo.findOneAndUpdate(query, update, function(err, numAffected) {
        if (err) throw err;
        if (numAffected) return res.json({success: true, message: "Jogo atualizado!"});
        else return res.json({success: false, message: numAffected})
      });
    }
  }
}
