module.exports = function (moduleJogo) {

    var controllers = moduleJogo.controllers;

    return function(router) {
      router.get("/jogo/get-jogos", function(req, res) {
          controllers.getJogos.get(req, res);
<<<<<<< a388009a3bf62a45d559ac21494b5323ffacc6ca
<<<<<<< e2b1e29e2dab15c9461d593365924da837922f20
      });
      router.post("/jogo/update-jogo", function(req, res) {
        controllers.updateJogo.post(req, res);
      });
      router.post("/jogo/create-jogo", function(req, res) {
        controllers.createJogo.post(req, res);
<<<<<<< 24ff51e4f3306f5039f8dc148f978ecc624d39b5
=======

>>>>>>> Adicionado Modelo do Jogo, Controller e Route do Get-Jogos, testado.
=======
      });
      router.post("/jogo/update-jogo", function(req, res) {
        controllers.updateJogo.post(req, res);
>>>>>>> Adicionado Controller do Update Jogo, não foi testado
=======
>>>>>>> Controller do Update criado, testado Update, Get e Create
      });
    }
}
