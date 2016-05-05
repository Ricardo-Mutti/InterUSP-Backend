module.exports = function (schema){

	var Local = schema.local;
	var autenticacao = require('../autenticacao/autenticacao-controller.js');

	return{
		getLocais: function(req, res){
			Local.find(function(err, locais){
		    	if (err) throw err;

		    	return res.json({success: true, message: "Locais encontrados", response: {locais: locais}});
  			});
		},
		postLocais: function(req, res){
			autenticacao.authenticate(req, res, function(){
				var query = { _id: req.body.id };
				var update = req.body;

				Local.findOneAndUpdate(query, update, {upsert: true, new: true}, function(err, onibus){
			    	return res.json({success: true, message: "Locais atualizados"});
				})
			});
		}
	}
}