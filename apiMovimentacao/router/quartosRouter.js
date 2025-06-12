const express          = require( 'express' );
const router           = express.Router();
const quartoController = require( '../controller/quartosController' );

//Rotas para o crud 
router.get   ( '/quartos'     , quartoController.listarQuartos       );
router.post  ( '/quartos'     , quartoController.criarQuarto         );
router.put   ( '/quartos/:id' , quartoController.atualizarQuarto     );
router.patch ( '/quartos/:id' , quartoController.atualizarStatusQuarto);

module.exports = router;