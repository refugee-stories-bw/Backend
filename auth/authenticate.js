const jwt = require('jsonwebtoken');

const jwtKey =
  process.env.JWT_SECRET ||
  'add a .env file to root of project with the JWT_SECRET variable';


module.exports = {
  authenticate,
  adminAuthenticate,
};

//authenticates the user as an approved user/admin
function authenticate(req, res, next) {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}


//middleware to check for admin authentication token for restricted access retrieval
function adminAuthenticate(req, res, next) {
  const token = req.headers.authorization;
  
  if (token) {
      jwt.verify(token, jwtKey, (err, decodedToken) => {
          if (err) {
              console.log(err);
              res.status(401).json({message: 'Token validation failed'});
          } else {
               if (decodedToken.admin) {
              req.decodedJwt = decodedToken;
              next();
               } else {
                  res.status(403).json({message: 'Not validated admin account'}); 
               }
          }       
      });
  } else {
      res.status(401).json({message: 'No token provided, must be set on the Authorization Header'});
  }
}