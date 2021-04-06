
exports.up = function(knex) {
    return knex.schema.createTable('products',(table) => {
        table.increments();
        table.string('name');
        table.text('description');
        table.decimal('mrp', 10, 2).notNullable().defaultTo(0.00);
        table.decimal('rate', 10, 2).notNullable().defaultTo(0.00);
        table.integer('sub_category_id')
                .unsigned()
                .nullable()
                .references('id')
                .inTable('sub_categories')
                .onDelete('CASCADE');
        table.integer('status').defaultTo('1');
        table.integer('is_delete').defaultTo('0');
        table.timestamps(false, true);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
