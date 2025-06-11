const express                = require( 'express' );
const router                 = express.Router();
const movimentacaoController = require( '../controller/movimentacaoController' );

//Rotas para o CRUD
router.get ( '/movimentacao'        , movimentacaoController.listarMovimentacao  );
router.get ( '/movimentacao/:status', movimentacaoController.listarQuartosStatus )
router.post( '/movimentacao'        , movimentacaoController.registrarEntrada    );
router.put ( '/movimentacao/:id'    , movimentacaoController.registrarSaida      );

module.exports = router;
