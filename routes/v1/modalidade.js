module.exports = function(moduleModalidade) {

    var controllers =  moduleModalidade.controllers;

    return function(router) {
      router.post("/modalidade", function(req, res) {
        controllers.createModalidade.post(req, res);
      });
      router.post("/modalidade/update-modalidade", function(req, res) {
        controllers.updateModalidade.post(req, res);
      })
      router.get("/modalidade", function(req, res){
        controllers.getModalidades.get(req, res);
      });
    }
}
