module.exports = function(schema) {
  var Modalidade = schema.modalidade;
  return {
    post: function(req, res) {
      var modalidade = new Modalidade(req.body);
      modalidade.save(function(err) {
        if (err) throw err;
        return res.json({success: true, message: "Modalidade criada"});
      });
    }
  }
}
