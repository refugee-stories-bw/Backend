const knexConfig = require('../knexfile.js');

const db = require('../database/dbConfig.js');

module.exports = {
    getAll,
};

function getAll() {
    return db('stories');
}