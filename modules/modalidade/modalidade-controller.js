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
        else return res.json({success: false, message: "Modalidade não atualizada!"})
      });
    }
  
  }
}
