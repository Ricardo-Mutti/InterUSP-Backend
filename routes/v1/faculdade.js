module.exports = function (moduleFaculdade){
  
  var controllers = moduleFaculdade.controllers;

  return function(router){
<<<<<<< 898f01dbc80d19c3697dbd95f2fdb74764d4e4c9
<<<<<<< 10f99e8d22dde808df43acb2778c28326abb335f
=======
>>>>>>> post faculdades
    router.get("/faculdade/", function(req, res){
    	controllers.faculdades.get(req, res);
    });
    router.post("/faculdade/", function(req, res){
    	controllers.faculdades.post(req, res);
<<<<<<< 898f01dbc80d19c3697dbd95f2fdb74764d4e4c9
=======
    router.get("/faculdade/get-all", function(req, res){
    	controllers.getAll.get(req, res);
>>>>>>> estrutura de arquivos para faculdades
=======
>>>>>>> post faculdades
    });
  }

}