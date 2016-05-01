module.exports = function(mongoose){
	var Schema = mongoose.Schema;

	var trackingSchema = new Schema({
		facul_id: {type: Schema.Types.ObjectId, ref: 'Faculdade'},
		users_count:{type:Number, default:1}
	});

	return mongoose.model('Tracking', trackingSchema);
}

