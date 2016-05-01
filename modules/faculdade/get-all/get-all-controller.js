module.exports = function (schema){

  var Faculdade = schema.faculdade;
  return {
    get: function(req, res){
      Faculdade.
      find().
      exec(function (err, dbFaculdades){
        if (err) throw err;

        if (dbFaculdades){
          if(dbFaculdades.length == 0)
            return res.json({'success':false, 'message':'Lista de faculdades vazia'});
          else{
            return res.json({'success':true, 'message':'Lista de faculdades', 'resposta':dbFaculdades});
          }
        }
      });
    },
    
  }
}
