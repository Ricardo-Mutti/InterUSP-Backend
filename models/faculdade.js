module.exports = function(mongoose){

	var Schema = mongoose.Schema;

	var faculdadeSchema = new Schema({
<<<<<<< 898f01dbc80d19c3697dbd95f2fdb74764d4e4c9
<<<<<<< 10f99e8d22dde808df43acb2778c28326abb335f
=======
>>>>>>> post faculdades
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