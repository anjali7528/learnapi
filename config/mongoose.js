const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.a7irpfy.mongodb.net/?retryWrites=true&w=majority');

const db=mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to db"));

db.once('open', function(){
    console.log('Connected to db');
});

module.exports = db;