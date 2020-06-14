const mongoose = require('mongoose');

//Use mongoose to interact with the mongo atlas 
//Setup a user object
const UserSchema = new mongoose.Schema({

    name:{
        type:Sring,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);