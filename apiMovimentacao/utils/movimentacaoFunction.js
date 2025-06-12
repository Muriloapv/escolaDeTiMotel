//Unit responsavel por auxliar nas tranções de checkIn e checkOut
function calculaTempCheckOut ( hEntrada, hSaida, valorHora ) {
//calcula o tempo de permanencia no local
}

//Função responsavel por realizar o fechamento da comanda
/*
- calcular valor total dos itens consumidos
- calcular tempo que ficou
- apresentar valor total a ser pago
*/
function fechaComanda( list ){
    //primeiro calcula o valor gasto com quarto
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