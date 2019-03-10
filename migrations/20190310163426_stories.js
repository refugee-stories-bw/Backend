
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stories', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();

        tbl.text('story');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('stories');
};
