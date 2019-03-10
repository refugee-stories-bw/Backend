const express = require('express');

const db = require('../database/dbConfig.js');

const Stories = require('./storiesDBRequests.js');

const storiesRoutes = express.Router();

storiesRoutes.get('/', async (req, res) => {
    try {
        const stories = await Stories.getAll();
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).json(error);
    }
});       


module.exports = storiesRoutes;



