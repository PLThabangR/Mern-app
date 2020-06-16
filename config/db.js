const mongoose =require('mongoose');
const config = require('config');
const db =config.get('mongoURI');

//This function will help us to connect to the mongo atlas
const connectDB = async () =>{
    try{
        await   mongoose
        .connect(db,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology: true
        });
        console.log("Mongo db connected")
    }catch(err){
        console.log(err,"MongoDB Did not connect")
    }
} 



module.exports = connectDB;