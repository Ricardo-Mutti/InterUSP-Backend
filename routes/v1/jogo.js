module.exports = function (moduleJogo) {

    var controllers = moduleJogo.controllers;

    return function(router) {
      router.get("/jogo", function(req, res) {
          controllers.jogo.get(req, res);
      });
      router.get("/jogo/modalidade=:id", function(req, res) {
          controllers.jogo.get(req, res);
      });
      router.post("/jogo", function(req, res) {
        controllers.jogo.post(req, res);
      });
      router.post("/jogo/update-placar", function(req, res) {
        controllers.jogo.UpdatePlacar(req, res);
      });
      router.post("/jogo/update-info", function(req, res) {
        controllers.jogo.UpdateInfo(req, res);
      });
    }
}
