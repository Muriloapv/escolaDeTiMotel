const express          = require( 'express' );
const router           = express.Router();
const quartoController = require( '../controller/quartosController' );

//Rotas para o crud 
router.get ( '/quartos', quartoController.listarQuartos );
router.post( '/quartos', quartoController.criarQuarto   );

module.exports = router;
