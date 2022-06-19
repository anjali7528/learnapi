const mongoose = require('mongoose');

const CourseQSchema = new mongoose.Schema({
    course:{
        type:String,
        required:true,
        
    },
    question:[{
        Answer:[{
        type: String,
        required: true,
    }],
        marks:{
          type:String
        },
        options:[{
            type: String,
            required: true,
        }],
        question:{
            type:String,
            required:true
        }
}],
  
    pmarks:{
        type:String,
    },

    creator:{
        type:String,
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model("CourseQ",CourseQSchema);