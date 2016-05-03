module.exports = function(schema) {
  var Modalidade =  schema.modalidade;
  var Faculdade = schema.faculdade;

  var faculdadesArrayMax = [8];
  var faculdadesArrayMin = [8];


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

  var updatePontuacao = function(modalidade, res){
    var colocacaoArray = modalidade.colocacao;

    for(var i=0 ; i < colocacaoArray.length ; i++){
      var query = {id : colocacaoArray[i].faculdade};
      var pontuacao = 1;
      var update = {pontuacao_min: pontuacaoMinArray[i].pontuacao};

      Faculdade.findOneAndUpdate(query, update, function(err, faculdade){
        if (err) throw err;

        if (faculdade) callback(modalidade, res);
        else return res.json({success: false, message: "Erro no update de pontuação mínima de Faculdades!"});
      });
    };
  }

  var calculatePontucao = function(colocacao){
    switch(colocacao) {
    case 1:
        return 13;
        break;
    case 2:
        return 10;
        break;
    case 3:
        return 8;
        break;
    case 4:
        return 6;
        break;
    case 5:
        return 10;
        break;
    default:
        0;
}
  }

  var updateFaculdades = function(modalidade, res){
    var success = true;
    sucess = updateMax(modalidade);
    sucess = updateMin(modalidade);

    if(sucess) return res.json({success: true, message: "Modalidade atualizada!"});

    // updateMax(modalidade, res, function(modalidade, res){
    //   updateMin(modalidade, res, function(modalidade, res){
    //     if(modalidade.colocacao.length>0){
    //       updatePontuacao(modalidade, res, function(){
    //         return res.json({success: true, message: "Modaliade atualizada!"});
    //       });
    //     }
    //     else return res.json({success: false, message: "Pontuações Máximas e Mínimas atualizadas!"});
    //   });
    // });
  }

  return {
    post: function(req, res) {
      var id =  req.body.id;
      var query = {id: id};
      var update = req.body;
      Modalidade.findOneAndUpdate(query, update, function(err, modalidade) {
        if (err) throw err;
        if (modalidade){
          updateFaculdades(modalidade, res);
        }
        else return res.json({success: false, message: "Modalidade não encontrada!"});
      });
    }
  }
}
