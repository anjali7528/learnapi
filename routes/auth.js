const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const teacherSchema = require('../models/teacher');
const  studentSchema = require('../models/student');
const jwt  = require("jsonwebtoken");

// const teacherControllers = require('../controllers/teacher_controller')
const JWT_SECRET ='805fa36a6470b09c3957ece0d9031df8c582868e1612ffb045d41659bec766b858c84cce1d9fdb6bf4568fe8958ae15192d42c52e086d2b81462ebb74d01126c'

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
          console.log('cp1')
          const user = await newUser.save();
          res.status(200).json(user);
    } catch(err){
        console.log('cpp2')
        res.status(500).json(err);
    }
})


//LoginTeacher
router.post("/login/teacher",async(req,res) => {
    try{
          const user = await teacherSchema.findOne({email: req.body.email})
          console.log('cppp1');
          if(!user) return next(createError(404,"User not found!"))
          console.log('cppp2');
          const validate = await bcrypt.compare(req.body.password, user.password)
          console.log('cppp3');
          if(!validate) return next(createError(400,"wrong password or username"))
          console.log('cppp4');
         const token = jwt.sign({id:"", username: user.username, email: user.email}, JWT_SECRET);
         console.log('cppp5');
          const {password, ...others} = user._doc;
          console.log('cppp6');
          res.cookie("access_token", token,{
            httpOnly: true,
          }).status(200).json(others);
          console.log('cppp7');
         
    }catch(err){
        console.log('cppp');
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

