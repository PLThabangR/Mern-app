//Import  express
const express = require('express');
//const User = require('../Model/User');

//init middleware body parser//create s router variable with express
const router = express.Router();

//@route POST api/users
//@desc  Register a user
//@access  Public
router.post('/',(req,res)=>{
    res.send(req.body);
});


module.exports=router;