const knexConfig = require('../knexfile.js');

const db = require('../database/dbConfig.js');

module.exports = {
    getAll,
    findById,
};


//gets all of the stories in the database
function getAll() {
    return db('stories');
}

//gets only the story in the database with that particular id
function findById(id) {
    return db('stories')
      .where({id})
      .first();
}