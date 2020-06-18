const mongoose = require('mongoose');

//Use mongoose to interact with the mongo atlas 
//Setup a user object
const ContactSchema = new mongoose.Schema({
    //Relationship between contact and User
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'//Specific collection is de users
    },
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:String,
       
    },
    type:{
        type:String,
        default:'personal'
    },
    date:{
        type:String,
        default:Date.now
    }
});

module.exports = mongoose.model('contact', ContactSchema);