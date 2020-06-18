const jwt = require("jsonwebtoken");
const config = require('config');

//Export this middleware function
module.exports =function(req,res,next){
    //Get the token from header
    //key token to the header x-auth-token
    const token = req.header('x-auth-token');
    //check if not a token
    if(!token){
        return res.status(401).json({msg:'No token , authoriazation denied'});
    }

    try{
        //We are verifying the token
        const decoded = jwt.verify(token,config.get('jwtSecret'));
        //pay load is put to decoded 
        //assign the decoded user to req user
        req.user=decoded.user;
        next();
    }catch(err){

        res.status(401).json({msg:'token not valid'})
    }
}
