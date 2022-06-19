const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const teacherSchema = require('../models/teacher');
const  studentSchema = require('../models/student');

// const teacherControllers = require('../controllers/teacher_controller')


//RegisterTeacher
router.post("/register/teacher", async(req,res)=>{
    try{
         
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
          const newUser = new teacherSchema({
              username: req.body.username,
              email: req.body.email,
              password:hashedPass,
          });
          const user = await newUser.save();
          res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
})

//LoginTeacher
router.post("/login/teacher",async(req,res) => {
    try{
          const user = await teacherSchema.findOne({email: req.body.email})
          !user && res.status(400).json("Wrong credentials!")

          const validate = await bcrypt.compare(req.body.password, user.password)
          !validate && res.status(400).json("Wrong credentials!")

          const {password, ...others} = user._doc;
          res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})

//Registerstudent
router.post("/register/student", async(req,res)=>{
    try{
         
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
          const newUser = new studentSchema({
              username: req.body.username,
              idnumber: req.body.idnumber,
              email: req.body.email,
              password:hashedPass,
          });
          const user = await newUser.save();
          res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
})


//LoginStudent
router.post("/login/student",async(req,res) => {
    try{
          const user = await studentSchema.findOne({email: req.body.email})
          !user && res.status(400).json("Wrong credentials!")

          const validate = await bcrypt.compare(req.body.password, user.password)
          !validate && res.status(400).json("Wrong credentials!")

          const {password, ...others} = user._doc;
          res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;

