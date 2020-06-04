//Import  express
const express = require('express');
//create s router variable with express
const router = express.Router();

//@route POST api/users
//@desc  Register a user
//@access  Public
router.post('/',(req,res)=>{
    res.send("register a user");
});


module.exports=router;