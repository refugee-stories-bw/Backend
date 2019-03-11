const knexConfig = require('../knexfile.js');

const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findBy,
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function findBy(filter) {
    return db('users').where(filter);
}