module.exports = function (moduleJogo) {

    var controllers = moduleJogo.controllers;

    return function(router) {
      router.get("/jogo", function(req, res) {
          controllers.jogo.get(req, res);
      });
      router.post("/jogo", function(req, res) {
        controllers.jogo.post(req, res);
      });
      router.put("/jogo", function(req, res) {
        controllers.jogo.put(req, res);
      });
    }
}
