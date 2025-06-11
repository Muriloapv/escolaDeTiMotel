let listMovimentacao = [];


// Lista todas as movimentações entrada/saida - GET
const listarMovimentacao = ( req, res ) => {
    res.json ( listMovimentacao );
};

// Listar as movimentações em aberto - GET
const listarQuartosStatus = ( req, res ) => {//tornar essa função generica, recebdno ocupado ou livre
    const { statusQuarto } = req.params.status;

    const strResult =  listMovimentacao.filter( statusQ => statusQ.statusQuarto.toLowerCase() === statusQuarto.toLowerCase );
    if ( !strResult ) {//! valida se a string está vazia
        res.json( strResult ); 
    } else {
        res.status( 400 ).json ( 'Aviso: Não a quartos com esse status! ');
    }
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
};

//realizar checkout - put
const registrarSaida = ( req, res ) => {

    const { id } = req.params;
    const { statusQuarto,
            tempoContratado,
            valorHoraQuarto,
            valorTotal } = req.body;    
    
    const index = listMovimentacao.findIndex( quarto => quarto.id === parseInt( id ));

    if ( index !== -1 ){
        listMovimentacao[ index ].statusQuarto    = "Finalizado";
        listMovimentacao[ index ].tempoContratado = functionValidaTempo;
        listMovimentacao[ index ].valotTotal      = functionValidaComanda;
        listMovimentacao[ index ].saida           = new Date();
    } else {
        res.status( 400 ).json ( 'Erro ao finalizar atendimento! ');
    }
};

// Excluir movimentação - DELETE
// const excluirMovimentacao  Não será utilizada

// Atualizar entrada, com i 

module.exports = { listarMovimentacao, listarQuartosStatus, registrarEntrada, registrarSaida }
