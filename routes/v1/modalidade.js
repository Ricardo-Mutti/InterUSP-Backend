module.exports = function(moduleModalidade) {

    var controllers =  moduleModalidade.controllers;

    return function(router) {
      router.post("/modalidade/create-modalidade", function(req, res) {
        controllers.createModalidade.post(req, res);
      });
      router.get("/modalidade/get-modalidades", function(req, res){
        controllers.getModalidades.get(req, res);
      });
    }
}
