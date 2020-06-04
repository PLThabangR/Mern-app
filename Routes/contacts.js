//Import  express
const express = require('express');
//create s router variable with express
const router = express.Router();

//@route Get api/contacts
//@desc  Get all users contacts
//@access  Private
router.get('/',(req,res)=>{
    res.send("Get all contacts");
});

//@route Post api/contacts
//@desc  Add new users contacts
//@access  Private
router.post('/',(req,res)=>{
    res.send("Add new contacts");
    console.log("not showing");
});


//@route Get api/contacts/:id
//@desc  update contacts
//@access  Private
router.put('/:id',(req,res)=>{
    res.send("update contacts");
});

//@route Delete api/contacts/:id
//@desc  Delete contact
//@access  Private
router.delete('/:id',(req,res)=>{
    res.send("Delete contacts");
});


module.exports=router;