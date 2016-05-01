module.exports = function (moduleJogo) {

    var controllers = moduleJogo.controllers;

    return function(router) {
      router.get("/jogo/get-jogos", function(req, res) {
          controllers.getJogos.get(req, res);
<<<<<<< e2b1e29e2dab15c9461d593365924da837922f20
      });
      router.post("/jogo/update-jogo", function(req, res) {
        controllers.updateJogo.post(req, res);
      });
      router.post("/jogo/create-jogo", function(req, res) {
        controllers.createJogo.post(req, res);
=======

>>>>>>> Adicionado Modelo do Jogo, Controller e Route do Get-Jogos, testado.
      });
    }
}
