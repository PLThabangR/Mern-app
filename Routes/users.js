//Import  express
const express = require('express');
const User = require('../Model/User');
const { check,validationResult } = require('express-validator/check');

//init middleware body parser//create s router variable with express
const router = express.Router();

//@route POST api/users
//@desc  Register a user
//@access  Public
router.post('/',
[
check('name','Please enter a name').not().isEmpty(),
check('email','Please include a valid email').isEmail(),
check('password','Please enter a password with six or more').isLength({min:6})

],
(req,res)=>{
    //Give us the data send to the routes
    //To use this we need a middleware 
    const errors = validationResult(req);  //creating a errors variable which check errors from req
    if(!errors.isEmpty()){ //Use if statement to check if error variable is empty or not
        return res.status(400).json({errors:array.array()});//If the errors variable is not empty return a bad status request
    }

    res.send("passed")
});


module.exports=router;