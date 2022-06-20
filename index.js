const express = require("express");
const authRoute = require("./routes/auth");
const courseRoute = require("./routes/courses");
const quizRoute = require("./routes/quiz");
const resultRoute = require("./routes/result");
const studentRoute = require("./routes/student");
const app  = express();
const port = process.env.PORT || 8000;
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');


app.use(cookieParser)
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/course",courseRoute);
app.use("/api/quiz",quizRoute);
app.use("/api/result",resultRoute);
app.use("/api/student",studentRoute);


// if(process.env.NODE_ENV= "production"){
//     app.use(express.static("client/build"))
//     const path = require("path")
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server: ${post}`);
    }
    console.log(`server is up and running: ${port}`);
})