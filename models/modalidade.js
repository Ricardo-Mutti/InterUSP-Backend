module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var modalidadeSchema = new Schema({
    nome: String,
    colocacao: {},
    pontuacao_max: {},
    pontuacao_min: {},
    is_chaveamento: Boolean
  });

  return mongoose.model('Modalidade', modalidadeSchema);
}
