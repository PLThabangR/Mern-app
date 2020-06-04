//Import  express
const express = require('express');
//create s router variable with express
const router = express.Router();

//@route get api/auth
//@desc  get logged user
//@access  Private
router.get('/',(req,res)=>{
    res.send("get logged in user");
});

//@route post api/auth
//@desc  Auth user and get token
//@access  Public
router.post('/',(req,res)=>{
    res.send("loggin user");
});



module.exports=router;