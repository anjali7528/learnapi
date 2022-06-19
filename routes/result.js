const router = require("express").Router();
const Result = require("../models/result")


router.post("/", async(req,res)=>{
    const newResult =  new  Result(req.body);
    try{
        const savedResult = newResult.save();
        res.status(200).json(savedResult)
    }
    catch(err){
        res.status(500).json(err);
    }
})

//all result
router.get("/allresult", async (req,res) => {

    try{
        let result;
         result = await Result.find();
        
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;