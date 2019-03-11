
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stories', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();

        tbl.string('title', 255).notNullable();

        tbl.string('imageurl', 1024);

        tbl.text('story').notNullable();

        tbl.boolean('isapproved')
          .notNullable()
          .defaultTo(false);
        })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('stories');
};
