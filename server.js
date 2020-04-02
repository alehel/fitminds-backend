const express = require('express');
const api = require('./api');

const createServer = (port) => {
    const app = express();
    app.get('/v1/ping', api.pong);
    const server = app.listen(port, () => console.log(`Server listening on port ${port}`));
    return server;

};

if(require.main === module) {
    const port = process.env.PORT || 1337;
    const server = createServer(port);
}

module.exports = {
    createServer
}
