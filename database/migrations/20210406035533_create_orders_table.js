
exports.up = function(knex) {
    return knex.schema.createTable('orders',(table) => {
        table.increments();
        table.string('order_no');
        table.integer('user_id')
                .unsigned()
                .nullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE');
        table.decimal('total', 10, 2).notNullable().defaultTo(0.00);
        table.string('payment_type').defaultTo('1').comment("1=>COD,2=>Credit Card,3=>Debit Card,4=>UPI,5=>Wallet,6=>Others");
        table.integer('order_status').defaultTo('1').comment("1=>Active,2=>Cancel,3=>shipped,4=>In Transit,5=>delivered");
        table.integer('payment_status').defaultTo('1').comment("1=>Paid,2=>Partial_Paid,3=>Not Paid");
        table.integer('is_delete').defaultTo('0');
        table.timestamps(false, true);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};
