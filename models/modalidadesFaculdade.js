module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var modalidadesFaculdadeSchema = new Schema({
    id: Number,
    nome: String,
    pontuacao_total: Number, 
    posicao: Number
  });

  return mongoose.model('ModalidadesFaculdade', modalidadesFaculdadeSchema);
}