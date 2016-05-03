module.exports = function (schema, mongoose){

  var Faculdade = schema.faculdade;
  return {
    get: function(req, res){

      var query = {};

      if(req.query.id) query.id = req.query.id;
      if(req.query.nome) query.nome = req.query.nome;

      Faculdade.find(query, function (err, dbFaculdades){
        if (err) throw err;

        if (dbFaculdades){
          if(dbFaculdades.length == 0)
            return res.json({'success':false, 'message':'Lista de faculdades vazia'});
          else{
            return res.json({'success':true, 'message':'Lista de faculdades', 'resposta':dbFaculdades});
          }
        }
      }).sort( { pontuacao_atual: -1 } );
    },
    post: function(req, res){

      var faculdadeId = req.body._id ? req.body._id : new mongoose.Types.ObjectId;
      var faculdadeAttributes = req.body;
      Faculdade.findByIdAndUpdate(faculdadeId, faculdadeAttributes, {upsert: true}, function(err, data){

        if (err) throw err;
        return res.json({success: true, message: "Faculdade criada"});

      });
    }
  }
}
