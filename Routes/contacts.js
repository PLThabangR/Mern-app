//Import  express
const express = require('express');
//create s router variable with express
const router = express.Router();
const User = require('../Model/User');
const { check,validationResult, buildCheckFunction } = require('express-validator');
const auth = require('../Middleware/auth');
const Contact =require('../Model/Contact');
const { remove } = require('../Model/User');
//@route Get api/contacts
//@desc  Get all users contacts
//@access  Private
router.get('/',auth,[],async (req,res)=>{
    //We need to pull from databae 
    try{
        //Get contact of the requested user
 const contacts = await Contact.find({user:req.user.id}).sort({date:-1});
 res.json(contacts);
    }catch(err){
console.error(err.message);
res.status(500).send("Server error");
    }
    
});

//@route Post api/contacts
//@desc  Add new users contacts
//@access  Private
router.post('/',[auth,[
    check('name','Name is required').not().isEmpty()

]],async (req,res)=>{
     //Give us the data send to the routes
    //To use this we need a middleware 
    const errors = validationResult(req);  //creating a errors variable which check errors from req
    if(!errors.isEmpty()){ //Use if statement to check if error variable is empty or not
        return res.status(400).json({errors:errors.array()});//If the errors variable is not empty return a bad status request
    }

    //Destructuring data from the body
    const {name,email,phone,type} = req.body;

    try{
        //create new contact
        const newContact=new Contact({name,email,phone,type,user:req.user.id});

        //Saving contact to the database
        const contact = await newContact.save();
        res.json(contact);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


//@route Get api/contacts/:id
//@desc  update contacts
//@access  Private
router.put('/:id',auth,async (req,res)=>{
    const {name,email,phone,type} = req.body;
    
    //Build a contact object based on de fields
    const contactFields ={};
    if(name) contactFields.name=name;
    if(email) contactFields.email=email;
    if(phone) contactFields.phone=phone;
    if(type) contactFields.type=type;


    try{
        //get the id as a stored boolean
        let contact = await Contact.findById(req.params.id);

        //If contact not found
  if(!contact) return res.status(404).json({msg:'Contact not found'});

        //make sure user owns contact to edit
     if(contact.user.toString() !== req.user.id){
       return res.status(401).json({msg:'Not authorized'});  }
       // We are undating now
     contact = await Contact.findByIdAndUpdate(req.params.id,
        {$set:contactFields},
        {new: true},
       
        );

       res.json(contact);
    }catch(err){

        console.error(err.message);
        res.status(500).send('Server error');
    }

});

//@route Delete api/contacts/:id
//@desc  Delete contact
//@access  Private
router.delete('/:id',auth, async (req,res)=>{
    
    try{
        //get the id as a stored boolean
        let contact = await Contact.findById(req.params.id);

        //If contact not found
  if(!contact) return res.status(404).json({msg:'Contact not found'});

        //make sure user owns contact to edit
    // if(contact.user.toString() !== req.user.id){
      //  return res.status(401).json({msg:'Not authorized'});  }
       // We are undating now
     
       await Contact.findByIdAndRemove(req.params.id);

       res.json({msg:'Contact removed'});
       res.json(contact);
    }catch(err){

        console.error(err.message);
        res.status(500).send('Server error');
    }
    
});


module.exports=router;