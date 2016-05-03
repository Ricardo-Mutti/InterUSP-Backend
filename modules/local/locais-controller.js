module.exports = function (schema){

	var Local = schema.local;

	return{
		getLocais: function(req, res){
			Local.find(function(err, docs){
		    	if (err) throw err;

		    	return res.json({success: true, message: "Locais encontrados", response: docs});
  			});
		}
	}
}