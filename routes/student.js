const router = require("express").Router();
const Student = require("../models/student")
const verifyToken = require("../utils/verifyToken")
const verifyUser = require("../utils/verifyToken")

router.get("/checkauthentication", (req,res,next) => {

    res.send("hello user you are logged in")
})

// router.get("/checkuser", verifyUser , (req,res,next) => {

//     res.send("hello user you are logged in")
// })



router.get("/", async (req,res) => {

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