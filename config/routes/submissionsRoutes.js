

const express = require('express');

const Stories = require('../dbModels/storiesDBRequestModels.js');

const auth = require('../../auth/authenticate');

const submissionsRoutes = express.Router();


//restricted endpoint for admins to view unapproved story submissions
submissionsRoutes.get('/', auth.adminAuthenticate, async (req, res) => {
    try {
        const stories = await Stories.getAll();
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).json({error: 'The submitted stories could not be retrieved.'});
    }
});

//allows admin to get a single story by the story's db id
submissionsRoutes.get('/:id', auth.adminAuthenticate, async (req, res) => {
    try {
        const story = await Stories.findById(req.params.id);
        console.log(story);
        console.log(req.params.id);
        if (story) {
        res.status(200).json(story);
        } else {
            res.status(404).json({message: 'A story with that specified ID does not exist.'});
        }
    } catch (error) {
        res.status(500).json({error: 'The post could not be retrieved'});
    }
});

//allows admin to update a post / approve it
submissionsRoutes.put('/:id', auth.adminAuthenticate, async (req, res) => {
    
    try {
        const story = await Stories.update(req.body, req.params.id);
        
        if (story == 0) {
            res.status(404).json({message: 'A story with the specified ID does not exist.'});
        } else {
            res.status(200).json(req.body);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'The story could not be modified at this time.'});
    }
});

//allows admin to delete a post
submissionsRoutes.delete('/:id', auth.adminAuthenticate, async (req, res) => {
    try {
        const story = await Stories.findById(req.params.id)
        console.log(story);
        console.log(req.params.id);
        if (story.id > 0) {
            try {
                const destroy = await Stories.deleteStory(req.params.id);
                if (destroy) {
                    res.status(200).json({message: 'The story has been deleted.'});
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({error: 'The story could not be deleted.'});
            }
        } else {
            res.status(404).json({message: 'A story with the specified ID does not exist.'});
        }
    } catch (error) {
        res.status(500).json({error: 'The story could not be removed.'});
    }
});

module.exports = submissionsRoutes;