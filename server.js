const express = require('express');
const connectDB = require('./config/db');
const app=  express();
const PORT=process.PORT || 5000


//Connect mongo db
connectDB();

//Init middleware
app.use(express.json({extended:false}));

//Get the home 
app.get('/',(req,res)=>{
    res.send("Welcome home");
});
//Allow requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//Define our Routes 
app.use('/api/users' , require('./Routes/users'));
app.use('/api/auth' , require('./Routes/auth'));
app.use('/api/contact' ,require('./Routes/contacts'));

//listen to the port
app.listen(PORT,()=> console.log(`Server started on ${PORT}`));