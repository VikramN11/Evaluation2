const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) =>{
    let token = req.headers.authorization;
    jwt.verify(token, 'masai', function(err, decoded) {
        if(decoded){
            req.body.user = decoded.userID;
            next();
        }
        else{
            res.send({"masg":"please Login"});
        }
      });
}

module.exports = {
    authenticate
}