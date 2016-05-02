module.exports = function(schema) {

  var Jogo = schema.jogo;

  var atualizaProxJogo = function(jogo, ganhador, res){
    var jogoAtual = jogo.chaveamento;
    var proximoJogo = getProximoChaveamento(jogoAtual);

    console.dir(proximoJogo);
    
    var modalidade = jogo.modalidade;

    var query = {
      "chaveamento" : proximoJogo,
      "modalidade_id" : jogo.modalidade_id
    }

    var ganhador = ganhador;

    var update = generateUpdate(jogoAtual, ganhador);

    Jogo.findOneAndUpdate(query, update, function(err, numAffected) {
      if (err) throw err;
      if (numAffected) {
        return res.json({success: true, message: "Jogo atualizado!"});
      }
      else return res.json({success: false, message: numAffected})
    });


  }

  var getProximoChaveamento = function(jogoAtual){
    if(jogoAtual==1 || jogoAtual ==2){
      return 5;
    }
    else if(jogoAtual==3 || jogoAtual ==4){
      return 6;
    }
    else if(jogoAtual==5 || jogoAtual ==6){
      return 7;
    }
    else{
      return 8;
    }
  }

  var generateUpdate = function(jogoAtual, ganhador){
    if(jogoAtual % 2 == 1){
      return {"faculdade_1" : ganhador};
    }
    else return {"faculdade_2" : ganhador};
  }

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
      };

      var update = req.body.jogo;
      var ganhador = req.body.ganhador;

      Jogo.findOneAndUpdate(query, update, function(err, numAffected) {
        if (err) throw err;
        if (numAffected) {
          atualizaProxJogo(numAffected, ganhador, res);
        }
        else return res.json({success: false, message: numAffected})
      });
    }
  }

}
