let listQuartos = [];

const listarQuartos = ( req, res ) => {
    res.json( listQuartos );
}

//Create quarto = POST
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

module.exports = { listarQuartos, criarQuarto };