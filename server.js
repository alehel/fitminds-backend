const express = require('express');
const api = require('./api');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');
require('dotenv').config();

const createServer = (port) => {
    const app = express();
    
    app.get('/v1/ping', api.pong);

    app.get('/v1/athlete', api.getAthletes);

    app.get('/v1/athlete/:athleteId', api.getAthlete);

    app.get('/v1/authorization/:authorizationCode', api.authorize);

    app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    const server = app.listen(port, () => console.log(`Server listening on port ${port}`));
    return server;


};

//check if the module is being run by node (aka entry point of the program) or pulled in by require
if(require.main === module) {
    const port = process.env.PORT || 1337;
    const server = createServer(port);
}

module.exports = {
    createServer
}

