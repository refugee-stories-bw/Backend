const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../../database/dbConfig.js');

const tokenService = require('../../auth/token-service');
const { authenticate } = require('../../auth/authenticate');
const Users = require('../dbModels/usersDBRequestModels.js');

const usersRoutes = express.Router();

//creates a user and hashes the password before saving it to the database
usersRoutes.post('/', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 9);

    user.password = hash;

    Users.add(user)
      .then(saved => {
          res.status(201).json(saved);
      })
      .catch(err => {
          res.status(500).json(err);
      });
});

module.exports = usersRoutes;