module.exports = function (schema){

	var Onibus = schema.onibus;
	var autenticacao = require('../autenticacao/autenticacao-controller.js');

	return {
		post: function (req, res){
			autenticacao.authenticate(req, res, function(){
				var query = {
					"placa": req.body.placa
				};
				var update = req.body;

				Onibus.findOneAndUpdate(query, update, {upsert: true, new: true}, function(err, onibus){
			    	return res.json({success: true, message: "Onibus atualizados"});
				})
			});
		},
		get: function (req, res){
			var query = {};
			if(req.query.faculdade) query.facul_id = req.query.faculdade;

			Onibus.find(query, function(err, onibus){
		    	return res.json({success: true, message: "Onibus encontrados", response: {onibus: onibus}});
			})
		}
	}
}