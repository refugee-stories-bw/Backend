const knexConfig = require('../../knexfile.js');

const db = require('../../database/dbConfig.js');

module.exports = {
    getAll,
    findById,
    addStory,
    getApproved,
    update,
    deleteStory,
    getUnapproved
};


//gets all of the stories in the database
function getAll() {
    return db('stories');
}

//gets only the story in the database with that particular id
function findById(id) {
    return db('stories')
      .where({id: Number(id)})
      .first();
}

//adds a story to the database
function addStory(story) {
    return db('stories')
    .insert(story)
    
};

//gets only the approved stories - to be used on main stories page
function getApproved() {
    return db('stories')
    .whereRaw('isapproved = 1')
};

//updates the story
function update(story, id) {
    return db('stories')
    .where('id', Number(id))
    .update(story)
};

//deletes the story
function deleteStory(id) {
    return db('stories')
    .where('id', Number(id))
    .del()
};

//gets only the stories that are unapproved
function getUnapproved() {
    return db('stories')
    .whereRaw('isapproved = 0')
};


