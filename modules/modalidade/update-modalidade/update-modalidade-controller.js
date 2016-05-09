module.exports = function(schema) {
  var Modalidade =  schema.modalidade;
  var Faculdade = schema.faculdade;
  var autenticacao = require('../../autenticacao/autenticacao-controller.js');

  var faculdadesArrayMax = [];
  var faculdadesArrayMin = [];
  var faculdadesArrayTotal = [];


  var updateMax = function(modalidade){
    var pontuacaoMaxArray = modalidade.pontuacao_max;

    var calculateMax = function(pontuacaoMaxArray){
      for(i=0 ; i < pontuacaoMaxArray.length ; i++){
        faculdadesArrayMax.push(pontuacaoMaxArray[i].faculdade);
      }

      Modalidade.find(function(err, modalidades){
        if (err) throw err;

        for(i=0 ; i < faculdadesArrayMax.length ; i++){
          var novaPontuacaoMax = 0;
          for(var j=0 ; j < modalidades.length ; j++){
            var modalidade = modalidades[j];
            for(var k=0 ; k < modalidade.pontuacao_max.length ; k++){
              if(modalidade.pontuacao_max[k].faculdade == faculdadesArrayMax[i]){
                novaPontuacaoMax = novaPontuacaoMax + modalidade.pontuacao_max[k].pontuacao;
              }
            }
          }
          updateFaculdadeMax(novaPontuacaoMax, faculdadesArrayMax[i]);
        };
      });
      return true;
    }

    var updateFaculdadeMax = function(novaPontuacaoMax, faculdade){
      var query = {id : faculdade};
      var update = {pontuacao_max: novaPontuacaoMax};

      Faculdade.findOneAndUpdate(query, update, function(err, faculdadeDb){
        if (err) throw err;

        return true;
      });
    }
    
    calculateMax(pontuacaoMaxArray);

    return true;

  }

  var updateMin = function(modalidade){
    var pontuacaoMinArray = modalidade.pontuacao_min;

    var calculateMin = function(pontuacaoMinArray){
      for(i=0 ; i < pontuacaoMinArray.length ; i++){
        faculdadesArrayMin.push(pontuacaoMinArray[i].faculdade);
      }

      Modalidade.find(function(err, modalidades){
        if (err) throw err;

        for(i=0 ; i < faculdadesArrayMin.length ; i++){
          var novaPontuacaoMin = 0;
          for(var j=0 ; j < modalidades.length ; j++){
            var modalidade = modalidades[j];
            for(var k=0 ; k < modalidade.pontuacao_min.length ; k++){
              if(modalidade.pontuacao_min[k].faculdade == faculdadesArrayMin[i]){
                novaPontuacaoMin = novaPontuacaoMin + modalidade.pontuacao_min[k].pontuacao;
              }
            }
          }
          updateFaculdadeMin(novaPontuacaoMin, faculdadesArrayMin[i]);
        };
      });
      return true;
    }

    var updateFaculdadeMin = function(novaPontuacaoMin, faculdade){
      var query = {id : faculdade};
      var update = {pontuacao_min: novaPontuacaoMin};

      Faculdade.findOneAndUpdate(query, update, function(err, faculdadeDb){
        if (err) throw err;

        return true;
      });
    }
    
    calculateMin(pontuacaoMinArray);

    return true;

  }

  var updateTotal = function(modalidade){
    var TotalArray = modalidade.pontuacao_total;

    var calculateTotal = function(TotalArray){
      for(i=0 ; i < TotalArray.length ; i++){
        faculdadesArrayTotal.push(TotalArray[i].faculdade);
      }

      Modalidade.find(function(err, modalidades){
        if (err) throw err;

        for(i=0 ; i < faculdadesArrayTotal.length ; i++){
          var novaPontuacaoTotal = 0;
          for(var j=0 ; j < modalidades.length ; j++){
            var modalidade = modalidades[j];
            for(var k=0 ; k < modalidade.pontuacao_total.length ; k++){
              if(modalidade.pontuacao_total[k].faculdade == faculdadesArrayTotal[i]){
                novaPontuacaoTotal = novaPontuacaoTotal + modalidade.pontuacao_total[k].pontuacao;
              }
            }
          }
          updateFaculdadeTotal(novaPontuacaoTotal, faculdadesArrayTotal[i]);
        };
      });
      return true;
    }

    var updateFaculdadeTotal = function(novaPontuacaoTotal, faculdade){
      var query = {id : faculdade};
      var update = {pontuacao_atual: novaPontuacaoTotal};

      Faculdade.findOneAndUpdate(query, update, function(err, faculdadeDB){
        if (err) throw err;
        return true;
      });
    }

    calculateTotal(TotalArray);

    return true;

  }

  var updateFaculdades = function(modalidade, res){
    var success = true;
    sucess = updateMax(modalidade);
    if(!sucess) return res.json({success: false, message: "Erro na atualização da pontuação máxima."});
    sucess = updateMin(modalidade);
    if(!sucess) return res.json({success: false, message: "Erro na atualização da pontuação mínima."});
    else if(modalidade.pontuacao_total.length>0){
      sucess = updateTotal(modalidade);
      if(!sucess) return res.json({success: false, message: "Erro na atualização da pontuação total."});
    }
    return res.json({success: true, message: "Modalidade atualizada!"});

  }

  return {
    post: function(req, res) {
      autenticacao.authenticate(req, res, function(){
        var id =  req.body.id;
        var query = {id: id};
        var update = req.body;
        console.dir(update);
        Modalidade.findOneAndUpdate(query, update, function(err, modalidade) {
          if (err) throw err;
          if (modalidade){
            updateFaculdades(modalidade, res);
          }
          else return res.json({success: false, message: "Modalidade não encontrada!"});
        });
      });
    }
  }
}
