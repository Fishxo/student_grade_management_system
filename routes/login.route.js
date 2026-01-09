const express = require('express');
const router = express.Router();
const student = require('../models/student');

//getting a login page
router.get('/',(req,res)=>{
    res.render('login')
})
   
router.post('/',async(req,res)=>{
    const {email,password} = req.body;

     
        try{
          const stud =  await student.findOne({email:email});
            if(!stud){
                res.send('user des not exist')
            }if(stud.password !== password){
                res.send('incorrect password')
            }
          
    res.render('homePage',{student:stud})

        }catch(error){
            console.log(error)
        }

})
module.exports = router;
