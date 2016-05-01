module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var modalidadeSchema = new Schema({
    nome: String,
    colocacao: [{"faculdade": Schema.Types.ObjectId, "posicao": Number}],
    pontuacao_max: [{"faculdade": Schema.Types.ObjectId, "posicao": Number}],
    pontuacao_min: [{"faculdade": Schema.Types.ObjectId, "posicao": Number}],
    is_chaveamento: Boolean
  });
}
