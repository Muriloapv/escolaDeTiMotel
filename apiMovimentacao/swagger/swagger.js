const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Motel',
    description: 'Api criada para gestão moteleteira. Cadastrando: produtos, quartos, fluxo de entrada'
  },
  host: 'localhost:3000',
  schemes: ['http']
};''

const outputFile     = './swagger_output.json';
const endpointsFiles = ['./router/quartoRouter.js',  './router/tarefaRouter.js', './router/produtoRouter.js']; // ou ./routes/tarefaRoutes.js etc

swaggerAutogen( outputFile, endpointsFiles, doc );

