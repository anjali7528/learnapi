const router = require("express").Router();
const questions = require("../models/questions");
const CourseQ = require("../models/quiz")

//CREATE Quiz
router.post("/", async(req,res)=>{
    const newquiz =  new  questions(req.body);
    try{
        const savedquiz = newquiz.save();
        res.status(200).json(savedquiz)
    }
    catch(err){
        res.status(500).json(err);
    }
})

//UPDATE quiz
router.put("/:id", async(req,res)=>{
  
    try{
     const question = await questions.findById(req.params.id);
     if(question.createor === req.body.createor){
        try{
            const updateQuestion = await questions.findByIdAndUpdate(req.params.id,{
                $set : req.body,
            },{ new :  true });
             res.status(200).json(updateQuestion);
        } catch(err){
            res.status(500).json(err);
        }
     } 
     else{
        res.status(401).json("You can only update your quiz");
    }
}
    catch (err){
        res.status(500).json(err);
    }

});

//DELETE quiz
router.delete("/:id", async(req,res)=>{
  
    try{
     const question = await questions.findById(req.params.id);
     if(question.createor === req.body.createor){
        try{
            await question.delete()
          res.status(200).json("question has been deleted");
        } catch(err){
            res.status(500).json(err);
        }
     }
     else{
        res.status(401).json("You can only delete your question or change the course name!");
     }
}
    catch (err){
        res.status(404).json(err);
    }

})

//GET ALL question of a course
router.get("/", async (req,res) => {
    const course = req.body.course;
    try{
        let question;
        if(course){
            question = await questions.find({course});
        }
        else{
            question = await questions.find();
        }
        res.status(200).json(question);
    }
    catch(err){
        res.status(500).json(err);
    }
})

// create quiz

router.post("/makeQuiz", async(req,res)=>{
    const newquizC =  new  CourseQ(req.body);
    try{
        const savedquizC = newquizC.save();
        res.status(200).json(savedquizC)
    }
    catch(err){
        res.status(500).json(err);
    }
})

//view all quiz
router.get("/allQuiz", async (req,res) => {

    try{
        let quizez;
         quizez = await CourseQ.find();
        
        res.status(200).json(quizez);
    }
    catch(err){
        res.status(500).json(err);
    }
})
    


module.exports = router;

