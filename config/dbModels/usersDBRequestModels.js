const knexConfig = require('../../knexfile.js');

const db = require('../../database/dbConfig.js');

module.exports = {
    add,
    findBy,
    find,
}


//creates a new user in the db
async function add(user) {
    const [id] = await db('users').insert(user, 'id');

    return user;
}

//finds a user by a filter term
function findBy(filter) {
    return db('users').whereRaw('LOWER(username) LIKE ?', filter.username.toLowerCase());
}

function find() {
    return db('users').select('id', 'username', 'password', 'admin');
}