const router = require("express").Router();
const Courses = require("../models/courses");

//CREATE course
router.post("/", async(req,res)=>{
    const newcourse =  new  Courses(req.body);
    try{
        const savedCourse = newcourse.save();
        res.status(200).json(savedCourse)
    }
    catch(err){
        res.status(500).json(err);
    }
})

//UPDATE course
router.put("/:id", async(req,res)=>{
  
    try{
     const course = await Courses.findById(req.params.id);
     if(course.username === req.body.username){
        try{
            const updateCourse = await Courses.findByIdAndUpdate(req.params.id,{
                $set : req.body,
            },{ new :  true });
             res.status(200).json(updateCourse);
        } catch(err){
            res.status(500).json(err);
        }
     } 
     else{
        res.status(401).json("You can only update your Courses!");
    }
}
    catch (err){
        res.status(500).json(err);
    }

});

//DELETE course
router.delete("/:id", async(req,res)=>{
  
    try{
     const course = await Courses.findById(req.params.id);
     if(course.username === req.body.username){
        try{
            await course.delete()
          res.status(200).json("course has been deleted");
        } catch(err){
            res.status(500).json(err);
        }
     }
     else{
        res.status(401).json("You can only delete your course!");
     }
}
    catch (err){
        res.status(404).json(err);
    }

})

//GET ALL courses
router.get("/", async (req,res) => {
    const username = req.query.user;
    try{
        let course;
        if(username){
            course = await Courses.find({username});
        }
        else{
            course = await Courses.find();
        }
        res.status(200).json(course);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;

