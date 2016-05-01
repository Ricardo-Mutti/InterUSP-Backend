module.exports = function (moduleJogo) {

    var controllers = moduleJogo.controllers;

    return function(router) {
      router.get("/jogo/get-jogos", function(req, res) {
          controllers.getJogos.get(req, res);
      });
      router.post("/jogo/update-jogo", function(req, res) {
        controllers.updateJogo.post(req, res);
      });
      router.post("/jogo/create-jogo", function(req, res) {
        controllers.createJogo.post(req, res);
      });
    }
}
