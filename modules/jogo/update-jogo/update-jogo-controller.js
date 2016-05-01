module.exports = function(schema) {
  var Jogo = schema.jogo;
  return {
    post: function(req, res) {
      var _id = req.body._id;
      var modalidade_id = req.body.modalidade_id;
      var nome = req.body.nome;
      var participantes = req.body.participantes;
      var is_prova = req.body.is_prova;
      var colocacao = req.body.colocacao;
      var placar = req.body.placar;
      var data = req.body.data;
      var local = req.body.local;
      var chaveamento = req.body.chaveamento;

      var query = {_id: _id};
      var update = {_id: _id,
        modalidade_id: modalidade_id,
        nome: nome,
        participantes: participantes,
        is_prova: is_prova,
        colocacao: colocacao,
        placar: placar,
        data: data,
        local: local,
        chaveamento: chaveamento};

      Jogo.findOneAndUpdate(query, update, function(err, numAffected) {
        if (err) throw err;
        if (numAffected > 0) return res.json({success: true, message: "Jogo atualizado!"});
        else return res.json({success: false, message: "Jogo não atualizado!"})
      });
    }
  }
}
