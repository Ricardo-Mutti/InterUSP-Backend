var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
	email: String,
	password: String,
	account: String,
	userID: Schema.Types.ObjectId,
	fbID: String,
	fbToken: String
});

exports.Account = mongoose.model('Account', accountSchema);