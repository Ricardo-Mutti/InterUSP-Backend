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
				console.dir(req.body);
				var query = {};
				if(req.body._id) query._id = req.body._id;
				else{
					var local = new Local(req.body);
					query._id = local._id;
				}
				var update = {};
				update.nome = req.body.nome;
				update.descricao = req.body.descricao;
				update.foto = req.body.foto;
				update.coordenadas = [];
				update.coordenadas[0] = req.body.longitude;
				update.coordenadas[1] = req.body.latitude;
				update.tipo = req.body.tipo; 

				Local.findOneAndUpdate(query, update, {upsert: true, new: true}, function(err){
					if (err) throw err;

			    	return res.json({success: true, message: "Locais atualizados"});
				})
			});
		}
	}
}