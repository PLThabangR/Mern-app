const mongoose = require('mongoose');

//Use mongoose to interact with the mongo atlas 
//Setup a user object
const UserSchema = new mongoose.Schema({

    name:{
        type:String,
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
//we are exporting using mongoose by passing the name of the databae to atlas
module.exports = mongoose.model('user', UserSchema);