const express = require('express');
const api = require('./api');
const app = express();

const port = process.env.PORT || 1337;

// set up swagger-ui
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// routes
app.get('/api/v1/ping', api.pong);

// start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
