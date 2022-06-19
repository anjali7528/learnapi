// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://admin:admin@cluster0.a7irpfy.mongodb.net/?retryWrites=true&w=majority');

// const db=mongoose.connection;

// db.on('error', console.error.bind(console,"Error connecting to db"));

// db.once('open', function(){
//     console.log('Connected to db');
// });

// module.exports = db;

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.a7irpfy.mongodb.net/?retryWrites=true&w=majority');
  console.log("db connected")
}