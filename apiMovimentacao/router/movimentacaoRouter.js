const express                = require( 'express' );
const router                 = express.Router();
const movimentacaoController = require( '../controller/movimentacaoController' );

//Rotas para o CRUD
router.get ( '/movimentacao'               , movimentacaoController.listarMovimentacao  );
// router.get ( '/movimentacao?status=:status', movimentacaoController.listarQuartosStatus )
router.post( '/movimentacao/checkin'       , movimentacaoController.registrarEntrada    );
router.put ( '/movimentacao/:id/checkout'  , movimentacaoController.registrarSaida      );

module.exports = router;
