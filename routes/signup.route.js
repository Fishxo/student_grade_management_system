const express = require('express');
const router = express.Router();
const studentt = require('../models/student');

router.get('/', (req, res) => {
    res.render('signup'); 
});

router.post('/',async(req,res)=>{
    const {firstName,secondName,age,userName,email,password} = req.body;
     const stu = new studentt(req.body);
     console.log(stu);

     try{
        await stu.save();
        res.send('you have registered successfully');
     }catch(error){
        console.log(error);
        res.send('sorry could not register')
     }

})

module.exports = router;