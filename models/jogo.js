module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var jogoSchema = new Schema({
    modalidade_id: Number,
    nome: String,
    descricao: String,
    is_prova: Boolean,
    data: Date,
    local: String,
    colocacao: [Number],
    placar_1: String,
    placar_2: String,
    faculdade_1: Number,
    faculdade_2: Number,
    chaveamento: Number,
    is_vencedor: {
      type: Boolean,
      default: false
    }
  });

  return mongoose.model('Jogo', jogoSchema);
}
