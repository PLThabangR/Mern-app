//Import  express
const express = require('express');
const User = require('../Model/User');
const { check,validationResult, buildCheckFunction } = require('express-validator');
const bcryt = require("bcryptjs");
const jwt =require('jsonwebtoken');
const config = require('config');


//create s router variable with express
const router = express.Router();

//@route POST api/users
//@desc  Register a user
//@access  Public
router.post('/',
//Use validators to check validation 
[
check('name','Please enter a name').not().isEmpty(),
check('email','Please include a valid email').isEmail(),
check('password','Please enter a password with six or more').isLength({min:6})

],async  (req,res)=>{
    //Give us the data send to the routes
    //To use this we need a middleware 
    const errors = validationResult(req);  //creating a errors variable which check errors from req
    if(!errors.isEmpty()){ //Use if statement to check if error variable is empty or not
        return res.status(400).json({errors:errors.array()});//If the errors variable is not empty return a bad status request
    }
   
    //Request body should contain three variable
  const {name,email,password} = req.body;

  try{
      //Check if users aleady exists using email
     let user = await User.findOne({email});
   
     if(user){
         //Pass 400 status which is a bad rquest
         return res.status(400).json({msg:'User already exists'})
     }

     /*Creating a new model of the user 
     /user instance 
     */
     user= new User({
        name,email,password 
     });

     /*before we save the user we need to 
     /  encrypt the password
     */
    const salt = await bcryt.genSalt(10);

    //we hash the salt and assign to the user model
    user.password = await bcryt.hash(password,salt);

    //Save to the database retuns a promise
    await user.save();

   //Create a pay load the objet we will send as a respond
   //Object we are ssending in the token
   const payload ={
      user:{
          id:user.id
      } 
   }

    //we are creating a token
    jwt.sign(payload,config.get('jwtSecret'),{
    expiresIn:36000
    },(err,token)=>{
    //throw error 
    if(err) throw err;
    //pass the object token to the respond
    res.json({token});
  });
  }catch(err){

    console.error(err.message);
    res.status(500).send('Server error');
  }
    
});


module.exports=router;