module.exports = function(mongoose){

	var Schema = mongoose.Schema;

	var faculdadeSchema = new Schema({
		nome: String,
		pontuacao_atual:Number,
		pontuacao_max:Number,
		pontuacao_min:Number,
	});

	return mongoose.model('Faculdade', faculdadeSchema);
}
