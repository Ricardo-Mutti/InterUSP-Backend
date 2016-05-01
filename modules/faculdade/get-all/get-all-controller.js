module.exports = function (schema){

  var Faculdade = schema.faculdade;
  return {
    get: function(req, res){
      Faculdade.find(function (err, dbFaculdades){
        console.log(dbFaculdades);
        if (err) throw err;
        if (dbFaculdades){
          return res.json({'success':true, 'message':'uaisdh', 'resposta':dbFaculdades});
        }
      });
    }
  }
}
