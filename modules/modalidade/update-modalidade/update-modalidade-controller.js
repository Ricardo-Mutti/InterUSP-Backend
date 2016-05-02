module.exports = function(schema) {
  var Modalidade =  schema.modalidade;
  return {
    post: function(req, res) {
      var id =  req.body.id;
      var query = {id: id};
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
