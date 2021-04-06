
exports.up = function(knex) {
    return knex.schema.createTable('parent_categories',(table) => {
        table.increments();
        table.string('name');
        table.integer('status').defaultTo('1');
        table.integer('is_delete').defaultTo('0');
        table.timestamps(false, true);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('parent_categories');
};
