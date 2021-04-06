
exports.up = function(knex) {
    return knex.schema.createTable('categories',(table) => {
        table.increments();
        table.string('name');
        table.integer('parent_category_id')
                .unsigned()
                .nullable()
                .references('id')
                .inTable('parent_categories')
                .onDelete('CASCADE');
        table.integer('status').defaultTo('1');
        table.integer('is_delete').defaultTo('0');
        table.timestamps(false, true);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('categories');
};
