const express = require('express');

const app=  express();
const PORT=process.PORT || 5000

//route
app.get('/',(req,res) =>
 res.json({ msg:'hello world api'})
);

//Define our Routes 
app.use('api/users' , require('./Routes/users'));
app.use('api/auth' , require('./Routes/auth'));
app.use('api/contacts' ,require('./Routes/contacts'));

//listen to the port
app.listen(PORT,()=> console.log(`Server started on ${PORT}`));