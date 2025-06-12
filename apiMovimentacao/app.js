const express     = require( 'express' );
const swaggerUi   = require( 'swagger-ui-express' );
const swaggerFile = require( './swagger-output.json')
const app         = express();

const movimentacaoRouter = require( './router/movimentacaoRouter' );
const quartoRouter       = require( './router/quartosRouter'      );
const PORT               = process.env.PORT || 8080;

app.use( express.json() );
app.use( '/api-doc', swaggerUi.serve, swaggerUi.setup( swaggerFile ) );
app.use( '/motel'  , movimentacaoRouter );
app.use( '/motel'  , quartoRouter );

app.listen( PORT, () => {
    console.log( `http://localhost:${PORT}/api-doc` );
});