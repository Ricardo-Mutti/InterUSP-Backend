module.exports = function (moduleUser){
  
  var controllers = moduleUser.controllers;

  return function(router){
    router.post("/user/sign-in", function(req, res){
    	controllers.signIn.post(req, res);
    });

    router.post("/user/login", function(req, res){
    	controllers.login.post(req, res);
    });
  }

}