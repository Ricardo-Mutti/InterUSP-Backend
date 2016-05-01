module.exports = function (moduleJogo) {

    var controllers = moduleJogo.controllers;

    return function(router) {
      router.get("/jogo/get-jogos", function(req, res) {
          controllers.getJogos.get(req, res);

      });
    }
}
