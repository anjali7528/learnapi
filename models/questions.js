const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    course:{
        type:String,
        required:true,
        unique: true
    },
    question:{
        type: String,
        required: true,
    },
    options:[{
        type: String,
    }],
    Answer:[{
        type: String,
    }],
    marks:{
        type:Number,
    },

    createor:{
        type:String,
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model("questions",questionSchema);