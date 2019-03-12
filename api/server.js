const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const storiesRoutes = require('../config/routes/storiesRoutes.js');
const usersRoutes = require('../config/routes/usersRoutes.js');
const loginRoutes = require('../config/routes/loginRoutes.js');
const submitStoryRoutes = require('../config/routes/submitStoryRoutes.js');
const submissionsRoutes = require('../config/routes/submissionsRoutes.js');


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