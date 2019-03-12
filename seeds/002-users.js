const bcrypt = require('bcryptjs');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'lambdaAdmin', password: '$2a$09$H3Reg7X/3PUxVwHRRZOe9e9c2R.zpGrJn0qOypv9U2tEhON91cLZS', admin: true},
        {id: 2, username: 'rkolk', password: '123456', admin: true}
      ]);
    });
};
