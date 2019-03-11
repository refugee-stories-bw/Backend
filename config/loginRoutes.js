const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../database/dbConfig.js');

const tokenService = require('../auth/token-service');
const { authenticate } = require('../auth/authenticate');
const Users = require('./usersDBRequestModels.js');

const loginRoutes = express.Router();

//use login info sent by user to authenticate the user as registered
loginRoutes.post('/', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({username})
      .first()
      .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
              const token = generateToken(user);
              res.status(200).json({message: 'Welcome!', token});
          } else {
              res.status(401).json({message: 'Please enter the correct username and password'});
          }
      })
      .catch(err => {
          res.status(500).json(err);
      });
});

module.exports = loginRoutes;