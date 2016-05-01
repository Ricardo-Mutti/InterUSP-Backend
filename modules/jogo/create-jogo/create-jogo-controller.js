module.exports = function(schema) {
  var Jogo = schema.jogo;
  return {
    post: function(req, res) {
      var jogo = new Jogo(req.body);
      jogo.save(function(err) {
        if (err) throw err;
        return res.json({success: true, message: "Jogo criado!"});
      });
    }
  }
}
