const express = require('express');
const mongoose = require('mongoose');
const app = express();

//middleware handler 
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');


// connecting to database
mongoose.connect('mongodb://localhost:27017/student_grade_mgt_system')
.then(()=>console.log('connected to database'))
.catch((err)=>console.log(err))

//getting a routes 
const signupRoutes = require('./routes/signup.route');
const loginRoutes = require('./routes/login.route');
//using routes
app.use('/signup',signupRoutes)
app.use('/login',loginRoutes);
// using app
app.get('/',(req,res)=>{
    res.render('index')
})



app.listen(3000,(req,res)=>{
    console.log('server is on live');
}) 