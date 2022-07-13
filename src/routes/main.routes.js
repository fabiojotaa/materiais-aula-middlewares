const {Router} = require('express');

const MainRouter = Router();

mainRouter.get('/teste', mainController.teste)
mainRouter.get('/teste-um', mainController.teste)
mainRouter.get('/teste-dois', mainController.teste)
mainRouter.get('/teste-tres', mainController.teste)
module.exports = mainRouter;