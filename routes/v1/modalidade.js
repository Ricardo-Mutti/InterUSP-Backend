module.exports = function(moduleModalidade) {

    var controllers =  moduleModalidade.controllers;

    return function(router) {
      router.post("/modalidade/cretate-modalidade", function(req, res) {
        controllers.createModalidade.post(req, res);
      });
      router.post("/modalidades/get-modalidades", function(req, res){
        controllers.getModalidades.get(req,res);
      });
    }
}
