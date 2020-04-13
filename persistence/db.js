const mongoose = require('mongoose')
mongoose.connect(
    process.env.MONGO_URI || 'mongodb://localhost:27017',
    { useNewUrlParser: true, useCreateIndex: true, dbName : "fitminds" }
);
module.exports = mongoose