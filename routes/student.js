const router = require("express").Router();
const Student = require("../models/student")

router.get("/", async (req,res) => {

    try{
        let result;
         result = await Student.find();
        
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;