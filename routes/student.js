const router = require("express").Router();
const Student = require("../models/student")
const varifiedToken = require("../utils/verifyToken")

router.get("/checkauthentication", varifiedToken , (req,res,next) => {

    res.send("hello user you are logged in")
})

router.get("/checkuser", varifyUser , (req,res,next) => {

    res.send("hello user you are logged in")
})



router.get("/", verifyUser, async (req,res) => {

    try{
        let user;
         user = await User.find();
        
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;