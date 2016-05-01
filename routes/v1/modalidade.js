module.exports = function(moduleModalidade) {

    var controllers =  moduleModalidade.controllers;

    return function(router) {
      router.post("/modalidade", function(req, res) {
        controllers.modalidades.post(req, res);
      });
      router.put("/modalidade", function(req, res) {
        controllers.modalidades.put(req, res);
      });
      router.get("/modalidade", function(req, res){
        if(req.query.faculdade_id)
        controllers.modalidades.getPontuacao(req, res);
      else
        controllers.modalidades.get(req, res);
      });
    }
}
