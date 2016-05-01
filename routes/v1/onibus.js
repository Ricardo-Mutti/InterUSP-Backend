module.exports = function (moduleOnibus){
  
  var controllers = moduleOnibus.controllers;

  return function(router){
    router.post("/onibus", function(req, res){
    	controllers.onibus.post(req, res);
    });

    router.get("/onibus", function(req, res){
    	controllers.onibus.get(req, res);
    });
  }
}