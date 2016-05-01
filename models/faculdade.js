module.exports = function(mongoose){

	var Schema = mongoose.Schema;

	var faculdadeSchema = new Schema({
<<<<<<< 10f99e8d22dde808df43acb2778c28326abb335f
		nome: String,
=======
		facul_id: Number,
		name: String,
>>>>>>> estrutura de arquivos para faculdades
		pontuacao_atual:Number,
		pontuacao_max:Number,
		pontuacao_min:Number,
	});

	return mongoose.model('Faculdade', faculdadeSchema);
}