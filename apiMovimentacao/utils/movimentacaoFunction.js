/*
Função responsavel por realizar o fechamento da comanda
- calcular valor total dos itens consumidos
- calcular tempo que ficou
- apresentar valor total a ser pago
*/
function fechaComanda( list ){
    const horarioEntrada = list.entrada;
    const horarioSaida   = new Date();

    let tempoTotalQuarto   = ( horarioSaida - horarioEntrada       );
    tempoTotalQuarto       = Math.ceil( tempoTotalQuarto / 1000/ 60 / 60 );
    
    const valorTotalQuarto = ( tempoTotalQuarto * list.valorHora   );
    return { 
             tempoTotalQuarto, 
             valorTotalQuarto
    };
}

module.exports = { fechaComanda };