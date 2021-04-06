
exports.up = function(knex) {
    return knex.schema.createTable('sub_categories',(table) => {
        table.increments();
        table.string('name');
        table.integer('category_id')
                .unsigned()
                .nullable()
                .references('id')
                .inTable('categories')
                .onDelete('CASCADE');
        table.integer('status').defaultTo('1');
        table.integer('is_delete').defaultTo('0');
        table.timestamps(false, true);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('sub_categories');
};
