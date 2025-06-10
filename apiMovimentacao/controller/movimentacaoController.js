let listMovimentacao = [];

// Lista todas as movimentações entrada/saida - GET
const listarMovimentacao = ( req, res ) => {
    res.json ( listMovimentacao );
}

//Registra entrada do cliente no motel - POST
const registrarEntrada = ( req, res ) => {
   const { idQuarto, 
           tempoEstimado,
           valorHoraQuarto,
           veiculo, 
           usuario } = req.body;    

    const novoCheckIn = { id: listMovimentacao.length +1,
                          status: "Em utilização",
                          idQuarto,
                          tempoEstimado,
                          tempoContratado: tempoEstimado,
                          valorHoraQuarto,
                          valorTotal: ( valorHoraQuarto * tempoContratado ),
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

    const { id,
            status,
            tempoContratado,
            valorHoraQuarto,
            valorTotal } = req.body;    
    
    const index = listMovimentacao.findIndex( listMovimentacao.id === parseInt( id ));

    if ( index !== id ){
        listMovimentacao[ index ].status          = "Finalizado";
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

module.exports = { listarMovimentacao, registrarEntrada, registrarSaida }
