const express = require('express');
const api = require('./api');
const app = express();

const port = process.env.PORT || 1337;

app.get('/v1/ping', api.pong);

app.listen(port, () => console.log(`Server listening on port ${port}`));
