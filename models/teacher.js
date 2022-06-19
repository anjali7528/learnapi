const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    schoolId:{
        type:String,

    },

    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default: "",
    },
},{timestamps:true});

module.exports = mongoose.model("Teacher",teacherSchema);