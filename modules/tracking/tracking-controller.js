module.exports = function (schema, mongoose){

  var Tracking = schema.tracking;
  return {
    get: function(req, res){
      Tracking.
      find().
      exec(function (err, trackingRes){
        if (err) throw err;

        if (trackingRes){
          if(trackingRes.length == 0)
            return res.json({'success':false, 'message':'Tracking sem dados disponiveis'});
          else{
            return res.json({'success':true, 'message':'Tracking de usuarios por faculdade', 'resposta':trackingRes});
          }
        }
      });
    },
    post: function(req, res){
    	//facul_id must exist 
      	var faculdadeId = new mongoose.Types.ObjectId(req.query.facul_id);

      	//increment user_count for the given facul_id
	    Tracking.findOneAndUpdate({ facul_id: faculdadeId }, {$inc: {users_count:1}}, {upsert: true, new:true}, function (err, data) {
	        if (err) throw err;
	        return res.json({success: true, message: "Tracking criada", 'data':data});
      });
    }
  }
}