module.exports = function (moduleUser){
  
  var controllers = moduleUser.controllers;

  return function(router){
    router.post("/user/sign-in", function(req, res){
    	controllers.signIn.post(req, res);
    });
  }

}