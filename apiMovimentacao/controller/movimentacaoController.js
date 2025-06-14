const { fechaComanda } = require( '../utils/movimentacaoFunction' );
let listMovimentacao = [];

// Lista todas as movimentações entrada/saida - GET
const listarMovimentacao = ( req, res ) => {
    res.json ( listMovimentacao );
    //#swagger.tags = ['Movimentação']
};

// Listar as movimentações em aberto - GET
const listarQuartosStatus = ( req, res ) => {
    const { statusQuarto } = req.params.status;

    const strResult =  listMovimentacao.filter( statusQ => statusQ.statusQuarto.toLowerCase() === statusQuarto.toLowerCase );
    if ( !strResult ) {
        res.json( strResult ); 
    } else {
        res.status( 400 ).json ( 'Aviso: Não a quartos com esse status! ');
    }
    //#swagger.tags = ['Movimentação']
};

//Registra entrada do cliente no motel - POST
const registrarEntrada = ( req, res ) => {
    const { idQuarto, 
           tempoEstimado,
           valorHoraQuarto,
           itensConsumidos  = [],
           veiculo, 
           usuario } = req.body;   
          
    const tempoContratado = tempoEstimado;   
    const valorTotal      = ( tempoContratado * valorHoraQuarto )   
    
    const novoCheckIn = { id: listMovimentacao.length +1,
                          statusQuarto: "Ocupado",
                          idQuarto,
                          tempoEstimado,
                          tempoContratado,
                          valorHoraQuarto,
                          itensConsumidos ,
                          valorTotal,
                          veiculo,
                          usuario,
                          entrada: new Date(),
                          saida: null  
    };
    listMovimentacao.push ( novoCheckIn );
    res.status( 201 ).json( novoCheckIn );
    //#swagger.tags = ['Movimentação']
};

//realizar checkout - put
const registrarSaida = ( req, res ) => {

    const { id } = req.params;
    const { // listItensConsumidosPorCliente
            // valorTotal
            itensConsumidos } = req.body;    
    
    const index = listMovimentacao.findIndex( quarto => quarto.id === parseInt( id ));
    
    if ( index !== -1 ){
        let listCheckOut = []
        listCheckOut = fechaComanda( listMovimentacao[ index ] ); 

        listMovimentacao[ index ].statusQuarto    = "Finalizado";
        listMovimentacao[ index ].tempoContratado = listCheckOut.tempoTotalQuarto;
        listMovimentacao[ index ].valotTotal      = listCheckOut.valorTotalQuarto;
        listMovimentacao[ index ].saida           = new Date();
        res.json ( listMovimentacao[index] );
    } else {
        res.status( 400 ).json ( 'Erro ao finalizar atendimento! ');
    }
    //#swagger.tags = ['Movimentação']
};

// Excluir movimentação - DELETE const excluirMovimentacao  Não será utilizada

module.exports = { listarMovimentacao, listarQuartosStatus, registrarEntrada, registrarSaida }
