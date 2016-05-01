module.exports = function(mongoose){

	var Schema = mongoose.Schema;

	var faculdadeSchema = new Schema({
		nome: String,
		facul_id: Number,
		name: String,
		pontuacao_atual:Number,
		pontuacao_max:Number,
		pontuacao_min:Number,
	});

	return mongoose.model('Faculdade', faculdadeSchema);
}
