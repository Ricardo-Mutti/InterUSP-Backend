module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var jogoSchema = new Schema({
    modalidade_id: Number,
    nome: String,
    is_prova: Boolean,
    data: String,
    horario: String,
    local: String,
    colocacao: [Number],
    placar_1: Number,
    placar_2: Number,
    mandante: Number,
    faculdade_1: Number,
    faculdade_2: Number,
    chaveamento: Number 
  });

  return mongoose.model('Jogo', jogoSchema);
}
