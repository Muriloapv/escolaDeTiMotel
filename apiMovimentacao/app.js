const express = require( 'express' );
const app     = express();

const movimentacaoRouter = require( './router/movimentacaoRouter' );
const quartoRouter       = require( './router/quartosRouter' );
const PORT    = process.env.PORT || 8080;

app.use( express.json() );
app.use( '/api', movimentacaoRouter );
app.use( '/api', quartoRouter );

app.listen( PORT, () => {
    console.log( `http://localhost:${PORT}/api/movimentacao` );
    console.log( `http://localhost:${PORT}/api/quartos` );
});