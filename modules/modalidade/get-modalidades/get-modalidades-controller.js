module.exports = function(schema) {
  var Modalidade = schema.modalidade;
  return {
    get: function(req, res) {
      Modalide.find(function(err, dbModalidades) {
        if (err) throw err;
        if (dbModalidades) {
          return res.json({success: true, message: "Modalidade!", resposta: dbModalidades});
        }
      })
    }
  }
}
