module.exports = function (moduleTracking){
  
  var controllers = moduleTracking.controllers;

  return function(router){
    router.get("/tracking", function(req, res){
    	controllers.tracking.get(req, res);
    });

    router.post("/tracking", function(req, res){
    	controllers.tracking.post(req, res);
    });
  }
}