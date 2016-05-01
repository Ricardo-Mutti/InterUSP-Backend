module.exports = function (moduleFaculdade){
  
  var controllers = moduleFaculdade.controllers;

  return function(router){
    router.get("/faculdade/", function(req, res){
    	controllers.faculdades.get(req, res);
    });
    router.post("/faculdade/", function(req, res){
    	controllers.faculdades.post(req, res);
    });
  }

}