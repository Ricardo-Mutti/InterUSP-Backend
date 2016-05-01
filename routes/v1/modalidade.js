module.exports = function(moduleModalidade) {

    var controllers =  moduleModalidade.controllers;

    return function(router) {
      router.post("/modalidade", function(req, res) {
        controllers.modalidades.post(req, res);
      });
      router.put("/modalidade", function(req, res) {
        controllers.modalidades.put(req, res);
      })
      router.get("/modalidade", function(req, res){
        controllers.modalidades.get(req, res);
      });
    }
}
