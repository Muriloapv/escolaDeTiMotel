const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API Motel',
    description: 'API criada com o intuito de controlar cadastro de quarto',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);
