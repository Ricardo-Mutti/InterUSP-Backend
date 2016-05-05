module.exports = function(schema) {
  var Modalidade = schema.modalidade;
  var Faculdade = schema.faculdade;
  var ModalidadesFaculdade = schema.modalidadeFaculdade;

  return {
    get: function(req, res) {
      var query = {};
      if(req.query.id) query.id = req.query.id;

      Modalidade.find(query, function(err, dbModalidades) {
        if (err) throw err;
        if (dbModalidades) {
          return res.json({success: true, message: "Modalidade!", response: {modalidades: dbModalidades}});
        }
      });
    },
    getFaculdade: function(req, res) {
      var faculdade = req.params.id;
      var arrayModalidades = [];

      var query = { id: faculdade};

      Faculdade.findOne(query, function (err, dbFaculdade){
        if (err) throw err;

        if(!dbFaculdade) return res.json({success: false, message: "Faculdade não encontrada."});

        if (dbFaculdade){

          Modalidade.find(function(err, dbModalidades) {
            if (err) throw err;
            if (dbModalidades) {
              for(i=0 ; i < dbModalidades.length ; i++){
                modalidadePorFaculdade = new ModalidadesFaculdade();
                modalidadePorFaculdade.nome = dbModalidades[i].nome;
                modalidadePorFaculdade.id = dbModalidades[i].id;
                for(j=0 ; j < dbModalidades[i].pontuacao_total.length ; j++){
                  if(dbModalidades[i].pontuacao_total[j].faculdade == faculdade){
                    modalidadePorFaculdade.pontuacao_total = dbModalidades[i].pontuacao_total[j].pontuacao;
                    modalidadePorFaculdade.posicao = dbModalidades[i].pontuacao_total[j].posicao;
                  }
                }
                arrayModalidades.push(modalidadePorFaculdade);
              }
              return res.json({success: true, message: "Modalidade!", response: {modalidades: arrayModalidades}});
            }
          });
        }
      });
    }
  }
}
