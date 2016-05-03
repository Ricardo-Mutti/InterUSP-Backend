module.exports = function(mongoose){
	var Schema = mongoose.Schema;

	var trackingSchema = new Schema({
		facul_id: Number,
		users_count: Number
	});

	return mongoose.model('Tracking', trackingSchema);
}

