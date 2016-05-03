module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var modalidadeSchema = new Schema({
  	id: Number,
    nome: String,
    colocacao: [{"faculdade": Number, "posicao": Number}],
    pontuacao_max: [{"faculdade": Number, "pontuacao": Number}],
    pontuacao_min: [{"faculdade": Number, "pontuacao": Number}],
    is_chaveamento: Boolean
  });

  return mongoose.model('Modalidade', modalidadeSchema);
}
