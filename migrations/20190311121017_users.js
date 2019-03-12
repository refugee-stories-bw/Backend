
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
      users.increments();

      users
        .string('username', 125)
        .notNullable()
        .unique();

      users.string('password', 255)
        .notNullable();

      users.boolean('admin')
        .notNullable()
        .defaultTo(false);   
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
