const express = require('express');

const db = require('../../database/dbConfig.js');

const Stories = require('../dbModels/storiesDBRequestModels.js');

const submitStoryRoutes = express.Router();


submitStoryRoutes.post('/', async (req, res) => {
    try {
        
        if (req.body.name == null || req.body.title == null || req.body.story == null) {
            res.status(400).json({errorMessage: "Please provide a name, title, and contents for the post."});
        } else {
            const story = await Stories.addStory(req.body);
            res.status(201).json(story)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "There was an error while saving the story to the database"});
    }
})

module.exports = submitStoryRoutes;