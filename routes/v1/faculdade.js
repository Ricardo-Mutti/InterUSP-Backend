module.exports = function (moduleFaculdade){
  
  var controllers = moduleFaculdade.controllers;

  return function(router){
    router.get("/faculdade/get-all", function(req, res){
    	controllers.getAll.get(req, res);
    });
  }

}