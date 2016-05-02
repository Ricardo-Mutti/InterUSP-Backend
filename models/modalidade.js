module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var modalidadeSchema = new Schema({
  	id: Number,
    nome: String,
    colocacao: [{"faculdade": Schema.Types.ObjectId, "posicao": Number}],
    pontuacao_max: [{"faculdade": Schema.Types.ObjectId, "pontuacao": Number}],
    pontuacao_min: [{"faculdade": Schema.Types.ObjectId, "pontuacao": Number}],
    is_chaveamento: Boolean
  });

  return mongoose.model('Modalidade', modalidadeSchema);
}
