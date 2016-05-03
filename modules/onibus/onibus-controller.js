module.exports = function (schema){

	var Onibus = schema.onibus;

	return {
		post: function (req, res){

			var query = {
				"placa": req.body.placa
			};
			var update = req.body;

			Onibus.findOneAndUpdate(query, update, {upsert: true, new: true}, function(err, onibus){
		    	return res.json({success: true, message: "Onibus atualizados"});
			})
		},
		get: function (req, res){
			Onibus.find(function(err, onibus){
		    	return res.json({success: true, message: "Onibus encontrados", response: onibus});
			})
		}
	}
}