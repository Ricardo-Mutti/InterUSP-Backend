module.exports = function (schema){

	var Onibus = schema.onibus;

	return {
		post: function (req, res){

			var query = {
				"placa": req.body.placa
			};
			var update = req.body;

			Onibus.findOneAndUpdate(query, update, {upsert: true, new: true}, function(err, data){
		    	return res.json({success: true, message: "Onibus atualizados", response:{Onibus:data}});
			})
		},
		get: function (req, res){
			Onibus.find(function(err, data){
		    	return res.json({success: true, message: "Onibus encontrados", response:{Onibus:data}});
			})
		}
	}
}