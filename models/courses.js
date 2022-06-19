const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },

    username:{
        type:String,
        required:true
    },

    Pic:{
        type:String,
        default: "",
    },

},{timestamps:true});

module.exports = mongoose.model("Course",coursesSchema);