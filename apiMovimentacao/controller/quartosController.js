let listQuartos = [];

const listarQuartos = ( req, res ) => {
    res.json( listQuartos );
    //#swagger.tags = ['Quartos']
}

//Create quarto = POST ( deve ser adicionado img em outro momento)
const criarQuarto = ( req, res ) => {
    const { nome, descricao, valorHora } = req.body;

    const novoQuarto = { id: listQuartos.length +1,
                         nome,
                         descricao,
                         valorHora,
                         statusDisponibilidade: "Dinponivel"
    };
    listQuartos.push       ( novoQuarto );
    res.status( 201 ).json ( novoQuarto );
    //#swagger.tags = ['Quartos']
};

// Atualizar informações sobre o quarato - PUT
const atualizarQuarto = ( req, res ) => {
    const { id }                         = req.params;
    const { nome, descricao, valorHora } = req.body;

    const index = listQuartos.findIndex( quarto => quarto.id === parseInt( id ));
    if ( index !== -1) {
        listQuartos[ index ].nome      = nome;
        listQuartos[ index ].descriao  = descricao;
        listQuartos[ index ].valorHora = valorHora;

        res.json( listQuartos[ index ]);
    } else {
        res.statu( 400 ).json({ mensagem: 'Quarto não encontrado.'})
    }
    //#swagger.tags = ['Quartos']
};

// Atualizar status de locação do quarto - PATCH
const atualizarStatusQuarto = ( req, res ) => {
    const { id     }                = req.params;
    const { statusDisponibilidade } = req.body;

    const index = listQuartos.findIndex( quarto => quarto.id === parseInt( id ) );
    if ( index !== -1 ){
        listQuartos[ index ].statusDisponibilidade = statusDisponibilidade;

        res.json( listQuartos[ index ] );
    } else {
        res.statu( 400 ).json({ mensagem: 'Quarto não encontrado.'})
    }
    //#swagger.tags = ['Quartos']
}

module.exports = { listarQuartos, criarQuarto, atualizarQuarto,atualizarStatusQuarto };