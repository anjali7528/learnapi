const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    idnumber:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default: "",
    },

    courses:[{
        course: String,
        marks: [String]
}]

},{timestamps:true});

module.exports = mongoose.model("Student",studentSchema);