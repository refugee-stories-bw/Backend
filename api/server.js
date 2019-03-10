const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const storiesRoutes = require('../config/storiesRoutes.js');



const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/stories', storiesRoutes);

module.exports = server;