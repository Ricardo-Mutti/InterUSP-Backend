module.exports = function (moduleLocal){
  
  var controllers = moduleLocal.controllers;

  return function(router){
    router.get("/locais", function(req, res){
    	controllers.locais.getLocais(req, res);
    });
    router.post("/locais", function(req, res){
    	controllers.locais.postLocais(req, res);
    });
  }
}