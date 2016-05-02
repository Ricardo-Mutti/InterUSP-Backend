module.exports = function(mongoose){
	var Schema = mongoose.Schema;

	var onibusSchema = new Schema({
	  	facul_id: Number,
	  	placa: String,
	  	informacoes: String
	});

	return mongoose.model('Onibus', onibusSchema);
}

