const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  
    coursename:{
        type: String,
        required: true,
        unique: true
    },

    userId:{
        type:String,
        required:true
    },

    marks:{
        type:String,
        required: true
    },

    pmarks:{
        type:String,
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model("Result",resultSchema);