const express = require('express');

const db = require('../database/dbConfig.js');

const Stories = require('./storiesDBRequestModels.js');

const submissionsRoutes = express.Router();


//restricted endpoint for admins to view unapproved story submissions
submissionsRoutes.get('/', async (req, res) => {
    try {
        const stories = await Stories.getAll();
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).json(error);
    }
}); 

module.exports = submissionsRoutes;