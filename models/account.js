module.exports = function(mongoose){

	var Schema = mongoose.Schema;

	var accountSchema = new Schema({
		login: String,
		password: String
	});

	return mongoose.model('Account', accountSchema);
}