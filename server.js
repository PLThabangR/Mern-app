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
//Define our Routes 
app.use('/api/users' , require('./Routes/users'));
app.use('/api/auth' , require('./Routes/auth'));
app.use('/api/contact' ,require('./Routes/contacts'));

//listen to the port
app.listen(PORT,()=> console.log(`Server started on ${PORT}`));