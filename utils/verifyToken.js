const jwt = require('jsonwebtoken')
const createError = require('../utils/error.js');

exports.verifyToken = (req,res,next) =>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authonticated!"));
    }

    jwt.verify(token,"805fa36a6470b09c3957ece0d9031df8c582868e1612ffb045d41659bec766b858c84cce1d9fdb6bf4568fe8958ae15192d42c52e086d2b81462ebb74d01126c", (err,user)=>{
        if(err)   return next(createError(403, "Token is not valid!"));
        req.user  = user;
        next()
    }) 
};

exports.verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.id === req.params.id ) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };