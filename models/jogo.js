module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var jogoSchema = new Schema({
    modalidade_id: Schema.Types.ObjectId,
    nome: String,
    participantes: [Schema.Types.ObjectId],
    is_prova: Boolean,
    colocacao: [{"faculdade": Schema.Types.ObjectId, "posicao": Number}],
    placar: [Number],
    data: String,
    local: Schema.Types.ObjectId,
    chaveamento: Number
  });

  return mongoose.model('Jogo', jogoSchema);
}
