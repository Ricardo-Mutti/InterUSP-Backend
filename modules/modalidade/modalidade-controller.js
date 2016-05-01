module.exports = function(schema) {
  var Modalidade = schema.modalidade;


 return {
    get: function(req, res) {
      Modalidade.find(function(err, dbModalidades) {
        if (err) throw err;
        if (dbModalidades) {
          return res.json({success: true, message: "Modalidade!", resposta: dbModalidades});
        }
      });
    },
    post: function(req, res) {
      var modalidade = new Modalidade(req.body);
      modalidade.save(function(err) {
        if (err) throw err;
        return res.json({success: true, message: "Modalidade criada"});
      });
    },
    put: function(req, res) {
      var _id =  req.body._id;
      var query = {_id: _id};
      var update = req.body;
      console.log(update);
      Modalidade.findOneAndUpdate(query, update, function(err, numAffected) {
        if (err) throw err;
        if (numAffected) return res.json({success: true, message: "Modaliade atualizada!"});
        else return res.json({success: false, message: "Modalidade não atualizada!"});
      });
    },
    getPontuacao: function(req, res) {
      var faculdade_id = req.query.faculdade_id;
      Modalidade.find(function(err, dbModalidades) {
        if (err) throw err;
        if (dbModalidades) {
          var pontuacao = {};
          for(var i in dbModalidades){
            pontuacao[faculdade_id] = dbModalidades[i].pontuacao[faculdade_id];
          }

          return res.json({success: true, message: "Pontuacao da faculdade por modalidade", resposta: {'pontuacao':pontuacao}});
        }
      });
    }
  
  }
}
