module.exports = function (moduleFaculdade){
  
  var controllers = moduleFaculdade.controllers;

  return function(router){
<<<<<<< 10f99e8d22dde808df43acb2778c28326abb335f
    router.get("/faculdade/", function(req, res){
    	controllers.faculdades.get(req, res);
    });
    router.post("/faculdade/", function(req, res){
    	controllers.faculdades.post(req, res);
=======
    router.get("/faculdade/get-all", function(req, res){
    	controllers.getAll.get(req, res);
>>>>>>> estrutura de arquivos para faculdades
    });
  }

}