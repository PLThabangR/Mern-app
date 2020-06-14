//Import  express
const express = require('express');
//create s router variable with express
const router = express.Router();

//@route get api/auth
//@desc  get logged user
//@access  Private
router.get('/',(req,res)=>{
    res.send("Welcome home");
});



module.exports=router;