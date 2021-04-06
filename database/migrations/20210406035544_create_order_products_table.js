
exports.up = function(knex) {
    return knex.schema.createTable('order_products',(table) => {
        table.increments();
        table.integer('order_id')
                .unsigned()
                .nullable()
                .references('id')
                .inTable('orders')
                .onDelete('CASCADE');
        table.integer('product_id')
                .unsigned()
                .nullable()
                .references('id')
                .inTable('products')
                .onDelete('CASCADE');
        table.decimal('mrp', 10, 2).notNullable().defaultTo(0.00);
        table.decimal('rate', 10, 2).notNullable().defaultTo(0.00);
        table.integer('quantity').notNullable().defaultTo(0);
        table.integer('order_product_status').defaultTo('1');
        table.integer('is_delete').defaultTo('0');
        table.timestamps(false, true);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('order_products');
};
