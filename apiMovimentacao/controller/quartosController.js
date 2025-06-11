let listQuartos = [];

// Listar todos os quartos
const listarQuartos = ( req, res ) => {
    res.json( listQuartos );
}

//Create quarto = POST ( deve ser adicionado img em outro momento)
const criarQuarto = ( req, res ) => {
    const { nome, descricao, valorHora } = req.body;

    const novoQuarto = { id: listQuartos.length +1,
                         nome,
                         descricao,
                         valorHora,
                         status: "livre"
    };
    listQuartos.push       ( novoQuarto );
    res.status( 201 ).json ( novoQuarto );
};

// Atualizar informações sobre o quarato - PUT
const atualizarQuarto = ( req, res ) => {
    
};
module.exports = { listarQuartos, criarQuarto };