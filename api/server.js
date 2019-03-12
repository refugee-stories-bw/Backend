const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const storiesRoutes = require('../config/storiesRoutes.js');
const usersRoutes = require('../config/usersRoutes.js');
const loginRoutes = require('../config/loginRoutes.js');
const submitStoryRoutes = require('../config/submitStoryRoutes.js');
const submissionsRoutes = require('../config/submissionsRoutes.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/stories', storiesRoutes);
server.use('/signup', usersRoutes);
server.use('/login', loginRoutes);
server.use('/submitStory', submitStoryRoutes);
server.use('/submissions', submissionsRoutes);

module.exports = server;