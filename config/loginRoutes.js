const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtKey =
  process.env.JWT_SECRET ||
  'add a .env file to root of project with the JWT_SECRET variable';

const db = require('../database/dbConfig.js');

const tokenService = require('../auth/token-service');
const { authenticate } = require('../auth/authenticate');
const Users = require('./usersDBRequestModels.js');

const loginRoutes = express.Router();

//use login info sent by user to authenticate the user as registered
loginRoutes.post('/', (req, res) => {
    let {username, password} = req.body;
    console.log(username);
    
    Users.findBy({username})
      .first()
      .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
              const token = tokenService.generateToken(user);
              res.status(200).json({message: 'Welcome!', token});
          } else {
              res.status(401).json({message: 'Please enter the correct username and password'});
          }
      })
      .catch(err => {
          res.status(500).json(err);
      });
});

//middleware to check for authentication token for restricted access retrieval
function restricted(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, jwtKey, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.status(401).json({message: 'Token validation failed'});
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({message: 'Token not found'});
    }
}

//middleware to check for admin authentication token for restricted access retrieval
function adminRestricted(req, res, next) {
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
        res.status(401).json({message: 'Token not found'});
    }
}

//auth test
loginRoutes.get('/testAuth', restricted, (req, res) => {
    res.status(200).json({message: 'You are authenticated', decodedToken: req.decodedJwt});
});

//admin auth test
loginRoutes.get('/testAdmin', adminRestricted, (req, res) => {
    res.status(200).json({message: 'You are admin authenticated', decodedToken: req.decodedJwt});
});


module.exports = loginRoutes;