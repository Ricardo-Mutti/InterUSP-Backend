module.exports = function(mongoose){
	var Schema = mongoose.Schema;

	var localSchema = new Schema({
		nome : String,
		foto : String,
		endereco : String,
		coordenadas : {
		  	type: [Number],
		  	index: '2d'
	  	},
	  	telefone : String,
	  	tipo : Number,
	  	principaisModalidades : String
	});

	return mongoose.model('Local', localSchema);
}
